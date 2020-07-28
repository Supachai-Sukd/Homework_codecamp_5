import React, { useState } from 'react'
import { Row, Col, Button, Modal, Form, Input, Radio, notification } from 'antd';
import axios from '../../config/axios'

const { Search } = Input;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {

    


    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        console.log(values)
                        const body = {
                            serialNotebook: values.serial,
                            modelNotebook: values.model,
                            brandNotebook: values.brand
                        }
                        axios.post("/notebooks/add", body)
                            .then(res => {
                            notification.success({
                                message: `Add ${values.model} serial ${values.serial} success`
                            })
                            })
                            .catch(err => {
                                notification.error({
                                    message: `Serial ${values.serial} has already been added.`
                                })
                            })

                        form.resetFields();
                        
                        onCreate(values);
                        
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }
        }
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                
                
            >
                <Form.Item
                    name="serial"
                    label="Serial number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the serial number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                name="model" 
                label="Model"
                rules={[
                    {
                        required: true,
                        message: 'Please input the notebook model!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="brand" label="Brand">
                    <Input  />
                </Form.Item>
                
            </Form>
        </Modal>
    );
};

const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = values => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <div>
           <h1 style={{marginTop:"40px",fontSize:"35px"}}>Notebook Add</h1>
            <br />
            <br />
            <br />
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                New Collection
        </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};


export default CollectionsPage
