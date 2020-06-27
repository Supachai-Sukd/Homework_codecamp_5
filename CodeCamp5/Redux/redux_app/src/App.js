import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
       {this.props.data}
       <button onClick={() => this.props.plus({ type: "INCRESE" })}> + </button>
       <button onClick={() => this.props.minus({ type: "DECRESE" })}> - </button>
       <button onClick={() => this.props.reset({ type: "RESET" })}> reset </button>
       </div>
      </header>
    </div>
  );
}



}

const mapStateToProps = state => {
  return{
    data: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plus: (action)=> dispatch(action),
    minus: (action)=> dispatch(action),
    reset: (action)=> dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
