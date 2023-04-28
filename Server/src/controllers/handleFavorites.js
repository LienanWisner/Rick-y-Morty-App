let myFavorites = [];

const postFav = (req,res)=>{
    const personaje = req.body
    myFavorites.push(personaje)
    return res.status(200).json(myFavorites)
} 

const deleteFav = (req,res)=>{
    const { id } = req.params

    const filterFavorites = myFavorites.filter(favorito=>favorito.id !== +id)
    myFavorites = filterFavorites
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}