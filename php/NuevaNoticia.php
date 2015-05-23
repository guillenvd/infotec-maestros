<?php
header('Content-type: text/html; charset=UTF-8');


include('conexion.php');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$conn->set_charset("utf8");
$sql = "INSERT INTO noticias (titulo, cuerpo, fecha, autor, clasificacion,carrera) VALUES ('".$_POST['Titulo']."', '".$_POST['Cuerpo']."', '".$_POST['Fecha']."', '".$_POST['Autor']."', '".$_POST['Clasificacion']."', '".$_POST['Carrera']."')";
if ($conn->query($sql) === TRUE){
    $last_id = $conn->insert_id;

if (file_exists($_FILES["Imagen"]["tmp_name"]))
{ 
    $file = $_FILES["Imagen"];
    $nombre = $file["name"];
    $tipo = $file["type"];
    $ruta_provisional = $file["tmp_name"];
    //$size = $file["size"];
    //$dimensiones = getimagesize($ruta_provisional);
    //$width = $dimensiones[0];
    //$height = $dimensiones[1];
    $carpeta = "../img/";
    if ($tipo != 'image/jpg' && $tipo != 'image/jpeg' && $tipo != 'image/png' && $tipo != 'image/gif')
    {
      echo "Error, el archivo no es una imagen"; 
    }
    else
    {   $nombre = $last_id.".jpg";
        $src = $carpeta.$nombre;
        move_uploaded_file($ruta_provisional, $src);
        $sql = "UPDATE noticias SET imagen='".$last_id.".jpg"."' WHERE id='".$last_id."'";
    }
}
else{
        $imag = "nop";
        $sql = "UPDATE noticias SET imagen='".$imag."' WHERE id='".$last_id."'";
    }
    $conn->query($sql);
     ?>
<script type="text/javascript">
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    var host = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    window.location.replace(host+"../inicio.html");

</script>
  <?php 
} 
else{
  ?>
<script type="text/javascript">
alert("Error en publicar");
</script>
  <?php  
}
    $conn->close();
?>