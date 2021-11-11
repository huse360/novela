monogatari.script ({
	
	'Start_Constitucion': [ 

		
		
		'show background constitucion at left with fadeIn',
		//'jump Actividadeconomica',
		'show character t normal',
		'jump Eleccion',
      
	],

	'Eleccion': [
	{
		'Choice': {
			
			'Dialog':  't: ¿Aprendiz, seleccione el paso con el que usted considere que se debe iniciar la constitución?',
			'p1': {
				'Text': 'Actividad económica',
				'Do': 'jump Actividadeconomica'
				},
			'p2': {
				'Text': 'Nombre de la empresa',
				'Do': 'jump Nombredelaempresa'
				},
			}
	},
	],
	
	
	
	'Actividadeconomica': [
		
		'show background actividadeconomica at left with fadeIn',
		'show character t brava',
		't: Cuando se tiene la idea de constituir una empresa,',
		't: se debe tener claridad cuál va hacer el objeto social',
		't: tenemos para ti el listado de actividades económicas,',
		't: que podrás escoger de acuerdo a su código, nombre o palabra clave',
		'jump Nombredelaempresa',
      
	],
	
	
	'Nombredelaempresa': [
		'show character t feliz',
		't: Querido aprendiz, el siguiente paso será idear el nombre',
		't: para esa empresa que tanto has anhelado,',
		't: te recomendamos que antes de definirlo como tal',

		
		't: consultes en la siguiente página donde encontrarás,',
		
		't: si ese nombre que has tenido en cuenta para formalizar tu empresa,',
		't: ya existe, en ese caso, piensa en otro, no puedes crear otra empresa con el mismo nombre',
		
		'show message ConsultarNombreEmpresa',


		'show notification Welcome',
		{
			'Input': {
				'Text': 'Inserte aquí el nombre de la empresa:',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							nombreEmpresa: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							nombreEmpresa: ''
						}
					});
				},
				'Warning': 'Debes ingresar un nombre!'
			},

		},

		't: El nombre escogido es: {{player.nombreEmpresa}}, bien hecho!',
		
		
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
		't: o mapa mental para dejar claridad en esta clasificación',
	        'jump Actadeconstituciónyregistromercantil',

		
	],
	
	
	'Actadeconstituciónyregistromercantil': [
		't: Señor empresario (Aprendiz),',
		't: usted deberá constituir una empresa,',
		't: dándole forma legal con el acta de constitución,',
		't: Tereis, les dará un modelo de acta de constitución,',
		't: para que ustedes lo diligencien y lo presenten',
		't: ante la cámara de comercio de su ciudad,',
		't: recuerde que debe constituirla con máximo 6 accionistas,',
		't: donde cada uno debe aportar dinero o bienes que tengan,', 
                't: relación con la actividad económica seleccionada,',
		't: por ejemplo, para la heladería, se necesitaría una nevera industrial de alta capacidad.',
		't: Con este trámite, el funcionario de la cámara de comercio,',
		't: les debe entregar certificado de existencia y representación legal',
		't: y por su puesto el Rut (Registro único tributario)',
		't: Con esa documentación pueden empezar a operar como empresa',
		't: solicitando la resolución de facturación y la apertura de la cuenta bancaria',
		't: en donde harán el depósito del dinero aportado en efectivo',
		't: por los accionistas de la empresa',
		't: Tengan en cuenta que deben elegir a un representante legal.',
		'jump cuentabancaria',
		
		
	],	
	

	'cuentabancaria': [
		
		't: Estimado empresario, te daré un formato de apertura de la cuenta bancaria',
		't: desde está cuenta deben manejar todos los pagos e ingresos,',
		't: dado que, por norma tributaria, todas las transacciones',
		't: deben realizarse por el sistema financiero', 
		't: se exceptúan las cajas menores que deben manejar las empresas',
		'jump Resolucióndefacturación',		
		
      
	],
	
	
	'Resolucióndefacturación': [
	
		't: Querido empresario, te orientaré en el diligenciamiento',
		't: de la solicitud de resolución de facturación,',
		't: si los productos que ustedes van ofrecer son de consumo masivo,',
		't: recomendamos que soliciten además de la resolución de facturación',
		't: electrónica, una resolución de facturación Pos,',
		't: tenga en cuenta este documento cuando veamos el modulo de soportes de contabilidad,',
		't: por el momento te invito a que consultes sobre este tema aplicable desde el 2019 en las empresas.',
		'end',
      
	],
	
	
	
	
	
  });
  
