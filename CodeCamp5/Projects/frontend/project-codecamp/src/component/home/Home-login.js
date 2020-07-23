import React from 'react'
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../App.css'
import axios from '../../config/axios'
import LocalStorageService from '../../services/localStorageService'

// ห้านี้คือหน้า Login


function Logins(props) {
    const onFinish = values => {
        const body = {
            username: values.username,
            password: values.password
        }
        axios.post("/users/login", body)
            .then(result => {
                LocalStorageService.setToken(result.data.token)
                props.setRole("admin")
            })
            .catch( err => {
                notification.error({
                    message: `การเข้าสู่ระบบล้มเหลว`,
                });
            } )
    
        }



    return (

        <div>

            <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", marginTop: "40px" }}>Inventory System</h1>

            <Form
                style={{ display: "block", margin: "auto", marginTop: "60px" }}
                name="normal_login"
                className="Form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
              </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
              Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>

        </div>

    );

};




export default Logins
