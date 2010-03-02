//Primer parte del ejercicio donde se utiliza un boton para ocultar la nota.
/*$(document).ready(function() {
  $('#ocultarNota').click(function(){
    $('#nota').hide();
	//Nueva linea para borra tambien el boton
	$(this).hide();
  });
});*/

$(function(){
 $('#nota').click(function(){
	$('#nota').hide();
});
});