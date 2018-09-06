
var express = require('express');
var path = require('path');
var fs = require('fs-extra');

import bodyParser = require('body-parser');
import http = require('http');
import swig = require('swig');

import { IndexRoute } from './routes/index';

var app = express();

app.set('port', process.env.PORT || '3000');
swig.setDefaults({ cache: false });

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/views')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Register our templating engine
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + './dist');
app.set('view cache', true);

http.createServer(app).listen(app.get('port'), function () {
    // Application routes
    new IndexRoute(app);   
    
    fs.mkdirs(path.join(__dirname, '/views'));

    fs.copy(path.join(__dirname + '/../../server/views'), path.join(__dirname, '/views'), (err) => {
        if (err) return console.error(err);     
    });

    console.log("Express server listening on port " + app.get('port'));
});
//});