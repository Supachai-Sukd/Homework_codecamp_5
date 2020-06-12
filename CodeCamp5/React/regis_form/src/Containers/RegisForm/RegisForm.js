import React, { Component } from 'react'

class RegisForm extends Component {
    render() {
        return (
            <div className="RegisterForm">
                <input className="Input InputElement" name="name" placeholder="Name" />
                <input className="Input InputElement" name="phoneNumber" placeholder="Phone" />
                <input className="Input InputElement" name="email" placeholder="Mail" />
                <input className="Input InputElement" name="password" placeholder="pass" />
                <button className="Button">Register</button>
            </div>
        )
    }
}

export default RegisForm
