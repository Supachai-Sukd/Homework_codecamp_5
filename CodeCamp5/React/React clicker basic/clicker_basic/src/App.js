import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <div className="App">
       <div className="container">
    <div className="number">{this.state.value}</div>
         <div className="buttonContainer">
           {/* //setState ต้องทำเป็น Obj จะได้ไป Merge ตัวเก่าได้ */}
           <button onClick={ () => this.setState({value : this.state.value + 1})}> + </button>
           <button onClick={() => this.setState({value : 0})}> refresh </button>
           <button onClick={() => this.setState({value : this.state.value - 1})}> - </button>
         </div>
         </div> 
      </div>
    );
    
  }
}





export default App;
