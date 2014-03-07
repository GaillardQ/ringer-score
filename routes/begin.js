
/*
 * POST save infos and redirect.
 */

exports.index = function(req, res){
	var i = 0;

    var data_albon = new Array();

    data_albon["par_total"] = 72;

    data_albon["slope"] = new Array();
    data_albon["slope"]["noir"]     = 143;
    data_albon["slope"]["blanc"]    = 143;
    data_albon["slope"]["jaune"]    = 137;
    data_albon["slope"]["bleu"]     = 132;
    data_albon["slope"]["rouge"]    = 128;

    data_albon["ssl"] = new Array();
    data_albon["ssl"]["noir"]   = 71.7;
    data_albon["ssl"]["blanc"]  = 71.7;
    data_albon["ssl"]["jaune"]  = 70.1;
    data_albon["ssl"]["bleu"]   = 67.9;
    data_albon["ssl"]["rouge"]  = 65.7;

    data_albon["ranking"] = new Array();
    data_albon["ranking"][0] = 14;
    data_albon["ranking"][1] = 10;
    data_albon["ranking"][2] = 2;
    data_albon["ranking"][3] = 8;
    data_albon["ranking"][4] = 16;
    data_albon["ranking"][5] = 6;
    data_albon["ranking"][6] = 4;
    data_albon["ranking"][7] = 12;
    data_albon["ranking"][8] = 18;
    data_albon["ranking"][9] = 13;
    data_albon["ranking"][10] = 5;
    data_albon["ranking"][11] = 1;
    data_albon["ranking"][12] = 11;
    data_albon["ranking"][13] = 17;
    data_albon["ranking"][14] = 15;
    data_albon["ranking"][15] = 7;
    data_albon["ranking"][16] = 3;
    data_albon["ranking"][17] = 9;

    data_albon["par"] = new Array();
    data_albon["par"][0] = 3;
    data_albon["par"][1] = 4;
    data_albon["par"][2] = 4;
    data_albon["par"][3] = 5;
    data_albon["par"][4] = 4;
    data_albon["par"][5] = 3;
    data_albon["par"][6] = 5;
    data_albon["par"][7] = 4;
    data_albon["par"][8] = 5;
    data_albon["par"][9] = 4;
    data_albon["par"][10] = 4;
    data_albon["par"][11] = 4;
    data_albon["par"][12] = 4;
    data_albon["par"][13] = 3;
    data_albon["par"][14] = 4;
    data_albon["par"][15] = 3;
    data_albon["par"][16] = 5;
    data_albon["par"][17] = 4;


	/***** DOCUMENTATION *****/
	/*
	Tableau des scores :
	var[a] -> joueur a
		var[a][0]       -> nom joueur a
		var[a][1]       -> index joueur a
		var[a][2]       -> infos sur le parcours du joueur a
		var[a][2][b]    -> infos sur le trou b du joueur a
		var[a][2][b][0] -> score sur le trou b du joueur a
		var[a][2][b][1] -> nombre de putts sur le trou b du joueur a
		var[a][2][b][2] -> coups reçus sur le trou b du joueur a
        var[a][2][b][3] -> coups rendus sur le trou b du joueur a
        var[a][2][b][4] -> par du trou b du joueur a
        var[a][3]       -> infos sur les boules de départ du joueur a
        var[a][4]       -> résultats du joueur a
        var[a][4][0]    -> nombre de coups total du joueur a
        var[a][4][1]    -> résultats net du joueur a
        var[a][4][2]    -> résultats brut du joueur a
        var[a][4][3]    -> nombre de putts du joueur a
	*/
	/*************************/
	var scores = new Array();

    var index, nb_shots, slope, ssl;

	for(var i=0; i< req.body.select_nb; i++)
	{
		scores[i] = new Array();
		scores[i][0] = req.body["username_"+i];
		index = req.body["index_"+i];
        index = index.replace(",", ".");
        if(index > 36)
        {
            index = Math.floor(index);
        }
        scores[i][1] = index;

        scores[i][2] = new Array(18);

        scores[i][3] = req.body["departure_"+i];

        scores[i][3] = req.body["departure_"+i];

        switch (scores[i][3])
        {
            case 'R':
                slope   = data_albon["slope"]["rouge"];
                ssl     = data_albon["ssl"]["rouge"];
                break;
            case 'B':
                slope   = data_albon["slope"]["bleu"];
                ssl     = data_albon["ssl"]["bleu"];
                break;
            case 'Y':
                slope   = data_albon["slope"]["jaune"];
                ssl     = data_albon["ssl"]["jaune"];
                break;
            case 'W':
                slope   = data_albon["slope"]["blanc"];
                ssl     = data_albon["ssl"]["blanc"];
                break;
            case 'Bl':
                slope   = data_albon["slope"]["noir"];
                ssl     = data_albon["ssl"]["noir"];
                break;
        }

        // ((index) x (slope) / 113) + SSS - PAR

        nb_shots = ((index) * (slope) / 113) + ssl - data_albon["par_total"];
        nb_shots = Math.round(nb_shots);

        var nb_extras = nb_shots % 18;
        var nb_base = (nb_shots - nb_extras)/18;

        var nb;

		for(var j=0; j<18; j++)
		{
			scores[i][2][j] = new Array();
			scores[i][2][j][0] = 0;
			scores[i][2][j][1] = 0;

            nb = nb_base;
            if(data_albon["ranking"][j] <= nb_extras)
            {
                nb++;
            }

			scores[i][2][j][2] = nb;
            scores[i][2][j][3] = 0;
            scores[i][2][j][4] = data_albon["par"][j];
		}
	}

	req.session.scores = scores;

	//var util = require('util');
	//console.log(util.inspect(req.session.scores, false, null));

  	res.redirect('/card/1');
};