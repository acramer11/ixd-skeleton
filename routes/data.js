var data = require('../data.json');

exports.dataInfo = function(req, res) { 
	res.json(data['events']);
}