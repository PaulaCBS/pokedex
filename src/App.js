import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import AllPokemons from './components/AllPokemons/AllPokemons';

const App = () => {
  const [ pokemons, setPokemons ] = useState([]);

  const[ loading, setLoading ] = useState(true);

  const [ page, setPage ] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5");

  useEffect(() => {
      getData(page)
  }, [page]);

  const getData = (page) => {
    fetch(page)
      .then( res => res.json())
      .then(data => {
        const { next } = data;
        const { previus } = data;
        const { results } = data;
        const newPokemonData = [];
        results.forEach((pokemon, index) => {
          newPokemonData[index] = {
            id: index + 1,
            name: pokemon.name,
            details: pokemon.url,
          };
        });
        setPokemons(newPokemonData);
        setLoading(false)
      });
  }
  /*const getDetails = (pokemonsUrl) => {
    Promise.all(
      
    )
  }*/

  return (
    <Router>
      <div className="App">
        <Navbar pokemons={ pokemons } />
        <AllPokemons pokemons={ pokemons } loading={ loading }/>
      </div>
    </Router>
  );
}

export default App;