import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as calculatorAct from './../actions/calculatorAction'
import { Typography, Form, Input, Button, Select } from 'antd';
import * as calculatorAction from '../actions/calculatorAction'

const { Option } = Select;

const { Title } = Typography;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function Box1() {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const calReducer = useSelector(({ calculatorReducer }) => calculatorReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <Title>Box 1 : {calReducer.count}</Title>
            <Title>Box 1 Name : {calReducer.arrObj}</Title>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button 
                    type="primary" 
                    htmlType="submit"
                    onClick={() => dispatch(calculatorAction.addName())}
                    >
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    {/* <Button
                        style={{ justifyContent: "space-around" }}
                        onClick={() => dispatch(calculatorAction.add(10))}
                    >Add</Button> */}

                </Form.Item>
            </Form>




        </div>
    )
}

export default Box1
