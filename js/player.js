function Player( ) {
	return {
		score: 0,
		resetScore: function ( ) {
			this.score = 0;
		},
		update: function ( c, hands ) {
			var und;
			if( hands.length >= 2 ) {
				if( hands[0] != und && hands[1] != und ) {
				/*	this.hands.right.x = hand1.palmPosition[0];
					this.hands.right.y = hand1.palmPosition[1];
					this.hands.right.z = hand1.palmPosition[2];
					this.hands.left.x = hand2.palmPosition[0];
					this.hands.left.y = hand2.palmPosition[1];
					this.hands.left.z = hand2.palmPosition[2];*/
				
			//	console.log( hand1.palmPosition[0] + " + " + hand2.palmPosition[0] + " = " + (hand1.palmPosition[0] + hand2.palmPosition[0]) );
					var orbTargetX = (hands[0][0] + hands[1][0]) * 0.5;
					var orbTargetZ = (hands[0][1] + hands[1][1]) * 0.5;
					this.orb.target.x = orbTargetX;
					this.orb.target.z = orbTargetZ;
				}
			}
			
			//this.hands.drawHands( cont, w, h );
			this.orb.draw( c, this.score ); /**** @andymakesthings - Work from here next ****/
		},
		orb: {
			speed: 10,
			size: 70,
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
			setPosition: function( x, y ) {
				this.pos.x = x;
				this.pos.y = y;
			},
			draw: function ( c, score ) {
				c.fillStyle = "#FE4365";	// Setting up the style for the fill
				c.beginPath();	// Creating the path for the orb circle
				// Draw a full circle of radius 10 at the hand position
				c.arc( this.target.x, this.target.z, this.size, 0, Math.PI*2); // ***later this will draw the orb position (which chases the target) ***
				c.closePath();
				c.fill();
				
				c.fillStyle = "#F9CDAD";
				c.fillText( score, this.target.x, this.target.z );
				//console.log( this.pos );
			}
		},
	}
}