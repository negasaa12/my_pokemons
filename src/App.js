import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import PokemonList from './Pokedex';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={PokemonList}/>
        
       </Routes>
      
      </BrowserRouter>
      
      <Pokedex/>      
    </div>
  );
}

export default App;
