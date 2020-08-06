import React, { useState } from 'react'
// import axios from '../../config/axios'
import axios from 'axios'
import { Cascader, Select, Layout, List, Typography, Divider, Col, Row, Button, Input, notification, Form } from 'antd';
import { fetchUser } from '../../actions';


const { Option } = Select;



function EditNotebooknaKub(props) {

    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    

    const updateNotebookToUser = async (id) => {
        await axios.put(`/notebooks/update/${id}`, { targetUser: changeInput })
            .then(res => {
                props.fetchData()
                setIsEdit(false)
                notification.success({
                    message: `Add notebook to user success.`
                })
            })
            .catch(err => {
                notification.error({
                    message: `Add failed.`
                })
            })
    }


    const toggleEdit = () => {
        setChangeInput(props.item.user_id)
        setIsEdit(true)
    }

    let contents = (

        <List.Item style={{ justifyContent: "center" }}>
            <Row style={{ width: "900px", textAlign: "left", fontSize: "20px" }}>

                <Col span={4}>
                    <Typography.Text >S/N : {props.item.serial_number}</Typography.Text>
                </Col>


                <Col span={4}>

                    
                    <Typography.Text >
                        Brand : {props.item.brand}
                    </Typography.Text>
                </Col>


                <Col span={8}>
                    <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
                </Col>







                <Col span={4}>
                    <Button
                        onClick={() => updateNotebookToUser(props.item.id)}
                        type="primary">Done</Button>
                </Col>

            </Row>

        </List.Item>


    )



    if (!isEdit) {
        contents = (
            <List.Item style={{ justifyContent: "center" }}>
                <Row style={{ width: "800px", textAlign: "left", fontSize: "20px" }}>

                    <Col span={4}>
                        <Typography.Text >S/N : {props.item.serial_number}</Typography.Text>
                    </Col>


                    <Col span={4}>
                        <Typography.Text >
                            Brand : {props.item.brand}
                        </Typography.Text>
                    </Col>


                    <Col span={4}>
                        <Typography.Text >
                            User : {props.item.user_id}
                        </Typography.Text>
                    </Col>

                    <Col span={4}>
                        <Button
                            onClick={() => toggleEdit()}
                            style={{ backgroundColor: 'yellow' }}>Edit</Button>
                    </Col>

                    <Col span={4}>
                        <Button
                            onClick={() => props.delete(props.item.id)}
                            type="danger">Delete</Button>
                    </Col>

                    


                </Row>

            </List.Item>
        )
    }



    return (
        <div>
            {contents}
        </div>
    )
}




export default EditNotebooknaKub
