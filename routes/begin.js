
/*
 * POST save infos and redirect.
 */

exports.index = function(req, res){
	var i = 0;
	
	/* DOC */
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
	/**/
	var scores = new Array();
	console.log("Nombre de joueurs : "+req.body.select_nb);
	for(var i=0; i< req.body.select_nb; i++)
	{
		scores[i] = new Array();
		scores[i]["name"] = req.body["username_"+i];
		scores[i]["index"] = req.body["index_"+i];
		scores[i]["course"] = new Array(18);

		for(var j=0; j<18; j++)
		{
			scores[i]["course"][j] = new Array();
			scores[i]["course"][j]["score"] = 0;
			scores[i]["course"][j]["putt"] = 0;
			scores[i]["course"][j]["recus"] = i*j; // A calculer
		}
	}

	req.session.scores = scores;

  	res.redirect('/card/1');
};