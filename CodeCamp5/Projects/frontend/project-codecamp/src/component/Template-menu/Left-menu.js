import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, PhoneOutlined, UserDeleteOutlined, TeamOutlined, UserAddOutlined, GlobalOutlined, EditOutlined, ScissorOutlined, MonitorOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



function Leftmenu() {

   

    return (
        <div>
            <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys= {['key']}
          // selectedKeys={['1']}
          defaultOpenKeys={['sub1','sub2','sub3']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<GlobalOutlined />} title="User">
            <Menu.Item   icon={<UserAddOutlined />}   ><Link  to="/create" key="1">  Add user</Link></Menu.Item>
            <Menu.Item  icon={<TeamOutlined />}   ><Link to="/change" key="2" >  Edit user </Link> </Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined /> } title="Notebook">
            <Menu.Item  icon={<PlusSquareOutlined />} ><Link to="/add" key="3">  Add notebook</Link></Menu.Item>
            <Menu.Item  icon={<MonitorOutlined />} ><Link to="/notebooks" key="4">  View notebook </Link></Menu.Item>
            <Menu.Item key="5" icon={<EditOutlined />}  ><Link to="/editprofile">Edit notebook</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<PhoneOutlined />} title="Phone">
            <Menu.Item key="6" icon={<PlusSquareOutlined />} >Add phone</Menu.Item>
            <Menu.Item key="7" icon={<MonitorOutlined />} >View phone</Menu.Item>
            <Menu.Item key="8" icon={<EditOutlined />} >Edit phone</Menu.Item>
            <Menu.Item key="9" icon={<ScissorOutlined />} >Delete phone</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      
        </div>
    )
}

export default Leftmenu
