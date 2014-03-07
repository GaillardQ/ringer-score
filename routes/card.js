/*
 * GET score card page.
 */

exports.hole = function(req, res){
	var hole = req.params.hole;
	var scores = req.session.scores;

    if(scores == undefined)
    {
        res.redirect('/');
        return;
    }

    var hole_score  = new Array();
    var hole_putts  = new Array();
    var distance    = new Array();
    var results     = new Array();

    var net, brut;
    for(var i=0; i<scores.length; i++)
    {
        hole_score[i]   = scores[i][2][hole-1][0];
        hole_putts[i]   = scores[i][2][hole-1][1];

        switch (scores[i][3])
        {
            case 'R':
                distance[i] = data_slopes["albon"]["distance"]["rouge"][hole-1];
                break;
            case 'B':
                distance[i] = data_slopes["albon"]["distance"]["bleu"][hole-1];
                break;
            case 'Y':
                distance[i] = data_slopes["albon"]["distance"]["jaune"][hole-1];
                break;
            case 'W':
                distance[i] = data_slopes["albon"]["distance"]["blanc"][hole-1];
                break;
            case 'Bl':
                distance[i] = data_slopes["albon"]["distance"]["noir"][hole-1];
                break;
        }

        net = 0;
        brut = 0;
        for(var j=0; j<hole-1; j++)
        {
            net += scores[i][2][j][3];
            brut += parseInt((scores[i][2][j][0]) - parseInt(scores[i][2][j][4]));
        }
        results[i] = { net:net, brut:brut };
    }

    var util = require('util');
    var par = scores[0][2][hole-1][4];

  	res.render('card', {
        title: "Carte de score : "+hole,
        hole: hole,
        par: par,
        scores: scores,
        nb_players:scores.length,
        hole_scores:hole_score,
        hole_putts:hole_putts,
        distance:distance,
        results:results});
};