import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL_BASE = "http://localhost:3001/rickandmorty/character"
//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
//const API_KEY = "17178412455e.75be543753360638a34b"

const Detail = ()=>{
     let {id} = useParams()

     let [character, setCharacter] = useState({})
     

     useEffect(() => {
        axios(`${URL_BASE}/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data); 
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    if(Object.keys(character).length){
     return(
        <div>
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h3>{character.species}</h3>
            <h4>{character.gender}</h4>
            <p>{character.origin.name}</p>
            <img src={character.image}/>
        </div>
    )} else return(<div>Cargando...</div>)
}

export default Detail;