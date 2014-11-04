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
		block: {
			next: 0, // when we create the next block
			base: 0, // keep track of the last modified creation
			mod: 0, // the modifier we reduce by each time a block is created
			set: function ( base, mod ) {
				this.base = base;
				this.next = base;
				this.mod = mod;
				this.bump();
			},
			bump: function() {
				this.next += new Date() + (this.base - (this.base * this.mod) ); // @andymakesthings - too tired, pick up here tomorrow
			},
		},
		time: {
			last: Date.now(),
			current: Date.now(),
			delta: 0,
			update: function ( ) {
				var currentTime = Date.now();
				this.delta = (currentTime - this.current) * 0.001;
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
			
			
			if( this.time.current >= this.block.next) {
				// @andymakesthings - check if we are past this.block.next, if so, return false
				this.block.bump();
				return true;
			}
			return false;
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