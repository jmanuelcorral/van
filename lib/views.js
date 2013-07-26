var log = require("./logger");
var fs = require("fs");
var path = require('path');

function load_dir(directory, callback) {
  fs.readdir(path.resolve(directory), function(err, files) {
  	if (err)
  	{
  		log(err).error();
  	}
  	else {
	    files.forEach(function(file){
	      fs.stat(directory + '/' + file, function(err, stats) {
	        if(stats.isFile()) {
	          callback(directory + '/' + file);
	        }
	        if(stats.isDirectory()) {
	          load_dir(directory + '/' + file, callback);
	        }
	      });
	    });
	}
  });
}

var views = (function(){
	var view_collection = new Array();
	load_dir("./views", function(file_with_path) {
  		view_collection.push(file_with_path);
	});
	return view_collection;
})();
module.exports = views;