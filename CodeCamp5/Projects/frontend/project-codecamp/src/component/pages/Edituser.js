import React from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import Navbar from '../Template-menu/Navbar'
import axios from '../../config/axios'
import { useEffect, useState } from 'react';
import EditUsernaKub from '../Edituser/EditUserList'








export default function Edituser() {



    const [userList, setUserLists] = useState([])


    const fetchUsers = async () => {
        const httpResponse = await axios.get('/users')
        setUserLists(httpResponse.data)
    }

    useEffect(() => {
        fetchUsers()
    }, []);






    const deleteUser = async (id) => {
        await axios.delete(`/users/remove/${id}`)
        fetchUsers()
    }


    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <br />
                        <Divider orientation="Center" style={{ fontSize: "25px" }} >User List</Divider>
                        <Row style={{ textAlign: "center", fontSize: "20px" }}>
                            <Col span={4}>ID</Col>
                            <Col span={4}>Position</Col>
                            <Col span={4}>Name</Col>
                            <Col span={8}></Col>
                        </Row>
                        <br />
                        <List

                            style={{ width: '100%' }}
                           
                            bordered
                            dataSource={userList}
                            renderItem={item => (

                                <List.Item style={{ display: "block", alignSelf: "center" }}>


                                    <EditUsernaKub delete={deleteUser} item={item} fetchData={fetchUsers} />
                                </List.Item>



                            )}
                        />








                    </Layout>
                </Layout>
            </Layout>




        </div>
    )



}








































