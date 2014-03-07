function createCardForm(hole, nb_players, users, hole_scores, hole_putts, distance, results, rec_points)
{

	var xs1 = 0, sm1 = 3, md1 = 4, lg1 = 4;
	var xs2 = 12, sm2 = 6, md2 = 4, lg2 = 4;
	var xs3 = 0, sm3 = 3, md3 = 4, lg3 = 4;

	switch(nb_players)
	{
		case 1 :
			break;
		case 2 :
			sm1 = 0; sm2 = 6; sm3 = 0;
			md1 = 3; md2 = 3; md3 = 3;
			lg1 = 3; lg2 = 3; lg3 = 3;
			break;
		case 3 :
			sm1 = 0; sm2 = 6; sm3 = 0;
			md1 = 0; md2 = 4; md3 = 0;
			lg1 = 0; lg2 = 4; lg3 = 0;
			break;
		case 4 : 
			sm1 = 0; sm2 = 6; sm3 = 0;
			md1 = 0; md2 = 3; md3 = 0;
			lg1 = 0; lg2 = 3; lg3 = 0;
			break;

	}
	var class_width_1 = "col-xs-"+xs1+" col-sm-"+sm1+" col-md-"+md1+" col-lg-"+lg1;
	var class_width_2 = "col-xs-"+xs2+" col-sm-"+sm2+" col-md-"+md2+" col-lg-"+lg2;
	var class_width_3 = "col-xs-"+xs3+" col-sm-"+sm3+" col-md-"+md3+" col-lg-"+lg3;

	var html = "<div class=\"row\"><div class=\""+class_width_1+"\"></div>";
	var j;
	for(var i=0; i<nb_players; i++)
	{
		j = i+1;
		html += "<div class=\""+class_width_2+" space_under_50\">";
			html += "<fieldset>"
                html += "<input type=\"hidden\" id=\"name_"+i+"\" value=\""+users[i]+"\">";
				html += "<legend>"+users[i]+"</legend>";
				html += "<input class=\"hidden\" name=\"id_"+i+"\" id=\"id_"+i+"\" type=\"texte\" value=\""+i+"\"/>"
                html += "<div class=\"space_under_10\">"
                    html += "<small>Distance : " + distance[i] + "</small><br />";
                    html += "<small>Coups reçus : " + rec_points[i] + "</small><br />";
                html += "</div>"
				html += "<div class=\"space_under_10\">"
					html += "<label class=\"control-label\" for=\"score_"+i+"\">Score : </label>";
                    if(hole_scores[i] != "")
                    {
					    html += "<input class=\"form-control\" name=\"score_"+i+"\" id=\"score_"+i+"\" type=\"texte\" value=\""+hole_scores[i]+"\"/>"
                    }
                    else
                    {
                        html += "<input class=\"form-control\" name=\"score_"+i+"\" id=\"score_"+i+"\" type=\"texte\"/>"
                    }
				html += "</div>"
				html += "<div class=\"space_under_10\">"
					html += "<label class=\"control-label\" for=\"putts_"+i+"\">Nombre de putts : </label>";
                    if(hole_putts[i] != "")
                    {
                        html += "<input class=\"form-control\" name=\"putts_"+i+"\" id=\"putts_"+i+"\" type=\"texte\" value=\""+hole_putts[i]+"\"/>"
                    }
                    else
                    {
                        html += "<input class=\"form-control\" name=\"putts_"+i+"\" id=\"putts_"+i+"\" type=\"texte\" />"
                    }
				html += "</div>"
                html += "<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\" />";
                html += "<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">";
                    html += "<fieldset class=\"space_under_10\">"
                        html += "<legend><small>Résultats :</small></legend>";
                        html += "<small>Net : " + results[i]["net"] + "</small><br />";
                        html += "<small>Brut : " + results[i]["brut"] + "</small><br />";
                    html += "</fieldset>"
                html += "</div>";
                html += "<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\" />";
			html += "</fieldset>";
		html += "</div>"

	}
	html += "<div class=\""+class_width_1+"\"></div></div>";

	$("#card_content").html(html);
}

function validHole()
{
    var nb_players = parseInt($("#nb_players").val());
    var j, score, putts, name;

    var error_content = "";

    var res = true;

    for(var i=0; i<nb_players; i++)
    {
        j = i+1;
        score = parseInt($("#score_"+i).val());
        putts = parseInt($("#putts_"+i).val());
        name  = $("#name_"+i).val();

        console.log(name+" : "+score+"("+putts+")");

        if(score == "")
        {
            error_content += "\t - "+name+" : le score est vide\n";
        }
        else
        {
            if(isNaN(score))
            {
                error_content += "\t - "+name+" : le score n'est pas un chiffre\n";
            }
            else if(score < 0)
            {
                error_content += "\t - "+name+" : le score est inférieur à 0\n";
            }
        }
        if(putts == "")
        {
            error_content += "\t - "+name+" : le nombre de putts est vide\n";
        }
        else
        {
            if(isNaN(putts))
            {
                error_content += "\t - "+name+" : le nombre de putts n'est pas un chiffre\n";
            }
            else if(putts < 0)
            {
                error_content += "\t - "+name+" : le nombre de putts est inférieur à 0\n";
            }
        }
    }

    if(error_content != "")
    {
        alert("Il y a eu un/des problème(s) : \n " + error_content);
        res = false;
    }

    return res;
}

function isInt(n) {
    return typeof n === 'number' && n % 1 == 0;
}