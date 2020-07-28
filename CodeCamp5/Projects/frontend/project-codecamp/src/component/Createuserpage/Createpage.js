import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Button, Modal, Form, Input, Radio, Drawer, List, Avatar, Divider, Col, Row, Select, DatePicker } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, AudioOutlined, PlusOutlined } from '@ant-design/icons';
import FormCreateEmp from './FormCreate'
import axios from '../../config/axios';


const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


class Createpage extends React.Component {

  state = {
    visible: false,
    visiblenewaccount: false,
    employees: [],
    notebooks: []
  };

  

  showDrawerAccount = () => {
    this.setState({
      visiblenewaccount: true,
    });
  };

  closeDrawerAccount = () => {
    this.setState({
      visiblenewaccount: false,
    });
  };



  


  componentDidMount() {
    axios.get('/notebooks')
      .then(res => {
        const notebooks = res.data
        this.setState({ notebooks })
      })
  }

  componentDidMount() {
    axios.get('/users')
      .then(res => {
        const employees = res.data
        this.setState({ employees })
      })
  }

  

  render() {




    return (
      <div>
        <Layout style={{ padding: '0 24px 24px' }}>
          
          
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >



            {/* Start content page */}

            {/* Search Section */}
            <>
              {/* Start Button Section */}
              <Button type="primary" style={{ float: "right", marginBottom: "40px" }} onClick={this.showDrawerAccount}>
                <PlusOutlined /> New account
        </Button>
              <Drawer
                title="Create a new account"
                width={720}
                onClose={this.onCloseAccount}
                visible={this.state.visiblenewaccount}
                bodyStyle={{ paddingBottom: 80 }}
               
              >
                
                <FormCreateEmp />
                
                <Button style={{ marginTop:"40px" }} onClick={ this.closeDrawerAccount }>Close</Button>
              </Drawer>

              {/* End Button Section */}


              <br />
              <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
              <br />
              <br />

              <br />

            </>




            {/* List profile section */}





            <>


              <List
                dataSource={this.state.employees}
                bordered
                renderItem={employee => (


                  <List.Item>
                    
                   
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                      }
                      title={<a href="https://ant.design/index-cn">{employee.name}</a>}
                      description={employee.position}
                    />


                  </List.Item>




                )}
              />



              
            </>



            {/* End content page */}







          </Content>
        </Layout>
      </div>
    )
  }
}

export default Createpage
