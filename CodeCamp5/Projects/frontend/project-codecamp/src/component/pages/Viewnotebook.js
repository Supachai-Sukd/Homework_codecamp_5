import React from 'react'
import { List, Avatar, Row } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Navbar from '../Template-menu/Navbar'
import axios from '../../config/axios'
import { useState } from 'react';
import { useEffect } from 'react';


const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];



function Viewnotebook() {

  const [showNotebooks, setShowNoteBooks] = useState([])

  


  return (
    <div>
      <Layout>
        <Navbar />
        <Layout>
          <Leftmenu />
          <Layout>







            <Row justify="center">
            <List
              itemLayout="horizontal"
              style={{ width:"600px", marginTop:"40px" }}
              
              dataSource={showNotebooks}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    
                   
                  />
                </List.Item>
              )}
            />

</Row>







          </Layout>
        </Layout>
      </Layout>




    </div>
  )
}

export default Viewnotebook
