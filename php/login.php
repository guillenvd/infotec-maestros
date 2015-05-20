  <?php
include('conexion.php');

header('Content-type: text/html; charset=UTF-8');
header('Content-type: application/json');
$password= $_POST['password'];
$carrera= $_POST['carrera'];
$conn->set_charset("utf8");
$sql = "SELECT * FROM coordinadores WHERE password = '".$password."' and carrera =".$carrera;
$result = $conn->query($sql);
$nombre ='';
if ($result->num_rows > 0) {
    $estado = 1;
        while($row = $result->fetch_assoc()) {
             $nombre = $row['nombre'];
        }
} 
else {
       $estado = 0;
}        
$arr = array('estado' => $estado,'nombre'=>$nombre);

$conn->close();
echo json_encode($arr);
?>
