
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

/****************************
 *                          *
 *       DONNEES CLUB       *
 *                          *
 ****************************/

/**/
data_slopes["albon"] = new Array();

data_slopes["albon"]["par_total"] = 72;

data_slopes["albon"]["slope"] = { noir:143, blanc:143, jaune:137, bleu:132, rouge:128 };

data_slopes["albon"]["ssl"] = { noir:71.7, blanc:71.7, jaune:70.1, bleu:67.9, rouge:65.7 };

data_slopes["albon"]["ranking"] = [14, 10, 2, 8, 16, 6, 4, 12, 18, 13, 5, 1, 11, 17, 15, 7, 3, 9];

data_slopes["albon"]["par"] = [3, 4, 4, 5, 4, 3, 5, 4, 5, 4, 4, 4, 4, 3, 4, 3, 5, 4];

data_slopes["albon"]["distance"] = {noir:new Array(), blanc:new Array(), jaune:new Array(), bleu:new Array(), rouge:new Array()};
data_slopes["albon"]["distance"]["noir"]    = [117, 305, 402, 528, 267, 183, 497, 336, 472, 325, 279, 398, 327, 137, 313, 178, 572, 327];
data_slopes["albon"]["distance"]["blanc"]   = [117, 305, 402, 528, 267, 183, 497, 336, 472, 325, 279, 398, 327, 137, 313, 178, 572, 327];
data_slopes["albon"]["distance"]["jaune"]   = [112, 286, 391, 498, 249, 166, 443, 326, 458, 314, 272, 379, 314, 126, 305, 172, 539, 314];
data_slopes["albon"]["distance"]["bleu"]    = [106, 267, 347, 465, 210, 144, 428, 297, 414, 280, 266, 320, 300, 112, 296, 166, 504, 304];
data_slopes["albon"]["distance"]["rouge"]   = [099, 250, 341, 411, 191, 122, 400, 244, 407, 244, 239, 310, 286, 107, 257, 159, 444, 272];
