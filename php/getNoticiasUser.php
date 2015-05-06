<?php
header('Content-type: text/html; charset=UTF-8');
include('conexion.php');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$conn->set_charset("utf8");
$sql = "SELECT a.titulo, b.nombre as  carrera ,c.nombre as clasificacion , a.imagen as imagen,a.id as id from noticias a, carreras b, clasificacion c where autor = '".$_POST['autor']."'  and b.id=a.carrera and c.id=a.clasificacion order by id desc";
$result = $conn->query($sql);
$return_arr = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
            array_push($return_arr,$row);
        }
} else {
    echo "0 results";
}        
echo json_encode($return_arr,JSON_UNESCAPED_UNICODE);
$conn->close();

?>
