window.addEventListener("load", (event) => {
	if( location.pathname.match(/index(.html)?/) !== null ) {
		location.replace( location.toString().replace(/index(.html)?/,'') );
	}
} );
