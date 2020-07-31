import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    name: "",
    email: ""
  }

  addHistory = (e) => {
    e.preventDefault()
    this.props.addHistory({ type: "ADD_HISTORY", name: this.props.state.textName, email: this.props.state.textEmail })
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.props.data}
            <button onClick={() => this.props.plus({ type: "INCRESE" })}> + </button>
            <button onClick={() => this.props.minus({ type: "DECRESE" })}> - </button>
            <button onClick={() => this.props.reset({ type: "RESET" })}> reset </button>
            <button onClick={() => this.props.addNum({ type: "ADD_NUM", num: this.props.data })}> add num </button>
            <button onClick={() => this.props.addPerson({ type: "ADD_PERSON" })}> add person </button>
          </div>
          <ul>
            {this.props.state.arr.map((num, idx) => <li key={idx}>{num}</li>)}
            {this.props.state.arrObj.map( (obj, idx) => <li key={idx}>name : {obj.name} </li> )}
          </ul>
        </header>

      </div>
    );
  }



}

// Used to add reducer's state into the props
const mapStateToProps = state => {
  return {
    data: state.count,
    state: state
  }
}
// Used to add action (dispatch) into the props
const mapDispatchToProps = dispatch => {
  return {
    plus: (action) => dispatch(action),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
    addNum: (action) => dispatch(action),
    addPerson: (action) => dispatch(action)
  }
}

// // Used to add reducer's state into the props
// const mapStateToProps = (state) => ({
//   fetchReducer: state.fetchReducer
// })
// // Used to add action (dispatch) into the props
// const mapDispatchToProps = {
//   fetchData
// }




export default connect(mapStateToProps, mapDispatchToProps)(App);
