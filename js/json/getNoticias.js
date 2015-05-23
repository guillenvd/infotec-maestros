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
function getNoticias(){
  getItem();
    var host = getHost();
    var imagenurl = host+"img/";
    console.log(imagenurl);
    var x="";
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/getNoticias.php", 
                    data: x,
                    success: function(data) {
                              var Noticia='';
                              var imagen='';
                              if(data['none'])
                              {
                                     var   Noticia='<li class="timeline-inverted">'+
                                               '<div class="timeline-badge"><i class="glyphicon glyphicon-list-alt"></i></div>'+
                                              '<div class="timeline-panel">'+
                                                '<div class="timeline-heading">'+
                                                ' <h4 class="timeline-title"> INFOTEC</h4>'+
                                                  '<hr>'+
                                                '</div>'+
                                                '<div class="timeline-body">'+
                                                  '<p>No hay noticias que mostar</p>'+
                                              ' </div>'+
                                                '<hr> <!-- Acciones sobre noticias-->'+
                                                  '<a href="form.html" class="btn btn-default preview-add-button">'+
                                                    '<span class="glyphicon glyphicon-send"></span> Publique una nueva.'+
                                                  '</a>'+
                                              '</div>'+
                                          '</li>';
                                    document.getElementById('main-timeline').innerHTML=Noticia;  

                              }
                              else{
                                    $.each(data, function(i,item){
                                      imagen="";
                                      if(item.imagen!="nop")
                                        {
                                          imagen ="<a href='javascript:void(0);' onclick=\"showImage('"+imagenurl+item.imagen+"','"+item.titulo+"');\">"+
                                                      "<img src='"+imagenurl+item.imagen+" ' width='150' class='img-responsive img-rounded center-block' alt=''>"+
                                                  "</a>";
                                        }

                                       if((i%2)==0){
                                        Noticia+='<li>'+
                                                    '<div class="timeline-badge"><i class="glyphicon glyphicon-list-alt"></i></div>'+
                                                    '<div class="timeline-panel">'+
                                                      '<div class="timeline-heading">'+
                                                      ' <h4 class="timeline-title">'+item.titulo+'</h4>'+
                                                        '<p><small class="text-muted"><i class="glyphicon glyphicon-calendar"></i>'+item.fecha+'</small>'+
                                                        '<small class="text-muted"><i class="glyphicon glyphicon-bookmark"></i>'+item.autor+'</small></p>'+
                                                        '<hr>'+
                                                      '</div>'+
                                                      '<div class="timeline-body">'+
                                                        '<p>'+item.cuerpo+'</p>'+
                                                        '<p>'+imagen+'</p>'+
                                                    ' </div>'+
                                                     '<hr> <!-- Acciones sobre noticias-->'+
                                                    '</div>'+
                                                '</li>';
                                        }
                                        else{                
                                                   Noticia+='<li class="timeline-inverted">'+
                                                     '<div class="timeline-badge"><i class="glyphicon glyphicon-list-alt"></i></div>'+
                                                    '<div class="timeline-panel">'+
                                                      '<div class="timeline-heading">'+
                                                      ' <h4 class="timeline-title">'+item.titulo+'</h4>'+
                                                        '<p><small class="text-muted"><i class="glyphicon glyphicon-calendar"></i> '+item.fecha+'</small>'+
                                                        '<small class="text-muted"><i class="glyphicon glyphicon-bookmark"></i>'+item.autor+'</small></p>'+
                                                        '<hr>'+
                                                      '</div>'+
                                                      '<div class="timeline-body">'+
                                                        '<p>'+item.cuerpo+'</p>'+
                                                          '<p>'+imagen+'</p>'+
                                                    ' </div>'+
                                                      '<hr> <!-- Acciones sobre noticias-->'+
                                                    '</div>'+
                                                '</li>';
                                              }


                                    });      
                                    document.getElementById('main-timeline').innerHTML=Noticia;
                              }
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){  
     var   Noticia='<li class="timeline-inverted">'+
                                               '<div class="timeline-badge"><i class="glyphicon glyphicon-list-alt"></i></div>'+
                                              '<div class="timeline-panel">'+
                                                '<div class="timeline-heading">'+
                                                ' <h4 class="timeline-title"> INFOTEC</h4>'+
                                                  '<small class="text-muted"><i class="glyphicon glyphicon-bookmark"></i>INFOTEC-DEFAULT</small></p>'+
                                                  '<hr>'+
                                                '</div>'+
                                                '<div class="timeline-body">'+
                                                  '<p>VERIFIQUE CONEXION A LA BASE DE DATOS<BR>VERIFIQUE QUE EXISTAN DATOS</p>'+
                                              ' </div>'+
                                                '<hr> <!-- Acciones sobre noticias-->'+
                                                  '<button type="submit" class="btn btn-default preview-add-button">'+
                                                    '<span class="glyphicon glyphicon-send"></span> Enviar'+
                                                  '</button>'+
                                              '</div>'+
                                          '</li>';
                                    document.getElementById('main-timeline').innerHTML=Noticia;                     


    });
}


function getDatos(){
    var host = getHost();
    var x={autor:sessionStorage.getItem('UserCarreraN')};
    console.log(x);
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/getNoticiasUser.php", 
                    data: x,
                    success: function(data) {
                              var tablaDatos= $("#tbody");
                                $("#tbody").empty();
                              $.each(data, function(i,item){
                              
                                  var registro =" <tr>"+
                                  "<td>"+item.titulo+"</td>"+
                                  "<td>"+item.carrera+"</td>"+
                                  "<td>"+item.clasificacion+"</td>"+
                                  "<td class='tooltipcenter'><p data-placement='top' data-toggle='tooltip' title='Editar'><button class='btn btn-primary btn-xs'  onclick=\"getNoticiaEdit('"+item.id+"')\"><span class='glyphicon glyphicon-pencil'></span></button></p></td>"+
                                  "<td><p data-placement='top' data-toggle='tooltip' title='Eliminar'><button class='btn btn-danger btn-xs' onclick=\"deleteNoticia('"+item.id+"','"+item.titulo+"')\"><span class='glyphicon glyphicon-trash'></span></button></p></td>"+
                                  "</tr>";
                                  tablaDatos.append(registro);
                              });      
                               $('#example').DataTable();
                               $("[data-toggle=tooltip]").tooltip();
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){  var tablaDatos= $("#tbody");
                                  var registro ="";
                               $('#example').DataTable();
                               $("[data-toggle=tooltip]").tooltip();
                              })
}

function deleteNoticia(id,titulo){
  document.getElementById('titulo-delete').innerHTML = "<b> Titulo de noticia:<ins> "+ titulo +" .</b></ins>";
  document.getElementById('id-delete').value = id;
  $('#Eliminar').modal('toggle');
}
function deleteConfirm(){
  var id = document.getElementById('id-delete').value;
    var host = getHost();
    var x={id:id};
    console.log(x);
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/deletNoticias.php", 
                    data: x,
                    success: function(data) {
                              getDatos();
                              $('#Eliminar').modal('hide');
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){ 
                              getDatos();
                              $('#Eliminar').modal('hide');
    })  
}




function getNoticiaEdit(id){
    document.getElementById('id-update').value = id;
    var host = getHost();
    var x={id:id};
    console.log(x);
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/getNoticiaEdit.php", 
                    data: x,
                    success: function(data) {

                              $.each(data, function(i,item){
                                      document.getElementById('Titulo').value = item.titulo;
                                      document.getElementById('Cuerpo').value = item.cuerpo;
                                      document.getElementById('Carrera').value = item.carrera;
                                      document.getElementById('Clasificacion').value = item.clasificacion;

                                  });      
                                $('#Editar').modal('toggle');

                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){  alert('error'); });

}

function sendNoticiaEdit(){
    var id = document.getElementById('id-update').value;
    var titulo = document.getElementById('Titulo').value;
    var cuerpo = document.getElementById('Cuerpo').value;
    var carrera = document.getElementById('Carrera').value;
    var clasificacion = document.getElementById('Clasificacion').value;
    /*var fileinput = $("#Imagen").val();
    console.log(fileinput);
    window.open(fileinput);*/
    var host = getHost();
    var x={id:id,titulo:titulo,cuerpo:cuerpo,carrera:carrera,clasificacion:clasificacion};
    console.log(x);
       var req = $.ajax({
                    type: "POST",
                    dataType: "json",
                    timeout : 10000,
                    beforeSend: function() { },
                    url: host+"php/sendNoticiaEdit.php", 
                    data: x,
                    success: function(data) {
                                   getDatos();
                                   $('#Editar').modal('hide');
                             }, 
                    error: function() {
                            //do something
                          }
    });
    req.success(function(){    });
    req.error(function(){  getDatos();
                                   $('#Editar').modal('hide');
                          });
}
function showImage(IMAGEN,TITULO){
  document.getElementById("imagen-modal").src=IMAGEN;
  document.getElementById("header-modal").innerHTML=TITULO;

  $('#imagen-modal-action').modal('toggle');

}
/*

function getDatos(){
   var tablaDatos= $("#tbody");
   for(i=0;i<100;i++){
    var registro =" <tr>"+
                "<td>Titulo</td>"+
                "<td>Cuerpo</td>"+
                "<td>Carrera</td>"+
                "<td>Clasificación</td>"+
                "<td class='tooltipcenter'><p data-placement='top' data-toggle='tooltip' title='Editar'><button class='btn btn-primary btn-xs' data-title='Editar' data-toggle='modal' data-target='#Editar' ><span class='glyphicon glyphicon-pencil'></span></button></p></td>"+
               " <td><p data-placement='top' data-toggle='tooltip' title='Eliminar'><button class='btn btn-danger btn-xs' data-title='Eliminar' data-toggle='modal' data-target='#Eliminar' ><span class='glyphicon glyphicon-trash'></span></button></p></td>"+
            "</tr>"
      tablaDatos.append(registro);
   } 
}*/