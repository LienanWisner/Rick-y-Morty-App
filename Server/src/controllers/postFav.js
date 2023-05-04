const { Favorite } = require("../DB_connection")

const postFav = async(req,res)=>{
    const {name, image,status,origin,species,gender} = req.body;
    
    if(!name ||!image || !status || !origin || !species || !gender){
        return res.status(401).send("Faltan datos")
    }
    try {
        const [fav, bool] = await Favorite.findOrCreate({where: {name}, defaults: {
            name,
            image,
            status,
            origin,
            species,
            gender
        }});
        const results = await Favorite.findAll()
        return bool ? res.status(200).json(results) : res.status(400).send("Salió mal boluuuuuuuuuuudo")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {postFav}