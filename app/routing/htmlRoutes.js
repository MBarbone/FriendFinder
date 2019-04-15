var path = require('path');


// GET paths to handle routing when user visits page
module.exports = function (app){
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname,'../public/home.html'));
    });

    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname,'../public/survey.html'));
    });

    // if no matching route, send user back home
    app.get('*', function(req,res){
        res.sendFile(path.join('../public/home.html'));
    });
};