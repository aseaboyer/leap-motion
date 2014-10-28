function GameInfo( uic, stbtn, rstbtn, rsmbtn ) {
	return {
		uiCONT: uic,
		startBTN: stbtn,
		restartBTN: rstbtn,
		resumeBTN: rsmbtn,
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
		changeStatus: function ( paused ) {
			if ( paused ) {
				this.uiCONT.style.display = 'block';
			} else {
				this.uiCONT.style.display = 'none';
			}
		},
	}
}