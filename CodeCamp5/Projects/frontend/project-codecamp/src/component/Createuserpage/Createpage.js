import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Button, Modal, Form, Input, Radio, Drawer, List, Avatar, Divider, Col, Row, Select, DatePicker } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, AudioOutlined, PlusOutlined } from '@ant-design/icons';
import FormCreateEmp from './FormCreate'


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
    visiblenewaccount: false
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



  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  

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
                dataSource={[
                  {
                    name: 'Lily',
                  },
                  {
                    name: 'Lily',
                  },
                ]}
                bordered
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <a onClick={this.showDrawer} key={`a-${item.id}`}>
                        View Profile
                </a>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                      }
                      title={<a href="https://ant.design/index-cn">{item.name}</a>}
                      description="Progresser XTech"
                    />
                  </List.Item>
                )}
              />
              <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                
                  <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                    User Profile</p>
                   
                <p className="site-description-item-profile-p">Personal</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Full Name" content="Lily" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Account" content="AntDesign@example.com" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="City" content="HangZhou" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Country" content="China🇨🇳" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Birthday" content="February 2,1900" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Website" content="-" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Message"
                      content="Make things as simple as possible but no simpler."
                    />
                  </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Company</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Position" content="Programmer" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Responsibilities" content="Coding" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Department" content="XTech" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Skills"
                      content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                    />
                  </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Contacts</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Email" content="AntDesign@example.com" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Github"
                      content={
                        <a href="http://github.com/ant-design/ant-design/">
                          github.com/ant-design/ant-design/
                  </a>
                      }
                    />
                  </Col>
                </Row>
              </Drawer>
            </>



            {/* End content page */}







          </Content>
        </Layout>
      </div>
    )
  }
}

export default Createpage
