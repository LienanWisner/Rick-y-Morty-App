import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   let [id, setId] = useState("")
   let handleChange = (event)=>{
      setId(id=event.target.value)
   }

   return (
      <div>
         <input type='search' value = {id} onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

