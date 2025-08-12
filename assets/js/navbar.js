window.addEventListener( "load", (event) => {
	$(`#navbar a[href='${location.pathname.replace( /index(\.html)?$/i, "" )}']`).addClass("active");
} );
	