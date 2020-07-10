import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Createuser from '../Createuserpage/Createpage'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Createpage() {
    return (
        <div>
             <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <Createuser />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Createpage
