monogatari.script ({
	
	'Start_Constitucion': [
		
		'jump Actividadeconomica',
      
	],

	
	
	'Actividadeconomica': [
		
		't: Cuando se tiene la idea de constituir una empresa,',
		't: se debe tener claridad cuál va hacer el objeto social',
		't: tenemos para ti el listado de actividades económicas,',
		't: que podrás escoger de acuerdo a su código, nombre o palabra clave',
		'jump Nombredelaempresa',
      
	],
	
	
	'Nombredelaempresa': [
		't: Querido aprendiz, el siguiente paso será idear el nombre',
		't: para esa empresa que tanto has anhelado,',
		't: te recomendamos que antes de definirlo como tal',
		't: consultes en la siguiente página,',
		't: https://www.rues.org.co/, aquí encontrarás',
		't: si ese nombre que has tenido en cuenta para formalizar tu empresa,',
		't: ya existe, en ese caso, piensa en otro, no puedes crear otra empresa con el mismo nombre',
		'jump logodelaempresa',
		
		
	],
	
	
	
	'logodelaempresa': [
		't: Querido aprendiz, teniendo en cuenta la actividad económica,',
		't: seleccionada y el nombre escogido, debes diseñar, una imagen',
		't: que identifique tu empresa, que a donde quiera que esté presente,',
		't: tu producto, lleve consigo esa imagen que solo lo identifica a él ,',
		't: por su calidad, color o presentación,',
		't: te recomendamos el siguiente enlace',
		't: https://www.brandcrowd.com/maker/logos?text=ice+cream+&SearchText=&LogoStyle=0&LogoLayoutOrientation=&Colors=&FontStyles=',
		't: te puede servir de gran ayuda para poder construir el logotipo,', 
                't: juega con los colores, pero ante todo maneja sobriedad. ¡Adelante!',
		'jump clasificaciondetuempresa',
		
		
	],
		
      'clasificaciondetuempresa': [
		't: Querido empresario (Aprendiz), usted debe clasificar su empresa,',
		't: de acuerdo con las diferentes opciones estudiadas de clasificación',
		't: ejemplo, si su empresa es una distribuidora de helados,',
		't: deben hacer la clasificación respectiva para tu empresa,',
		't: para este caso la clasificación según su actividad económica sería, comercial,',
		't: porque compra productos terminados y los vende de la misma manera,',
		't: según la procedencia de capital, sería privado, porque todo el capital',
		't: proviene de fuentes privadas, según el número de propietarios, sería sociedad', 
                't: porque se va constituir con 2 o más personas y según el objetivo, sería con animo de lucro,',
		't: porque su finalidad es obtener una utilidad',
		't: se sugiere construir un esquema clasificatorio',
		't: o mapa mental para dejar claridad en esta clasificación,'

		
	],
	

		
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
  
