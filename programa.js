$('#boton-enviar').click(function(){
  $.get("http://my-json-server.typicode.com/matking2001/ejercicio/registro", function(datos, status){
    $.each(datos, function (i, element) {
      $('.dato-tabla').append("<tr><td>" + element.id + "</td><td>" + element.nombre + "</td><td>"+ element.apellido + "</td></tr>");
    });
  });
});

$('#ocultar').click(function(){
  $('#tabla').hide(2000);

});

$('#mostrar').click(function(){
  $('#tabla').show(2000);
  
});