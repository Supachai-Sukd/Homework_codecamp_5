import React, { useState, useEffect } from 'react'
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd';
import axios from '../../config/axios'
import Profile from './profilePage'
import { Link } from 'react-router-dom'

const { Text } = Typography;

function editprofilepage() {
  const [proFile, setProFile] = useState([])
  const [inputField, setInputField] = useState("")

  const fetchProfile = async () => {
    const resPonse = await axios.get("/notebooks")
    setProFile(resPonse.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const deleteProfile = async (id) => {
    await axios.delete(`/notebooks/remove/${id}`)
    fetchProfile()
  }


  return (
    <Row justify="center" style={{ margin: "50px" }}>


      <Row justify="center">
        <List
          style={{ width: '450px' }}
          header={<div>Profile List Page</div>}
          bordered
          dataSource={proFile}
          renderItem={user => (
            <List.Item>
              <Profile delete={deleteProfile} nb={nb} fetchData={fetchProfile} />
            </List.Item>
          )}
        />
      </Row>


    </Row>
  )
}

export default editprofilepage
