import React, { useState, Component } from 'react';
import './App.css';
import PrivateRoutes from './component/private-routes/PrivateRoutes';
import LocalStorageServices from './services/localStorageService'
import {fetchUser} from './actions'
import { connect } from 'react-redux'
import { Button } from 'antd';


function App(props) {
  const [role, setRole] = useState(LocalStorageServices.getRole())

  
  
  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole}  />
     
    </div>
  );
}




// Used to add reducer's state into the props
const mapStateToProps = (state) => ({
  fetchData: state.fetchUserReducerByIndex
})

// Used to add action (dispatch) into the props
const mapDispatchToProps = {
  fetchUser
}


export default connect(mapStateToProps, mapDispatchToProps)(App)














