import Card from '../Card/Card';
import styles from './Cards.module.css';

 function Cards({characters , onClose}) {
   return( 
      <div className={styles.Cards}>{
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