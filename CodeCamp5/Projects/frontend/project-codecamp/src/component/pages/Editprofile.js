import React from 'react'
import ReactDOM from 'react-dom';
import Navbar from '../Template-menu/Navbar'
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Button, Row, Col, Input, Avatar, List, Space } from 'antd';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import '../../App.css'
import axios from '../../config/axios'
import { connect } from 'react-redux';
import { fetchNotebook, updateNotebook, toggleEdit } from '../../actions'
import { MessageOutlined, LikeOutlined, StarOutlined, RocketOutlined } from '@ant-design/icons'
import { TOGGLE_EDIT } from '../../constance';


// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;



// const listData = [];
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);




let contents = (
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
            title={<h3>Serial : {item.serial_number}</h3>}
            description={<h4>Brand :  {item.brand} Model : {item.model_name} User : {item.user_id}</h4>}
        />
        <Button
            style={{ backgroundColor: 'green' }}
            onClick={() => toggleEdit()}
        > Edit </Button>
    </List.Item>
)










class Editprofile extends React.Component {

    state = {
        changeInput: "",
        isEdit: false
    }


    componentDidMount() {
        this.props.fetchNotebook()
    }

    updateNotebookToUser = async (id) => {
        await axios.put(`/notebooks/update/${id}`, { user_id: changeInput })
        this.closeInputField()
    }

    toggleEditField = () => {
        this.setState({
            changeInput: this.props.item.user_id,
            isEdit: true
        })
    }

    

    closeInputField = () => {
        this.setState({
            isEdit: false
        })
    }




    render() {










        return (
            <div>
                <Layout>
                    <Navbar />
                    <Layout>
                        <Leftmenu />
                        <Layout>



                            <h1 style={{ marginTop: "30px", fontSize: "30px" }}>Notebooks management</h1>
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
                                            title={<h3>Serial : {item.serial_number}</h3>}
                                            description={<h4>Brand :  {item.brand} Model : {item.model_name} User : {item.user_id}</h4>}
                                        />
                                        <Button
                                            style={{ backgroundColor: 'green' }}
                                            onClick={() => toggleEdit()}
                                        > Edit </Button>
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
    return { postsnotebooks: state.postsnotebook }
}

const mapDispatchToProps = {
    updateNotebook,
    fetchNotebook
}


export default connect(mapStateToProps, mapDispatchToProps)(Editprofile)
