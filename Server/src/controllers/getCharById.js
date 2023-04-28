const axios = require("axios");

// const  getCharById = (res, id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(({data}) => {
//             const personaje = {
//                 id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status
//             }
//             res.writeHead(200, {"Content-Type" : "application/json"})
//             return res.end(JSON.stringify(personaje))
//         })
//         .catch((error)=>{
//             res.writeHead(500, {"Content-Type" : "text/plain"})
//             return res.end(error.message)
//         })
// }

//2
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios(`${URL}/${id}`);
    if (data.name) {
      const personaje = {
        id: +id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
      };
      return res.status(200).json(personaje);
    } else return res.status(404).send("Not found");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  getCharById,
};
