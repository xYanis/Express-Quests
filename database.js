require("dotenv").config(); // Charger les variables d'environnement

const mysql = require("mysql2/promise"); // Importer mysql2 avec support des promesses

// Création d'un pool de connexions
const database = mysql.createPool({
  host: process.env.DB_HOST, // Adresse du serveur MySQL
  port: process.env.DB_PORT, // Port du serveur MySQL
  user: process.env.DB_USER, // Nom d'utilisateur
  password: process.env.DB_PASSWORD, // Mot de passe
  database: process.env.DB_NAME, // Nom de la base de données
});

database
  .query("select * from movies")
  .then((result) => {
    const [movies] = result;

    console.log(movies);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = database;