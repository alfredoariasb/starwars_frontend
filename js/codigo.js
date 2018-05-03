$(document).ready(function(){ 
	var direccion ='https://swapi.co/api/people/?format=json'; 
	$.ajaxSetup({ cache: false }); 
	$('#buscapersona').keyup(function(){ 
		$('#result').html(''); 
		var searchField = $('#buscapersona').val(); 
		var expression = new RegExp(searchField, "i"); 
		$.getJSON(direccion, function(data){ 
			$.each(data.results, function(key, value){ 
				window.data=data.results; 
				if (value.name.search(expression) != -1) 
				{
					$('#result').append('<li class="list-group-item link-class">'+value.name+'</li>'); 
				}
			});   
		});
	});
	
	$('#result').on('click','li',function(){ 
		$('.info-container').html('');
		var x=0; 
		var nombre = $(this).text(); 
		$('#buscapersona').val(nombre); 
		var item=$('li'); 
		window.data.find(function(item,i){ 
		  	if(item.name === nombre){x=i;} 
		});
		$('.info-container').html('Nombre: '+window.data[x].name+'<br>Altura: '+window.data[x].height+'<br>Peso: '+window.data[x].mass+'<br>Color de cabello: '+window.data[x].hair_color+'<br>Color de piel: '+window.data[x].skin_color+'<br>Color de ojos: '+window.data[x].eye_color+'<br>Anno de nacimiento: '+window.data[x].birth_year+'<br>Sexo: '+window.data[x].gender); //aqui al div info-container le va a meter el nombre, peso, altura, etc de la persona que esta en la posicion X
		$("#result").html(''); 
		window.location.hash='#titulo'; 
	});
});

