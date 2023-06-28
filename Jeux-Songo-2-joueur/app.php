<!DOCTYPE html>

<?php

require_once 'open.php';
// Récupération des données envoyées par la requête AJAX
$entier1 = $data['entier1'];
$entier2 = $data['entier2'];
$tableau1 = $data['tableau1'];
$tableau2 = $data['tableau2'];

// Convertir le tableau JavaScript en chaîne JSON pour le stocker dans la base de données
$tableau1JSON = json_encode($tableau1);
$tableau2JSON = json_encode($tableau2);


// Requête SQL pour insérer les données dans la table


$sql = "UPDATE ma_table SET entier1 = ?, entier2 = ?, tableau1 = ?, tableau2 = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiss", $entier1, $entier2, $tableau1JSON, $tableau2JSON);

if ($stmt->execute()) {
    echo "Data successfully updated in the database.";
} else {
    echo "Error while updating data in the database: " . $stmt->error;
}
$stmt->close();

$conn->close()

?>


