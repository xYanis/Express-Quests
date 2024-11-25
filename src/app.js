// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Importation des routes utilisateur

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Utilisation des routes pour les utilisateurs
app.use('/api', userRoutes);

// Démarrage du serveur
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
