import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ErrorPage extends Component {
    render() {
        return (
            <div className="min-vh-100 d-flex flex-column justify-content-center">
                <div className="p-4 text-center">
                    <h1 className="text-primary display-1">404</h1>
                    <h2 className="offset-md text-center mb-5">We couldn't find the page <br /> you are looking for :(</h2>
                    <Link className="btn btn-primary" to='/'>Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default ErrorPage