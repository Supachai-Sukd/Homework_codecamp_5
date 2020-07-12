import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import AddItemFromUser from '../AddItem/Additemuser'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function Addallitemuser() {
    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <AddItemFromUser />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Addallitemuser
