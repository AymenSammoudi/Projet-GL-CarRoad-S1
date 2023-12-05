function searchCars() {
    var model = document.getElementById('model').value;
    var manufacturer = document.getElementById('manufacturer').value;
    var location = document.getElementById('location').value;
    var year = document.getElementById('year').value;
    var otherCriteria = document.getElementById('otherCriteria').value;
  
    // Construire l'objet de critères de recherche
    var searchCriteria = {
      model: model,
      manufacturer: manufacturer,
      location: location,
      year: year,
      otherCriteria: otherCriteria
    };
  
    // Envoyer les critères de recherche au serveur
    fetch('/api/searchCars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchCriteria)
    })
    .then(response => response.json())
    .then(data => {
      // Traiter les résultats de la recherche
      displaySearchResults(data);
    })
    .catch(error => {
      console.error('Erreur :', error);
      // Gérer les erreurs, afficher un message d'erreur, etc.
    });
  }
  
  function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Effacer les résultats précédents
  
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
    } else {
      results.forEach(result => {
        // Créer une carte Bootstrap pour afficher les détails de la voiture
        var carCard = document.createElement('div');
        carCard.classList.add('card', 'mt-2');
  
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        var cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.model + ' (' + result.year + ')';
  
        var cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = 'Marque: ' + result.manufacturer + ' | Localisation: ' + result.location;
  
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        carCard.appendChild(cardBody);
  
        searchResultsContainer.appendChild(carCard);
      });
    }
  }
  