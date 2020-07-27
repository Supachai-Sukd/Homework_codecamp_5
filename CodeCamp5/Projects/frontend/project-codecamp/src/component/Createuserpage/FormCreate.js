import React from 'react'
import { Layout, Menu, Breadcrumb, Button, Modal, Form, Input, Radio, Drawer, List, Avatar, Divider, Col, Row, Select, DatePicker, notification } from 'antd';
import axios from '../../config/axios'
import { withRouter } from 'react-router-dom'
import { useState } from 'react';
import LocalStorageService from '../../services/localStorageService'
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode'


const { Option } = Select;

function FormCreate(props) {

    const [companyID, setCompanyID] = useState("")

    useEffect(() => {
        const token = LocalStorageService.getToken()
        if (token) {
            const user = jwtDecode(token)
            setCompanyID(user.company_id)
        }
    }, [])


    const onFinish = values => {
        console.log(values);
        const body = {
            empUsername: values.email,
            empPassword: values.password,
            empLevel: values.level,
            empName: values.name,
            empPosition: values.position,
            targetCompany: companyID
        }
        axios.post("/users/empregister", body)
            .then(res => {
                notification.success({
                    message: `Add ${values.name} complete`
                })
            })
            .catch(err => {
                notification.error({
                    message: `Add failed`
                })
            })





    }




    return (
            <div>
                
                <Form layout="vertical"
                    hideRequiredMark
                    onFinish={onFinish}

                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Name-employee"

                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!'
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]}
                            >
                                <Input placeholder="Please enter mail employee" />
                            </Form.Item>
                        </Col>




                        <Col span={12}>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true, message: 'Please input your password!'
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input.Password
                                    style={{ width: '100%' }}
                                    placeholder="Please enter password"
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}></Col>

                        <Col span={12}>
                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve()
                                            }
                                            return Promise.reject('Confirm password ต้องตรงกับ password')
                                        }
                                    })
                                ]}
                            >
                                <Input.Password
                                    style={{ width: '100%' }}
                                    placeholder="Please enter password"
                                />
                            </Form.Item>
                        </Col>
                    </Row>




                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="level"
                                label="Level employee"
                                rules={[{ required: true, message: 'Please select employee' }]}
                            >
                                <Select placeholder="Please select level employee">
                                    <Option value="admin">Admin</Option>
                                    <Option value="staff">Staff</Option>
                                </Select>
                            </Form.Item>
                        </Col>



                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Employee name"
                                rules={[{ required: true, message: 'Please input employee name' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="position"
                                label="Employee position"
                                rules={[{ message: 'Please choose employee position' }]}
                            >
                                <Input placeholder="Enter employee position" />
                            </Form.Item>
                        </Col>
                        {/* <Col span={12}>
                        
                            <Form.Item
                                name="company"
                                label="Company ID"
                                rules={[{ message: 'Please choose Company ID' }]}
                            >
                                <Input defaultValue={`${companyID}`} disabled />
                            </Form.Item>
                        </Col> */}
                    </Row>

                    <Row gutter={16}>

                        <Col>
                            <Button style={{ marginRight: 8 }} danger type="primary" htmlType="reset" >
                                Cancel
                        </Button>
                        </Col>
                        <Col>
                            <Button type="primary" htmlType="submit" >
                                Add
                        </Button>
                        </Col>

                    </Row>



                </Form>
            </div>
        )
    }

    export default FormCreate
