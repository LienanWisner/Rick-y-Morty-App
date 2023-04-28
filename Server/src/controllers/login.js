const users = require("../utils/users")
//users = [{
//     email: lie..., 
//     password: 123...
// }]

const login = (req, res)=>{
    const {email, password} = req.query

    const verifyEmailPassword = users.filter(user=> user.email === email && user.password === password)
    if(verifyEmailPassword.length > 0){
        return res.status(200).json({access:true})
    } else res.status(200).json({access:false})
}

module.exports = {
    login
}
