import React from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input, Card } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import Navbar from '../Template-menu/Navbar'
import axios from '../../config/axios'
import { useEffect, useState } from 'react';
import EditNotebooknaKub from '../Editnotebook/editNotebook'
import Searchbar from '../SearchBar/Searchbars'







export default function EditNotebooks() {



    const [notebookList, setNoteBookLists] = useState([])


    const fetchNotebooks = async () => {
        const httpResponse = await axios.get('/notebooks/addminnotebooks')
        setNoteBookLists(httpResponse.data)
    }

    useEffect(() => {
        fetchNotebooks()
    }, []);






    const deleteNotebook = async (id) => {
        await axios.delete(`/notebooks/remove/${id}`)
        fetchNotebooks()
    }


    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                       
                        
                        <Row style={{ textAlign: "center", fontSize: "20px" }}>
                            <Col span={12}>
                            <Divider orientation="Center" style={{ fontSize: "25px" }} >Notebook List</Divider>
                            </Col>
                            <Col span={12}>
                            <Divider orientation="Center" style={{ fontSize: "25px" }} >Directory</Divider>
                            </Col>


                            
                        </Row>
                        <Row>
                            
                            <Col span={12}>
                                <List

                                    style={{ width: '1000px', marginLeft: '30px' }}
                                    
                                    
                                    dataSource={notebookList}
                                    renderItem={item => (

                                        <List.Item style={{ display: "block", alignSelf: "center" }}>
                                            <EditNotebooknaKub delete={deleteNotebook} item={item} fetchData={fetchNotebooks} />
                                        </List.Item>



                                    )}
                                />
                            </Col>
                            <Col span={12}>
                                <Searchbar />
                            </Col>
                        </Row>





                    </Layout>
                </Layout>
            </Layout>




        </div>
    )



}





style={{ width: '1000px', marginLeft: '30px' }}


dataSource={notebookList}


renderItem={item => (

  <List.Item style={{ display: "block", alignSelf: "center" }}>
      <EditNotebooknaKub delete={deleteNotebook} item={item} fetchData={fetchNotebooks} />
  </List.Item>



)}































import React, { useState, useEffect } from 'react'
// import axios from '../../config/axios'
import axios from 'axios'
import { Cascader, Select, Layout, List, Typography, Divider, Col, Row, Button, Input, notification, Form } from 'antd';
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../services/localStorageService'
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
