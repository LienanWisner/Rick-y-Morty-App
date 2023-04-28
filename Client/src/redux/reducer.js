import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, ALL } from "./actions-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filter: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:
    //   return { ...state, myFavorites: [...state.allCharacters, action.payload], allCharacters : [...state.allCharacters, action.payload] };
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    // case REMOVE_FAV:
    //     return {...state, myFavorites: state.myFavorites.filter(character=>character.id !== action.payload)}
    case REMOVE_FAV:
      const filt = action.payload.filter(fav=>fav.gender === state.filter)
      // return { 
      //   ...state, 
      //   myFavorites: action.payload, allCharacters: action.payload  };
      return{
        ...state,
        myFavorites: state.filter ===  "" || state.filter  === "all"
          ? action.payload
          :filt,
          allCharacters: action.payload
      }

    case FILTER:
      // return{...state, myFavorites: state.allCharacters.filter(character=>character.gender === action.payload)  }
      const filtrados = state.allCharacters.filter(x => x.gender === action.payload)
      return{
        ...state,
        myFavorites: action.payload === "all" ? [...state.allCharacters] : filtrados,
        filtro: action.payload
      }

    case ALL:
      return{...state, myFavorites: state.allCharacters}

    case ORDER:
      if(action.payload === "A")
      return{...state, myFavorites: state.allCharacters.sort((a, d)=> a.id - d.id)}
      if(action.payload === "D")
      return{...state, myFavorites: state.allCharacters.sort((a, d)=> d.id - a.id)}
      else return {...state}
    

    default:
      return { ...state };
  }
};

export default reducer;
