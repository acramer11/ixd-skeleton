var data = require("../data.json");

exports.addEvent = function(request, response) {   
	// Your code goes here
	console.log(request.query.emotion);
	var newEvent = {
		"emotion": request.query.emotion,
		"satisfaction": parseInt(request.query.satisfaction),
		"activity" : request.query.activity,
		"location" : request.query.location,
		"date" : request.query.date,
		"time" : request.query.time,
		"notes" : request.query.notes
	};
	if(request.query.emotion != undefined)
	{
		data['events'].push(newEvent);
		response.render('home', data);
	}
	else
	{
	response.render('add', data);
		
	}
};