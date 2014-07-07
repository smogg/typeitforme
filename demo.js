var text = document.getElementById('typeit').innerText;
var button = document.getElementById('typenow');

button.onclick = function() {
	text.typeItForMe('typehere');
}