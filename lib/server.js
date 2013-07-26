var http = require("http");
var url = require("url");

var init = function(app)
{
	var onError = function(error, response) {
		app.log(error.message).error();
		response.writeHead(503, {"Content-Type": "text/html"});
		response.write("<h1>503 Server Error</h1>");
		response.write("<p>" + error.message +"</p>");
		response.end();
	};

	var onRequest = function(request, response) {
		request.setEncoding("utf8");
		var pathname = url.parse(request.url).pathname;
		var reqtype = (request.headers["accept"] === "*/*")? app.request_type.html : app.request_type.json;
		var form_data = "";
		request.on("data", function (chunk) {
			app.log("Getting chunk data: " + chunk).debug();
			form_data += chunk;
		});

		request.on("end", function () {
			try	
			{
				app.router(app, pathname, response, form_data, reqtype);
			}
			catch(ex)
			{
				onError(ex, response);
			}
		});
	}
		
	http.createServer(onRequest).listen(8888);
	app.log("App init").success();
	app.log("Server in http://127.0.0.1:8888").success();
}

module.exports.init = init;