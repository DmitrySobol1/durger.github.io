let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let send = document.getElementById("send");

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
let p1 = document.createElement("p");

// разкоментить при деплое
// var userId = window.Telegram.WebApp.initDataUnsafe.user.id;

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// p1.innerText = 'id = '+ userId;

usercard.appendChild(p);
usercard.appendChild(p1);

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

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});



sendpost.addEventListener("click", function(){
	
    //  fetch('https://api.telegram.org/bot5626487008:AAHbeWsSvZ1imNZnbHHEWB56IgyT86SlPh8/sendMessage?chat_id=1856600462&text=from site');
const url = 'https://api.telegram.org/bot5626487008:AAHbeWsSvZ1imNZnbHHEWB56IgyT86SlPh8/sendMessage';
var data = {
  chat_id: '1856600462',
  text: 'go2',
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "but",
          url: "https://t.me/learningLT_bot/academyx"
        }
      ]
    ]
  }
};


fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Ошибка HTTP: ' + response.status);
  }
  return response.json();
})
.then(responseData => {
  console.log('Ответ сервера:', responseData);
  console.log(responseData.result.date)
})
.catch(error => {
  console.error('Ошибка:', error);
})


});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


// send.addEventListener("click", function(){

// fetch('https://api.telegram.org/bot5626487008:AAHbeWsSvZ1imNZnbHHEWB56IgyT86SlPh8/getUpdates')
//   .then(response => {
//     // Обработка ответа
//     if (!response.ok) {
//       throw new Error('Ошибка HTTP: ' + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Обработка данных
//     console.log(data);
//     var length=data.result.length;
//     var objectnum=length-1;
//     var textfromuser=data.result[objectnum].business_message.from.id;
//     var message_id=data.result[objectnum].business_message.message_id;
    
    

//     // send msg to user
//     const url = 'https://api.telegram.org/bot5626487008:AAHbeWsSvZ1imNZnbHHEWB56IgyT86SlPh8/sendMessage';
//     var data = {
//       business_connection_id: 'Bv-jTk0TWEjzCQAA9Se7DlHB4_c',
//       chat_id: textfromuser,
//       text: `ответ из скрипта ${objectnum}`,
//       reply_parameters : {message_id:message_id}
      
//     };
    
    
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Ошибка HTTP: ' + response.status);
//       }
//       return response.json();
//     })
//     .then(responseData => {
//       console.log('Ответ сервера:', responseData);
      
//     })
//     .catch(error => {
//       console.error('Ошибка:', error);
//     })
        
//   })
//   .catch(error => {
//     // Обработка ошибок
//     console.error('Ошибка:', error);
//   });
	
// });

var i = 59;

// Запрос каждые 5 сек. Чтобы запустить скрипт, нужно разкоментить строку ниже и в переменную выше занести число последних изменений
//setInterval(function(){
    
    fetch('https://api.telegram.org/bot5626487008:AAHbeWsSvZ1imNZnbHHEWB56IgyT86SlPh8/getUpdates')
      .then(response => {
        // Обработка ответа
        if (!response.ok) {
          throw new Error('Ошибка HTTP: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        // Обработка данных
        console.log(data);
        var length=data.result.length;

if (length > i) {
      i=i+1;




        var objectnum=length-1;
        var userid=data.result[objectnum].business_message.from.id;
        var message_id=data.result[objectnum].business_message.message_id;
        var usertext=data.result[objectnum].business_message.text;
        

        var min = 1;
        var max = 5;
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;


       if (randomNumber==1) {
            text = 'Бот за меня выдает случайные пословицы: Тише едешь — дальше будешь.';
       } else if (randomNumber==2) {
            text = 'Бот за меня выдает случайные пословицы: Всякому овощу свое время.';
       } else if (randomNumber==3) {
        text = 'Бот за меня выдает случайные пословицы: Не откладывай на завтра то, что можно сделать сегодня.';
       } else if (randomNumber==4) {
            text = 'Бот за меня выдает случайные пословицы: Век прожить — не поле перейти.';
       } else  {
        text = 'Бот за меня выдает случайные пословицы: Делу время, потехе час.';
       };



        
    
        // send msg to user
        const url = 'https://api.telegram.org/bot5626487008:AAHbeWsSvZ1imNZnbHHEWB56IgyT86SlPh8/sendMessage';
        var data = {
          business_connection_id: 'Bv-jTk0TWEjzCQAA9Se7DlHB4_c',
          chat_id: userid,
          text: `${text} ${objectnum}`,
          reply_parameters : {message_id:message_id}
          
        };
        
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
          }
          return response.json();
        })
        .then(responseData => {
          console.log('Ответ сервера:', responseData);
          
        })
        .catch(error => {
          console.error('Ошибка:', error);
        })
            
      }})
      .catch(error => {
        // Обработка ошибок
        console.error('Ошибка:', error);
      });
}      
    , 5000);
