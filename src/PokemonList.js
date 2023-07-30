import axios from "axios";
import React, {useState, useEffect} from "react";
import PokemonForm from "./PokemonForm";
import { v4 as uuid } from "uuid";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = () => {

    const [stats, setStates] = useState([])
    const [pokemon, setPokemon] = useState("pikachu");
    const  [loading, setLoading] = useState(true);
    
    const getData = async (pokemon)=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const pokemons = response.data;
        const {name, id, base_experience, height, sprites} = pokemons;
        setStates(stats => [...stats, {   id : uuid(), name: name, experience: base_experience, height : height ,image: sprites.front_default }]);
        setLoading(false);
    }

  
    return( 
        <>
        <h2>Favorite Pokemons</h2>
        
        <PokemonForm getData={getData} />

        {loading ? (
            <p>What's Yours? </p>
        ) : (
            stats.map((stat) => (
                <div className="Pokemon-container">  
                <PokemonCard key={uuid()} id={stat.id} name={stat.name} height={stat.height} experience={stat.experience} image={stat.image}/>
                   
                </div>
            ))
        )}
    </>
);
  };

  export default PokemonList;
  