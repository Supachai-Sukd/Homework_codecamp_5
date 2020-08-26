import React from 'react'
import { Form, Input, Button, Select, Layout, Col, Row } from 'antd';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'

const { Option } = Select;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};

function Addphone() {

    const [form] = Form.useForm();

    const onGenderChange = value => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;

            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;

            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
        }
    };

    const onFinish = values => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    // const onFill = () => {
    //     form.setFieldsValue({
    //         note: 'Hello world!',
    //         gender: 'male',
    //     });
    // };


    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>

                    <h1 style={{marginTop:"40px",fontSize:"35px"}}>Phone Add</h1>

                    

                        <Form 
                        {...layout} 
                        form={form} 
                        name="control-hooks" 
                        onFinish={onFinish}
                        className="width-form-phone"
                        >
                            
                            <Form.Item
                                name="note"
                                label="Note"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    onChange={onGenderChange}
                                    allowClear
                                >
                                    <Option value="ais">Ais</Option>
                                    <Option value="true">True</Option>
                                    <Option value="dtac">Dtac</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                            >
                                {({ getFieldValue }) =>
                                    getFieldValue('gender') === 'other' ? (
                                        <Form.Item
                                            name="customizeGender"
                                            label="Customize Gender"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    ) : null
                                }
                            </Form.Item>
                            <Form.Item 
                             {...tailLayout}
                            >
                                <Button type="primary" htmlType="submit" className="button-phone-add" >
                                    Submit
                                </Button>
                                <Button htmlType="button" onClick={onReset} className="button-phone-add">
                                    Reset
                                </Button>
                                {/* <Button type="link" htmlType="button" onClick={onFill}>
                                    Fill form
                                </Button> */}
                            </Form.Item>
                        </Form>










                       

                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Addphone
