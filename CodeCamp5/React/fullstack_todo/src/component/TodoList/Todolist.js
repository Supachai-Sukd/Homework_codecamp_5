import React, { useState, useEffect } from "react";
import { List, Input, Button, Row, Col, Divider, Typography } from 'antd'
import _ from 'lodash'
import axios from '../../config/axios'
import Todo from "./Todo";

const { Text } = Typography;

export default function Todolist() {
    const [todoList, setToDoList] = useState([]);
    const [inputField, setInputField] = useState("")
    const fetchTodoList = async () => {
        const httpResponse = await axios.get("/todo-list")
        setToDoList(httpResponse.data)
    }

    useEffect(() => {
        fetchTodoList()
    }, [])

    const addToDoItem = async () => {
        await axios.post("/todo-list", { task: inputField })
        fetchTodoList()
    }

    const deleteToDoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`)
        fetchTodoList()
    }

    return (
        <Row justify="center">
            <Col>
                <Row justify="center">
                    <Text type="warning">กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: "100%" }} onClick={addToDoItem} > Add </Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <List
                        header={<div>Todo List Page</div>}
                        style={{ width: '450px' }}
                        bordered
                        dataSource={todoList}
                        renderItem={(todo) => (
                            <List.Item>
                                <Todo delete={deleteToDoItem} todo={todo} fetchData={fetchTodoList} />
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    );
}









