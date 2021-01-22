import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import AllPokemons from './components/AllPokemons/AllPokemons';

const App = () => {
  const [ pokemons, setPokemons ] = useState();

  const[ loading, setLoading ] = useState(true);

  const [ page, setPage ] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5");

  useEffect( () => {
    getPokemons(page); 
  }, [page] )

  const getPokemons = (url) => {
    fetch(url)
      .then( res => res.json())
      .then( data => {
        const pokemonsList = data.results;
        setPokemons(pokemonsList)
        setLoading(false)
        /*Promise.all(
          pokemonsList.map( pokemon => {
            fetch( pokemon.url )
              .then( res => res.json() )
              .then( singlePokemon => setPokemons(singlePokemon) );
          })
        )*/
      })
  }

  return (
    <Router>
      <div className="App">
        <Navbar pokemons={ pokemons } />
        <AllPokemons pokemons={ pokemons } loading={ loading } />
      </div>
    </Router>
  );
}

export default App;
