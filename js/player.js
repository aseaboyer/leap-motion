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
					var moveOrb = lerp( this.orb.pos, this.orb.target, (this.orb.speed * timeDelta) );
				}
			}
			
		},
		orb: {
			speed: 10,
			size: 70,
			pos: { x: 0, y: 0, z: 0 },
			target: { x: 0, y: 0, z: 0 },
			setPosition: function( x, y ) {
				this.pos.x = x;
				this.pos.y = y;
			},
			draw: function ( c, score ) {
				// Draw a circle for the orb target
				c.strokeStyle = "rgba(254, 67, 101, 1)";	// Setting up the style for the fill
				c.beginPath(); // Creating the path for the orb circle
				c.lineWidth = 2;
				c.arc( this.target.x, this.target.y, this.size , 0, Math.PI*2); 
				c.closePath();
				c.stroke();
				
				// Draw the orb
				c.fillStyle = "rgba(254, 67, 101, 0.6)";
				c.beginPath();
				c.arc( this.pos.x, this.pos.y, this.size, 0, Math.PI*2); 
				c.closePath();
				c.fill();
				
				c.fillStyle = "#F9CDAD";
				c.fillText( score, this.pos.x, this.pos.y );
			}
		},
		lerp: function (a, b, t) {
			var len = a.length;
			if(b.length != len) return;

			var end = [];
			for(var i = 0; i < len; i++)
				end.push(a[i] + t * (b[i] - a[i]));
			return end;
		}
	}
}