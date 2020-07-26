import React from 'react'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Navbar from '../Template-menu/Navbar'

function Profile() {
    return (
        <div>
             <Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>
                    <h1>Profile page</h1>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Profile
