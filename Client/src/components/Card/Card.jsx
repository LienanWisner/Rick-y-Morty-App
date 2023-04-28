import { NavLink, useLocation } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, all, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites, allCharacters}) {
  const [isFav, setIsFav] = useState(false);

  const currentPath = useLocation()
  let noFavorites = currentPath.pathname !== "/favorites"

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else if(!isFav) {
      setIsFav(true);
      addFav({
        id, 
        name,
        status,
        species,
        gender,
        origin,
        image
      });
    }
  };
 
  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


  return (
    <div className={styles.card}>
      {
      isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )
      }

      {noFavorites && <button  onClick={() => onClose(id)} className={styles.botonBorrar}>Borrar</button>}

      <NavLink className={styles.nombre} to={`/detail/${id}`}>
        <h2>{name}</h2>
      </NavLink>

      <img src={image} alt="" />
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
    </div>
  );
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites,
      allCharacters : state.allCharacters
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => {
      dispatch(addFav(personaje));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Card);
