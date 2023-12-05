// Fonction pour ajouter un modèle de voiture
function addCarModel() {
  // Récupérer les valeurs du formulaire
  var modelName = document.getElementById('modelName').value;
  var manufacturer = document.getElementById('manufacturer').value;
  var year = document.getElementById('year').value;

  // Créer un objet représentant le nouveau modèle de voiture
  var newCarModel = {
    name: modelName,
    manufacturer: manufacturer,
    year: year
  };

  // Effectuer une requête AJAX pour envoyer les données au serveur et les ajouter à la base de données
  fetch('/api/addCarModel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCarModel)
  })
  .then(response => response.json())
  .then(data => {
    // Gérer la réponse du serveur (succès ou erreur)
    console.log(data);
    // Facultatif : Mettre à jour l'interface utilisateur ou afficher un message de réussite
  })
  .catch(error => {
    console.error('Erreur :', error);
    // Gérer les erreurs, afficher un message d'erreur, etc.
  });
}// Fonction pour ajouter un modèle de voiture
function addCarModel() {
  // Récupérer les valeurs du formulaire
  var modelName = document.getElementById('modelName').value;
  var manufacturer = document.getElementById('manufacturer').value;
  var year = document.getElementById('year').value;

  // Créer un objet représentant le nouveau modèle de voiture
  var newCarModel = {
    name: modelName,
    manufacturer: manufacturer,
    year: year
  };

  // Effectuer une requête AJAX pour envoyer les données au serveur et les ajouter à la base de données
  fetch('/api/addCarModel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCarModel)
  })
  .then(response => response.json())
  .then(data => {
    // Gérer la réponse du serveur (succès ou erreur)
    console.log(data);
    // Facultatif : Mettre à jour l'interface utilisateur ou afficher un message de réussite
  })
  .catch(error => {
    console.error('Erreur :', error);
    // Gérer les erreurs, afficher un message d'erreur, etc.
  });
}