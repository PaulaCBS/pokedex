import { useState, useEffect } from 'react'
import './all-pokemons.css'
import Card from '../Card/Card'

const AllPokemons = (props) => {

  const { pageOffset, pageLimit } = props

  const pokemonsList = props.pokemons;

  const [ pagePokemons, setPagePokemons ] = useState(pokemonsList.slice(pageOffset, pageLimit))


  console.log(pagePokemons)

  const {search, searchResults} = props;

  return(
    <div className="cards-list">
      {
        search ? searchResults.map( (pokemon, index) => <Card name={pokemon.name} key={index} id={pokemon.id} />) : pagePokemons.map( (pokemon, index) => <Card name={pokemon.name} id={pokemon.id} key={index} />)  
      }
    </div>
  )
}

export default AllPokemons;