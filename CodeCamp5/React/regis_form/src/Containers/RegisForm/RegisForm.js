import React, { Component } from 'react'

class RegisForm extends Component {
    state = {
       formData : {
        name: {
            value: "",
            validator: {
                minLength: 3,
                maxLength: 6,
                required: true
            },
            error: { status: true, message: "" }
        },
        phoneNumber: {
            value : "",
            validator: {
                minLength: 10,
                maxLength: 10
            },
            error: { status: true, message: "" }
        },
        email: {
            value: "",
            validator: {
                required: true
            },
            error: { status: true, message: "" }
        },
        password: {
            value: "",
            validator: {
                minLength: 6,
                maxLength: 24,
                required: true
            },
            error: { status: true, message: "" }
        }
       },
       isFormValid: false
    }

    checkValue = (value, rules) => {
        //value = "go"
        //require = true, maxLength = 6, minLength = 3

        let isValid = true
        let trimValue = value.trim()
        let message = ""

        if (rules.required && trimValue.length === 0) {
            isValid = false
            message = "คุณต้องกรอกช่องนี้"
        }
               
       if (rules.maxLength && trimValue.length > rules.maxLength) {
           isValid = false
           message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength}`
       }

       if (rules.minLength && trimValue.length < rules.minLength) {
        isValid = false
        message = `ช่องนี้ความยาวต้องมากกว่า ${rules.minLength}`
    }

        return {isValid, message}
    }

    onChangeInput = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        const upDateFormUpdate = {...this.state.formData}
        upDateFormUpdate[fieldName].value = fieldValue

        let { isValid, message } = this.checkValue(e.target.value, upDateFormUpdate[fieldName].validator)

        upDateFormUpdate[fieldName].error.status = !isValid
        upDateFormUpdate[fieldName].error.message = message

        this.setState({
            formData: upDateFormUpdate
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const {name, email, password, phoneNumber} = this.state.formData
        const {isFormValid} = this.state
        return (
            
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}>
                <input onChange={this.onChangeInput} value={name.value} className="Input InputElement" name="name" placeholder="Name" />
                <input onChange={this.onChangeInput} value={phoneNumber.value} className="Input InputElement" name="phoneNumber" placeholder="Phone" />
                <input onChange={this.onChangeInput} value={email.value} className="Input InputElement" name="email" placeholder="Mail" />
                <input onChange={this.onChangeInput} value={password.value} className="Input InputElement" name="password" type="password" placeholder="pass" />
                <button disabled={!isFormValid} htmlFor="submit" className="Button">Register</button>

            </form>
            </div>
        )
    }
}

export default RegisForm
