import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
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
        <h1>Welcome to the World of Pokemon</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemon">
          <PokemonList/>
        </Route>
        <Route path="/pokemond/:id">
          <Pokemon />
        </Route>
        <Route path="/pokemond/:id/:info">
          <PokemonDetails />
        </Route>   
      </Switch>
    </div>
  );
}

export default App;
