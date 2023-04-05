 
 const regexEmail = /\S+@\S+\.\S+/;

 let Validate = (userData)=>{
    const error = {}
    if(!userData.email){
        error.email = "el nombre de usuario no puede estar vacío"
    } else if(userData.email.length > 35){
        error.email = "el nombre de usuario no puede tener más de 35 caracteres"
    } else if(!regexEmail.test(userData.email)){
        error.email = "email no valido"
    }
    else error.email= "" 
    
    if(userData.password.length < 6 || userData.password.length > 10){
        error.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    } else if(!/\d/.test(userData.password)){
        error.password = "la contraseña tiene que tener al menos un número."
    } else error.password = ""
    
    return error}

export default Validate;
