import React, {useState} from "react";



const PokemonForm = ({getData})=>{

        const initial_state = [{
            name: ""
        }]
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
        }


    return(
        <form onSubmit={handleSubtmit}>
            <label htmlFor=""></label>
            <input
            name="name" 
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            />
            <button> Get Pokemon</button>
        </form>
    )
}

 export default PokemonForm;