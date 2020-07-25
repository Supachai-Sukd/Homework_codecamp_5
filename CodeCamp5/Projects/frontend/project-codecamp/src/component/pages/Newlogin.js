import React from 'react'
import { Form, Input, Button, Checkbox, notification, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../App.css'
import axios from '../../config/axios'
import LocalStorageService from '../../services/localStorageService'
import { withRouter } from 'react-router-dom'


// const layout = {
//     labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
//     wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
// };
// ห้านี้คือหน้า Login


function Logins(props) {
    const onFinish = values => {

        const body = {
            username: values.username,
            password: values.password
        }


        axios.post("/users/login", body)
            .then(result => {
                console.log(result)
                LocalStorageService.setToken(result.data.token)

                props.setRole("user")
               
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
                className="login-form"
                initialValues={{
                    remember: false,
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









        // <Row justify="center">
        //     <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
        //         <div className="Form">
        //             <Row justify="center">
        //                 <Title level={2} className="Title">
        //                     Login
        //             </Title>
        //             </Row>
        //             <Divider className="Divider" />
        //             <Form
        //                 className="App"
        //                 {...layout}
        //                 onFinish={onFinish}
        //                 style={{ width: "100%" }}
        //             >
        //                 <Form.Item
        //                     label="Username"
        //                     name="username"
        //                     rules={[{ required: true, message: 'Please input your username!' }]}
        //                 >
        //                     <Input />
        //                 </Form.Item>

        //                 <Form.Item
        //                     label="Password"
        //                     name="password"
        //                     rules={[{ required: true, message: 'Please input your password!' }]}
        //                 >
        //                     <Input.Password />
        //                 </Form.Item>

        //                 <Button className="Button" type="primary" htmlType="submit">
        //                     Submit
        //                 </Button>
        //             </Form>
        //         </div>
        //     </Col>
        // </Row>

    );

};




export default withRouter(Logins) 
