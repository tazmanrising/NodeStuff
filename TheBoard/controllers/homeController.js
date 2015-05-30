(function (homeController) {
    
    // create an instance of this
    var data = require("../data");

    homeController.init = function (app) {
        app.get("/", function (req, res) {
            
            // callback next function
            // this is a callback that may be happening asynchronously
            // render happens is when it succeeds
            data.getNoteCategories(function (err, results) {
                res.render("index", { title: "The Board", error: err, categories: results });

            });

         });

    };

})(module.exports);