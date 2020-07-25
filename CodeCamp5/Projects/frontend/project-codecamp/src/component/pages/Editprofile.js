import React, { useState, useEffect } from 'react'
import Navbar from '../Template-menu/Navbar'
import Editprofilepage from '../Editprofile/editprofilepage'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button, Row, Col, Input, SetList, Avatar, Skeleton } from 'antd';
import LocalStorageService from '../../services/localStorageService'
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import '../../App.css'
import reqwest from 'reqwest';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const count = 3;
const fakeSetDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;



function Editprofile(props) {

    const [name, setName] = useState("")
    const [id, setID] = useState(0)
    


    const logout = () => {
        LocalStorageService.removeToken()
        props.setRole("guest")
    }

    useEffect(() => {
        const token = LocalStorageService.getToken()
        if (token) {
            const user = jwtDecode(token)
            setName(user.name)
            setID(user.id)
        }
    }, [])

    

    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <Button type={"primary"} danger className="logout" onClick={logout} >Logout</Button>


                        <Editprofilepage />
                        
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Editprofile
