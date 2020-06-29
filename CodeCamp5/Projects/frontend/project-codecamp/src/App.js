import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './component/pages/Index'


function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
      
    </div>
  );
}

export default App;
