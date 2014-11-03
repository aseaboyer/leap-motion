function Player( ) {
	return {
		score: 0,
		resetScore: function ( ) {
			this.score = 0;
		},
		update: function ( c, hands, timeDelta ) {
			var und;
			if( hands.length >= 2 ) {
				if( hands[0] != und && hands[1] != und ) {
					var orbTargetX = (hands[0][0] + hands[1][0]) * 0.5;
					var orbTargetY = (hands[0][1] + hands[1][1]) * 0.5;
					this.orb.target.x = orbTargetX;
					this.orb.target.y = orbTargetY;
				//	var moveOrb = this.lerp( this.orb.pos, this.orb.target, (this.orb.speed * timeDelta) );
				//	console.log( "move to " );
				//	console.log( moveOrb );
				}
			}
			
		},
		orb: {
			speed: 10,
			size: 700,
			pos: { x: 0, y: 0, z: 0 },
			target: { x: 0, y: 0, z: 0 },
			setPosition: function( x, y ) {
				this.pos.x = x;
				this.pos.y = y;
			},
			draw: function ( c, score ) {
<<<<<<< HEAD
				// Draw a circle for the orb target
				c.strokeStyle = "rgba(254, 67, 101, 0.65)";	// Setting up the style for the fill
=======
				c.fillStyle = "rgba(254, 67, 101, 1)";	// Setting up the style for the fill
>>>>>>> parent of 14fc8d9... represent the orb target with an empty circle
				c.beginPath(); // Creating the path for the orb circle
				c.arc( this.target.x, this.target.y, (this.size * 0.5), 0, Math.PI*2); // Draw a full circle for the orb target
				c.closePath();
				c.fill();
				
				c.fillStyle = "rgba(254, 67, 101, 0.6)";	// Setting up the style for the fill
				c.beginPath(); // Creating the path for the orb circle
				c.arc( this.pos.x, this.pos.y, this.size, 0, Math.PI*2); // Draw a full circle for the orb
				c.closePath();
				c.fill();
				
				c.fillStyle = "#F9CDAD";
				c.fillText( score, this.pos.x, this.pos.y );
			}
		}
	}
}