/**
 * [getHost función para ir por la ubicación del sistema.]
 * @return {[string]} [regresa la ruta raiz]
 */
function getHost() {
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);

    return host = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
   
}

function sesionTry() {
  if(sessionStorage.getItem('UserCarrera')==null||sessionStorage.getItem('UserCarreraN')==null||sessionStorage.getItem('UserCarrera')==""||sessionStorage.getItem('UserCarreraN')=="")
    {
         window.location.replace(getHost()); 

    }

}

$(document).ready(function () {

  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
  
});

