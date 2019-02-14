var data = require("../data.json");

exports.viewLocations = function(request, response) {   
	// Your code goes here

	response.render('locations', data);
};

