import React, { Component } from 'react'
import { Container } from 'reactstrap';

export class PatientsHistory extends Component {
    render() {
        return (
            <Container>
                <section class="row">
                    <section class="col-12 col-lg-12 col-md-12">
                        <h2>Previous appointments</h2>
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
                                29/05/2020  10:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                29/05/2020  10:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                20/05/2020  13:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                02/05/2020  03:00
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                21/04/2020  16:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                13/04/2020  08:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                09/04/2020  15:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                29/05/2020  01:30
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                29/05/2020  18:00
                </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                29/01/2020  20:30
                </div>
                        </div>

                    </section>
                    <section class="col-12 col-md-8 col-lg-8  ml-lg-3 ml-sm-auto bg-light">
                        <section class="row  p-2">
                            <section class="col-812 col-md-12 col-lg-11 rounded border m-3 p-3" style={{ height: 250, backgroundColor: "#fff" }}>
                                <h5>Appointment Details</h5>
                                <br></br>
                                <label>Appointment Number : 20052901</label>
                                <br></br>
                                <label>Date and Time : 29/05/2020 10:30</label>
                                <br></br>
                                <label>Room Number : OPD08</label>
                                <br></br>
                                <label>Doctor : ****** (Cardiologist)</label>
                                <br></br>
                                <label>Special Notes : ----- </label>
                            </section>
                            <section class="col-12">
                                <h3>Attachments</h3>
                            </section>

                        </section>
                        <section class="row p-2">
                        </section>
                    </section>
                </section>
            </Container>
          
        )
    }
}

export default PatientsHistory
