import React, {useState} from "react";
import "./PokemonForm.css";


const PokemonForm = ({getData})=>{

        const initial_state = {
            name: ""
        }
        const [formData, setFormData]= useState(initial_state);


        const handleChange = (e) =>{
            const {name, value} = e.target;
            setFormData(formData => ({
                ...formData,
                [name]: value
            }))
        }

        const handleSubtmit = (e)=>{
            e.preventDefault();
            getData(formData.name);
            setFormData(initial_state);
        }


    return(
        <div className="pokemon-container">
        <form className="pokemon-form" onSubmit={handleSubtmit}>
            <input
            className="pokemon-input"
            name="name" 
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            />
            <button className="pokemon-button"> Get Pokemon</button>
        </form>
        </div>
    )
}

 export default PokemonForm;