/*
 * GET score card page.
 */

exports.hole = function(req, res){
	var hole = req.params.hole;
	var scores = req.session.scores;

	var util = require('util');
	console.log("Scores : "+util.inspect(scores, false, null));

	console.log("Taille scores : "+scores.length);
	//var nb_players = scores.length;
  	res.render('card', {hole: hole});
};