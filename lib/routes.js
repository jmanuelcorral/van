var home_routes = require("../controllers/home");
var routes = {
        "/" : home_routes.index,
        "/index" : home_routes.index,
};

module.exports = routes;