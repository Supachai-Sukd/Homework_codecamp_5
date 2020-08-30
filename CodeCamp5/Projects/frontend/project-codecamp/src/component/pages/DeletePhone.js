import React, { useState } from 'react';
import { Form, Input, Select, Button, Layout, notification, Row, Col } from 'antd';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import axios from '../../config/axios'
import { useEffect } from 'react';
import '../../App.css'



const { Option } = Select;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};


const DeletePhone = () => {
    const [form] = Form.useForm();
    const [phoneList, setPhoneList] = useState([])
    const [emp_list, setEmpList] = useState([])





    const fetchPhone = async () => {
        const httpResponse = await axios.get('/phones/phoneadmin')
        setPhoneList(httpResponse.data)
    }

    const fetchEmployee = async () => {
        const response = await axios.get('/users')
        setEmpList(response.data)
    }

    useEffect(() => {
        fetchPhone()
        fetchEmployee()
    }, [])



    const onFinish = async values => {
        console.log(values);
        const body = {
            targetPhone: values.phone
        }
        let id = body.targetPhone
        console.log(body.targetUser);
        await axios.delete(`/phones/remove/${id}`, body)
            .then(res => {
                notification.success({
                    message: `Delete phone ${values.phone} success.`
                })
            })
            .catch(err => {
                notification.error({
                    message: `Delete failed.`
                })
            })

    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Layout>
            <Navbar />
            <Layout>
                <Leftmenu />
                <Layout>
                    <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Delete Phonenumber</h1>


                    <Form
                        {...layout}
                        form={form}
                        name="control-hooks"
                        onFinish={onFinish}
                        className="width-details"
                    >

                        <Form.Item
                            name="phone"
                            label="Phone"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select a option and change input text above"

                                allowClear
                            >
                                {phoneList.map((obj, idx) => <Option value={obj.id}>{obj.phone_number}</Option>)}

                            </Select>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Row>
                                <Col span={6} ></Col>
                                <Col span={6} >
                                    <Button type="primary" htmlType="submit" danger  >
                                        Delete
                            </Button>
                                </Col>
                                <Col span={6}>
                                    <Button htmlType="button" onClick={onReset}>
                                        Cancel
                            </Button>
                                </Col>
                                <Col span={6} ></Col>
                            </Row>
                        </Form.Item>
                    </Form>





                </Layout>
            </Layout>
        </Layout>


    );
};

export default DeletePhone



