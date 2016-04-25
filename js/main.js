$(document).ready(function() {
	var colors = ["orange", "green", "blue", "purple", "pink"]; 
	var index = Math.floor(Math.random() * colors.length);
	$("body").addClass(colors[index]);

	$("#tab1").click(function() {
		$("#tab2-c").hide();
		$("#tab1-c").show();
	});
	$("#tab2").click(function() {
		$("#tab1-c").hide();
		$("#tab2-c").show();
	});

});