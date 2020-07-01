import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { Menu , Breadcrumb, Row, Col, Layout,Form, Input, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LockOutlined } from '@ant-design/icons';
import Index from './component/pages/Index'
import Login from './component/pages/Login'
import Register from './component/pages/Register'
import Mycart from './component/pages/Mycart'
import Comingsoon from './component/pages/Comingsoon'
import Logoutsuccess from './component/pages/Logout'

const { SubMenu } = Menu;
const { Header, Content, Sider , Footer} = Layout;


function App() {

  // const selectMenu = 
  return (
    <div className="App">
<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to={"/"} >Lasapee</Link>  </Menu.Item>
        <Menu.Item key="2"><Link to={"/mycart"}>My Cart</Link>  </Menu.Item>
        <Menu.Item key="3" style={{ float:"right" }}><Link to={"/logout"}>Logout</Link></Menu.Item>
        <Menu.Item key="4" style={{ float:"right" }}  ><Link to={"/login"}>Login</Link></Menu.Item>
        <Menu.Item key="5" style={{ float:"right" }}><Link to={"/mycart"}>Welcome Mr.Supachai</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">

      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/register" component={Register}  />
        <Route exact path="/mycart" component={Mycart}  />
        <Route exact path="/coming" component={Comingsoon} />
        <Route exact path="/logout" component={Logoutsuccess} />
        
      </Switch>

        
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>












      
     
      
    </div>
  );
}

export default App;
