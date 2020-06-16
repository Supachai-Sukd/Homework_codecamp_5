import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Form, Input, Button } from "antd";

function App() {
  const layout = {
    labelCol: {
      xs: 6,
      sm: 8,
      md: 10,
    },
    wrapperCol: {
      xs: 18,
      sm: 16,
      md: 14,
    },
  };

  let onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item
              label="name"
              name="name"
              rules={[
                { max: 6, min: 3, message: "ชื่อต้องอยู่ระหว่าง 3 - 6 นะจ๊ะ" },
                { required: true, message: "คุณต้องกรอกช่องนี้" },
              ]}
            >
              <Input placeholder="ชื่อของคุณ" />
            </Form.Item>

            <Form.Item 
            label="Phone" 
            name="phoneNumber"
            rules={[
              {len: 10, message:"เบอร์คุณไม่ถูกต้อง"}
            ]} >
              <Input placeholder="เบอร์ของคุณ" />
            </Form.Item>

            <Form.Item 
            label="email" 
            name="email"
            rules={[
              {type: "email", message: "รูปแบบเมลไม่ถูกต้อง"},
              { required: true, message: "คุณต้องกรอกเมลด้วยนะจ้ะ"}
            ]} >
              <Input placeholder="เมลของคุณ" />
            </Form.Item>

            <Form.Item 
            label="password" 
            name="password"
            rules={[
              { required: true, message: "คุณต้องใส่รหัสผ่านด้วย"},
              {min: 12, max: 24, message: "รหัสผ่านต้องมี 12 - 24 ตัว"}
            ]} >
              <Input type="password" placeholder="รหัสของคุณ" />
            </Form.Item>

            <Button htmlType="submit">ลงทะเบียน</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
