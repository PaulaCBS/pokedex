import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  // DADOS PARA TESTAR A BARRA DE BUSCA - SUBSTITUIR
  const [pokemons, setPokemons] = useState(
    [
      {"name":"unown","url":"https://pokeapi.co/api/v2/pokemon/201/"},
      {"name":"wobbuffet","url":"https://pokeapi.co/api/v2/pokemon/202/"},
      {"name":"girafarig","url":"https://pokeapi.co/api/v2/pokemon/203/"},
      {"name":"pineco","url":"https://pokeapi.co/api/v2/pokemon/204/"},
      {"name":"forretress","url":"https://pokeapi.co/api/v2/pokemon/205/"},
      {"name":"dunsparce","url":"https://pokeapi.co/api/v2/pokemon/206/"},
      {"name":"gligar","url":"https://pokeapi.co/api/v2/pokemon/207/"},
      {"name":"steelix","url":"https://pokeapi.co/api/v2/pokemon/208/"},
      {"name":"snubbull","url":"https://pokeapi.co/api/v2/pokemon/209/"},
      {"name":"granbull","url":"https://pokeapi.co/api/v2/pokemon/210/"},
      {"name":"qwilfish","url":"https://pokeapi.co/api/v2/pokemon/211/"},
      {"name":"scizor","url":"https://pokeapi.co/api/v2/pokemon/212/"},
      {"name":"shuckle","url":"https://pokeapi.co/api/v2/pokemon/213/"},
      {"name":"heracross","url":"https://pokeapi.co/api/v2/pokemon/214/"},
      {"name":"sneasel","url":"https://pokeapi.co/api/v2/pokemon/215/"},
      {"name":"teddiursa","url":"https://pokeapi.co/api/v2/pokemon/216/"},
      {"name":"ursaring","url":"https://pokeapi.co/api/v2/pokemon/217/"},
      {"name":"slugma","url":"https://pokeapi.co/api/v2/pokemon/218/"},
      {"name":"magcargo","url":"https://pokeapi.co/api/v2/pokemon/219/"},
      {"name":"swinub","url":"https://pokeapi.co/api/v2/pokemon/220/"}
    ]
  );
  return (
    <Router>
      <div className="App">
        <Navbar pokemons={pokemons} />
      
      </div>
    </Router>
  );
}

export default App;
