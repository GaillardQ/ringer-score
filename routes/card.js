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
    console.log(util.inspect(scores, false, null));
    console.log(util.inspect(hole_score, false, null));
    console.log(util.inspect(hole_putts, false, null));

  	res.render('card', {title: "Carte de score : "+hole, hole: hole, scores: scores, nb_players:scores.length, hole_scores:hole_score, hole_putts:hole_putts});
};