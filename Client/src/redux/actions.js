import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, ALL} from "./actions-type"
import axios from "axios"

// export const addFav = (personaje)=>{
//     return{
//         type: ADD_FAV, payload: personaje
//     }
// }
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
            const { data } = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
        }
        catch(error){
            console.log("Error axios addFav")
        }
    };
};


// export const removeFav = (id)=>{
//     return{
//         type: REMOVE_FAV, payload: id
//     }
// }
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try{
            const { data } = await axios.delete(endpoint)
                return dispatch({
                   type: REMOVE_FAV,
                   payload: data,
             });
        }
        catch(error){
            console.log("Error axios removeFav")
        }
    };
 };

export const filterCards = (gender)=>{
    return{
        type: FILTER, payload: gender
    }
}

export const orderCards = (order)=>{
    return{
        type: ORDER, payload: order
    }
}

export const all = ()=>{
    return{
        type: ALL
    }
}

