import React from "react";
import "./PokemonCard.css"




const PokemonCard = ({ image, name, id, height, experience }) => {
  return (
    <div className="pokemon-card">
      <h5 className="pokemon-name">{name}</h5>
      <img src={image} alt={name} className="pokemon-image" />
      <div>
        <ul className="pokemon-stats">
          <li>
            <strong>Experience:</strong> {experience}
          </li>
          <li>
            <strong>Height:</strong> {height}
          </li>
        </ul>
      </div>
    </div>
  );
};


export default PokemonCard  ;