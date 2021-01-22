import {useState, useEffect} from 'react';
import Spinner from '../Spinner/Spinner';

const Card = (props) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { name, url, id } = props

  useEffect(() => {
    setIsLoading(false)
    return () => {
      getDetails(url)
    }
  }, [isLoading])

  const getDetails = (url) => {
    fetch(url)
      .then( res => res.json())
      .then(data => {
        const detailsList = [data]
        console.log(detailsList)
        setDetails(data);
      });
  }

  //console.log(details)

  //console.log(details.sprites.front_default)
  //const img = details.sprites.front_default;

  return(
    <div className="card">
      <div className="card-header">

      </div>
      <div className="card-body">
      <p className="card-id">{ id }</p>
      <p className="card-name">{ name }</p>
      </div>
    </div>
  )
}

export default Card;