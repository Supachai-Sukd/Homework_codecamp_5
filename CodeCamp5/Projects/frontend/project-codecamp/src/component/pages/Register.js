import React from 'react'
import { Form, Input, Button, Row, Col, Select, InputNumber, Cascader } from 'antd';

const { Option } = Select;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};









function Register() {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div style={{ marginTop: "40px" }}>


      <Form {...layout}
        onFinish={onFinish}
        style={{ display: "block", margin: "auto" }}
      >


        <Form.Item
          name='username'
          label="Username"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name='password'
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

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
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('Confirm password ต้องตรงกับ password')
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item
          name='company'
          label="Company"
          rules={[
            {
              required: true,
              message: 'Please input your Company',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name={['yourname']}
          label="Yourname"
          rules={[
            {
              required: true,
              message: 'Please input your Yourname',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name='position'
          label="Position"
          rules={[
            {
              message: 'Please input your Yourname',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          name={['level']}
          label="Level"
          rules={[
            {
              required: true,
              message: 'Please input your Level',
            },
          ]}
        >

          <Cascader
            options={[
              {
                value: 'admin',
                label: 'Admin'
              },
              {
                value: 'staff',
                label: 'Staff'
              }
            ]}
           
          />


        </Form.Item>
















        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Row>
            <Col span={8}>
              <Button type="primary" htmlType="submit">
                Submit
          </Button>
            </Col>

            <Col span={12}>
              <Button type="danger" htmlType="reset">
                Cancel
          </Button>
            </Col>
          </Row>
        </Form.Item>




      </Form>
    </div>
  );
};

export default Register
