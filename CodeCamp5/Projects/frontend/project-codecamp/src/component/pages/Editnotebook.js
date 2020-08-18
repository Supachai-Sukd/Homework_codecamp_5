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
    const [userList, setUserList] = useState([])


    const fetchNotebooks = async () => {
        const httpResponse = await axios.get('/notebooks/addminnotebooks')
        setNoteBookLists(httpResponse.data)
    }

    const fetchUser = async () => {
        const response = await axios.get('/users')
        setUserList(response.data)
    }

    useEffect(() => {
        fetchNotebooks()
        fetchUser()
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
                                            <EditNotebooknaKub delete={deleteNotebook} item={item} fetchData={fetchNotebooks}  />
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








































