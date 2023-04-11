import {ADD_FAV, REMOVE_FAV} from "./actions-type"

export const addFav = (personaje)=>{
    return{
        type: ADD_FAV, payload: personaje
    }
}

export const removeFav = (id)=>{
    return{
        type: REMOVE_FAV, payload: id
    }
}

