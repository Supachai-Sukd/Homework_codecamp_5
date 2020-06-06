import React, { Component } from 'react'

export default class ComponentClass extends Component {
    //อันนี้เป็นการเซ็ทตัวคลาสเรียบร้อย
    constructor(props) {
        super(props)
        this.state = {
            name : "Peter",
            lastName : "Pan",
            age : "16",
            color : true,
            list : [{content : "aaaaa", score : 1}, 
            {content : "bbbbb", score : 2},
            {content : "ccccc", score : 255},
            {content : "ddddd", score : 2555}]
    
        }
    }
    render() {
        return (
            <div style={{ color: "inherit"}}>
               
                this is component for reuse
                <p onClick={ () => this.state.color?this.setState({color: false}):this.setState({color:true})}
                style={{color: this.state.color?"inherit":"blue"}}> My name {this.state.name} {this.state.lastName}
                Gu {this.state.age} </p>
                <button onClick={ () => this.setState({name: prompt("Add your name")})}>edit name</button>
                <ul>
        {this.state.list.map (obj => <li>{obj.content} score : {obj.score}</li>)}
                {/* <li>{this.state.list[0]}</li>
                <li>{this.state.list[1]}</li>
                <li>{this.state.list[2]}</li>
                <li>{this.state.list[3]}</li>
                <li>{this.state.list[4]}</li> */}
                </ul>
            </div>
        )
    }
}
