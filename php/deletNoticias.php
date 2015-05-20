<?php
header('Content-type: text/html; charset=UTF-8');
include('conexion.php');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$conn->set_charset("utf8");
$sql = "DELETE from noticias where id='".$_POST['id']."'";
$result = $conn->query($sql);
$carpeta = "../img/";
$nombre = $_POST['id'].".jpg";
$dir = $carpeta.$nombre;
unlink($dir);
$conn->close();
?>
