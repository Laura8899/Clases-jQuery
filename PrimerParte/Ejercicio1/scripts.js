$(function(){
alert("Hola a todos");	
});

$(document).ready(function(){
	alert($('#gente tr').length + ' elementos.')
});


$(document).ready(function(){
	alert($('#gente tbody tr').length + ' elementos dentro del body de la tabla')
});

$(function(){
	alert($('#gente tbody tr:even').length + ' elementos pares');
});

$(document).ready(function(){
	var fontSize = $('#gente tbody tr:first').css('font-size');
	alert(fontSize + ' es el tamaño de la letra.');
});

$(document).ready(function(){
	$('#gente tbody tr:even').css('background-color','#dddddd');
});

$(document).ready(function(){
 $("#gente tbody tr:odd").css({'background-color' : 'black', 'color' : 'white'});
});

$(function(){
	$('#gente tbody tr:even').css({
		'background-color': '#dddddd', 
		'color': '#666666', 
		'font-size': '11pt', 
		'line-height': '2.5em'
	});
});

$(function(){
 $("#gente tr:even").addClass("lineas");
});