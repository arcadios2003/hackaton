<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Chat Textuel</title>
    </head>
    <body>
        <div>
            <div class="chat-container">
                <p id="cacher">----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <div class="chat">
                    <?php
                        // Inclusion du fichier de connexion à la base de données
                        require_once("Connexion/Connexion.inc.php");

                        // Requête SQL pour récupérer les 7 messages les plus récents
                        $rqtMSG = "SELECT message,user FROM log ORDER BY time DESC LIMIT 7;";
                        $resMSG = $connexion->query($rqtMSG);
                        

                        // Vérification si des messages ont été trouvés
                        if ($resMSG->rowCount() != 0) {
                            // Récupération des messages sous forme de tableau associatif
                            $MSGarray = $resMSG->fetchAll(\PDO::FETCH_ASSOC);
                            // Inversion de l'ordre des messages pour afficher les plus récents en haut
                            $MSGarray = array_reverse($MSGarray, $preserve_keys = false);
                            foreach ($MSGarray as &$row) {
                                // Affichage des messages en fonction de l'utilisateur
                                if ($row["user"] == "user") {
                                    ?>
                                    <div class="message outgoing"><?php echo $row["message"] ?></div>
                            <?php
                                } else {
                            ?>
                                    <div class="message incoming"><?php echo $row["message"] ?></div>
                            <?php    
                                }
                            }
                        }
                    ?>
                </div> 
                <div class="user input">
                    <form action="enregistrer.php" method="POST">
                        <input type="text" name="mon-message" id="user-message" placeholder="Tapez votre message">
                        <input type="submit" name="valider" id="send-button">
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
