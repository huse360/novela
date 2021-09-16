/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	

	'gato': {
		name: 'Michi',
		color: '#5bcaff',
		directory: 'cat',
		
		expressions: {
            molesto: 'expressions\\angry1.png',
			molesto2: 'expressions\\angry2.png',  
            normal: 'expressions\\normal.png',
            sueño: 'expressions\\closed-eyes.png',  
            
        },
		default_expression: 'normal',
		// nvl: true,
	}

	,'hombre': {
		name: 'Sr. Bigotes',
		color: '#5bcaff',
		directory: 'gentleman',
		
		expressions: {
            molesto: 'expressions\\angry.png',  
            feliz: 'expressions\\happy.png',
            broma: 'expressions\\joke.png',  
			normal: 'expressions\\normal.png',  
            triste: 'expressions\\sad.png',
            serio: 'expressions\\serious.png',
			bueh: 'expressions\\well.png',  
            preocupado: 'expressions\\worry.png',
            
            
        },
		default_expression: 'normal',
		// nvl: true,
	},
	


});



monogatari.script ({

	
 'Start': [
    'jump InicioNormas',
 ],  
	
	
});
