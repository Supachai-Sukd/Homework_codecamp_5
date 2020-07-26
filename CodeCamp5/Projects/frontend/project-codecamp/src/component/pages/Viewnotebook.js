import React from 'react'
import { List, Avatar } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Navbar from '../Template-menu/Navbar'



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
    return (
        <div>
<Layout>
                <Navbar />
                <Layout>
                    <Leftmenu />
                    <Layout>








            <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
                   
                    </Layout>
                </Layout>
            </Layout>




        </div>
    )
}

export default Viewnotebook
