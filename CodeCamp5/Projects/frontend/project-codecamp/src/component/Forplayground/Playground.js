import React, { useState } from 'react';
import { Form, Input, Select, Button, Layout } from 'antd';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import axios from '../../config/axios'
import { useEffect } from 'react';



const { Option } = Select;

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('rmb');
  const [phoneList, setPhoneList] = useState([])

  const fetchPhone = async () => {
    const httpResponse = await axios.get('/phones')
    setPhoneList(httpResponse.data)
}

useEffect(() => {
  fetchPhone()
}, [])

  const triggerChange = changedValue => {
    if (onChange) {
      onChange({
        number,
        currency,
        ...value,
        ...changedValue,
      });
    }
  };

  const onNumberChange = e => {
    const newNumber = parseInt(e.target.value || 0, 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = newCurrency => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <span>
      {/* <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      /> */}
      <Select
        value={value.currency || currency}
        style={{
          width: 100,
          margin: '0 8px',
        }}
        onChange={onCurrencyChange}
      >
        {/* <Option value={phoneList.phone_number}>{phoneList.phone_number}</Option> */}
        {phoneList.map( (obj, idx) => <Option value={obj.phone_number}></Option> )}
      </Select>
      <Select
        value={value.currency || currency}
        style={{
          width: 100,
          margin: '0 8px',
        }}
        onChange={onCurrencyChange}
      >
        {/* <Option value={phoneList.phone_number}>{phoneList.phone_number}</Option> */}
        {phoneList.map( (obj, idx) => <Option value={obj.phone_number}>{obj.provider}</Option> )}
      </Select>
    </span>
  );
};

const EditPhone = () => {
  const onFinish = values => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (rule, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject('Price must be greater than zero!');
  };

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Leftmenu />
        <Layout>



          <Form
            name="customized_form_controls"
            layout="inline"
            onFinish={onFinish}
            initialValues={{
              price: {
                number: 0,
                currency: 'Please select',
              },
            }}
          >
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  // validator: checkPrice,
                },
              ]}
            >
              <PriceInput />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>


        </Layout>
      </Layout>
    </Layout>


  );
};

export default EditPhone



