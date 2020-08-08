import React from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import Navbar from '../Template-menu/Navbar'
import axios from '../../config/axios'
import { useEffect, useState } from 'react';
import EditNotebooknaKub from '../Editnotebook/editNotebook'
import Searchbar from '../SearchBar/Searchbars'







export default function EditNotebooks() {



    const [notebookList, setNoteBookLists] = useState([])


    const fetchNotebooks = async () => {
        const httpResponse = await axios.get('/notebooks')
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
                        <br />
                        <br />
                        <Row>
                            <Col span={12}>
                                <List

                                    style={{ width: '100%' }}
                                    header={<div style={{ fontWeight: "bold", fontSize: "30px" }} >List notebook</div>}
                                    bordered
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








































