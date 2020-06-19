import React, {useState} from 'react';
import './App.css';
import Home from './component/home'
import Context, {Context2} from './Context'

function App() {
  const [state, setState] = useState({content: "Hello world"})
  return (
    <Context2.Provider value={{state, setState}} >
      <Home />
      
    </Context2.Provider>
    
  );
}

export default App;
