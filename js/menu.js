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
                  "  <a href='inicio.html'>Inicio.</a>"+
                "</li>"+
                "<li>"+
                    "<a href='form.html' >Alta de Noticias.</a>"+
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