const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");

const firebase = require("./firebase/admin");
const app = express();
app.use(cors());

const db = firebase.database();

app.use("/", authMiddleware);

app.post("/api/profile", (request, response) => {
    let obj = JSON.parse(request.body);
    let formIsValid = true;
    let errors = {};

    if (obj.firstname === null) {
        formIsValid = false;
        errors["firstname"] = "First name cannot be empty";
    }
    else if (typeof obj.firstname !== "undefined") {
        if (!obj.firstname.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["firstname"] = "First name can only contain letters";
        }
    }

    if (obj.lastname === null) {
        formIsValid = false;
        errors["lastname"] = "Last name cannot be empty";
    }
    else if (typeof obj.lastname !== "undefined") {
        if (!obj.lastname.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["lastname"] = "Last name can only contain letters";
        }
    }

    if (obj.dob === null) {
        formIsValid = false;
        errors["dob"] = "Date of birth cannot be empty";
    }
    else if (!isValidDate(obj.dob)) {
        formIsValid = false;
        errors["dob"] = "Invalid date of birth";
    }

    if (obj.address === null) {
        formIsValid = false;
        errors["address"] = "Address cannot be empty";
    }

    if (obj.phone === null) {
        formIsValid = false;
        errors["phone"] = "Phone number cannot be empty";
    }
    else if (!obj.phone.match(/\d{10}/)) {
        formIsValid = false;
        errors["phone"] = "Invalid phone number";
    }

    var data = new Object();
    data.status = false;

    if (formIsValid) {
        const uid = obj.uid;
        delete obj['uid'];

        db.ref(`profiles/${uid}`)
            .push(obj).then(() => {
                data.status = true;
                return response.json(data);
            })
            .catch(error => {
                data.errors = error.message;
                return response.json(data);
            });
    }
    else {
        data.errors = errors;
        return response.json(data);
    }
});

let isValidDate = (dateString) => {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false;
    return d.toISOString().slice(0, 10) === dateString;
}

exports.app = functions.https.onRequest(app);