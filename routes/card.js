/*
 * GET score card page.
 */

exports.hole = function(req, res){
	var hole = req.params.hole;
	var scores = req.
  	res.render('card', {hole: hole});
};