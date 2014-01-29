
/*
 * POST save infos and redirect.
 */

exports.index = function(req, res){
	var i = 0;
	
	/***** DOCUMENTATION *****/
	/*
	Tableau des scores :
	var[a] -> joueur a
		var[a]["name"] -> nom joueur a
		var[a]["index"] -> index joueur a
		var[a]["course"] -> infos sur le parcours du joueur a
		var[a]["course"][b] -> infos sur le trou b du joueur a
		var[a]["course"][b]["score"] -> score sur le trou b du joueur a
		var[a]["course"][b]["putt"] -> nombre de putts sur le trou b du joueur a
		var[a]["course"][b]["recus"] -> coups reçus sur le trou b du joueur a
	*/
	/*************************/
	var scores = new Array();
	for(var i=0; i< req.body.select_nb; i++)
	{
		scores[i] = new Array();
		scores[i]["a"] = "test 1";
		scores[i]["b"] = "test 2";
		scores[i]["c"] = "test 3";
		scores[i]["d"] = "test 4";
		/*scores[i]["name"] = req.body["username_"+i];
		scores[i]["index"] = req.body["index_"+i];
		scores[i]["course"] = new Array(18);

		for(var j=0; j<18; j++)
		{
			scores[i]["course"][j] = new Array();
			scores[i]["course"][j]["score"] = 0;
			scores[i]["course"][j]["putt"] = 0;
			scores[i]["course"][j]["recus"] = i*j; // A calculer
		}*/
	}

	// Utiliser Redis ?
	// Utiliser un tableau non associatif ?
	req.session.scores = scores;

	var util = require('util');
	console.log(util.inspect(req.session, false, null));

  	res.redirect('/card/1');
};