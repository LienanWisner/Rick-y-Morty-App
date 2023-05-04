const { Favorite } = require("../DB_connection")

const deleteFav = async(req,res)=>{
    const {id} = req.params
    try{
        // const character = Favorite.findByPk(id)
        // Favorite.destroy({where:{
        //     id
        // }})
        await Favorite.destroy({
            where: {
                id
            }
        })
    const results = await Favorite.findAll()
    return res.status(200).json(results)
    }
    catch(error){
        return res.status(500).send(error.message)
    }

}

module.exports = {deleteFav}