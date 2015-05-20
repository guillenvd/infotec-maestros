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
 * [getCarreras función json que regresa todo el contenido de la tabla carrera]
 * @return {[array]} [regresa un array con el contenido de la tabla carrera]
 */
function getCarreras(){
      console.log(sessionStorage.getItem('UserCarrera'));
    var host = getHost();
    var x="";
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/getCarreras.php", 
                    data: x,
                    success: function(data) {
                              var carreras='<option value="">Seleccione una Carrera</option>';
                              $.each(data, function(i,item){
                                carreras += '<option value="'+item.id+'">'+item.nombre+'</option>';
                              });      
                              document.getElementById('Carrera').innerHTML=carreras;                     
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){      alert('dont run! get carrera'); });
}
/**
 * [tryLogin envia al archivo login carrera y el password para iniciar sesión]
 * @param  {[int]} UserCarrera  [Id de la carrera seleccionada en el formulario]
 * @param  {[int]} UserPassword [El value del campo password introducido en el formulario]
 * @return {[int]}              [estado, 1 sesión correcta,0 sesión fallida]
 */
function tryLogin(UserC,UserPassword){
    var carrera =  document.getElementById('Carrera').value;
    var password = String(document.getElementById('Password').value);
        var x={'carrera':carrera,'password':password};
        var host = getHost();
        var url = host+'inicio.html';
        console.log(x);
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/login.php", 
                    data: x,
                    success: function(data) {
                                    if(data['estado']==1){
                                          sessionStorage.setItem("UserCarrera",carrera);
                                          sessionStorage.setItem("UserCarreraN",data['nombre'] );
                                          window.location.replace(url);
                                       }
                                    if(data['estado']==0)
                                            { document.getElementById('alerts').innerHTML="<span class='label label-danger'>Verifique Carrera y Password</span></br></br>" }
                                        }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){ document.getElementById('alerts').innerHTML="<span class='label label-danger'>Verifique error Carrera y Password.</span></br></br>" });
}
/**
 * [login toma los valores de los inputs]
 * @return {[none]} [nada]
 */
function login(){
    var carrera =  document.getElementById('Carrera').value;
    var password =  document.getElementById('Password').value;
    if(carrera==""||password==""){document.getElementById('alerts').innerHTML="<span class='label label-danger'>No debe de dejar campos vacios</span></br></br>";}
    else{
          document.getElementById('alerts').innerHTML="</br></br>";
          tryLogin();
      }
  }