function createResultTab(users, scores, results)
{
    var nb_players = users.length;

    //Revoir pour laisser la place à 2 colonnes (trou, par)
   var xs1 = 0, sm1 = 3, md1 = 4, lg1 = 4;
    var xs2 = 12, sm2 = 6, md2 = 4, lg2 = 4;
    var xs3 = 0, sm3 = 3, md3 = 4, lg3 = 4;

    switch(nb_players)
    {
        case 1 :
            break;
        case 2 :
            sm1 = 0; sm2 = 12; sm3 = 0;
            md1 = 3; md2 = 6; md3 = 3;
            lg1 = 3; lg2 = 6; lg3 = 3;
            break;
        case 3 :
            sm1 = 0; sm2 = 12; sm3 = 0;
            md1 = 0; md2 = 12; md3 = 0;
            lg1 = 0; lg2 = 12; lg3 = 0;
            break;
        case 4 :
            sm1 = 0; sm2 = 12; sm3 = 0;
            md1 = 0; md2 = 12; md3 = 0;
            lg1 = 0; lg2 = 12; lg3 = 0;
            break;

    }

    var class_width_1 = "col-xs-"+xs1+" col-sm-"+sm1+" col-md-"+md1+" col-lg-"+lg1;
    var class_width_2 = "col-xs-"+xs2+" col-sm-"+sm2+" col-md-"+md2+" col-lg-"+lg2;
    var class_width_3 = "col-xs-"+xs3+" col-sm-"+sm3+" col-md-"+md3+" col-lg-"+lg3;

    var html = "<div class=\"row\"><div class=\""+class_width_1+"\"></div>";
    html += "<div class=\"table-responsive\">";
        html += "<table class='table-bordered table-responsive table-striped "+class_width_2+"'>";
            html += "<thead class='center thead1'>";
                html += "<th class='center'>Trou</th>";
                html += "<th class='center'>Par</th>";
                for(var i=0; i<nb_players; i++)
                {
                    html += "<th colspan='4' class='center'>"+users[i]['name']+"<br />("+users[i]['index']+")</th>";
                }
            html += "</thead>";
            html += "<thead class='center thead2'>";
            html += "<th class='center'></th>";
            html += "<th class='center'></th>";
            for(var i=0; i<nb_players; i++)
            {
                html += "<th class='center'>Coups</th>";
                html += "<th class='center'>Net</th>";
                html += "<th class='center'>Brut</th>";
                html += "<th class='center'>Putt</th>";
            }
            html += "</thead>";
            html += "<tbody class='center'>";

            var brut = 0;
            var hole = 0;
            var par_total = 0;
            for(var i=0; i<18; i++)
            {
                hole = i+1;
                html += "<tr>";
                    html += "<td>"+hole+"</td>";
                    par_total += parseInt(scores[0][i]['par']);
                    html += "<td>"+scores[0][i]['par']+"</td>";
                    for(var j=0; j<nb_players; j++)
                    {
                        if(scores[j][i]['score'] != 0)
                        {
                            brut = parseInt(scores[j][i]['score']) - parseInt(scores[j][i]['par']);
                            html += "<td>"+scores[j][i]['score']+"</td>";
                            html += "<td>"+scores[j][i]['rendus']+"</td>";
                            html += "<td>"+brut+"</td>";
                            html += "<td>"+scores[j][i]['putts']+"</td>";
                        }
                        else
                        {
                            html += "<td>X</td>";
                            html += "<td>X</td>";
                            html += "<td>X</td>";
                            html += "<td>X</td>";
                        }
                    }
                html += "</tr>";
            }
            html += "</tbody>";
            html += "<tfoot class='tfoot center'>";
            html += "<td class='center'></td>";
            html += "<td class='center'>"+par_total+"</td>";
            for(var i=0; i<nb_players; i++)
            {
                html += "<td class='center'>"+results[i]['coups']+"</td>";
                html += "<td class='center'>"+results[i]['net']+"</td>";
                html += "<td class='center'>"+results[i]['brut']+"</td>";
                html += "<td class='center col-black'>"+results[i]['putts']+"</td>";
            }
            html += "</thead>";
        html += "</table>";
    html += "</div>";
        /*html += "<div class=\""+class_width_2+" space_under_50\">";
        html += "<fieldset>"
        html += "<legend>Joueur "+j+"</legend>";
        html += "<div class=\"space_under_10\">"
        html += "<label class=\"control-label\" for=\"username_"+i+"\">Nom/Prénom : </label>";
        html += "<input class=\"form-control\" name=\"username_"+i+"\" id=\"username_"+i+"\" type=\"texte\" placeholder=\"(ex : Quentin Gaillard)\" />"
        html += "</div>";
        html += "<div class=\"space_under_10\">"
        html += "<label class=\"control-label\" for=\"departure_"+i+"\">Départ : </label><br />";
        html += "<select class=\"\" name=\"departure_"+i+"\" id=\"departure_"+i+"\">"
        html += "<option value=\"-\">---</option>";
        html += "<option value=\"R\">Boules rouges</option>";
        html += "<option value=\"B\">Boules bleues</option>";
        html += "<option value=\"Y\">Boules jaunes</option>";
        html += "<option value=\"W\">Boules blanches</option>";
        html += "<option value=\"Bl\">Boules noires</option>";
        html += "</select>"
        html += "</div>"
        html += "<div class=\"space_under_10\">"
        html += "<label class=\"control-label\" for=\"index_"+i+"\">Index : </label>";
        html += "<input class=\"form-control\" name=\"index_"+i+"\" id=\"index_"+i+"\" type=\"texte\" placeholder=\"(ex : 18.5)\" />"
        html += "</div>"
        html += "</fieldset>";
        html += "</div>"*/

    html += "<div class=\""+class_width_1+"\"></div></div>";

    $("#results_content").html(html);
}