var data = require("../data.json");

exports.addEvent = function(request, response) {   
	// Your code goes here
	var newEvent = {
		"emotion": request.query.emotion,
		"satisfaction": request.query.satisfaction,
		"activity" : request.query.activity,
		"location" : request.query.location,
		"date" : request.query.data,
		"time" : request.query.time,
		"notes" : request.query.notes
	};
	data['events'].push(newEvent);
	response.render('add', data);
};