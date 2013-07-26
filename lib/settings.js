var path = require("path");
var environments = {
	development : {},
	testing : {},
	production : {}
}

var settings = {
	environment : environments.development,
	application_path : path.resolve("./")
}

module.exports = settings;