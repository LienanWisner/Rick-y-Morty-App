import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   
   let [id, setId] = useState("")
   let handleChange = (event)=>{
      setId(id=event.target.value)
   }

   return (
      <div className={styles.SearchBar}>
         <input className={styles.input} type='search' value = {id} onChange={handleChange}/>

         <button  onClick={()=>onSearch(id)} className={styles.botonAgregar}>Agregar</button>
      </div>
   );
}

