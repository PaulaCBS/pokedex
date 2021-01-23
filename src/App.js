import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import AllPokemons from './components/AllPokemons/AllPokemons';
import Spinner from './components/Spinner/Spinner'
import Pagination from '../src/components/Paginacao/Paginacao';

const App = () => {
  const [ pokemons, setPokemons ] = useState([]);
  const[ loading, setLoading ] = useState(true);
  const[ search, setSearch ] = useState(false);
  const[ searchResults, setSearchResults ] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [ page, setPage ] = useState("https://pokeapi.co/api/v2/pokemon");

  const getData = (page) => {
    fetch(page)
      .then( res => res.json())
      .then(data => {
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        const { results } = data;
        const newPokemonData = [];
        results.forEach((pokemon, index) => {
          newPokemonData[index] = {
            id: index + 1,
            name: pokemon.name
          };
        });
        setPokemons(newPokemonData);
        setLoading(false)
      });
  }

  

  function gotoNextPage() {
    setPage(nextPageUrl)
  }

  function gotoPrevPage() {
    setPage(prevPageUrl)
  }

  const searchFilter = (e) => {
    setSearch(true)
    const pattern = e.target.value;
    const searchResults = pokemons.filter(pokemon => pokemon.name.match(pattern));

    searchResults.forEach( result => setSearchResults(
      searchResults.filter( (item, index) => {
        const noDuplicates = searchResults.indexOf(item) === index;
        return searchResults.concat(noDuplicates)
      }))  
    )
  }

  useEffect(() => {
      getData(page)
  }, [page]);

  useEffect(() => {
  }, [search, searchFilter])


  return (
    <Router>
      <div className="App">
        <Navbar pokemons={ pokemons } search={ searchFilter }/>
        <Route exact path="/">
          {
            loading ? <Spinner /> : <AllPokemons pokemons={ pokemons } loading={ loading } search={ search } searchResults={ searchResults } />
          }
        </Route>
        <Pagination 
         gotoNextPage={nextPageUrl ? gotoNextPage : null}
         gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </div>
    </Router>
  );
}

export default App;