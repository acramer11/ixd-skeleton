var data = require("../data.json");

exports.viewActivities = function(request, response) {   
	// Your code goes here
	
	response.render('activities', data);

};