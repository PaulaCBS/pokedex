import Card from '../Card/Card'
import './all-pokemons.css'

const AllPokemons = (props) => {
  const pokemonsList = props.pokemons;

  return(
    <div className="cards-list">
      {
        pokemonsList.map( (pokemon, index) => <Card name={pokemon.name} url={pokemon.details} key={index} id={index} />)  
      }
    </div>
  )
}

export default AllPokemons;