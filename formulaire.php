<?php
$to = 'joe.taxi94@outlook.com';

// Validate required fields
if (
    empty($_POST["nom"])  
) {
    echo 'Tous les champs sont obligatoires. Cliquez <a href="./index.html">ici</a> pour revenir à la page d\'accueil.';
    exit;
}

$nom = $_POST["nom"];
$email = $_POST["email"];
$depart = $_POST["depart"];
$arrive = $_POST["arrive"];
$date = $_POST["date"];
$heure = $_POST["heure"];
$personne = $_POST["personne"];
$bagage = $_POST["bagage"];
$type = $_POST["type"];
$genre = $_POST["genre"];
$textarea = $_POST["textarea"];

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Adresse email invalide. Cliquez <a href="./index.html">ici</a> pour revenir à la page d\'accueil.';
    exit;
}

// Email headers
$headers = "From: " . $email . "\r\n";

// Create the email body

$message = "Nom: $nom\n";
$message .= "Email: $email\n";
$message .= "Depart: $depart\n";
$message .= "Arrive: $arrive\n";
$message .= "Date: $date\n";
$message .= "Heure: $heure\n";
$message .= "Personne: $personne\n";
$message .= "Bagage: $bagage\n";
$message .= "Type: $type\n";
$message .= "Genre: $genre\n";
$message .= "Textarea: $textarea\n";

// Send the email

if(mail($to, 'Form Submission Data', $message, $headers)) {
    echo ' voici le recap ( ' . $nom . ' ' .$email . ' )Votre message a bien été transmis à nos équipes, nous vous répondrons dans les plus brefs délais. Cliquez <a href="../index.html">ici</a> pour revenir à la page d\'accueil.';
} else {
    echo 'Erreur lors de l\'envoi du mail.';
}
?>
