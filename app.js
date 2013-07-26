
var app = {
	settings : require("./lib/settings"),
	router : require("./lib/router"),
  	routes : require("./lib/routes"),
	log : require("./lib/logger"),
	errors : require("./lib/errors"),
	public_zone : require("./lib/public_zone"),
	views: require("./lib/views.js"),
	assets: require("./lib/assets.js"),
	request_type : { json : "json", html : "html"}
}

var server = require("./lib/server");
server.init(app);
