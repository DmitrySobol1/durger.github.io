let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let usercard = document.getElementById("usercard");
var textField = document.getElementById('useridspan');
var imageElement = document.getElementById('myImage');
var userId = window.Telegram.WebApp.initDataUnsafe.user.id;
var userphoto = window.Telegram.WebApp.initDataUnsafe.user.photo_url;


imageElement.src = userphoto;
textField.innerText = userId;


btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});


