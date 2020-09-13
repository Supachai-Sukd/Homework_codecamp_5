import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as calculatorAction from './../actions/calculatorAction'
import { Typography } from 'antd';

const { Title } = Typography;



const Box2 = props => {

    const calReducer = useSelector(({ calculatorReducer }) => calculatorReducer)
    const dispatch = useDispatch()


    return (
        <div>


            <Title>Box 2 : {calReducer.count}</Title>
                


        </div>
    )
}

export default Box2
