var data = require("../data.json");

exports.viewLocationHistory = function(request, response) {   
	// Your code goes here
	console.log(request.query.emotion);
	var newEvent = {
		"emotion": request.query.emotion,
		"satisfaction": request.query.satisfaction,
		"activity" : request.query.activity,
		"location" : request.query.location,
		"date" : request.query.date,
		"time" : request.query.time,
		"notes" : request.query.notes
	};
	if(request.query.emotion != undefined)
	{
		data['events'].push(newEvent);
	}
	
	response.render('location_history', data);
};