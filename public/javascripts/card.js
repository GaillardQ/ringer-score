function createCardForm(hole, nb_players, users)
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
				html += "<legend>"+users[i]+"</legend>";
				html += "<input class=\"hidden\" name=\"id_"+i+"\" id=\"id_"+i+"\" type=\"texte\" value=\""+i+"\"/>"
				html += "<div class=\"space_under_10\">"
					html += "<label class=\"control-label\" for=\"score_"+i+"\">Score : </label>";
					html += "<input class=\"form-control\" name=\"score_"+i+"\" id=\"score_"+i+"\" type=\"texte\"/>"
				html += "</div>"
				html += "<div class=\"space_under_10\">"
					html += "<label class=\"control-label\" for=\"putts_"+i+"\">Nombre de putts : </label>";
					html += "<input class=\"form-control\" name=\"putts_"+i+"\" id=\"putts_"+i+"\" type=\"texte\" />"
				html += "</div>"
			html += "</fieldset>";
		html += "</div>"

	}
	html += "<div class=\""+class_width_1+"\"></div></div>";

	$("#card_content").html(html);
}

function validHole()
{
    alert("ici, on check que les données soient correctes");
}

function isInt(n) {
    return typeof n === 'number' && n % 1 == 0;
}