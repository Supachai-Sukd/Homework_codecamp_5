import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Button, Modal, Form, Input, Radio, Drawer, List, Avatar, Divider, Col, Row, Select, DatePicker } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, AudioOutlined, PlusOutlined } from '@ant-design/icons';
import FormCreateEmp from './FormCreate'
import axios from '../../config/axios';
import { connect } from 'react-redux'
import {fetchUser} from '../../actions' 


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
   this.props.fetchUser()
  }

  

  render() {




    return (
      <div >
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
              <br />

              <br />

            </>




            {/* List profile section */}





            <>


              <List
              
                dataSource={this.props.posts.employees}
                bordered
                renderItem={post => (


                  <List.Item 
                  style={{ textAlign: "left" }}
                  >
                  
                 
                    
                   <List.Item.Meta
                      avatar={
                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                      }
                      title={post.name}
                      description={post.position}
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


const mapStateToProps = (state) => {
    return { posts: state.posts }
}

const mapDispatchToProps = {
    fetchUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Createpage)

