function GameInfo( uic, stbtn, rstbtn, rsmbtn ) {
	return {
		uiCONT: uic,
		startBTN: stbtn,
		restartBTN: rstbtn,
		resumeBTN: rsmbtn,
		paused: true,
		blockCreation: {
			interval: 100, // seconds
			reset: 10,
			last: Date.now(),
		},
		time: {
			last: Date.now(),
			current: Date.now(),
			delta: 0,
			update: function ( ) {
				var currentTime = Date.now();
				this.delta = currentTime - this.current;
				this.last = this.current;
				this.current = currentTime;
			},
			set: function ( ) {
				var currentTime = Date.now();
				this.last = currentTime;
				this.current = currentTime;
			}
		},
		update: function ( ) {
			this.time.update();
			this.blockCreation.interval -= this.time.delta;
		},
		pause: function ( score ) {
			this.paused = true;
			this.toggleButtons( score );
			this.changeStatus( );
		},
		togglePause: function ( score ) {
			this.paused = !this.paused;
			this.toggleButtons( score );
			this.changeStatus( );
		},
		set: function ( c, f, hand1, hand2 ) {
			this.startBTN.style.display = 'block';
			this.restartBTN.style.display = 'none';
			this.resumeBTN.style.display = 'none';
		},
		toggleButtons: function ( score ) {
			if ( score > 0 ) {
				this.startBTN.style.display = 'none';
				this.restartBTN.style.display = 'block';
				this.resumeBTN.style.display = 'block';
			} else {
				this.startBTN.style.display = 'block';
				this.restartBTN.style.display = 'none';
				this.resumeBTN.style.display = 'none';
			}
		},
		changeStatus: function ( ) {
			if ( this.paused ) {
				this.uiCONT.style.display = 'block';
			} else {
				this.uiCONT.style.display = 'none';
			}
		},
	}
}