import React from 'react'
import { Menu, Breadcrumb, Row, Col, Layout, Form, Input, Button, Checkbox, notification } from 'antd';
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../App.css'
import axios from '../../config/axios'
import LocalStorageService from '../../services/localStorageService'
import jwtDecode from 'jwt-decode'
import { useState } from 'react';
import { useEffect } from 'react';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;




function Login(props) {

    const [leVel, setLeVel] = useState("")



    const onFinish = values => {

        const body = {
            username: values.username,
            password: values.password
        }

        axios.post("/users/login", body)
            .then(result => {
                console.log(result)
                LocalStorageService.setToken(result.data.token)

                const tokenLogin = LocalStorageService.getToken()
                if (tokenLogin) {
                    const user = jwtDecode(tokenLogin)
                    setLeVel(user.user_level)
                }

                if (leVel == "admin") {
                    props.setRole("user")
                } else if (leVel == "staff") {
                    props.setRole("staff")
                }



            })
            .catch(err => {
                notification.error({
                    message: `การเข้าสู่ระบบล้มเหลว`,
                });
            })


    }


    // const onFinish = values => {

    //     const body = {
    //         username: values.username,
    //         password: values.password
    //     }


    //     axios.post("/users/login", body)
    //         .then(result => {
    //             console.log(result)
    //             LocalStorageService.setToken(result.data.token)

    //             props.setRole("user")

    //         })
    //     .catch( err => {
    //         notification.error({
    //             message: `การเข้าสู่ระบบล้มเหลว`,
    //         });
    //     } )

    // }






    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1"><Link to={"/"} >Inventory System</Link>  </Menu.Item>
                        <Menu.Item key="2"><Link to={"/"}>คำแนะนำ</Link>  </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>

                    <div className="site-layout-content">




                        <div>

                            <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", marginTop: "40px" }}>Inventory System</h1>

                            <Form
                                style={{ display: "block", margin: "auto", marginTop: "60px" }}
                                name="normal_login"
                                className="login-form"
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






























                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}




export default Login
