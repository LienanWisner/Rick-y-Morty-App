import Card from './Card';
import '../App.css';

 function Cards({characters , onClose}) {
   return( 
      <div class="Cards">{
         characters.map(character =>{
           return <Card
           id={character.id}
           name={character.name}
           status={character.status}
           species={character.species}
           gender={character.gender}
           origin={character.origin.name}
           image={character.image}
           onClose={onClose}
        />

         })
         }
         
      </div>
   )
}
export default Cards