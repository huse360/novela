monogatari.script ({

  'Start_Normas': [
    
    'show background normas at left with fadeIn',
			//'jump Definirelmarconormativocontableyfinancieroaplicable',  
			'show character t normal',
			'jump Eleccion',

    ],
  
  'Elección':[
    {
      Choice':{
      'Dialog': 't:¿Aprendiz, una vez constituida su empresa selecciones el paso a seguir,',
      'p1':{
      'Text':'Definir el marco normativo contable y financiero aplicable',
      'Do':'jump Definirelmarconormativocontableyfinancieroaplicable'  
    },
    'p2:{
    'Text': 'Conocer la actividad comercial y necesidades de la empresa',
    'Do':'Conocerlaactividadcomercialynecesidadesdelaempresa'
    },
    'p3:{
    'Text':'Identificar si de acuerdo a la normativa vigente en Colombia, está obligada a llevar contabilidad según NIIF',
    'Do':'IdentificarsideacuerdoalanormativavigenteenColombia,estáobligadaallevarcontabilidadsegúnNIIF             
    },
  
}
},
],

   

    'end',

  ],
  
});
