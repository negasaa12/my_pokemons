import React from "react";
import "./Pokedex.css"
import PokemonList from "./PokemonList";
const Pokedex = ()=>{

    return (
        <>
        <h1 className="Pokedex-h1"> Pokedex</h1>
          <PokemonList/>
       
        </>
    )
}

export default Pokedex;