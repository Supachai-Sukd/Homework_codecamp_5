import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as calculatorAct from './../actions/calculatorAction'


const Box2 = props => {

    const calReducer = useSelector(({calculatorReducer}) => calculatorReducer)
    const dispatch = useDispatch()


    return (
        <div>
            <view>
                <Text>
                    Box2 {calReducer.count}s
                </Text>
            </view>
        </div>
    )
}

export default Box2
