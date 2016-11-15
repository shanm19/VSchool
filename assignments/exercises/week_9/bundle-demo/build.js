var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

var source = "./src/main.js";
var output = "./dist/main.js";

browserify(source)
    .transform("babelify", {
        "presets": ["es2015"]
    })
    .bundle()
    .pipe(fs.createWriteStream(output));