import React, { useState } from 'react';
import { Form, Input, Select, Button, Layout, notification } from 'antd';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import axios from '../../config/axios'
import { useEffect } from 'react';
import '../../App.css'



const { Option } = Select;
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


const EditPhone = () => {
  const [form] = Form.useForm();
  const [phoneList, setPhoneList] = useState([])
  const [emp_list, setEmpList] = useState([])
  const [changeInput, setChangeInput] = useState("")
  const [idPhone, setIdPhone] = useState("")


  

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

  const updatePhoneToUser = async (id) => {
    await axios.put(`/phones/update/${id}`, { targetUser: changeInput })
      .then(res => {
        fetchPhone()
        fetchEmployee()

        notification.success({
          message: `Add phone to user success.`
        })
      })
      .catch(err => {
        notification.error({
          message: `Add phone to user failed.`
        })
      })
}

  const onFinish = values => {
    console.log(values);
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
                {emp_list.map( (obj, idx) => <Option value={obj.id}>{obj.name}</Option> )}
                
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
                {phoneList.map( (obj, idx) => <Option value={obj.provider}>{obj.phone_number}</Option> )}
               
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
        </Button>

            </Form.Item>
          </Form>





        </Layout>
      </Layout>
    </Layout>


  );
};

export default EditPhone



