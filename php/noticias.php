<?php

header('Content-type: text/html; charset=UTF-8');
include('conexion.php');
header('Content-type: application/json');

$conn->set_charset("utf8");
if($_POST['tipo']=='0')
{
$sql = "SELECT * FROM noticias  ORDER BY id DESC";

}
else{
$sql = "SELECT * FROM noticias where clasificacion ='$_POST[tipo]' ORDER BY id DESC";
}
$result = $conn->query($sql);
$return_arr = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
          array_push($return_arr,$row);
    }
} else {
    $return_arr = array('none' => 1);
}
$conn->close();
echo json_encode($return_arr,JSON_UNESCAPED_UNICODE);

/*

$sql = "SELECT * FROM noticias";
$result = mysqli_query($conn, $sql);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
   echo $r['titulo'];
} 

mysqli_close($conn);
echo json_encode($rows);

*/
?>