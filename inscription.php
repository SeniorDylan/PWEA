<?php
// --- CONFIGURATION HOSTINGER ---
// Remplacez les valeurs ci-dessous par celles affichées dans votre hPanel Hostinger
$host     = "localhost"; 
$dbname   = "u363667186_pwea_db";
$username = "u363667186_Senior_Dylan";   // Votre utilisateur MySQL complet
$password = "C@meroun2026"; // Le mot de passe défini dans Hostinger

// 1. Connexion à la base de données
$conn = new mysqli($host, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// 2. Vérification que le formulaire a été envoyé
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupération et nettoyage de base des données
    $nom            = $_POST['nom'] ?? '';
    $prenom         = $_POST['prenom'] ?? '';
    $date_naissance = $_POST['date_naissance'] ?? null;
    $email          = $_POST['email'] ?? '';
    $telephone      = $_POST['telephone'] ?? '';
    $ville          = $_POST['ville'] ?? '';
    $pays           = $_POST['pays'] ?? '';
    $disponibilite  = $_POST['disponibilite'] ?? '';
    $motivation     = $_POST['motivation'] ?? '';

    // 3. Préparation de la requête SQL (Sécurité maximale)
    $sql = "INSERT INTO membres (nom, prenom, email, date_naissance, telephone, ville, pays, disponibilite, motivation) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    
    // "sssssssss" signifie que nous envoyons 9 chaînes de caractères (strings)
    $stmt->bind_param("sssssssss", $nom, $prenom, $email, $date_naissance, $telephone, $ville, $pays, $disponibilite, $motivation);

    // 4. Exécution et réponse
    if ($stmt->execute()) {
        echo "<h1>Succès !</h1>";
        echo "Merci $prenom, votre inscription à la PWEA a bien été enregistrée.";
        echo "<br><a href='index.html'>Retour à l'accueil</a>";
    } else {
        if ($conn->errno == 1062) { // Erreur spécifique si l'email existe déjà
            echo "Erreur : Cet email est déjà inscrit.";
        } else {
            echo "Une erreur est survenue lors de l'enregistrement : " . $stmt->error;
        }
    }

    $stmt->close();
}

$conn->close();
?>