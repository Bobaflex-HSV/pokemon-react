import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import {Router} from 'react-router-dom';
import './App.css';

function App() {
  const apiURL = "http://localhost:3000/pokemon";
  const [pokeData, setPokeData] = useState({});
  
  function fetchPokeData() {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        setPokeData(data);
      })
      .catch(console.log("Error"));
  }
  useEffect(() => {
    fetchPokeData();
  }, []);
  console.log(pokeData)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
