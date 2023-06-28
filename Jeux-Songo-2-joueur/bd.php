

<?php
require_once 'open.php';


// Exécution de la requête pour récupérer les données
$sql = "SELECT tableau1 FROM ma_table";
$result = $conn->query($sql);



    if ($result->num_rows > 0) {
        // Création de tableaux pour stocker chaque colonne séparément
        $ids = array();
        $entiers1 = array();
        $entiers2 = array();
        $tableaux1 = array();
        $tableaux2 = array();
    
        // Parcourir les résultats et stocker chaque colonne séparément
        while ($row = $result->fetch_assoc()) {
            $ids[] = $row['id'];
            $entiers1[] = $row['entier1'];
            $entiers2[] = $row['entier2'];
            $tableaux1[] = $row['tableau1'];
            $tableaux2[] = $row['tableau2'];
        }

        for ($i = 0; $i < count($ids); $i++) {
            echo "ID : " . $ids[$i] . "<br>";
            echo "Entier1 : " . $entiers1[$i] . "<br>";
            echo "Entier2 : " . $entiers2[$i] . "<br>";
    
            // Afficher les éléments du tableau1
            echo "Tableau1 : ";
            $tableau1 = json_decode($tableaux1[$i]);
            foreach ($tableau1 as $element) {
                echo $element . " ";
            }
            echo "<br>";
    
            // Afficher les éléments du tableau2
            echo "Tableau2 : ";
            $tableau2 = json_decode($tableaux2[$i]);
            foreach ($tableau2 as $element) {
                echo $element . " ";
            }
            echo "<br><br>";
        }
} else {
    echo "Aucun élément trouvé dans la base de données.";
}

// Fermer la connexion à la base de données
$conn->close();
?>

