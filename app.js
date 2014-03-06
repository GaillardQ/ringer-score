
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var index = require('./routes/index');
var begin = require('./routes/begin');
var card = require('./routes/card');
var save = require('./routes/save');
var results = require('./routes/results');
var http = require('http');
var path = require('path');

var app = express();
var store  = new express.session.MemoryStore;
// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
// This section is optional and can be used to configure twig.
app.set('twig options', { strict_variables: false });
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({ secret: 'something', store: store }));
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.index);
app.post('/begin', begin.index);
app.get('/card/:hole', card.hole);
app.post('/save', save.index);
app.get('/results', results.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

data_slopes = new Array();

data_slopes["albon"] = new Array();

data_slopes["albon"]["par_total"] = 72;

data_slopes["albon"]["slope"] = new Array();
data_slopes["albon"]["slope"]["noir"]     = 143;
data_slopes["albon"]["slope"]["blanc"]    = 143;
data_slopes["albon"]["slope"]["jaune"]    = 137;
data_slopes["albon"]["slope"]["bleu"]     = 132;
data_slopes["albon"]["slope"]["rouge"]    = 128;

data_slopes["albon"]["ssl"] = { noir: 71.7, blanc:71.7, jaune: 70.1, bleu: 67.9, rouge: 65.7 };

data_slopes["albon"]["ranking"] = [14, 10, 2, 8, 16, 6, 4, 12, 18, 13, 5, 1, 11, 17, 15, 7, 3, 9];

data_slopes["albon"]["par"] = [3, 4, 4, 5, 4, 3, 5, 4, 5, 4, 4, 4, 4, 3, 4, 3, 5, 4];

data_slopes["albon"]["distance"] = new Array();
data_slopes["albon"]["distance"][0] = {};
data_slopes["albon"]["distance"][1] = 4;
data_slopes["albon"]["distance"][2] = 4;
data_slopes["albon"]["distance"][3] = 5;
data_slopes["albon"]["distance"][4] = 4;
data_slopes["albon"]["distance"][5] = 3;
data_slopes["albon"]["distance"][6] = 5;
data_slopes["albon"]["distance"][7] = 4;
data_slopes["albon"]["distance"][8] = 5;
data_slopes["albon"]["distance"][9] = 4;
data_slopes["albon"]["distance"][10] = 4;
data_slopes["albon"]["distance"][11] = 4;
data_slopes["albon"]["distance"][12] = 4;
data_slopes["albon"]["distance"][13] = 3;
data_slopes["albon"]["distance"][14] = 4;
data_slopes["albon"]["distance"][15] = 3;
data_slopes["albon"]["distance"][16] = 5;
data_slopes["albon"]["distance"][17] = 4;
