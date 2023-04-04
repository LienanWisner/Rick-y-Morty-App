import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Detail = ()=>{
     let {id} = useParams()

     let [character, setCharacter] = useState({})
     

     useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <img src={character.image}/>
        </div>
    )} else return(<div>No existe personaje con ese ID</div>)
}

export default Detail;