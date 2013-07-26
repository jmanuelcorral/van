
var router = function(app, pathname, response, formdata, request_type) {

  app.log("Routing: " + pathname).info();
  if ((typeof app.routes[pathname] === 'function') || (typeof app.routes[pathname] === 'Object')) {
    app.routes[pathname](app, request_type, response, formdata);
  } else {
  	try {
  		app.public_zone.load_file(app, response, pathname);
  	} 
  	catch (err) {
  		console.log(err);
  		app.errors.forbidden(pathname, response);
  	}
  }
}

module.exports = router;