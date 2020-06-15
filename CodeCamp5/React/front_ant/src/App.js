import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Col,Form,Input} from "antd"


function App() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  
return (
    <div className="App">
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={16} xl={14} xxl={12}>
        <Form {...layout}>
          <Form.Item label="name">
            <Input/>
          </Form.Item>
          <Form.Item label="Phone">
            <Input/>
          </Form.Item>
          <Form.Item label="email">
            <Input/>
          </Form.Item>
          <Form.Item label="password">
            <Input/>
          </Form.Item>
        </Form>
        </Col>
       
      </Row>
      
    </div>
  );
}

export default App;
