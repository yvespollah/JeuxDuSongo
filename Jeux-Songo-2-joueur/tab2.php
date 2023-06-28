<?php
require_once 'open.php';

$sql = "SELECT tableau2 FROM ma_table LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $tableau2 = json_decode($row['tableau2']); // Décodez le tableau JSON en PHP
    foreach ($tableau2 as $element) {
        echo $element . "<br>"; // Affichez chaque élément du tableau
    }
} else {
    echo "Aucun résultat trouvé.";
}

?>
