import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Deleteprofilepage from '../Deleteprofile/Deleteuserprofile'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Deleteprofile() {
    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <Deleteprofilepage />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Deleteprofile
