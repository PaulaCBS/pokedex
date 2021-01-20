import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = (props) => {
  const search = (e) => {
    const pattern = e.target.value;
    const searchResults = props.pokemons.filter(pokemon => pokemon.name.match(pattern));
  }

  return (
    <div className="nav-bar flex-row-center">
      <div className="logo-wraper col-sm-12 col-lg-3">
        <h1 id="logo">
          <img src="https://www.pngkey.com/png/full/757-7574864_bola-pokemon-png.png" alt="pokebola" className="logo-img"/>
          POKEDEX
        </h1>
      </div>
      <div className="nav flex-row-center col-sm-12 col-lg-9">
        <div className="navlinks col-sm-12 col-lg-8">
          <NavLink exact to="/" className="navlink" activeClassName="active">Pokémons</NavLink>
          <NavLink to="/meus-pokemons" className="navlink" activeClassName="active">Meus Pokémons</NavLink>
        </div>
        <div className="search-wraper col-9 col-sm-6 col-lg-3">
          <input type="search" placeholder="Buscar..." onChange={search} id="search" className="col-12" autoComplete="off"/>
        </div>
      </div>
     
    </div>
  );
}

export default Navbar;