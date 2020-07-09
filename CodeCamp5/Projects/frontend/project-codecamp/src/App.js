import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { Menu , Breadcrumb, Row, Col, Layout,Form, Input, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LockOutlined } from '@ant-design/icons';
import Index from './component/pages/Index'
import Register from './component/pages/Register'
import Logoutsuccess from './component/pages/Logout'
import Profile from './component/pages/Profile'

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
        <Menu.Item key="1"><Link to={"/"} >Inventory System</Link>  </Menu.Item>
        <Menu.Item key="2"><Link to={"/mycart"}>คำแนะนำ</Link>  </Menu.Item>
        <Menu.Item key="3" style={{ float:"right" }}><Link to={"/logout"}>Logout</Link></Menu.Item>
        <Menu.Item key="4" style={{ float:"right" }}  ><Link to={"/"}>Login</Link></Menu.Item>
        <Menu.Item key="5" style={{ float:"right" }}><Link to={"/"}>Welcome Mr.Supachai</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
     
      <div className="site-layout-content">

      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/register" component={Register}  />
        <Route exact path="/profile" component={Profile}  />
        
        
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
