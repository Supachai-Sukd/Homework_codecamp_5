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
          defaultSelectedKeys= {'key'}
          // selectedKeys={["selectMenu"]}
          defaultOpenKeys={['sub1','sub2','sub3']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<GlobalOutlined />} title="User">
            <Menu.Item key="1" icon={<UserAddOutlined />}   ><Link   to="/create" >  Add user</Link></Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}   ><Link to="/change"  >  Edit user </Link> </Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined /> } title="Notebook">
            <Menu.Item key="3"  icon={<PlusSquareOutlined />}  ><Link to="/add" >  Add notebook</Link></Menu.Item>
            <Menu.Item  icon={<MonitorOutlined />} ><Link to="/notebooks" key="4">  View notebook </Link></Menu.Item>
            <Menu.Item key="5" icon={<EditOutlined />}  ><Link to="/editprofile">Edit notebook</Link></Menu.Item>
          </SubMenu>
          {/* <SubMenu key="sub3" icon={<PhoneOutlined />} title="Phone">
            <Menu.Item key="6" icon={<PlusSquareOutlined />} >Add phone</Menu.Item>
            <Menu.Item key="7" icon={<MonitorOutlined />} >View phone</Menu.Item>
            <Menu.Item key="8" icon={<EditOutlined />} >Edit phone</Menu.Item>
            <Menu.Item key="9" icon={<ScissorOutlined />} >Delete phone</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      
        </div>
    )
}

export default Leftmenu
