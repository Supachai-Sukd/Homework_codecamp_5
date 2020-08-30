import React, { useState, useEffect } from 'react'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button, Row, Col, List, Space, Card, Avatar } from 'antd';
import Navbar from '../Template-menu/Navbar'
import LocalStorageService from '../../services/localStorageService'
import axios from '../../config/axios'
import jwtDecode from 'jwt-decode'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import notePic from '../../images/notebook.jpg'
import phonePic from '../../images/sim.jpg'
import '../../App.css'

const { Meta } = Card;


function Profile(props) {

    const [notebookList, setNoteBookLists] = useState([])
    const [phoneList, setPhoneList] = useState([])

    const fetchPhone = async () => {
        const httpResponse = await axios.get('/phones')
        setPhoneList(httpResponse.data)
    }


    const fetchNotebooks = async () => {
        const httpResponse = await axios.get('/notebooks')
        setNoteBookLists(httpResponse.data)
    }

    useEffect(() => {
        fetchNotebooks()
        fetchPhone()
    }, []);




    const logout = () => {
        LocalStorageService.removeToken()
        props.setRole("guest")
    }




    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>

                    <Layout>
                        <h1 style={{ fontSize: "40px" }} >My Item</h1>

                        <List
                            grid={{ gutter: 16, column: 4 }}
                            style={{
                                alignItems: "center",
                                marginLeft: "10px",
                                marginRight: "10px"


                            }}
                            dataSource={notebookList}
                            renderItem={item => (
                                <List.Item>
                                    {/* <Card title={item.User.name}>{item.serial_number}</Card> */}
                                    <Card
                                        style={{ width: 300 }}
                                        cover={
                                            <img
                                                alt="notebook"
                                                src={notePic}
                                            />
                                        }

                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={`Name : ${item.User.name}`}
                                        />
                                        <p style={{ fontWeight: "bold" }} >Brand : {item.brand} Serial : {item.serial_number}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />


                        <List
                            grid={{ gutter: 16, column: 4 }}
                            style={{
                                alignItems: "center",
                                marginLeft: "10px",
                                marginRight: "10px"


                            }}
                            dataSource={phoneList}
                            renderItem={item => (
                                <List.Item>
                                    {/* <Card title={item.User.name}>{item.serial_number}</Card> */}
                                    <Card
                                        style={{ width: 300 }}
                                        cover={
                                            <img
                                                alt="notebook"
                                                src={phonePic}
                                            />
                                        }

                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={`Name : ${item.User.name}`}
                                        />
                                        <div className="item-user">
                                            <p style={{ fontWeight: "bold" }} >

                                                Number : {item.phone_number}
                                            </p>
                                            <p style={{ fontWeight: "bold" }}>
                                                Provider : {item.provider}
                                            </p>

                                        </div>
                                    </Card>
                                </List.Item>

                            )}
                        />




                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Profile
