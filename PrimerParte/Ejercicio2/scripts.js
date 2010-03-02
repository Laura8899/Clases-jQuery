//Primer parte del ejercicio donde se utiliza un boton para ocultar la nota.
/*$(document).ready(function() {
  $('#ocultarNota').click(function(){
    $('#nota').hide();
	//Nueva linea para borra tambien el boton
	$(this).hide();
  });
});*/

//Esta función permite esconder directamente el texto al tener un over en el.
$(document).ready(function(){
    $('#botonCombinar').click(function(){
	$("nota").toggle();
	
    if($('#nota').is(':visible')) {
      $('#nota').hide();
	  $(this).val('Mostrar');
    } else {
      $('#nota').show();
	  $(this).val('Esconder');
    }
  });
});