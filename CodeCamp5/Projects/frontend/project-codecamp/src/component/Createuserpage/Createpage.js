import React, { useState } from 'react'
import { Layout, Menu, Button, Modal, Form, Input, Radio, Drawer, List, Avatar, Space, Col, Row } from 'antd';
import { AudioOutlined, PlusOutlined, RocketOutlined, MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import FormCreateEmp from './FormCreate'
import axios from '../../config/axios';
import { connect } from 'react-redux'
import { fetchUser } from '../../actions'
import '../../App.css'


const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

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

                <Button style={{ marginTop: "40px" }} onClick={this.closeDrawerAccount}>Close</Button>
              </Drawer>

              {/* End Button Section */}



              <br />
              <br />

              <br />

            </>




            {/* List profile section */}





           

              <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Employees List</h1>
              <List
                itemLayout="vertical"
                style={{ alignSelf: "center", display: "block" }}
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={this.props.posts.employees}
                footer={
                  <div>
                    <b>ant design</b> footer part
  </div>
                }
                renderItem={item => (


                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<RocketOutlined />}
                      className="font-details"
                      title={<h3>Name : {item.name}</h3>}
                      description={
                        <h4>
                          <Row>
                            <Col span={8}>
                              ID :  {item.id}
                            </Col>
                            <Col span={8}>
                              Position : {item.position}
                            </Col>
                            <Col span={8}>
                              Level : {item.user_level}
                            </Col>

                          </Row>
                        </h4>}
                    />
                  </List.Item>



                )}
              />




           



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

