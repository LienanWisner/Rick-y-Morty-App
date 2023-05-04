require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`
const sequelize = new Sequelize(
   URL,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
const FavoriteModel = require("./models/Favorite")
FavoriteModel(sequelize)
//
const UserModel = require("./models/User")
UserModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

Favorite.belongsToMany(User, {through:"user_favorite"})
User.belongsToMany(Favorite, {through:"user_favorite"})



module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
