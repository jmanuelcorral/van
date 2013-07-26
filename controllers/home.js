var fs = require("fs");
var path = require('path');

/*Controller home*/
var home_controller = {
    // [GET] Index
    index : function(app, request_type, response, formdata) {
        var body="";
        var data = { name : "jose" };
        switch(request_type)
        {
        case (request_type.json):
            //Json Rest Api request type 
            response.writeHead(200, {"Content-Type": "text/json"});
            body = JSON.stringify(data);
            break;
        case (request_type.html):
        default:
            //html request type
            var current_view = fs.readFileSync(path.resolve(app.views[0]), 'utf8');
            var mixer = require('plates');
            body = mixer.bind(current_view, data);
            response.writeHead(200, {"Content-Type": "text/html"});
            break;
        }
        response.write(body);
        response.end();   
    }
}

module.exports = home_controller;