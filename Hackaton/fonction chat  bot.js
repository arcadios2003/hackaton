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
    const input = document.getElementById('userInput').value.toLowerCase();
    let response = "";

    let lowerCaseQuestion = question.toLowerCase();

    switch (question) {
    // Comment t'appelles-tu ?
    case "comment t'appelles-tu?":
    case "Quel est ton nom?":
    case "Tu es qui?":
    case "Qui es-tu?":
    case "Tu t'appelles comment?":
        response = "Je m'appelle Chat-Ensitech.";
        break;

    // Quel âge as-tu ?
    case "quel âge as-tu?":
    case "Tu as combien d'années?":
    case "Depuis combien de temps existes-tu?":
    case "Quel est ton âge?":
    case "Depuis quand es-tu là?":
        response = "Je suis un programme, je n'ai pas d'âge.";
        break;

    // Quelle est ta couleur préférée ?
    case "quelle est ta couleur préférée?":
    case "Quelle couleur préfères-tu?":
    case "Si tu devais choisir une couleur, laquelle serait-ce?":
    case "Tu as une couleur que tu aimes plus que les autres?":
    case "Si tu avais une couleur, laquelle serait-elle?":
        response = "Je n'ai pas de préférence car je ne vois pas les couleurs, mais j'entends que beaucoup de gens aiment le bleu!";
        break;

    // Peux-tu me raconter une blague ?
    case "peux-tu me raconter une blague?":
    case "As-tu une blague à partager?":
    case "Connais-tu une bonne blague?":
    case "J'aimerais rire, as-tu une blague?":
    case "Peux-tu me faire rire avec une blague?":
        response = "Pourquoi les plongeurs plongent-ils en arrière et jamais en avant? Parce que sinon ils tombent toujours dans le bateau.";
        break;

    // Quelle est la capitale de la France ?
    case "quelle est la capitale de la france?":
    case "Quelle ville est le centre administratif de la France?":
    case "Où se situe la capitale française?":
    case "La France a quelle ville comme capitale?":
    case "Paris est-il la capitale de la France?":
        response = "La capitale de la France est Paris.";
        break;

    // Quel temps fait-il ?
    case "quel temps fait-il":
    case "Comment est la météo actuellement?":
    case "Est-il ensoleillé dehors?":
    case "Quelles sont les conditions météorologiques actuelles?":
    case "Il fait comment dehors?":
        response = await getWeather();
        break;

    default:
        response = "Désolé, je ne peux pas répondre à cette question.";
        break;
}

    document.getElementById('botResponse').innerText = response;
}

