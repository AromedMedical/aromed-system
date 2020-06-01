import React, { Component } from 'react'
import { Container } from 'reactstrap';

export class PatientsAppointments extends Component {
    render() {
        return (  
            <Container>
            <section class="container">
                <section class="row">
                    <section class="col-12 col-lg-12 col-md-12">
                        <h2>Today's Appointments</h2>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <section class="col-12 col-lg-12 col-md-12" >
                        <h4>Date and Time</h4>
                    </section>
                    <section class="bg-light col-12 col-md-3 col-lg -3 overflow-auto border mb-sm-2 m-lg-0" style={{ padding: 10, height: 500 }}>

                        <div class="card">
                            <div class="card-body">
                                01/06/2020  12:30
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                02/06/2020  13:00
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                03/06/2020  08:30
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                04/06/2020  11:45
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                05/06/2020  18:00
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                06/06/2020  17:50
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                07/06/2020  10:10
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                08/06/2020  12:10
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                09/06/2020  19:30
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                10/06/2020  16:50
                            </div>
                        </div>
                    </section>
                    <section class="bg-light col-12 col-md-8 col-lg-8  ml-lg-3 ml-sm-auto">
                        <section class="row  p-2">
                            <section class="col-812 col-md-12 col-lg-11 rounded border" style={{ height: 300, margin: 20, padding: 10, backgroundColor: "#fff" }}>
                                <h5>Appointment Details</h5>
                                <br></br>
                                <label>Appointment Number : 204394</label>
                                <br></br>
                                <label>Date and Time : 01/06/2020 12:30</label>
                                <br></br>
                                <label>Room Number : OPD01</label>
                                <br></br>
                                <label>Doctors Details : ****** (Cardiologist)</label>
                                <br></br>
                                <label>Special Notes : ----- </label>
                            </section>

                        </section>


                    </section>
                </section>
            </section>
        </Container>
       
        )
    }
}

export default PatientsAppointments