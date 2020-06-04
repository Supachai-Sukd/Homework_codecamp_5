import React, { Component } from 'react'

export default class ChildClassComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {data, color} = this.props
        return (
            <div>
                this is props from parent child class element 
                <span style={{ color: color}}>{data} </span>
            </div>
        )
    }
}
