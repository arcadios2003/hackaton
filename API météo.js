// Fonction pour obtenir la météo d'une ville spécifique
function getWeather(city) {
    const apiKey = "VOTRE_CLÉ_API";  // Inscrivez-vous sur OpenWeatherMap pour obtenir une clé API
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;
            alert(`Il fait actuellement ${temperature}°C à ${city} avec ${conditions}.`);
        })
        .catch(error => {
            alert("Désolé, je n'ai pas pu obtenir les informations météo pour cette ville.");
        });
}
