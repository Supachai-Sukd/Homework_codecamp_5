import React from 'react'
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function Register() {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <div style={{ marginTop:"40px" }}>

    
    <Form {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{ display: "block", margin: "auto" }}
    >


      <Form.Item
        name={['user', 'username']}
        label="Username"
        rules={[
          {
            required: true,
            min: 4,
            max: 24,
            type: "text"
          },
        ]}
      >
        <Input placeholder="Please enter your username" />
      </Form.Item>


      <Form.Item
        name={['user', 'password']}
        label="Password"
        rules={[
          {
            required: true,
            min: 6,
            max: 128
          },
        ]}
      >
        <Input placeholder="Please enter your password" />
      </Form.Item>




      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
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
