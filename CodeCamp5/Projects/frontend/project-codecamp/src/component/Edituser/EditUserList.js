import React, { useState } from 'react'
// import axios from '../../config/axios'
import axios from 'axios'
import { Cascader, Select, Layout, List, Typography, Divider, Col, Row, Button, Input, notification, Form } from 'antd';
import { fetchUser } from '../../actions';


const { Option } = Select;



function EditUserList(props) {

    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    

    const changeNameUser = async (id) => {
        await axios.put(`/users/update/${id}`, { targetUser: changeInput })
            .then(res => {
                props.fetchData()
                setIsEdit(false)
                notification.success({
                    message: `Change name success.`
                })
            })
            .catch(err => {
                notification.error({
                    message: `Change failed.`
                })
            })
    }


    const toggleEdit = () => {
        setChangeInput(props.item.name)
        setIsEdit(true)
    }

    let contents = (

        <List.Item style={{ justifyContent: "center" }}>
            <Row style={{ width: "1000px", textAlign: "center", fontSize: "16px" }}>

                <Col span={4}>
                {/* <p>ID : {props.item.id}</p> */}
                <List.Item>{props.item.id}</List.Item>
                    {/* <Typography.Text >ID : {props.item.id}</Typography.Text> */}
                </Col>


                <Col span={4}>

                    
                        <List.Item>{props.item.position}</List.Item>
                    {/* <Typography.Text >
                        Position : {props.item.position}
                    </Typography.Text> */}
                </Col>


                <Col span={8}>
                    <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
                </Col>







                <Col span={4}>
                    <Button
                        onClick={() => changeNameUser(props.item.id)}
                        type="primary">Done</Button>
                </Col>

            </Row>

        </List.Item>


    )



    if (!isEdit) {
        contents = (
            <List.Item style={{ justifyContent: "center" }}>
                <Row style={{ width: "1000px", textAlign: "center", fontSize: "16px" }}>

                    <Col span={4}>
                        {/* <p>ID : {props.item.id}</p> */}
                        <List.Item>{props.item.id}</List.Item>
                        {/* <Typography.Text >ID : {props.item.id}</Typography.Text> */}
                    </Col>


                    <Col span={4}>
                        {/* <p>Position : {props.item.position}</p> */}
                    <List.Item>{props.item.position}</List.Item>
                        {/* <Typography.Text >
                            Position : {props.item.position}
                        </Typography.Text> */}
                    </Col>


                    <Col span={4}>
                        {/* <p>User : {props.item.name}</p> */}
                    <List.Item>{props.item.name}</List.Item>
                        {/* <Typography.Text >
                            User : {props.item.name}
                        </Typography.Text> */}
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




export default EditUserList
