var assets = (function(){
    var path = require('path');
    var log = require("./logger");
    var fs = require("fs");
    return {
        load_css : function(app, response, pathname){
            fs.readFile(path.resolve("./assets/" + pathname), "utf8", function(err, file) {
                if (err) {
                   log("Error Cargando Fichero: " + pathname).error();
                   app.errors.forbidden(pathname, response);
                } else {
                    response.write(file, "utf8");
                    response.end();
                }
            });
        },
        load_js : function(app, response, pathname)
        {
            fs.readFile(path.resolve("./assets/" + pathname), "utf8", function(err, file) {
                if (err) {
                   log("Error Cargando Fichero: " + pathname).error();
                   app.errors.forbidden(pathname, response);
                } else {
                    response.write(file, "utf8");
                    response.end();
                }
            });
        }
    };
})();

module.exports = assets;