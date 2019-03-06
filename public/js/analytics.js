'use strict';

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	$(".accordion").click(function() {ga("send", "event", "accordion", "clicked")});
	$(".accordion2").click(function() {ga("send", "event", "accordion2", "clicked")});



	var timeSincePageLoad = Math.round(performance.now());
	ga('event', 'timing_complete', {
    'name': 'load',
    'value': timeSincePageLoad,
    'event_category': 'JS Dependencies'
  });



}