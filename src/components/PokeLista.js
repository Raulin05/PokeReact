import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const PokeLista = (props) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
            setPokemons(response.data.results);
        })
    }, []);

    return <div>
        <h1>Lista</h1>
        {pokemons.map(p => {
            return <p onClick={()=> {Navigate("/pokemon/"+ p.name)}}>Este pokemon es {p.name} </p>
            }

        )};
    

        </div>
}
export default PokeLista;