import React, { Component } from 'react'
import ChildClassComponent from './ChildClass'
import ChildFuncComponent from './ChildFunction'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ChildClassComponent data="Data send to class component" color="blue" />
                <ChildFuncComponent data="Data send to function component" color="green" />
            </div>
        )
    }
}
