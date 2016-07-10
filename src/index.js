
let space = [
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           ",
	"                                                                           "
].join("");

function pretty ( json, level ) {

	level = level || 1;

	let parseJson = json;

	if ( parseJson === undefined ) {
		let html = document.getElementById('input').value;
		parseJson = eval( `(${html})` );
	}

	let maxkeylength 	= 0;
	let maxvaluelength 	= 0;

	Object.keys( parseJson ).map( ( key ) => {
		if ( key.toString().length > maxkeylength ) maxkeylength = key.toString().length;
		if ( typeof parseJson[ key ] == 'object' ) return true;
		if ( parseJson[ key ].toString().length > maxvaluelength ) maxvaluelength = parseJson[ key ].toString().length;
	} );


	let output = ['{\n'];


	for( let key in parseJson ) {
		for ( let i = 0; i < level; i++ ) {
			output.push('\t');
		}
		if ( typeof parseJson[ key ] == 'object' ) {
			output.push(`${key.toString()}${space.substring( 0, maxkeylength - key.toString().length )} : ${pretty(parseJson[key], level + 1)} ,\n`);
		} else {
			output.push( `${key.toString()}${space.substring( 0, maxkeylength - key.toString().length )} : ${parseJson[key]}${space.substring( 0, Math.abs(maxvaluelength - parseJson[key].toString().length) )} ,\n` );
		}
	}

	let last = output.pop();
	output.push( last.substring( 0, last.length - 3 ) + '\n' );

	for ( let i = 0; i < level - 1; i++ ) {
		output.push('\t');
	}
	output.push('}');
	
	return output.join( '' );
}

document.getElementById('pretty').onclick  = function () {
	document.getElementById('result').value = pretty();
};




