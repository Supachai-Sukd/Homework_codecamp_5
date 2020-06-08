import React, { Component } from "react";

export default class Chat extends Component {
    state = {
        list: [],
        text: "",
    }
    add = () => {
      let list = [...this.state.list, this.state.text]
      this.setState({list : list})
      this.setState({text: ""})
    }
  render() {
    return (
      <div style={{margin: "40px auto",height:"300px",width:"300px",backgroundColor:"whitesmoke"}}>
        <div style={{height: "250px"}}>
            <ul style={{listStyle: "none"}}>
               
    {this.state.list.map( str => <li>{str}</li> )}
            </ul>
        </div>
        <div >
            <input type="text" placeholder="message" value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}></input>
            <button onClick={this.state.text.length > 0? this.add: null}>send</button>
        </div>
      </div>
    );
  }
}
