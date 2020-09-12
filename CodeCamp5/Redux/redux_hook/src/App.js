import React from 'react';
import './App.css';
import Box2 from './components/Box2';
import Box1 from './components/Box1';
import Box3 from './components/Box3';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Row } from 'antd'
import { Col } from 'antd/lib/grid';
import * as calculatorAction from './actions/calculatorAction'

function App() {

  const calReducer = useSelector(({ calculatorReducer }) => calculatorReducer)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>Redux hook demo</h1>
      <h2>{calReducer.count}</h2>
      <Row>
        <Col>
          <Button style={{ justifyContent: "space-around" }} >Add</Button>
          <Button style={{ justifyContent: "space-around" }} >Rem</Button>
          <Button style={{ justifyContent: "space-around" }} >Clr</Button>
          {/* <Button onKeyPress={() => dispatch(calculatorAction.remove()) }>Rem</Button>
        <Button onKeyPress={() => dispatch(calculatorAction.clear(0)) }>Clr</Button> */}
        </Col>
      </Row>

      <Box1 style={{ backgroundColor: 'yellow' }} />
      <Box2 style={{ backgroundColor: 'red' }} />
      <Box3 style={{ backgroundColor: 'green' }} />
    </div>
  );
}



export default App;
