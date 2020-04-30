import React, { useState, useEffect } from 'react';
import {Route, Switch, Link, useParams} from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  /*
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
  */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the World of Pokemon</h1>
      </header>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemon List</Link>
            </li>
            <li>
              <Link to="/pokemon/12">Pokemon 12</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokemon">
          <PokemonList/>
        </Route>
        <Route exact path="/pokemon/:id">
          <Pokemon/>
        </Route>
        <Route path="/pokemon/:id/:info">
          <PokemonDetails />
        </Route>   
      </Switch>
    </div>
  );
}

export default App;
