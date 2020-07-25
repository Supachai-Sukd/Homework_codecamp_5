import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Deleteprofilepage from '../Deleteprofile/Deleteuserprofile'
import { Link } from 'react-router-dom';

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
                    <Link to="/profile">    <Button>Go to profile</Button></Link>
                        <Deleteprofilepage />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Deleteprofile
