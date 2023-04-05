import { useState } from "react"
import Validate from "./validation.js"

const Form = ({login})=>{

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event)=>{
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(Validate({...userData, [event.target.name]: event.target.value}))
    }

   const handleSubmit = (event)=>{
    event.preventDefault()
    login(userData)
   }

    return(
        <form>
            <h1>Log-In</h1>
            
            <div>
            <label htmlFor="email">Email: </label>
            <input name="email" type="text" value={userData.email} onChange={handleChange}/>
            <p>{errors.email}</p>
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" value={userData.password} onChange={handleChange}/>
            <p>{errors.password}</p>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Form;