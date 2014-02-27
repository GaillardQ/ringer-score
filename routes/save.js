
/*
 * GET save results of an hole.
 */

exports.index = function(req, res){
	var scores = req.session.scores;
	var nb_players = scores.length;

	//var util = require('util');
	//console.log("[]"+util.inspect(req.body, false, null));

    var hole = parseInt(req.body["hole"]);

    var score, putts, id, shots, par, diff, points;
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
                points = 7;
                break;
            case -5:
                points = 6;
                break;
            case -4:
                points = 5;
                break;
            case -2:
                points = 4;
                break;
            case -1:
                points = 3;
                break;
            case 0:
                points = 2;
                break;
            case 1:
                points = 1;
                break;
            default :
                points = 0;
        }

        scores[id][2][hole-1][0] = score;
        scores[id][2][hole-1][1] = putts;
        scores[id][2][hole-1][3] = points;
	}

    req.session.scores = scores;

    //var util = require('util');
    //console.log("[]"+util.inspect(req.session.scores, false, null));

    hole++;
    if(hole <= 18)
    {
        res.redirect('/card/'+hole);
    }
    else
    {
        res.redirect('/results');
    }
};

