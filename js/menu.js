/**
 * [getItem funcion para tomar la carrera en sesion del navegador]
 * @return {string} [UserCarreara es el id de la carrera en sesión]
 */
function getItem() {
  console.log(sessionStorage.getItem('UserCarrera'));
  console.log(sessionStorage.getItem('UserCarreraN'));
}
/**
 * [getHost función para ir por la ubicación del sistema.]
 * @return {[string]} [regresa la ruta raiz]
 */
function getHost() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return host = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
   
}
/**
 * [logOut funcion para limpiar variable de sesión]
 * @return {none} [no regresa nada, solo cambia la ruta actual]
 */
function logOut() {
          sessionStorage.setItem("UserCarrera","");
          sessionStorage.setItem("UserCarreraN","");

          window.location.replace(getHost());

  }
  /**
   * [En documet ready se actualiza el menu]
   * @param  {String} ) {var         stringMenu [string con el contenido del menu]
   * @return {[none]}   [no regresa nada]
   */
$( document ).ready(function() {
var stringMenu ="<li class='sidebar-brand'>"+
                   " <a href='inicio.html'>"+
                       "INFOTEC"+
                    "</a>"+
               " </li>"+
               " <li>"+
                  "  <a href='inicio.html'>Inicio</a>"+
                "</li>"+
                "<li>"+
                    "<a href='form.html' >Alta de Noticias</a>"+
                "</li>"+
                "<li>"+
                    "<a href='admin.html'>Administración</a>"+
                "</li>"+
                "<li>"+
                    "<a href='#' onclick=\"logOut()\">Salir</a>"+
                "</li>   ";
document.getElementById("menu").innerHTML = stringMenu;
document.getElementById("logas").innerHTML = "Autenticado como: "+sessionStorage.getItem('UserCarreraN');

});
function cambiarPassword() {
  //<span class='label label-danger'>No debe de dejar campos vacios</span></br></br>
  //<span class='label label-success'>Verifique Carrera y Password.</span></br></br>
  var password = document.getElementById('passwordInput').value;
  var id = sessionStorage.getItem('UserCarrera');
  var host = getHost();
  var x={id:id,password:password};
  console.log(x);
  if(password!=""){
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/changePassword.php", 
                    data: x,
                    success: function(data) {
                                document.getElementById('passwordInput').value = "";
                                document.getElementById('password-msj').innerHTML="<span class='label label-success'>Contraseña cambiada con exito.</span></br></br>";
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){  alert('error'); });
  }
  else{
        document.getElementById('password-msj').innerHTML="<span class='label label-danger'>No puede dejar el campo vacio.</span></br></br>";
  }
}