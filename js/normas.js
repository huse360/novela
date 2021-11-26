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
	    't: En este modulo vamos a evaluar sus conocimientos adquiridos,',
	    't: en normativa comercial, contable y financiera vigente.',
	    
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
	     
	    
	       't: Aprendiz',
	       't: Una vez constituida su empresa el siguiente paso es definir el marco normativo contable y financiero aplicable,',
	       't: por lo anterior debe identificar si de acuerdo a la normativa vigente en Colombia,',
	       't: su empresa está obligada a llevar contabilidad según NIIF',
	       'end',
	             ],
	  
	   'Definirmarcoconceptualaplicable': [
	     
	       't: Aprendiz',
	       't: Ya tiene identificada la estructura contable de su  empresa,',
	       't: el siguiente paso es conocer las normas a tener en cuenta para la selección y',
	       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES',
	       'end',
	             ], 
	  'Identificarlaestructuracontable': [
	     
	       't: Aprendiz',
	       't: Ya tiene identificada la estructura contable de su  empresa,',
	       't: el siguiente paso es conocer las normas a tener en cuenta para la selección y',
	       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES',
	       'end',
	             ], 
	  
	  'Conocernormativavigente': [
	     
	       't: Aprendiz',
	       't: Ya tiene identificada la estructura contable de su  empresa,',
	       't: el siguiente paso es conocer las normas a tener en cuenta para la selección y',
	       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES',
	       'end',
	             ], 
	  'Determinarnormasaplicables': [
	     
	       't: Aprendiz',
	       't: Ya tiene identificada la estructura contable de su  empresa,',
	       't: el siguiente paso es conocer las normas a tener en cuenta para la selección y',
	       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES',
	       'end',
	             ], 
	  
	});
	

