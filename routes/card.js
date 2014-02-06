/*
 * GET score card page.
 */

exports.hole = function(req, res){
	var hole = req.params.hole;
	var scores = req.session.scores;

  	res.render('card', {title: "Carte de score : "+hole, hole: hole, scores: scores});
};