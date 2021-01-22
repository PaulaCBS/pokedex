import Spinner from '../Spinner/Spinner';
import Card from '../Card/Card'
import './all-pokemons.css'

const AllPokemons = (props) => {
  const pokemonsList = props.pokemons
  const isLoading = props.loading

  return(
    <div className="cards-list">
      {
        isLoading ? <Spinner /> : pokemonsList.map( (pokemon, index) => <Card name={pokemon.name} url={pokemon.url} key={index} id={index} />)  
      }
    </div>
  )
}

export default AllPokemons;