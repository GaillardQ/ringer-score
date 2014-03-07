/*
 * GET results page.
 */

exports.index = function(req, res){

    var scores = req.session.scores;

    if(scores == undefined)
    {
        res.redirect('/');
        return;
    }

    var nb_players = scores.length;

    var total, net, brut, putts, par_total;
    for(var i=0; i< nb_players; i++)
    {
        total = 0;
        net = 0;
        brut = 0;
        par_total = 0;
        putts = 0;
        for(var j=0; j<18; j++)
        {
            if(scores[i][2][j][0] != 0)
            {
                par_total += parseInt(scores[i][2][j][4]);
            }
            total += parseInt(scores[i][2][j][0]);
            net += parseInt(scores[i][2][j][3]);
            putts += parseInt(scores[i][2][j][1]);
        }

        brut = total - par_total;


        scores[i][4] = new Array();
        scores[i][4][0] = total;
        scores[i][4][1] = net;
        scores[i][4][2] = brut;
        scores[i][4][3] = putts;
    }

    var util = require('util');
    console.log(util.inspect(req.session.scores, false, null));

    res.render('results', {scores: scores});
};