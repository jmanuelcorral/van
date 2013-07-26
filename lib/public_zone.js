var public_zone = (function(){
    var path = require('path');
    var log = require("./logger");
    var fs = require("fs");
    return {
        load_file : function(app, response, pathname){
            fs.readFile(path.resolve("./public/" + pathname), "binary", function(err, file) {
                if (err) {
                   log("Error Cargando Fichero: " + pathname).error();
                   app.errors.forbidden(pathname, response);
                } else {
                    var extension = pathname.split('.')[1];
                    log("extension "+ extension).info();
                    switch(extension)
                    {
                        case 'ico':
                        case 'png':
                            response.writeHead(200, {"Content-Type": "image/png"});
                            break;
                        case 'jpg':
                        case 'jpeg':
                            response.writeHead(200, {"Content-Type": "image/jpeg"});
                            break;
                        case 'txt':
                        case 'html':
                        case 'htm':
                            response.writeHead(200, {"Content-Type": "text/html"});
                            break;
                        case 'pdf':
                            response.writeHead(200, {"Content-Type": "application/pdf"});
                            break;
                    }
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    };
})();

module.exports = public_zone;