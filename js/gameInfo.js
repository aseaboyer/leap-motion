function GameInfo( uic, stbtn, rstbtn, rsmbtn ) {
	return {
		uiCONT: uic,
		startBTN: stbtn,
		restartBTN: rstbtn,
		resumeBTN: rsmbtn,
		paused: true,
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