function Player( ) {
	return {
		score: 0,
		resetScore: function ( ) {
			this.score = 0;
		},
		update: function ( c, hand1, hand2 ) {
			var und;
			if( hand1 != und && hand2 != und ) {
			/*	this.hands.right.x = hand1.palmPosition[0];
				this.hands.right.y = hand1.palmPosition[1];
				this.hands.right.z = hand1.palmPosition[2];
				this.hands.left.x = hand2.palmPosition[0];
				this.hands.left.y = hand2.palmPosition[1];
				this.hands.left.z = hand2.palmPosition[2];*/
			
		//	console.log( hand1.palmPosition[0] + " + " + hand2.palmPosition[0] + " = " + (hand1.palmPosition[0] + hand2.palmPosition[0]) );
				var orbTargetX = (hand1.palmPosition[0] + hand2.palmPosition[0]) * 0.5;
				var orbTargetZ = (hand1.palmPosition[1] + hand2.palmPosition[1]) * 0.5;
				this.orb.target.x = orbTargetX;
				this.orb.target.z = orbTargetZ;
			}
			
			//this.hands.drawHands( cont, w, h );
			this.orb.draw( c );
		},
		orb: {
			speed: 10,
			size: 70,
			color: "#FE4365",
			pos: {
				x: 0,
				y: 0,
				z: 0,
			},
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			setPosition ( x, y ) {
				this.pos.x = x;
				this.pos.y = y;
			},
			draw: function ( c ) {
				// Setting up the style for the fill
				c.fillStyle = this.color;

				// Creating the path for the orb circle
				c.beginPath();

				// Draw a full circle of radius 10 at the hand position
				c.arc( this.pos.x, this.pos.z, this.size, 0, Math.PI*2); // ***later this will draw the orb position (which chases the target) ***

				c.closePath();
				c.fill();
				
				c.fillStyle = "#F9CDAD";
				c.fillText( game.score, this.pos.x, this.pos.z );
				//console.log( this.pos );
			}
		},
	}
}