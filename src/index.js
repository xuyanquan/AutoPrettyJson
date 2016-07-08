

// Demo

var json = {
	asdf : 		'sdfdsa',
sdf : 'sdf'
}








let html = value;

let parseJson = JSON.parse( html );

var maxkeylength 	= 0;
var maxvaluelength 	= 0;

Object.keys( parseJson ).map( ( key ) => {
	if ( key.length > maxkeylength ) maxkeylength = key.length;
	if ( parseJson[ key ].toString().length > maxvaluelength ) maxvaluelength = parseJson[ key ].toString().length;
} );






