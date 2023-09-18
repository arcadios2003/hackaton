<?php
// Call parm
	require_once('Parrametres.php');
	try{
		// Create permanent object for connecting to DB
		$connexion = new PDO($dns,$utilisateur,$mdp);
		// Execute
		$connexion->exec("WSET CHARACTER SET utf8");
	} catch (Exception $e) {
		// If error
		echo"connexion à la base impossible : ".$e->getMessage();
		die();
	}
?>