import React from 'react'
import Navbar from '../Template-menu/Navbar'
import ContentInventory from '../Template-menu/Content'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Profile() {
    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <ContentInventory />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Profile