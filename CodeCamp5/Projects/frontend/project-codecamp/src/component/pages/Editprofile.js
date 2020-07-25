import React, { useState, useEffect } from 'react'
import Navbar from '../Template-menu/Navbar'
import Editprofilepage from '../Editprofile/editprofilepage'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import LocalStorageService from '../../services/localStorageService'
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Editprofile(props) {

    const [name, setName] = useState("")
    const [id, setID] = useState(0)

    const logout = () => {
        LocalStorageService.removeToken()
        props.setRole("guest")
    }

    useEffect(() => {
        const token = LocalStorageService.getToken()
        if(token){
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
                        <Editprofilepage />
                        {id}
                    <Link to="/delete">    <Button>Go to other</Button></Link>
                        <Button onClick={logout}>Logout</Button>
                        {name}
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Editprofile
