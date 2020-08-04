import React, { useState } from 'react'
// import axios from '../../config/axios'
import axios from 'axios'
import { Layout, List, Typography, Divider, Col, Row, Button, Input } from 'antd';



function EditNotebooknaKub(props) {

    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const updateNotebookToUser = async (id) => {
        await axios.put(`/notebooks/update/${id}`, { targetUser: changeInput });
        props.fetchData();
        setIsEdit(false);
    }

    const toggleEdit = () => {
        setChangeInput(props.item.user_id)
        setIsEdit(true)
    }

    let contents = (

        <List.Item style={{ justifyContent: "center" }}>
            <Row style={{ width: "800px", textAlign: "left", fontSize: "20px" }}>

                <Col span={4}>
                    <Typography.Text >Serial : {props.item.serial_number}</Typography.Text>
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
                        <Typography.Text >Serial : {props.item.serial_number}</Typography.Text>
                    </Col>


                    <Col span={4}>
                        <Typography.Text >
                            Brand : {props.item.brand}
                        </Typography.Text>
                    </Col>


                    <Col span={4}>
                        <Typography.Text >
                            Model : {props.item.user_id}
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
