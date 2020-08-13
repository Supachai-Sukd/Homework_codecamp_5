import React, { useState, useEffect } from 'react'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button, Row, Col, List, Space, Card } from 'antd';
import Navbar from '../Template-menu/Navbar'
import LocalStorageService from '../../services/localStorageService'
import axios from '../../config/axios'
import jwtDecode from 'jwt-decode'


function Profile(props) {

    const [notebookList, setNoteBookLists] = useState([])


    const fetchNotebooks = async () => {
        const httpResponse = await axios.get('/notebooks')
        setNoteBookLists(httpResponse.data)
    }

    useEffect(() => {
        fetchNotebooks()
      
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
                        <h1>Profile user page</h1>

                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={notebookList}
                            renderItem={item => (
                                <List.Item>
                                    <Card title={item.User.name}>{item.serial_number}</Card>
                                </List.Item>
                            )}
                        />



                        <Button type={"primary"} danger className="logout" onClick={logout} >Logout</Button>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Profile
