function getWeather() {
    // Coordonnées de Paris, France
    const latitude = 48.8566;
    const longitude = 2.3522;

    // URL de l'API Open-Meteo pour obtenir les prévisions météorologiques
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            return `Il fait actuellement ${data.current_weather.temperature}°C avec une vitesse du vent de ${data.current_weather.windspeed} km/h.`;
        })
        .catch(error => {
            return "Erreur lors de la récupération des données météorologiques.";
        });
}

async function getAnswer() {
    // définition des variables d'entré de sortie de la fonction
    const input = document.getElementById('userInput').value.toLowerCase();
    let response = "";

    // identification de la question et production d'une réponse approprié
    switch (input) {
        case "comment t'appelles-tu?":
            response = "Je m'appelle Chat-Ensitech.";
            break;
        case "quel âge as-tu?":
            response = "Je suis un programme, je n'ai pas d'âge.";
            break;
        case "quelle est ta couleur préférée?":
            response = "Je n'ai pas de préférence car je ne vois pas les couleurs, mais j'entends que beaucoup de gens aiment le bleu!";
            break;
        case "peux-tu me raconter une blague?":
            response = "Pourquoi les plongeurs plongent-ils en arrière et jamais en avant? Parce que sinon ils tombent toujours dans le bateau.";
            break;
        case "quelle est la capitale de la france?":
            response = "La capitale de la France est Paris.";
            break;
        case "quel temps fait-il":
            response = await getWeather();
            break;
        default:
            response = "Désolé, je ne peux pas répondre à cette question.";
            break;
    }

    // envoie du message pour un affichage sur le site
    document.getElementById('botResponse').innerText = response;
}

