import React, { useState } from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input, Avatar } from 'antd';
import axios from '../../config/axios';
import { useEffect } from 'react';

const { Search } = Input;

function Searchbars() {

    const [searchData, setSearchData] = useState("")
    const [userList, setUserList] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get('/users')
        setUserList(response.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    let filteredContacts = this.props.contacts.filter(
        (contact) => {
            return contact.name.toLowerCase().indexOf(
                this.state.search.toLowerCase()) !== -1
        }
    )

    // Method will callback from parent component

    return (
        <div>

            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />

            <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />

            <List
                itemLayout="horizontal"
                dataSource={userList}
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

            <ul>
                {filteredContacts.map((contact) => {
                    return <Contact contact={contact}
                        key={contact.id} />
                })}
            </ul>
























            import React, { useState } from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input, Avatar } from 'antd';
import axios from '../../config/axios';
import { useEffect } from 'react';

const { Search } = Input;

function Searchbars(props) {

    const [searchData, setSearchData] = useState("")
    const [userList, setUserList] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get('/users')
        setUserList(response.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    let filteredContacts = userList.filter(
        (user) => {
            return user.name.toString().toLowerCase().indexOf(
                searchData.toString().toLowerCase()
                ) !== -1
                
        }
        
    )

    // Method will callback from parent component
    const updateSearch = e => {
        setSearchData({ searchData: e.target.value })
    }

    return (
        <div>

            <Search type="text" placeholder="input search text" onChange={updateSearch} value={searchData.name}enterButton />

            <List>
            {filteredContacts.map((user) => {
                  return <List.Item>
                      <List.Item.Meta>    
                        user={user}
                            key={user.name}
                            </List.Item.Meta>
                  </List.Item>
                
                    
            })}
    </List>


            {/* <List
                itemLayout="horizontal"
                dataSource={userList}
                renderItem={userList.filter((user) => {
                    return <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{user.name.toLowerCase().indexOf(
                                searchData.toLowerCase()
                            ) !== -1
                            }</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                }
                )
                    /> */}

               

</div>
    )
       
}

export default Searchbars


        </div>
    )
}

export default Searchbars
import React, { useState } from 'react'
import { Layout, List, Typography, Divider, Col, Row, Button, Input, Avatar } from 'antd';
import axios from '../../config/axios';
import { useEffect } from 'react';

const { Search } = Input;

function Searchbars(props) {

    const [searchData, setSearchData] = useState("")
    const [userList, setUserList] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get('/users')
        setUserList(response.data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    let filteredContacts = userList => {
        
        if (searchData !== "" && userList.name.toLowerCase().indexOf( searchData.toLowerCase() ) === -1 ) {
            return null
        }

    }

    // Method will callback from parent component
    const updateSearch = e => {
        setSearchData({ searchData: e.target.value })
    }

    return (
        <div>

            <Search type="text" placeholder="input search text" onChange={updateSearch} value={searchData.name}enterButton />

            <List>
            
                   <List.Item>
                      <List.Item.Meta>    
    <title>{userList.name}</title>
                            </List.Item.Meta>
                  </List.Item>
                
                    
            )
    </List>


            {/* <List
                itemLayout="horizontal"
                dataSource={userList}
                renderItem={userList.filter((user) => {
                    return <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{user.name.toLowerCase().indexOf(
                                searchData.toLowerCase()
                            ) !== -1
                            }</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                }
                )
                    /> */}

               

</div>
    )
       
}

export default Searchbars
