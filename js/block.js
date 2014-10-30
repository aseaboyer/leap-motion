function Block( uic, stbtn, rstbtn, rsmbtn ) {
	return {
		speed: 100,
		dims: {
			x: 100,
			y: 0
		},
		position: {
			x: 0,
			y: 0
		},
		set: function ( dimsX, dimsY, xPos, speed ) {
			this.dims.x = dimsX;
			this.dims.y = dimsY;
			this.speed = speed;
			this.position.x = xPos;
			this.position.y = 100; // this will need to be -dimsY
		},
		update: function ( c, timeMod ) {
			// update the position
			this.draw( c );
		},
		draw: function ( c ) { // this will be more complex, drawing arrows up for sub zero and such
			c.fillStyle = "#83af9b";
			c.rect( this.position.x,this.position.y, this.dims.x,this.dims.y );
			c.fill();
			
			c.fillStyle = "#c8c8a9";
			c.rect( this.position.x,this.position.y, this.dims.x,(this.dims.y - 20) );
			c.fill();
		},
	}
}