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
    req.error(function(){      alert('dont run!'); });
}
/**
 * [getCarreras función json que regresa todo el contenido de la tabla carrera]
 * @return {[array]} [regresa un array con el contenido de la tabla carrera]
 */
function getClasificacion(){
    var host = getHost();
    var x="";
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/getClasificacion.php", 
                    data: x,
                    success: function(data) {
                              var carreras='<option value="">Seleccione una Clasificación</option>';
                              $.each(data, function(i,item){
                                carreras += '<option value="'+item.id+'">'+item.nombre+'</option>';
                              });      
                              document.getElementById('Clasificacion').innerHTML=carreras;                     
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){      alert('dont run!'); });
}