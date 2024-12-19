import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const getTime = () => {
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(getTime, 1000)
 
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;

