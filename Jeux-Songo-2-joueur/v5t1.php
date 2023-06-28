<?php
require_once 'open.php';


$sql = "SELECT tableau1 FROM ma_table LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $tableau1 = json_decode($row['tableau1']); // Décodez le tableau JSON en PHP
    $premiereValeur = $tableau1[4]; // Récupérez la première valeur du tableau
    echo $premiereValeur; // Affichez la première valeur
} else {
    echo "Aucun résultat trouvé.";
}

?>
