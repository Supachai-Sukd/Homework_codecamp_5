import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './component/Article'

class App extends React.Component {
  constructor(props) {
    console.log("[App.js] Constructor")
    super(props)
    this.state = {
     isShow: true,
     article: "Hello world JS"
    }
    
  }

static getDerivedStateFromProps(props, state) {
  console.log("[App.js]getDerivedStateFromProps")
  return state
}

shouldComponentUpdate(nextProps, nextState) {
  console.log("[App.js] shouldComponentUpdate")
  return true
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("[App.js] getSnapshotBeforeUpdate")
  return {x: 0, y: 0}
}

componentDidUpdate(prevProps, prevState, snapShot) {
  console.log("[App.js] componentDidUpdate",snapShot)

}

componentDidMount() {
  console.log("[App.js]ComponentdidMount")
}

  onChangeVisible = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }
  render() {
    console.log("[App.js]Render")
    return (
      <div className="App">
        <button onClick={this.onChangeVisible}>Show/Hide</button> 
        <input value={this.state.article} onChange={(e) => this.setState({article: e.target.value})} />
        {this.state.isShow? <Article article={this.state.article} />:null}
       
      </div>
    )
  }
}
 

export default App;
