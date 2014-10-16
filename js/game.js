var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var controller = new Leap.Controller();

controller.on( 'connect' , function(){
	console.log( 'Successfully connected.' );
});

function onControllerConnect(){
	console.log( 'Successfully connected.' );
}

controller.on( 'connect' , onControllerConnect );
	console.log( 'A Leap device has been connected.' );
});

controller.on( 'deviceDisconnected' , function() {
	console.log( 'A Leap device has been disconnected.' );
});

controller.on( 'ready' , function(){
	/*var img = document.createElement('img');
	img.src = "img/unicorn1.png";
	c.drawImage( img , 0 , 0 );*/
	console.log( "WE DID IT!" );
});