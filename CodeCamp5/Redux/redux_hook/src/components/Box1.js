import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as calculatorAct from './../actions/calculatorAction'
import { Typography } from 'antd';

const { Title } = Typography;

function Box1() {

    const calReducer = useSelector(({ calculatorReducer }) => calculatorReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <Title>Box 1 : {calReducer.count}</Title>
        </div>
    )
}

export default Box1
