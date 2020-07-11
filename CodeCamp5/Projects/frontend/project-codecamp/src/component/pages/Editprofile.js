import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Editprofilepage from '../Editprofile/editprofilepage'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Editprofile() {
    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                        <Editprofilepage />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Editprofile
