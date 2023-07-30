import axios from "axios";
import React, {useState, useEffect} from "react";
import PokemonForm from "./PokemonForm";
import { v4 as uuid } from "uuid";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = () => {

    const [stats, setStates] = useState([])
  
    const  [loading, setLoading] = useState(true);
    
    const getData = async (pokemon)=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const pokemons = response.data;
        console.log(pokemons);
        const {name, id, base_experience, height, sprites, weight} = pokemons;
        setStates(stats => [...stats, {   id : uuid(), name: name, experience: base_experience, height : height ,image: sprites.front_default , weight : weight}]);
        setLoading(false);
    }

  
    return( 
        <>
        <h2 className="display-4">Favorite Pokemon</h2>
        
        <PokemonForm getData={getData} />
        <div className="Pokemon-container">
        {loading ? (
            <h3>What's Yours? </h3>
        ) : (
            stats.map((stat) => (
               
                <PokemonCard className="Pokemon-card" key={uuid()} id={stat.id} name={stat.name} height={stat.height} experience={stat.experience} image={stat.image} weight={stat.weight}/>
                   
                
            ))
        )}
        </div>
    </>
);
  };

  export default PokemonList;
  
