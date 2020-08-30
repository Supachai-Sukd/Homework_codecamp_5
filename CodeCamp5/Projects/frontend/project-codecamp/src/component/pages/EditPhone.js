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


const EditPhone = () => {
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
      targetUser: values.employee,
      targetPhone: values.phone
    }
    let id = body.targetPhone
    console.log(body.targetUser);
    await axios.put(`/phones/update/${id}`, body )
      .then(res => {
        notification.success({
          message: `Update ${values.employee} success.`
        })
      })
      .catch(err => {
        notification.error({
          message: `Update failed.`
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
          <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Edit Phonenumber</h1>


          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            className="width-details"
          >
            <Form.Item
              name="employee"
              label="Employee"
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
                {emp_list.map((obj, idx) => <Option
                  value={obj.id}

                >{obj.name}</Option>)}

              </Select>
            </Form.Item>
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
              <Col span={6}></Col>
              <Col span={6}>
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
              </Col>
              <Col span={6}>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              </Col>
              <Col span={6}></Col>
              </Row>
            </Form.Item>
          </Form>





        </Layout>
      </Layout>
    </Layout>


  );
};

export default EditPhone



