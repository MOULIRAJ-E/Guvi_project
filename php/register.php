<?php
$uri = 'mongodb+srv://mouliraj:mouliraj@cluster0.cazrg85.mongodb.net/?retryWrites=true&w=majority';
$manager = new MongoDB\Driver\Manager($uri);

$database = "guvi";
$collection = "profile";

$bulk = new MongoDB\Driver\BulkWrite;

$document = [
    'email' => $_POST['email'],
    'name' => $_POST['username'],
    'age' => $_POST['age'],
    'contact' => $_POST['contact'],
    'date' => $_POST['date'],
];

// $bulk = new MongoDB\Driver\BulkWrite;

$bulk->insert($document);
$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);
$result = $manager->executeBulkWrite("$database.$collection", $bulk, $writeConcern);
printf("Inserted %d document(s)\n", $result->getInsertedCount());

$host = "localhost";
$username = "root";
$password = "";

try{
    $conn = new PDO("mysql:host=$host;dbname=guvi_form",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    echo "Connected Successfully";
}
catch(PDOException $e){
    echo "Connection Failed" . $e->getMessage();
}

if (isset($_POST['email']) && $_POST['email']!="" && isset($_POST['password']) && $_POST['password']!=""){
   $sql = "INSERT into register(email,password) VALUES('".addslashes($_POST['email'])."','".addslashes($_POST['password'])."')";
   $conn->query($sql);
//    $sql = "INSERT into register(email,password) VALUES(:email, :password)";
//    $stmt = $conn->prepare($sql);
//    $stmt->bindParam(':email', $_POST['email']);
//    $stmt->bindParam(':password', $_POST['password']);
//    $stmt->execute();
}