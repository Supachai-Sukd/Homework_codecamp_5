import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './component/Index'
import Admin from './component/Admin'
import Register from './component/Register'
import Users from './component/Users'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
