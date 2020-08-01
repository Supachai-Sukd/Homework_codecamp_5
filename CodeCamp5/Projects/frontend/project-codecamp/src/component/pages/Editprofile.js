import React, { useState, useEffect } from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button, Row, Col, Input, SetList, Avatar, Skeleton, List } from 'antd';
import LocalStorageService from '../../services/localStorageService'
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import '../../App.css'
import reqwest from 'reqwest';
import axios from '../../config/axios'
import { useSelector, useStore, useDispatch } from 'react-redux';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;






function Editprofile(props) {


    const query = useSelector(state => state.laptops)

    const logout = () => {
        LocalStorageService.removeToken()
        props.setRole("guest")
    }

    const [proFile, setProFile] = useState([])
    const [inputField, setInputField] = useState("")

    const fetchProfile = useSelector(state => state)
    const dispatch = useDispatch()
       
    

   

    const deleteProfile = async (id) => {
        await axios.delete(`/notebooks/remove/${id}`)
        fetchProfile()
    }




    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <Button type={"primary"} danger className="logout" onClick={logout} >Logout</Button>


                        <Row justify="center" style={{ margin: "50px" }}>

    









                            <Row justify="center">

    
                                <List
                                    style={{ width: '450px' }}
                                    header={<div>Profile List Page</div>}
                                    bordered
                                    dataSource={proFile}
                                    renderItem={nb => (
                                        <List.Item>
                                            <profilePage delete={deleteProfile} nb={nb} fetchData={fetchProfile} />
                                        </List.Item>
                                    )}
                                />
                            </Row>



                        </Row>

                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Editprofile
