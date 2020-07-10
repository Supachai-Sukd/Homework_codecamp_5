import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Login from './component/pages/Login'
import Profile from './component/pages/Profile'
import CreateuserPage from './component/pages/Createpage'
// import Playground from './component/Forplayground/Playground'




function App() {

  // const selectMenu = 
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create" component={CreateuserPage} />
        {/* <Route exact path="/playground" component={Playground} /> */}
        
        
      </Switch>
        

      </div>
  );
}

export default App;










      
     
      
 
