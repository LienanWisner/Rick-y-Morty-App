import { useState } from "react"
import Validate from "./validation.js"
import styles from "./Form.module.css"

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
        <form className={styles.formGeneral}>
            <h1 className={styles.login}>Log-In</h1>
            
            <div className={styles.email}>
            <label htmlFor="email">Email: </label>
            <input name="email" type="text" value={userData.email} onChange={handleChange}/>
            <p>{errors.email}</p>
            </div>
            <div>
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" value={userData.password} onChange={handleChange}/>
            <p>{errors.password}</p>
            </div>
            <button disabled={!userData.email || !userData.password || errors.email || errors.password} onClick={handleSubmit}>Submit</button>
            
        </form>
    )
}
export default Form;