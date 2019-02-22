
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


var index = require('./routes/index');
var home = require('./routes/home');
var add = require('./routes/add');
var activities = require('./routes/activities');
var locations = require('./routes/locations');
var settings = require('./routes/settings');
var calendar = require('./routes/calendar');
var location_history = require('./routes/location_history');

var data = require('./routes/data');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/home', home.view);
app.get('/add', add.addEvent);
app.get('/activities', activities.viewActivities);
app.get('/locations', locations.viewLocations);
app.get('/settings', settings.viewSettings);
app.get('/calendar', calendar.viewCalendar);
app.get('/location_history', location_history.viewLocationHistory);
app.get('/data', data.dataInfo);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
