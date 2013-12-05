function updateBeginForm()
{
	var nb_players = parseInt($("#select_nb").val());

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

	var colors = new Array("red", "blue", "green", "yellow");
	var html = "<div class=\""+class_width_1+"\"></div>";
	var j;
	for(var i=0; i<nb_players; i++)
	{
		//style=\"background-color:"+colors[i]+"\"
		html += "<div class=\""+class_width_2+"\">";
			html += "<div class=\"space_under_10\">"
				html += "<label class=\"control-label\" for=\"username_"+i+"\">Nom/Prénom : </label>";
				html += "<input class=\"form-control\" name=\"username_"+i+"\" id=\"username_"+i+"\" type=\"texte\" placeholder=\"(ex : Quentin Gaillard)\" />"
			html += "</div>"
			html += "<div class=\"space_under_10\">"
				html += "<label class=\"control-label\" for=\"index_"+i+"\">Index : </label>";
				html += "<input class=\"form-control\" name=\"index_"+i+"\" id=\"index_"+i+"\" type=\"texte\" placeholder=\"(ex : 18.5)\" />"
			html += "</div>"
		html += "</div>"

	}
	html += "<div class=\""+class_width_1+"\"></div>";

	$("#form_players").html(html);
}