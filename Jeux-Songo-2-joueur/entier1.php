<?php
require_once 'open.php';

$sql = "SELECT entier1 FROM ma_table LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Récupération de la première colonne
    $row = $result->fetch_assoc();
    $entier1 = $row['entier1'];

    // Affichage de la première colonne
    echo $entier1;
} else {
    echo "Aucun résultat trouvé.";
}
?>

