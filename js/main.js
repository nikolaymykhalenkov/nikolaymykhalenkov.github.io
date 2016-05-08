$(document).ready(function() {

	$("#menu-item-1").click(function() {
		$("#content-tab").append("<div class='content-item'><h2>About me</h2><p>I am student from Ukraine and passioned about programming, web-development and game-development.</p></div>");
	});
	$("#menu-item-2").click(function() {
		$("#content-tab").append("<div class='content-item'><h2>Portfolio</h2><p>I have created website for <a href='http://render-room.com'>Render-Room</a> and <a href='http://bolgov.kiev.ua'>Bolgov</a>.</p></div>");
	});
	$("#menu-item-3").click(function() {
		$("#content-tab").append("<div class='content-item'><h2>Contacts</h2><p>Feel free to mail me on <a href='mailto:nikkomyk@gmail.com'>nikkomyk@gmail.com</a></p></div>");
	});
});