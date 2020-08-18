import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Cascader, Select, Layout, List, Typography, Divider, Col, Row, Button, Input, notification, Form } from 'antd';
import jwtDecode from 'jwt-decode'
import localStorageService from '../../services/localStorageService';

const { Option } = Select;



function EditNotebooknaKub(props) {

    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [idCom, setIdCom] = useState("")

    useEffect(() => {
        const token = localStorageService.getToken()
        if (token) {
            const user = jwtDecode(token)
            setIdCom(user.company_id)
        }
    })




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
            <Row style={{ width: "100%", textAlign: "left", fontSize: "16px" }}>

                <Col span={3}>
                    <p>S/N : {props.item.serial_number}</p>
                    {/* <Typography.Text >{props.item.serial_number}</Typography.Text> */}
                </Col>


                {/* <Col span={4}>

                    
                    <Typography.Text >
                        Brand : {props.item.brand}
                    </Typography.Text>
                </Col> */}


                <Col span={6}>

                    


                    <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
                </Col>







                <Col span={3}>
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
                <Row style={{ width: "100%", textAlign: "left", fontSize: "16px" }}>



                    <Col span={3}>
                        <p>S/N : {props.item.serial_number}</p>
                        {/* <Typography.Text >{props.item.serial_number}</Typography.Text> */}
                    </Col>


                    {/* <Col span={4}>
                        <Typography.Text >
                            Brand : {props.item.brand}
                        </Typography.Text>
                    </Col> */}


                    <Col span={3}>
                        <p>ID : {props.item.user_id}</p>
                        {/* <Typography.Text >
                            {props.item.user_id}
                        </Typography.Text> */}
                    </Col>

                    <Col span={3}>
                        <Button
                            onClick={() => toggleEdit()}
                            style={{ backgroundColor: 'yellow' }}>Edit</Button>
                    </Col>

                    <Col span={3}>
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
