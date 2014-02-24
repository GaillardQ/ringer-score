
/*
 * GET save results of an hole.
 */

exports.index = function(req, res){
	var scores = req.session.scores;
	var nb_players = scores.length;

	//var util = require('util');
	//console.log("[]"+util.inspect(req.body, false, null));

    var hole = parseInt(req.body["hole"]);

    var score, putts, id;
  	for(var i=0; i< nb_players; i++)
	{
		id      = req.body["id_"+i];
        score   = req.body["score_"+i];
        putts    = req.body["putts_"+i];

        if(!isInt(score))
        {
            alert('Pas un entier');
        }

        scores[id][2][hole-1][0] = score;
        scores[id][2][hole-1][1] = putts;
	}

    req.session.scores = scores;

    var util = require('util');
    console.log("[]"+util.inspect(req.session.scores, false, null));

    hole++;
    res.redirect('/card/'+hole);
};

function isInt(n) {
    return typeof n === 'number' && n % 1 == 0;
}