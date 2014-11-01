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
			this.position.y = -(dimsY + 50); // 50 bumps
			this.position.y = 100; // 50 bumps
			
			console.log( "Built" );
			console.log( this );
		},
		update: function ( c, timeMod ) {
			console.log( timeMod );
			this.position.y += (speed * timeMod)
			
			// update the position
			this.draw( c );
		},
		draw: function ( c ) { // this will be more complex, drawing arrows up for sub zero and such
			c.beginPath();
			c.fillStyle = "#c8c8a9";
			c.rect( this.position.x,this.position.y, this.dims.x,this.dims.y );
			c.fill();
			
			c.beginPath();
			c.fillStyle = "#83af9b";
			c.rect( this.position.x,this.position.y, this.dims.x,(this.dims.y - 10) );
			c.fill();
			
			var distFromTop = this.position.y - this.dims.y;
			if( distFromTop > 0 ) {
				this.drawArrow( c, distFromTop );
			}
		},
		drawArrow: function ( c, offset ) {
			c.beginPath();
			c.fillStyle = "#83af9b";
			c.moveTo( this.x + (this.dims.x * 0.5), 0);
			c.lineTo( this.x + (this.dims.x * 0.5) - offset, offset );
			c.lineTo( this.x + (this.dims.x * 0.5) + offset, offset );
			c.fill();
		},
	}
}