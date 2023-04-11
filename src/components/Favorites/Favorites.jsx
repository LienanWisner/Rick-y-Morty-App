import { connect } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../../redux/actions";

const Favorites = ({myFavorites, removeFav}) => {
    
  return (
    <div>
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
