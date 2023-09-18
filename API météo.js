// Coordonnées de Paris, France
const latitude = 48.8566;
const longitude = 2.3522;

// URL de l'API Open-Meteo pour obtenir les prévisions météorologiques
const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

// Requête à l'API
fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        // Affichage des données météorologiques actuelles
        console.log("Météo actuelle:", data.current_weather);

        // Affichage des données météorologiques horaires
        console.log("Prévisions horaires:", data.hourly);
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données météorologiques:", error);
    });

    