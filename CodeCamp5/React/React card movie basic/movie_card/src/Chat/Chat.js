import React, { Component } from "react";

export default class Chat extends Component {
    state = {
        list: [],
        text: "",
    }
  render() {
    return (
      <div style={{margin: "40px auto",height:"300px",width:"300px",backgroundColor:"whitesmoke"}}>
        <div style={{height: "250px"}}>
            <ul style={{listStyle: "none"}}>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
                <li>aaaaaaaa</li>
            </ul>
        </div>
        <div >
            <input type="text" placeholder="message" value={this.state.text} onChange={(e) => console.log({event: e})}></input>
            <button>send</button>
        </div>
      </div>
    );
  }
}
