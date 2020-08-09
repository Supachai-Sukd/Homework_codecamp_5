import React from 'react'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Navbar from '../Template-menu/Navbar'
import LocalStorageService from '../../services/localStorageService'

function Profile(props) {

    const logout = () => {
        LocalStorageService.removeToken()
        props.setRole("guest")
    }
    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                   
                    <Layout>
                        <h1>Profile user page</h1>


                        <Button type={"primary"} danger className="logout" onClick={logout} >Logout</Button>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default Profile
