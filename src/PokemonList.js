import axios from "axios";
import React, {useState, useEffect} from "react";
import PokemonForm from "./PokemonForm";
import { v4 as uuid } from "uuid";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
const PokemonList = () => {

    const [stats, setStates] = useState([])
  
    const  [loading, setLoading] = useState(true);
    
    const getData = async (pokemon)=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        const pokemons = response.data; // object
        const powers = pokemons.abilities[0].ability;
    
        const {name, id, base_experience, height, sprites, weight} = pokemons;
        const ability =  powers.name;
        
        setStates(stats => [...stats,  { abilities: ability, id : id, name: name, experience: base_experience, height : height ,image: sprites.front_default , weight : weight}]);
        setLoading(false);
     
    }

    // useEffect(()=>{

    //     console.log(stats);
    // },[stats])
    return( 
        <>
        <h2 className="display-4">Favorite Pokemon</h2>
        
        <PokemonForm getData={getData} />
        <div className="Pokemon-container">
        {loading ? (
            <h3>What's Yours? </h3>
        ) : (
            stats.map((stat) => (
               
                <PokemonCard className="Pokemon-card" key={uuid()} id={stat.id} name={stat.name} height={stat.height} experience={stat.experience} image={stat.image} weight={stat.weight} ability={stat.abilities}/>
                   
                
            ))
        )}
        </div>
    </>
);
  };

  export default PokemonList;
  
