<?php
header('Content-type: text/html; charset=UTF-8');
include('conexion.php');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$id = (int)$_POST['id'];
$conn->set_charset("utf8");
$sql = "SELECT * FROM  noticias where id= '".$id."' ";
$result = $conn->query($sql);
$return_arr = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
            array_push($return_arr,$row);
        }
} else {
    echo "0 results";
}        
$conn->close();

echo json_encode($return_arr,JSON_UNESCAPED_UNICODE);
?>
