
/*
 * GET save results of an hole.
 */

exports.index = function(req, res){
	var scores = req.session.scores;
	var nb_players = scores.length;

	//var util = require('util');
	//console.log("[]"+util.inspect(req.body, false, null));

  	for(var i=0; i< nb_players; i++)
	{
		//req.body["username_"+i];
	}
};