(function (controllers) {
    
    //traffic cop for controllers
    
    var homeController = require("./homeController.js");

    controllers.init = function (app) {
        homeController.init(app);
    };

})(module.exports);