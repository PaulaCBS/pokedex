import './all-pokemons.css'
import Card from '../Card/Card'

const AllPokemons = (props) => {
  const pokemonsList = props.pokemons;

  const {search, searchResults} = props

  return(
    <div className="cards-list">
      {
        search ? searchResults.map( (pokemon, index) => <Card name={pokemon.name} key={index} id={pokemon.id} /> ) : pokemonsList.map( (pokemon, index) => <Card name={pokemon.name} key={index} id={pokemon.id} />)  
      }
    </div>
  )
}

export default AllPokemons;