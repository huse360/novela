monogatari.script ({

  'Start_Normas': [
    
     'show character t feliz at left with fadeIn', 
   
    't: Estimado Aprendiz,',
    
    't: La globalización y el ritmo actual del mundo exigen, cada vez con mayor fuerza, un idioma universal,',
    't: sobre todo en cuestiones de negocios y finanzas.',
    't: La información confiable y comparable en el ámbito financiero,', 
    't: es necesaria para que en las empresas se tomen las mejores decisiones.',
    't: Para  conocer la normativa comercial, contable y financiera vigente,',
    't: es necesario que usted revise el contenido tematico,',
    't: para dar respuesta a los siguientes interrogantes y evidenciar el conocimiento adquirido,',
    
    
    
    
    {
       'Choice': {
         
           'Dialog': 't: Aprendiz, constituida su empresa seleccione el paso a seguir',
         
           'p1': {
             'Text': 'Normativa vigente',
             'Do': 'jump Normativavigente'
           },
         
           'p2': {
             'Text': 'Politicas contables',
             'Do': 'jump Politicascontables'
           },

       } 
    },


    'end',
    
  ],
  
   'Normativa vigente': [
    
       't: Aprendiz',
       't: Una vez constituida su empresa el siguiente paso es definir el marco normativo contable y financiero aplicable,',
       't: por lo anterior debe identificar si de acuerdo a la normativa vigente en Colombia,',
       't: su empresa está obligada a llevar contabilidad según NIIF',
             ],
  
   'Politicas contables': [
     
       't: Aprendiz',
       't: Ya tiene identificada la estructura contable de su  empresa,',
       't: el siguiente paso es conocer las normas a tener en cuenta para la selección y',
       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES',
             ], 

  
  
  
  
});
