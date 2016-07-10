var gulp = require("gulp");
var poststylus = require('poststylus');
var webpack = require('webpack');
var fs = require('fs');

let src  = './src/';
let dist  = './dist/';

gulp.task("default", function() {

	webpack( {
        entry: {
            index: [`${src}/index`]
        },
        output: {
            path: `${dist}`,
            filename: "[name].bundle.js",
            sourceMapFilename: "[name].bundle.js.map"
        },
        devtool: '#source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-1'],
                        plugins: ['transform-es3-member-expression-literals',
                        'transform-es3-property-literals',
                        'add-module-exports']
                    }
                },
                {
                    test: /\.styl$/,
                    loader: 'style!css!stylus'
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'url?limit=10000'
                }
            ]
        },
        externals: {
            // 'react': 'var React',
            // 'react-dom': 'var ReactDOM'
        },
        stylus: {
            use: [
                poststylus([ 'autoprefixer' ])
            ]
        }//,
        // plugins: plugins
    }, (err, stats) => {
        console.log('webpack log:');
        console.log(stats.toString({colors: true, chunks: false}));
        if (stats.hasErrors()) {
            fs.writeFileSync(`${dist}/index.bundle.js`, [
                'document.body.innerHTML="<pre>',
                stats.toJson()
                    .errors[0]
                    .replace(/[\n\r]/g, '<br>').replace(/\[\d+m/g, '').replace(/"/g, '\\"'),
                '</pre>";',
                'document.body.firstChild.style.fontFamily="monospace";',
                'document.body.firstChild.style.lineHeight="1.5em";',
                'document.body.firstChild.style.margin="1em";',
            ].join(''));
        }
        console.log('## webpack-react done!');
    } );

});


