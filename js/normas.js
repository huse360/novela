monogatari.script ({

  'Start_Normas': [
    
    'show background normas at left with fadeIn',
			//'jump Conocerlaactividadcomercialynecesidadesdelaempresa',  
			'show character t normal',
			'jump Eleccion',

    ],
  
  'Elección':[
    {
      Choice':{
      'Dialog': 't: ¿Aprendiz, una vez constituida su empresa selecciones el paso a seguir?',
      'p1':{
      'Text':'Identificar el marco normativo contable',
      'Do':'jump Definirelmarconormativocontable'  
    },
    'p2:{
    'Text': 'Conocer la actividad comercial de la empresa',
    'Do':'Conocerlaactividadcomercialdelaempresa'
    },
    'p3:{
    'Text':'Verificar si está obligada a llevar contabilidad según NIIF',
    'Do':'VerificarsiestáobligadaallevarcontabilidadsegúnNIIF'             
    },
  
}
},
],

   

    'end',

  ],
  
});
