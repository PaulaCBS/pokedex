import './card.css';

const Card = (props) => {

  const { name, id } = props;

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return(
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img} alt="imagem do pokemon"  />
          </div>
          <div class="flip-card-back">
            <h5>{name}</h5> 
            <p>#{ id }</p>   
            <button>CAPTURAR</button>          
          </div>
        </div>
      </div>
    
  )
}

export default Card;

/**
      <div className="card">
        <div className="card-header">
          <img src={ img } alt="imagem do pokemon" className="card-img"/>
        </div>
        <div className="card-body">
          <p className="card-id">#{ id }</p>
          <p className="card-name">{ name }</p>
        </div>
      </div>
 */