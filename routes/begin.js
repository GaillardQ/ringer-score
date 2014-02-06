
/*
 * POST save infos and redirect.
 */

exports.index = function(req, res){
	var i = 0;
	
	/***** DOCUMENTATION *****/
	/*
	Tableau des scores :
	var[a] -> joueur a
		var[a][0] -> nom joueur a
		var[a][1] -> index joueur a
		var[a][2] -> infos sur le parcours du joueur a
		var[a][2][b] -> infos sur le trou b du joueur a
		var[a][2][b][0] -> score sur le trou b du joueur a
		var[a][2][b][1] -> nombre de putts sur le trou b du joueur a
		var[a][2][b][2] -> coups reçus sur le trou b du joueur a
	*/
	/*************************/
	var scores = new Array();
	for(var i=0; i< req.body.select_nb; i++)
	{
		scores[i] = new Array();
		scores[i][0] = req.body["username_"+i];
		scores[i][1] = req.body["index_"+i];
		scores[i][2] = new Array(18);

		for(var j=0; j<18; j++)
		{
			scores[i][2][j] = new Array();
			scores[i][2][j][0] = 0;
			scores[i][2][j][1] = 0;
			scores[i][2][j][2] = i*j; // A calculer
		}
	}

	req.session.scores = scores;

	//var util = require('util');
	//console.log(util.inspect(req.session, false, null));

  	res.redirect('/card/1');
};