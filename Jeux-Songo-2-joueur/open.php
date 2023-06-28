<?php

$data=json_decode(file_get_contents("php://input"),true);

//Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "songo";
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}


?>