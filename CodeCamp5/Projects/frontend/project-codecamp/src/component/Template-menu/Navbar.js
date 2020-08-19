import React, { useState, useEffect } from 'react'
import { Layout, Menu, Button } from 'antd';
import LocalStorageService from '../../services/localStorageService'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;


const { Header, Content, Footer, Sider } = Layout;

function Navbar(props) {

    const [name, setName] = useState("")
    const [id, setID] = useState(0)






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

            <Header className="header">
                <div className="logo" />
                <Menu defaultSelectedKeys={['1']} theme="dark" mode="horizontal" >
                    <Menu.Item key="1"> <Link to="/create">  Profile </Link>  </Menu.Item>
                    



                    <SubMenu key="2" style={{ float: "right" }} icon={<SettingOutlined />} >
                        <Menu.ItemGroup>
                            <Menu.Item key="setting:1"><Link to="/create">  Profile </Link></Menu.Item>
                            <Menu.Item key="setting:2"><Link to="/logout">Logout</Link></Menu.Item>
                        </Menu.ItemGroup>
                        
                    </SubMenu>


                    <Menu.Item key="3" style={{ float: "right" }} >Hi !!  {name}</Menu.Item>

                </Menu>


            </Header>

        </div>
    )
}

export default Navbar
