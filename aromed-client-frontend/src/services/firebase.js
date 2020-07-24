import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL
};
console.log(process.env.REACT_APP_API_KEY);
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();