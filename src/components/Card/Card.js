const Card = (props) => {

  const { name, id } = props;

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return(
    <div className="card">
      <div className="card-header">
        <img src={ img } alt="imagem do pokemon" className="card-img"/>
      </div>
      <div className="card-body">
        <p className="card-id">#{ id }</p>
        <p className="card-name">{ name }</p>
      </div>
    </div>
  )
}

export default Card;