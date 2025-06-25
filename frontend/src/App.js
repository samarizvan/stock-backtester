import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

function App(){
  const [message, setMessage] = useState('');
  const [health, setHealth] = useState('');

  useEffect(() =>{
    //Fetch message from backend
    axios.get('http://localhost:8000/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.log('Error fetching message:', error));

    //Fetch health from backend
    axios.get('http://localhost:8000/health')
      .then(response => setHealth(response.data.status))
      .catch(error => console.log('Error fetching health:', error));
  }, []);

  return(
    <div className="App">
      <h1>Stock backtester</h1>
      <p>API Message: {message}</p>
      <p>API Health: {health}</p>
    </div>
  );
}

export default App;
