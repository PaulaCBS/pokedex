import './all-pokemons.css'
import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner'

const AllPokemons = (props) => {
  const pokemonsList = props.pokemons;

  const isLoading = props.isLoading

  return(
    <div className="cards-list">
      {
       isLoading ? <Spinner /> : pokemonsList.map( (pokemon, index) => <Card name={pokemon.name} key={index} id={index + 1} />)  
      }
    </div>
  )
}

export default AllPokemons;