import React, { Component } from 'react'

export default class ComponentClass extends Component {
    //อันนี้เป็นการเซ็ทตัวคลาสเรียบร้อย
    constructor(props) {
        super(props)
        this.state = {
            name : "Peter",
            lastName : "Pan",
            age : "16",
            color : true
        }
    }
    render() {
        return (
            <div style={{ color: "inherit"}}>
               
                this is component for reuse
                <p onClick={ () => this.state.color?this.setState({color: false}):this.setState({color:true})}
                style={{color: this.state.color?"inherit":"blue"}}> My name {this.state.name} {this.state.lastName}
                Gu {this.state.age}</p>
            </div>
        )
    }
}
