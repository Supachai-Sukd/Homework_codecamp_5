import React, {useState} from 'react';
import './App.css';
import Home from './component/home'
import Context, {Context2} from './Context'

function App() {
  const [state, setState] = useState([{content: "Hello world"}])
  return (
    <Context.Provider value={{state, setState}} >
      <Home />
      
    </Context.Provider>
    
  );
}

export default App;
