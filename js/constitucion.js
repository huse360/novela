monogatari.script ({
	
	'Start_Constitucion': [
		
		'jump eleccion',
      
	],

	
	
	'eleccion': [
		
		{'Choice':{
			
			'Dialog': 't: Escoge una opción',
			'b1': {
				
			    'Text': 'Ir a la parte 1',
			    'Do': 'jump boton1',			      
			      },
			
			
			'b2': {
				
			    'Text': 'Ir a la parte 2',
			    'Do': 'jump boton2',			      
			      },
			
			  },
		 
		
		},	
		
      
	],
	
	
	'boton1': [
		't: Escogiste el boton1',
		'end',
	],
	
	'boton2': [
		't: Escogiste el boton2',
		'end',
	],
	
	'Induccion': [
		
		't: Querido aprendiz, bienvenido',
		
		't: El dia de hoy estarás en un nuevo mundo para ti',
		
		'jump Finalizacion',		
		
      
	],
	
	
	'Finalizacion': [
	
		't: En el que aprenderás de una manera diferente',		
		
		'end',
      
	],
	
	
	
	
	
  });
  
