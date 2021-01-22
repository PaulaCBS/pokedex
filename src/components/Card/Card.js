import {useState, useEffect} from 'react';
import Spinner from '../Spinner/Spinner';

const Card = (props) => {
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { name, url, id } = props

  useEffect(() => {
    return () => {
      getDetails(url)
    }
  }, [isLoading])

  const getDetails = (url) => {
    fetch(url)
    .then( res => res.json())
    .then( data => {
      setDetails(data)
      setIsLoading(false)
    })
  }

  //const types = details.types;
  //console.log(types)

  const img = details/*.sprites.front_default*/;

  return(
    isLoading ? <Spinner /> : <div className="card">
                                <div className="card-header">
                                  <img src={img} alt="pokemon-img" className="card-img"/>
                                </div>
                                <div className="card-body">
                                  <p className="card-id">{ id }</p>
                                  <p className="card-name">{ name }</p>
                                </div>
                              </div>
  )
}

export default Card;