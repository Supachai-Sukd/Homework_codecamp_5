import React from 'react'
import { Table, Tag, Space, Layout, List, Typography, Divider, Col, Row } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import Navbar from '../Template-menu/Navbar'
import { fetchNotebook } from '../../actions'
import { connect } from 'react-redux';





class Viewnotebook extends React.Component {



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





              <Divider orientation="left">Notebook</Divider>
              <List
                header={<div style={{ fontWeight: "bold", fontSize: "30px" }} >List notebook</div>}
                bordered
                dataSource={this.props.postsnotebooks.laptops}
                renderItem={item => (
                  <List.Item style={{ justifyContent: "center" }}>
                    <Row style={{width: "800px", textAlign: "left", fontSize: "20px"}}>

                    <Col span={8}>
                    <Typography.Text >Serial : {item.serial_number}</Typography.Text>
                    </Col>


                    <Col span={8}>
                    <Typography.Text >
                    Brand : {item.brand} 
                    </Typography.Text>  
                    </Col>


                    <Col span={8}>
                    <Typography.Text >
                    Model : {item.model_name}
                    </Typography.Text>
                    </Col>

                    </Row>
                    
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
  fetchNotebook
}


export default connect(mapStateToProps, mapDispatchToProps)(Viewnotebook)
