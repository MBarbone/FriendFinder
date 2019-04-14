var path = require('path');


// GET paths to handle routing when user visits page
module.exports = function (app){
    app.get('/s', function(req,res){
        res.sendFile(path.join('/app/public/home.html'));
    });

    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname,'/app/public/survey.html'));
    });

    // if no matching route, send user back home
    app.get('*', function(req,res){
        res.sendFile(path.join('/app/public/home.html'));
    });
};


