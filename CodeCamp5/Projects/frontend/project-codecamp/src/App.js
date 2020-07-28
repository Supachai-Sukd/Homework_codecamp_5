import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './component/private-routes/PrivateRoutes';
import LocalStorageServices from './services/localStorageService'
import fetchData from './actions'
import { connect } from 'react-redux'


function App() {
  const [role, setRole] = useState(LocalStorageServices.getRole())

  props = this.props
  
  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole}  />
      {/* props.fetchUser.employees */}
    </div>
  );
}




// Used to add reducer's state into the props
const mapStateToProps = (state) => ({
  fetchUser: state.fetchUserReducerByIndex
})

// Used to add action (dispatch) into the props
const mapDispatchToProps = {
  fetchData
}


export default connect(mapStateToProps, mapDispatchToProps)(App)














