const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'votre_utilisateur_mysql',
  password: 'votre_mot_de_passe_mysql',
  database: 'votre_base_de_données'
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

app.use(bodyParser.json());

// Endpoint pour ajouter une voiture à l'inventaire
app.post('/api/addCarToInventory', (req, res) => {
  // Récupérer les données de la nouvelle voiture depuis le corps de la requête
  const newCar = req.body;

  // Valider les données (ajouter des validations supplémentaires selon vos besoins)

  // Sauvegarder la nouvelle voiture dans la base de données
  saveCarToInventory(newCar)
    .then(savedCar => {
      // Répondre avec un message de réussite ou les données sauvegardées
      res.json({ success: true, data: savedCar });
    })
    .catch(error => {
      // Répondre avec un message d'erreur
      res.status(500).json({ success: false, error: 'Erreur lors de l\'ajout de la voiture à l\'inventaire.' });
    });
});

// Fonction pour sauvegarder la nouvelle voiture dans la base de données
function saveCarToInventory(newCar) {
  return new Promise((resolve, reject) => {
    // Exécuter la requête SQL pour insérer la nouvelle voiture dans la table appropriée
    const query = 'INSERT INTO inventory (model, manufacturer, year) VALUES (?, ?, ?)';
    db.query(query, [newCar.model, newCar.manufacturer, newCar.year], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion dans la base de données:', err);
        reject(err);
      } else {
        // Résoudre avec les données sauvegardées (vous pouvez également inclure l'ID généré)
        resolve({ id: results.insertId, ...newCar });
      }
    });
  });
}

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
