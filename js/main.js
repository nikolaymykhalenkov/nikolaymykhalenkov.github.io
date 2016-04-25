$(document).ready(function() {
	var colors = ["orange", "green", "blue"]; 
	var index = Math.floor(Math.random() * colors.length);
	$("body").addClass(colors[index]);
});