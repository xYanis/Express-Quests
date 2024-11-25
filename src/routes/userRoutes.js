// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const database = require('../../database'); // L'importation correcte de database.js

// Route GET /api/users - Renvoie tous les utilisateurs
router.get('/users', async (req, res) => {
    try {
        const [rows] = await database.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
    }
});

// Route GET /api/users/:id - Renvoie un utilisateur spécifique par son ID
router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const [rows] = await database.query('SELECT * FROM users WHERE id = ?', [userId]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: `Utilisateur avec l'ID ${userId} non trouvé` });
        }

        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error: err });
    }
});

module.exports = router;
