function addCarToInventory() {
    var carModel = document.getElementById('carModel').value;
    var carManufacturer = document.getElementById('carManufacturer').value;
    var carYear = document.getElementById('carYear').value;
  
    var newCar = {
      model: carModel,
      manufacturer: carManufacturer,
      year: carYear
    };
  
    // Send the data to the server to add the car to the inventory
    fetch('/api/addCarToInventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCar)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Optionally, update the UI or show a success message
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors, show an error message, etc.
    });
  }  