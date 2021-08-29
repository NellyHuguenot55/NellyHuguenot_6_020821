// Création du router qui contient les fonctions qui s'appliquent aux différentes routes pour les sauces

// Ajout de plugin externe nécessaire pour utiliser le router d'Express
const express = require('express');

// Appel du routeur avec la méthode mise à disposition par Express
const router = express.Router(); // La logique de routing et la logique métier est dans le controller sauce.js

// protection par authentification
const auth = require('../middleware/auth'); // Importation du middleware auth pour sécuriser les routes : Récupère la configuration d'authentification JsonWebToken

// gestion des fichiers images
const multer = require('../middleware/multer-config') //On importe le middleware multer pour la gestion des images

const sauceCtrl = require('../controllers/sauce');

// ROUTERS
// Création des ROUTES de l'API (avec middlewares et controllers)

router.get('/', auth, sauceCtrl.getAllSauces);           // Route qui permet de récupérer toutes les sauces (via tableau de toutes les sauces de la BDD)
router.post('/', auth, multer, sauceCtrl.createSauce);   // Route qui permet de créer "une sauce"
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // Route qui permet de modifier "une sauce"
router.get('/:id', auth, sauceCtrl.getOneSauce);         // Route permet de récupérer sur une des sauces précise
router.delete('/:id', auth, sauceCtrl.deleteSauce);      // Route qui permet de supprimer "une sauce"
router.post('/:id/like', auth, sauceCtrl.noteSauce);     // Route qui permet de gérer les likes des sauces

module.exports = router;