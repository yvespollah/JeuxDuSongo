<?php
require_once 'open.php';

$sql = "SELECT entier2 FROM ma_table LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Récupération de la première colonne
    $row = $result->fetch_assoc();
    $entier2 = $row['entier2'];

    // Affichage de la première colonne
    echo $entier2;
} else {
    echo "Aucun résultat trouvé.";
}
?>
