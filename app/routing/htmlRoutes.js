const path = require("path");
module.exports = function(app) {
    app.get('/servey'), function(require, res){
        res.sendfile('app/public/survey.html')
    };
    app.get('/'), function(require, res){
        res.sendfile('app/public/home.html')
    }
}

