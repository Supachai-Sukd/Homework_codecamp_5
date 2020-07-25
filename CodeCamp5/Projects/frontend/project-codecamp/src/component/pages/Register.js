import React from 'react'
import { Form, Input, Button, Row, Col, Select, notification } from 'antd';
import axios from '../../config/axios'
import { withRouter } from 'react-router-dom'

// const { Option } = Select;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};









function Register(props) {
  const onFinish = values => {
    console.log(values);
    const body = {
      usernameLoginAdmin: values.email,
      passwordLoginAdmin: values.password,
      levelAdmin: values.level,
      NameAdmin: values.yourname,
      positionOrganize: values.position,
      companyName: values.company
    }
    axios.post("/users/register", body)
      .then(res => {
        notification.success({
          message: `คุณ ${values.yourname} ได้สมัครสมาชิกเรียบร้อยแล้ว`,
        })
        props.history.push("/login")
      })
      .catch(err => {
        notification.error({
          message: `การสมัครสมาชิกล้มเหลว`,
        })
      })
  };

  return (
    <div className="Form" style={{ marginTop: "40px" }}>


      <Form {...layout}
        onFinish={onFinish}
        style={{ display: "block", margin: "auto" }}
      >


        <Form.Item
          name="email"
          label="E-mail"
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
          name="password"
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
                if (!value || getFieldValue("password") === value) {
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
          name="company"
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
          name="yourname"
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
          name="position"
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
          name="level"
          label="Level"
          rules={[
            {
              required: true,
              message: 'Please input your Level',
            },
          ]}
        >

          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="staff">Staff</Select.Option>
          </Select>


        </Form.Item> 
















        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Row>
            <Col span={8}>
              <Button className="Button" type="primary" htmlType="submit">
                Submit
          </Button>
            </Col>

            <Col span={12}>
              <Button className="Button" type="danger" htmlType="reset">
                Cancel
          </Button>
            </Col>
          </Row>
        </Form.Item>




      </Form>
    </div>
  );
};

export default withRouter(Register)
