
monogatari.script ({
	'Start': [
		'123 En un lugar de la Mancha,',
		'de cuyo nombre no quiero acordarme,',
        
        'jump cap1',
	],

    'cap1': [
		'no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, ',
		
        'jump cap2',
	],

    'cap2': [
		'adarga antigua, rocín flaco y galgo corredor.',
		
        'end',
	],
});


/*

monogatari.script ({
	
	'Start': [
         
		'En un lugar de la Mancha,',
		'de cuyo nombre no quiero acordarme,',
		'no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, ',
		'adarga antigua, rocín flaco y galgo corredor.',
		
        'end',
		
	],



});

*/

/*
monogatari.script ({
	
	'Start': [
         
		'En un lugar de la Mancha,',
		'de cuyo nombre no quiero acordarme,',
		'no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, ',
		'adarga antigua, rocín flaco y galgo corredor.',
		
        'end',
		
	],

});
*/




/*
monogatari.script ({
	// The game starts here.
	'Start': [

		'show scene #000000 with fadeIn',

        'jump gatoHambre',

		'gato Miau... Miauuu...',
         
		'hombre Ahora qué...',
		'gato Tengo hambre.',
		'hombre:molesto Estoy ocupado',
		'gato:molesto Dije que tengo hambre...',
		'hombre:preocupado Dije que estoy ocupado',
		'gato:molesto2 Tengo hambre...',
		'hombre:preocupado Ay, ¡Dios mío!',
		'gato:sueño Miiiiaaaaauuuu...',
		'hombre:triste No me puedo concentrar con este animalejo.',

        'end',
		
	],

    'gatoHambre' :  [

        'gato Miau... Miauuu...',
        'hombre Ahora qué...',
		'gato Tengo hambre.',

        'hombre:molesto ...',

        {
            'Choice': {
                'Dialog': '¿Qué harás?',
                'alimentar': {
                    'Text': 'Alimentarlo',
                    'Do': 'jump gatoCome'
                },
                'ignorar': {
                    'Text': 'Ignorarlo',
                    'Do': 'jump gatoHambre'
                },
            }
        }
    ],


    'gatoCome' :  [

        'gato Qué deliciosa comida',
   
        'gato mmm....',

        'gato:sueño Que sabroso',

        'gato ...',

        'gato Oye humano',

        'jump gatoHambre',
    ]


});

*/


/*
monogatari.script ({
	// The game starts here.
	'Start': [

		'show scene #000000 with fadeIn',

		'gato Miau... Miauuu...',
         
		'hombre Ahora qué...',
		'gato Tengo hambre.',
		'hombre:molesto Estoy ocupado',
		'gato:molesto Dije que tengo hambre...',
		'hombre:preocupado Dije que estoy ocupado',
		'gato:molesto2 Tengo hambre...',
		'hombre:preocupado Ay, ¡Dios mío!',
		'gato:sueño Miiiiaaaaauuuu...',
		'hombre:triste No me puedo concentrar con este animalejo.',

        'end',
		
	]
});

*/
