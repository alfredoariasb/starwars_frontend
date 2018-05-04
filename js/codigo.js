$(document).ready(function(){ //esta linea es para esperar que el document osea todo el html se cargue completo para cargar lo que tiene entre las llaves
	var direccion ='https://swapi.co/api/people/?format=json'; //se crea la variabl direccion y le damo de valor la direccion del api json
	$.ajaxSetup({ cache: false }); //aqui borra el cache que tenga el ajax de la lista de resultados
	$('#buscapersona').keyup(function(){ //aca le decimos que cuando presionen una tecla en el campo de busqueda ejecute lo que esta entre llaves
		$('#result').html(''); //limpia la lista de resutados
		var searchField = $('#buscapersona').val(); //aqui creamos searchField y le metemos el valor de lo que vayamos escribiendo en buscar
		var expression = new RegExp(searchField, "i"); //creamos expression y le damos de valor lo de buscar pero quitandole algun simbolo solo queda una cadena
		$.getJSON(direccion, function(data){ //el get es para que agarre un json que esta especificado en DIRECCION 
			$.each(data.results, function(key, value){ //aca el hace una arreglo o matrizporeso tiene each q ue es el comando de ir acumulando, como en el json las personas tan dentro del grupo RESULTS entonces tenemos que decirle que estan en RESULTS
				window.data=data.results; //aqui hacemos una variable del dom poreso empieza con la palabra window y le metemos todas las personas del json para usar esa variable luego
				if(value.name.search(expression)!== -1) //aqui el if es para ver si consiguio algo en el json correspondiente con las leras que vamos apretando
				{
					$('#result').append('<li class="list-group-item link-class">'+value.name+'</li>'); //si consiguio algo entonces me va agregando lo que va consiguiendo al div RESULT, poreso el comando append que es agregar al contenido que ya tenga el div porque si uso .html o innerhtml lo que haria es borrar lo que tenga el div y poner otro entocnes siempre tendriamos una sola opcion en el div
				}
			});   
		});
	});
	
	$('#result').on('click','li',function(){ //este es un escuchador que esta pendiente cuando le den clic a alguna de las coincidencias que salieron como resultado
		$('.info-container').html('');
		var x=0; //iniciamos siempre x en 0
		var nombre = $(this).text(); //creamos la variable click_text y le metemos el nombre que seleccionamos de los resultados
		$('#buscapersona').val(nombre); //aqui al textfield de busqueda le ponemos el nombre de la persona que escogimos de los resultados
		var item=$('li'); //creamos item y le ponemos de valor el LI que escogimos de los resultados
		window.data.find(function(item,i){ //aca llamamos a la variable del dom que hicimos en la funcion de mas arriba y le ponemos la opcion FIND que es que busque ITEM que lo creamos en la line anterior
		  	if(item.name === nombre){x=i;} //aqui el verifica si hay un item con el nombre exacto entonces nos mete en X la posicion que tiene esa persona en el json
		});
		$('.info-container').html('Nombre: '+window.data[x].name+'<br>Altura: '+window.data[x].height+'<br>Peso: '+window.data[x].mass+'<br>Color de cabello: '+window.data[x].hair_color+'<br>Color de piel: '+window.data[x].skin_color+'<br>Color de ojos: '+window.data[x].eye_color+'<br>Anno de nacimiento: '+window.data[x].birth_year+'<br>Sexo: '+window.data[x].gender); //aqui al div info-container le va a meter el nombre, peso, altura, etc de la persona que esta en la posicion X
		$("#result").html(''); //aqui limpiamos result para que se esconda
		$("html, body").animate({ scrollTop: $('.api').offset().top-60 }, 1000); //window es para referirse a un objeto del DOM entonces alli significa localizarse en el objeto con numeral #titulo 
	});
});

function animar(){
	$("html, body").animate({ scrollTop: $('#galeria').offset().top-60 }, 1000);
}

function contacto(){
	$("html, body").animate({ scrollTop: $('#contacto').offset().top-60 }, 1000);
}

function inicio(){
	$("html, body").animate({ scrollTop: $('#contenedor').offset().top-60 }, 1000);
}

function api(){
	$("html, body").animate({ scrollTop: $('.api').offset().top-60 }, 1000);
}

function historia(){
	$("html, body").animate({ scrollTop: $('.seccion3').offset().top-60 }, 1000);
}