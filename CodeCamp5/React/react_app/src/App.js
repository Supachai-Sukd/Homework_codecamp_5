import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentClass from './component/ComponentClass'
import ChildClass from './component/ChildClass'
import ChildFunc from './component/ChildFunction'
import ParentCom from './component/ParentComponent'

function App() {
  return (
    <div className="App">
    <p id="content">CSS by ID</p>
    <ParentCom/>
    <ComponentClass/>
    <ComponentClass/>
    <ChildClass/>
    <ChildClass/>
    <img src={logo}/>
    <ParentCom/>
    
    </div>
  );
}

export default App;
