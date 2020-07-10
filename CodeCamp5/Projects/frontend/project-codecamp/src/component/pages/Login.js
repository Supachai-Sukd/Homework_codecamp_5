import React from 'react'
import { Menu , Breadcrumb, Row, Col, Layout,Form, Input, Button } from 'antd';
import HomeLogin from '../home/Home-login'
import { Link } from 'react-router-dom'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider , Footer} = Layout;

function Login() {
    return (
        <div>
            <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to={"/"} >Inventory System</Link>  </Menu.Item>
        <Menu.Item key="2"><Link to={"/mycart"}>คำแนะนำ</Link>  </Menu.Item>
        <Menu.Item key="3" style={{ float:"right" }}><Link to={"/logout"}>Logout</Link></Menu.Item>
        <Menu.Item key="4" style={{ float:"right" }}  ><Link to={"/"}>Login</Link></Menu.Item>
        <Menu.Item key="5" style={{ float:"right" }}><Link to={"/"}>Welcome Mr.Supachai</Link></Menu.Item>
      </Menu>
    </Header>
    
    <Content style={{ padding: '0 50px' }}>
     
      <div className="site-layout-content">

        <HomeLogin />


        
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
        </div>
    )
}

export default Login
