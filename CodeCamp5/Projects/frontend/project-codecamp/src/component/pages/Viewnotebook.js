import React from 'react'
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Button, Row, Col, Input, Avatar, List, Space } from 'antd';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import '../../App.css'
import { connect } from 'react-redux';
import { fetchNotebook } from '../../actions'
import { RocketOutlined } from '@ant-design/icons'
import picNote from '../../images/notebook.jpg'





const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);














class Viewnotebooks extends React.Component {

    state = {
        changeInput: "",
    }


    componentDidMount() {
        this.props.fetchNotebook()
    }







    render() {



        return (
            <div>
                <Layout>
                    <Navbar />
                    <Layout>
                        <Leftmenu />
                        <Layout>




                            <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Notebooks List</h1>
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
                                dataSource={this.props.postsnotebooks.laptops}
                                
                                renderItem={item => (


                                    <List.Item
                                        key={item.title}
                                       
                                        extra={
                                            <img
                                                width={150}
                                                alt="logo"
                                                src={picNote}
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            avatar={<RocketOutlined />}
                                            className="font-details"
                                            title={<h3>Serial : {item.serial_number}</h3>}
                                            description={
                                                <h4>
                                                    <Row>
                                                        <Col span={8}>
                                                            Brand :  {item.brand}
                                                        </Col>
                                                        <Col span={8}>
                                                            Model : {item.model_name}
                                                        </Col>
                                                        <Col span={8}>
                                                            ID : {item.user_id}
                                                        </Col>

                                                    </Row>
                                                </h4>}
                                        />
                                    </List.Item>



                                )}
                            />




                        </Layout>
                    </Layout>
                </Layout>
            </div >
        )
    }

}


const mapStateToProps = (state) => {
    return { postsnotebooks: state.postsnotebook }
}

const mapDispatchToProps = {
    fetchNotebook
}

















export default connect(mapStateToProps, mapDispatchToProps)(Viewnotebooks)
