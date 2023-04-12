import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else if(!isFav) {
      setIsFav(true);
      props.addFav(props);
    }
  };
 
  useEffect(() => {
   props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);

  return (
    <div className={styles.card}>
      {
      isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )
      }

      <button  onClick={() => props.onClose(props.id)} className={styles.botonBorrar}>Borrar</button>

      <NavLink className={styles.nombre} to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </NavLink>

      <img src={props.image} alt="" />
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
    </div>
  );
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
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
