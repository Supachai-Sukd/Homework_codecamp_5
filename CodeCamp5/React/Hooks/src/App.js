import React, {setState, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todoClass/todo'
import {Switch, Route} from 'react-router-dom'
import Counter from './component/Counter'
import {TodoList} from './todoHook/TodoList'
import Example from './component/Example'



function App() {
  const [state, setState] = useState({content: "Hello World"})
  return (
    <Counter />
    
  );
}

export default App;
