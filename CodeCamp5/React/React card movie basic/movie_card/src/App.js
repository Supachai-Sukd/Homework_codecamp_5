import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Card} from "./cardmovie/card"
import Chat from "./Chat/Chat"
import Todo from "./todoList/TodoList"

class App extends React.Component {
  state = {
    value: 0,
    card : [{
      pic : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
      title: "card 1",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Deleniti delectus architecto distinctio vitae sapiente odit laborum aliquid libero id illum, voluptatibus, facilis laboriosam optio culpa,porro perferendis. Ab, consequatur! Ipsam?"
    },
    {
      pic : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
      title: "card 2",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Deleniti delectus architecto distinctio vitae sapiente odit laborum aliquid libero id illum, voluptatibus, facilis laboriosam optio culpa,porro perferendis. Ab, consequatur! Ipsam?"
    },
    {
      pic : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
      title: "card 3",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Deleniti delectus architecto distinctio vitae sapiente odit laborum aliquid libero id illum, voluptatibus, facilis laboriosam optio culpa,porro perferendis. Ab, consequatur! Ipsam?"
    },
    {
      pic : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
      title: "card 4",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Deleniti delectus architecto distinctio vitae sapiente odit laborum aliquid libero id illum, voluptatibus, facilis laboriosam optio culpa,porro perferendis. Ab, consequatur! Ipsam?"
    },
    {
      pic : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg",
      title: "card 5",
      content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Deleniti delectus architecto distinctio vitae sapiente odit laborum aliquid libero id illum, voluptatibus, facilis laboriosam optio culpa,porro perferendis. Ab, consequatur! Ipsam?"
    }
  ]
  };
  render() {
    const card = this.state.card
    return (
      <div className="App">
        <div className="container">
          <div className="number">{this.state.value}</div>
          <div className="buttonContainer">
            {/* //setState ต้องทำเป็น Obj จะได้ไป Merge ตัวเก่าได้ */}
            <button
              onClick={() => this.setState({ value: this.state.value + 1 })}
            >
              {" "}
              +{" "}
            </button>
            <button onClick={() => this.setState({ value: 0 })}>
              {" "}
              refresh{" "}
            </button>
            <button
              onClick={() => this.setState({ value: this.state.value - 1 })}
            >
              {" "}
              -{" "}
            </button>
          </div>
        </div>
        <div className="containercard">
        <div className="Navbar"></div>
        <div className="card">
          {card.map( item => <Card pic={item.pic} title={item.title} content={item.content}/>)}
          
        </div>
        <Todo/>
        <Chat />
        </div>
        
      </div>

      
    );
  }
}
export default App;
