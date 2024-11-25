// Importation de la connexion à la base de données
const database = require("../../database");

// Fonction pour récupérer tous les films
const getMovies = (req, res) => {
  // Envoie une requête à la base de données pour récupérer tous les films
  database
    .query("SELECT * FROM movies") // Requête SQL pour récupérer tous les films
    .then(([movies]) => {
      // Si la requête réussit, on renvoie les films au format JSON
      res.json(movies);
    })
    .catch((err) => {
      // En cas d'erreur, on affiche l'erreur et renvoie une erreur 500
      console.error(err);
      res.sendStatus(500); // Statut 500 pour une erreur serveur
    });
};

// Fonction pour récupérer un film par son ID
const getMovieById = (req, res) => {
  const id = parseInt(req.params.id); // Récupère l'ID du film depuis les paramètres de l'URL

  // Envoie une requête à la base de données pour récupérer le film avec cet ID
  database
    .query("SELECT * FROM movies WHERE id = ?", [id]) // Requête préparée avec l'ID du film
    .then(([movies]) => {
      if (movies.length > 0) {
        // Si le film existe, on renvoie les données du film
        res.json(movies[0]);
      } else {
        // Si aucun film n'a été trouvé, on renvoie une erreur 404
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      // En cas d'erreur, on affiche l'erreur et renvoie une erreur 500
      console.error(err);
      res.sendStatus(500); // Statut 500 pour une erreur serveur
    });
};

// Exportation des fonctions pour qu'elles puissent être utilisées dans les routes
module.exports = {
  getMovies,
  getMovieById,
};
