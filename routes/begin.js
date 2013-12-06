
/*
 * POST save infos and redirect.
 */

exports.index = function(req, res){
	var i = 0;
	
	console.log("%s", req.body.username_0);

	res.render('index', { title: 'SnapEngage test' });
  	//res.redirect('');
};