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
		set: function ( dimsX, dimsY, yPos, speed ) {
			this.dims.x = dimsX;
			this.dims.y = dimsY;
			this.speed = speed;
			this.position = 100;
		},
		update: function ( c, timeMod ) {
			// update the position
			this.draw( c );
		},
		draw: function ( c ) {
			c.rect(20,20,150,100);
			c.fillStyle="red";
			c.fill();
		},
	}
}