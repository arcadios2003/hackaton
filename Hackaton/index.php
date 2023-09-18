<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Chat Textuel</title>
    </head>
    <!--<script src="//code.tidio.co/lzlkplzes8tplpi6lesagf3hOodarixx.js" async></script>-->
    <body>
        <div>
            <div class="chat-container">
                <div class="chat">
                    <?php
                        require_once("Connexion/Connexion.inc.php");

                        $rqtMSG = "SELECT message,user FROM log ORDER BY time LIMIT 7;";
                        $resMSG = $connexion->query($rqtMSG);
                        if($resMSG->rowCount()!=0){
                            while ($repMSG = $resMSG->fetch(PDO::FETCH_OBJ)){
                                if($repMSG->user == "user"){
                                    ?>
                                    <div class="message outgoing"><?php echo $repMSG->message ?></div>
                            <?php
                                } else {
                            ?>
                                    <div class="message incoming"><?php echo $repMSG->message ?></div>
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