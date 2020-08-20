import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Createuser from '../Createuserpage/Createpage'
import LocalStorageService from '../../services/localStorageService'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Createpage(props) {

    


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
