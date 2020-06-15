import React, { Component } from 'react'
import Input from '../Input/input'

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
            error: { status: true, message: "", isTouched: false }
        },
        phoneNumber: {
            value : "",
            validator: {
                minLength: 10,
                maxLength: 10
            },
            error: { status: true, message: "", isTouched: false }
        },
        email: {
            value: "",
            validator: {
                required: true
            },
            error: { status: true, message: "" , isTouched: false}
        },
        password: {
            value: "",
            validator: {
                minLength: 6,
                maxLength: 24,
                required: true
            },
            error: { status: true, message: "", isTouched: false }
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
        const upDateForm = {...this.state.formData}
        upDateForm[fieldName].value = fieldValue

        let { isValid, message } = this.checkValue(e.target.value, upDateForm[fieldName].validator)

        upDateForm[fieldName].error.status = !isValid
        upDateForm[fieldName].error.message = message
        upDateForm[fieldName].error.isTouched = true

        let newIsFormValid = true
        for (let fn in upDateForm) {
            //ถ้า error เป็นจริง newIsFormValid ต้องไม่เป็นจริง
            if (upDateForm[fn].validator.required === true) {
                newIsFormValid = !upDateForm[fn].error.status && newIsFormValid
            }
        }

        this.setState({
            formData: upDateForm,
            isFormValid: newIsFormValid
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
                <Input onChangeInput={this.onChangeInput} value={name.value} name="name" placeholder="ชื่อ" error={name.error} />
                <Input onChangeInput={this.onChangeInput} value={phoneNumber.value} name="phoneNumber" placeholder="เบอร์" error={phoneNumber.error} />
                <Input onChangeInput={this.onChangeInput} value={email.value} name="email" placeholder="เมลล์" error={email.error} />
                <Input onChangeInput={this.onChangeInput} value={password.value} name="password" placeholder="รหัสผ่าน" error={password.error} />
                
                <button disabled={!isFormValid} htmlFor="submit" className="Button">Register</button>

            </form>
            </div>
        )
    }
}

export default RegisForm
