import React, { Component } from 'react'
import { connect } from 'react-redux';
import { List, Avatar, Space, Layout } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { fetchPhoneNum } from '../../actions'





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
                                            avatar={<Avatar src={item.avatar} />}
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