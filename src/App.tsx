import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '../src/components/atoms/Button'

function App() {

  const handleA = () => {
    console.log("handleA")
  }
  const handleB = () => {
    console.log("handleB")
  }

  return (
    <div className="App">
      <Button onClick={() => handleA()} title="handleA"/>
      <Button onClick={() => handleB()} title="handleB"/>
    </div>
  );
}

export default App;
