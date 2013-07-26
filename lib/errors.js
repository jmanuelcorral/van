var log = require("./logger");
var errors = {
		forbidden : function(pathname, response)
		{
		    log("Error, handler " + pathname + " not found").error();
		   	response.writeHead(404, {"Content-Type": "text/html"});
		    response.write("404 No encontrado");
		    response.end();
		}
}

module.exports = errors;