$(document).ready(function() {

	$("#menu-item-1").click(function() {
		$("#content-tab").append("<div class='content-item'><h2>About me</h2><p>I am student from Ukraine. My passion is programming, web-development and game-development, science and space.</p></div>");
	});
	$("#menu-item-2").click(function() {
		$("#content-tab").append("<div class='content-item'><h2>Portfolio</h2><p>My last work was <a href='http://render-room.com'>website</a> for guys from Render Room. Now I`m working on <a href='http://bolgov.kiev.ua'>website</a> for surgeon Michael Bolgov.</p><p>Also, now I`m working on a game using Unity 3D and C#.</p></div>");
	});
	$("#menu-item-3").click(function() {
		$("#content-tab").append("<div class='content-item'><h2>Contacts</h2><p>Feel free to mail me on <a href='mailto:nikkomyk@gmail.com'>nikkomyk@gmail.com</a></p><p>If you want - contact me on <a href='https://ua.linkedin.com/in/nikolay-mykhalenkov-95797495'>LindekIn</a> or <a href='https://new.vk.com/johndrakonwilson'>VK.com</a>.</p></div>");
	});
});