/*
 * GET score card page.
 */

exports.hole = function(req, res){
	var hole = req.params.hole;
	var scores = req.session.scores;

    var hole_score = new Array();
    var hole_putts = new Array();
    for(var i=0; i<scores.length; i++)
    {
        hole_score[i] = scores[i][2][hole-1][0];
        hole_putts[i] = scores[i][2][hole-1][1];
    }

    var util = require('util');
    var par = scores[0][2][hole-1][4];

  	res.render('card', {title: "Carte de score : "+hole, hole: hole, par: par, scores: scores, nb_players:scores.length, hole_scores:hole_score, hole_putts:hole_putts});
};