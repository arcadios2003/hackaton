<?php
    // Etablisement du lien avec la BDD
    require_once("Connexion/Connexion.inc.php");

    // Récupération des informations du formulaire
    $message = $_POST['mon-message'];
    $submition = $_POST['valider'];

    // Elimination des quotes génant l'injection SQL et pour la réponse aux questions
    $message = str_replace("'"," ",$message);

    // Insertion en BDD du message de l'utilisateur
    if($submition){
        if(!empty($message)){
            $sqlRQT = "INSERT INTO log (user,message) Values('user','".$message."')";
            $resRQT = $connexion->query($sqlRQT);
        }
    }

    $response = "";

    // Normalisation du texte en minuscule affin de permetre une lecture facilité
    $lowerCaseQuestion = strtolower($message);

    switch ($lowerCaseQuestion) {
        // Comment t'appelles-tu ?
        case "comment t appelles-tu?":
        case "quel est ton nom?":
        case "tu es qui?":
        case "qui es-tu?":
        case "tu t appelles comment?":
            $response = "Je m appelle Chat-Ensitech.";
            break;

        // Quel âge as-tu ?
        case "quel âge as-tu?":
        case "tu as combien d années?":
        case "depuis combien de temps existes-tu?":
        case "quel est ton âge?":
        case "depuis quand es-tu là?":
            $response = "Je suis un programme, je n ai pas d âge.";
            break;

        // Quelle est ta couleur préférée ?
        case "quelle est ta couleur préférée?":
        case "quelle couleur préfères-tu?":
        case "si tu devais choisir une couleur, laquelle serait-ce?":
        case "tu as une couleur que tu aimes plus que les autres?":
        case "si tu avais une couleur, laquelle serait-elle?":
            $response = "Je n ai pas de préférence car je ne vois pas les couleurs, mais j entends que beaucoup de gens aiment le bleu!";
            break;

        // Peux-tu me raconter une blague ?
        case "peux-tu me raconter une blague?":
        case "as-tu une blague à partager?":
        case "connais-tu une bonne blague?":
        case "j aimerais rire, as-tu une blague?":
        case "peux-tu me faire rire avec une blague?":
            $response = "Pourquoi les plongeurs plongent-ils en arrière et jamais en avant? Parce que sinon ils tombent toujours dans le bateau.";
            break;

        // Quelle est la capitale de la France ?
        case "quelle est la capitale de la france?":
        case "quelle ville est le centre administratif de la France?":
        case "où se situe la capitale française?":
        case "la France a quelle ville comme capitale?":
        case "paris est-il la capitale de la France?":
            $response = "La capitale de la France est Paris.";
            break;

        // Réponse par défaut
        default:
            $response = "Désolé je ne peux pas répondre à cette question.";
            break;
    }

    //Temps d'attente avant l'insertion SQL pour assurer la différenciation des enregistrement
    sleep(1);
    $sqlRQT2 = "INSERT INTO log (user,message) Values('bot','".$response."')";
    $resRQT2 = $connexion->query($sqlRQT2);

    // Retour a la page de l'index
    header('location:index.php');
?>