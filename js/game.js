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

controller.on( 'deviceConnected' , function() {
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

function Player( stbtn, rstbtn, rsmbtn ) {
	return {
		startBTN: stbtn,
		restartBTN: rstbtn,
		resumeBTN: rsmbtn,
		set: function ( c, f, hand1, hand2 ) {
			this.startBTN.style.display = 'block';
			this.restartBTN.style.display = 'none';
			this.resumeBTN.style.display = 'none';
		},
		toggleButtons: function ( score ) {
			if ( score > 0 ) {
				this.startBTN.style.display = 'block';
				this.restartBTN.style.display = 'none';
				this.resumeBTN.style.display = 'none';
			} else {
				this.startBTN.style.display = 'none';
				this.restartBTN.style.display = 'block';
				this.resumeBTN.style.display = 'block';
			}
		},
	}
}