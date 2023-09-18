<?php
    require_once("Connexion/Connexion.inc.php");

    $user = "user";
    $message = $_POST['mon-message'];
    $submition = $_POST['valider'];

    if($submition){
        if(!empty($message)){
            $sqlRQT = "INSERT INTO log (user,message) Values('".$user."','".$message."')";
            $resRQT = $connexion->query($sqlRQT);
        }
    }

    header('location:index.php');
?>