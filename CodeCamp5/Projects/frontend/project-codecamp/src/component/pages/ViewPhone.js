import React, { Component } from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Space, Layout } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { fetchPhoneNum } from '../../actions'
import PicSim from '../../images/sim.jpg'





const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);



class ViewPhone extends Component {

    componentDidMount() {
        this.props.fetchPhoneNum()
    }

    render() {
        return (
            <div>
                <Layout>
                    <Navbar />
                    <Layout>
                        <Leftmenu />
                        <Layout>








                        <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Phones List</h1>




                            <List
                                itemLayout="vertical"
                                size="large"
                                className="width-details"
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                }}
                                dataSource={this.props.posts_phones.phone_number}
                                
                                renderItem={item => (
                                    <List.Item
                                        key={item.title}
                                        
                                        extra={
                                            <img
                                                width={150}
                                                alt="logo"
                                                src={PicSim}
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            avatar={<RocketOutlined />}
                                            title={<a href={item.href}>{item.phone_number}</a>}
                                            description={item.provider}
                                        />
                                        {item.content}
                                    </List.Item>
                                )}
                            />
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { posts_phones: state.posts_phone }
}

const mapDispatchToProps = {
    fetchPhoneNum
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewPhone)