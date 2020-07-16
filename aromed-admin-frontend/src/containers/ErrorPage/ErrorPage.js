import React, { Component } from 'react'

export class ErrorPage extends Component {
    render() {
        return (
            <div className="container-xl bg-light col-sm-12 col-md-6 offset-md-3 mt-5 d-flex justify-content-around">
                <div id="main" className="main-block main-block_v2 p-4 text-center">
                    <div className="wrapper  ">
                        <section class="error-page">
                            <h1 className= "text-primary ">404</h1>
                            <h2 className= "offset-md text-center" style={{textAlign :'justify'}}>We couldn't find the page <br /> you are looking for</h2>
                            <br/>
                            <br/>
                            <br/>
                            <button className="btn btn-primary">Back to Home</button>
                            <br/>
                            <br/>
                        </section>

                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage
