function getAnswer() {
    const input = document.getElementById('userInput').value.toLowerCase();
    let response = "";

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
        default:
            response = "Désolé, je ne peux pas répondre à cette question.";
            break;
    }

    document.getElementById('botResponse').innerText = response;
}
