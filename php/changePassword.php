<?php
include('conexion.php');
header('Content-type: text/html; charset=UTF-8');
header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');
header("Content-Type: text/html; charset=iso-8859-1");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$conn->set_charset("utf8");
$sql = "UPDATE  coordinadores  SET  password = '".$_POST['password']."' WHERE carrera = '".$_POST['id']."' ";
$result = $conn->query($sql);

$conn->close();

$arr = array('estado' => '1');
echo json_encode($arr);
?>
