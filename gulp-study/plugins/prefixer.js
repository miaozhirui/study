var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-prefixer';

function gulpPrefixer(prefixText){

	if(!prefixText){
		throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
	}

	prefixText = new Buffer(prefixText);

	var stream = through.obj(function(file, enc, cb){

		if(file.isStream()){

			this.emit('error', new PluginError(PLUGIN_NAME, 'Steames are not supported!'));
			cb();
		}

		if(file.isBuffer()){
			var contents = file.contents.toString();

			console.log(contents)
			file.contents = Buffer.concat([prefixText, file.contents]);
		}


		this.push(file);

		cb();
	})

	return stream;
}

module.exports = gulpPrefixer;