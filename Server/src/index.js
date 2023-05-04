// const http = require("http");
// const {getCharById} = require("./controllers/getCharById")
// // const personajes  = require("./utils/data")


// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // if(req.url.includes("/rickandmorty/character")){
//         const idUrl = req.url.lastIndexOf("/")
//         const id = Number(req.url.slice(idUrl + 1))
//     //     const personaje = personajes.filter(per => per.id === id)
//     //     return res.end(JSON.stringify(personaje[0]))
//     // }
//     if(req.url.includes("/rickandmorty/character")){
//         getCharById(res, id)
//     }
// })

// .listen(port, "localhost")
const server = require("./app")
const PORT = 3001

const { conn } = require('./DB_connection');

conn.sync({alter: true}).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Server raised in port: ${PORT}`)
    })
})


