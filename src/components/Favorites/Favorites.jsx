import { connect } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards, all } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({myFavorites, removeFav}) => {
    
  const [aux, setAux] = useState(false)
  
  const dispatch = useDispatch()

  const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  }

  const handleFilter = (event)=>{
    if(event.target.value === "All"){
      dispatch(all())
    } else dispatch(filterCards(event.target.value));
  }


  return (
    <div>
      <select name="" id="" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select name="" id="" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        
      </select>

      {myFavorites.map((props) => {
        return (
          <Card
            id={props.id}
            name={props.name}
            status={props.status}
            species={props.species}
            gender={props.gender}
            origin={props.origin.name}
            image={props.image}
            onClose={()=>{
                removeFav(props.id)
            }}
          />
        );
      })}
    </div>
  );
};



const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        removeFav: (id)=>{dispatch(removeFav(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
