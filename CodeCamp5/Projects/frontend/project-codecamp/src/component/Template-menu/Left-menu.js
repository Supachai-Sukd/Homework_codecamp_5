import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, PhoneOutlined, UserDeleteOutlined, TeamOutlined, UserAddOutlined, GlobalOutlined, EditOutlined, ScissorOutlined, MonitorOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Leftmenu() {
    return (
        <div>
            <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<GlobalOutlined />} title="User">
            <Menu.Item key="1"  icon={<UserAddOutlined />} ><Link to="/create">  Add user</Link></Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />} ><Link to="/editprofile" >  Edit user </Link> </Menu.Item>
            <Menu.Item key="3" icon={<UserDeleteOutlined />} ><Link to="/delete">  Delete user</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Notebook">
            <Menu.Item key="4" icon={<PlusSquareOutlined />} ><Link to="/add">  Add notebook</Link></Menu.Item>
            <Menu.Item key="5" icon={<MonitorOutlined />} ><Link to="/notebooks">  View notebook </Link></Menu.Item>
            <Menu.Item key="6" icon={<EditOutlined />} >Edit notebook</Menu.Item>
            <Menu.Item key="7" icon={<ScissorOutlined />} >Delete notebook</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<PhoneOutlined />} title="Phone">
            <Menu.Item key="8" icon={<PlusSquareOutlined />}>Add phone</Menu.Item>
            <Menu.Item key="9" icon={<MonitorOutlined />}>View phone</Menu.Item>
            <Menu.Item key="10" icon={<EditOutlined />}>Edit phone</Menu.Item>
            <Menu.Item key="11" icon={<ScissorOutlined />}>Delete phone</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
        </div>
    )
}

export default Leftmenu
