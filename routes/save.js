
/*
 * GET save results of an hole.
 */

exports.index = function(req, res){
	var scores = req.session.scores;
	var nb_players = scores.length;

	//var util = require('util');
	//console.log("[]"+util.inspect(req.body, false, null));

    var hole = parseInt(req.body["hole"]);

    var score, putts, id, shots, par, diff;
  	for(var i=0; i< nb_players; i++)
	{
		id      = req.body["id_"+i];
        score   = req.body["score_"+i];
        putts   = req.body["putts_"+i];

        shots   = scores[id][2][hole-1][2];
        par   = scores[id][2][hole-1][4];

        diff = score - (par + shots);
        switch (diff)
        {
            case -6:
                //6 points
                break;
            case -5:
                //6 points
                break;
            case -4:
                //5 points
                break;
            case -2:
                //4 points
                break;
            case -1:
                //3 points
                break;
            case 0:
                //2 points
                break;
            case 1:
                //1 points
                break;
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

