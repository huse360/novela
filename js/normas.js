monogatari.script ({

 'Start_Normas': [
	    
	     'show background global at left with fadeIn', 
	   
	     'show character t feliz at left with fadeIn', 
	   
	    't: Estimado Aprendiz,',
	    
	    't: La globalización y el ritmo actual del mundo exigen, cada vez con mayor fuerza, un idioma universal,',
	    't: sobre todo en cuestiones de negocios y finanzas.',
	    
	    'show background decisiones at left with fadeIn', 
	   
	    'show character t feliz at center with fadeIn', 
	    
	    't: La información confiable y comparable en el ámbito financiero,', 
            't: es necesaria para que en las empresas se tomen las mejores decisiones.',
            't: A continuación vamos a evaluar sus conocimientos en,',
            't: Normativa comercial, contable y financiera vigente y Políticas contables.',

	    
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
	  
	   'Normativavigente': [
	     
	       {
	       'Choice': {
	         
	           'Dialog': 't: Aprendiz, constituida su empresa seleccione el paso a seguir',
	         
	           'p1': {
	             'Text': ' Definir marco conceptual aplicable',
	             'Do': 'jump Definirmarcoconceptualaplicable'
	           },
	         
	           'p2': {
	             'Text': 'Identificar la estructura contable ',
	             'Do': 'jump Identificarlaestructuracontable'
	           },
	         
	           'p3': {
	             'Text': 'Conocer normativa vigente',
	             'Do': 'jump Conocernormativavigente'
	           },
	
	       } 
	    },  
	     
	    
	      't: Querido Aprendiz',
              't: Las Normas Internacionales de información financiera constituyen el conjunto de normas contables,',
              't: con mayor aceptación a nivel mundial Es regular la preparación de información transparente y objetiva.',
              't: Dichas Normas pretenden generar un lenguaje universal comprensible para las empresas nacionales e internacionales',

              'end',
                  ],

	  
	   'Definirmarcoconceptualaplicable': [
	     
	       't: Querido Aprendiz',
               't: Ya usted posee el conocimiento necesario acerca de las Normas Internacionales de Información Financiera,', 
               't: el siguiente paso es definir el marco conceptual contable y financiero aplicable a su empresa,',
               't: de acuerdo a actividad comercial, necesidades de la empresa y la normativa vigente',

	       'end',
	             ], 
	  'Identificarlaestructuracontable': [
	     
	       't: Querido Aprendiz',
               't: Una vez identificados los marco normativo contenidos en del DUR 2420/2015 específicamente los Grupo 1,2 y 3,',
               't: el siguiente paso es identificar la estructura contable aplicable a su empresa.',
               't: De acuerdo al proyecto formativo usted debe tener como referencia el marco normativo',
               't: del grupo 2 normas NIIF para PYMES, por lo cual es necesario Identificar si su empresa cumple con los', 
               't: requisitos para ser catalogadas como pequeña y mediana empresa',
		  
	       'end',
	             ], 
	  
	  'Conocernormativavigente': [
	     
	       't: Querido Aprendiz',
               't: Una vez constituida su empresa el siguiente paso es conocer la normativa comercial, contable y',
               't: financiera vigente en Colombia especificamente, todo lo referente a Normas Internacionales de Información Financiera NIIF', 
               't: su objetivo e identificar el organismo emisor', 

	       'end',
	             ], 
	 
	  
	});
	

