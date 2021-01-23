import { useState } from 'react'
import './card.css'
import './card.css';

const Card = (props) => {

  let { name, id } = props;

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  //const pokemonDetail = props.details

  let [ capturado, setCapturado ] = useState(false)

  const toggleCapturado = () => {
    setCapturado(!capturado)
  }

  return(
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img} alt="imagem do pokemon"  />
          </div>
          <div class="flip-card-back">
            <h5>{name}</h5> 
            <p>#{ id }</p>   
            <div className="btn-wraper">
              <button className={ capturado ? "capturado" : "solto"} onClick={ toggleCapturado }>{ capturado ? "Soltar" : "Capturar" }</button>
            </div>         
          </div>
        </div>
      </div>
  )
}

export default Card;