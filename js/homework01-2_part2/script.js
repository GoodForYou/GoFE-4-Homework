var arr = [];

arr [0] = prompt('Введите имя');
arr [1] = prompt('Введите имя');
arr [2] = prompt('Введите имя');
arr [3] = prompt('Введите имя');
arr [4] = prompt('Введите имя');

var userName = prompt('Введите своё имя');

var result = 0;

for (var i = 0; i < arr.length - 1; i++) {
  if (userName === arr[i]) {
    result += 1;
  } else {
    result += 0;
  }
}

if (result > 0) {
  alert(userName + ', Вы успешно вошли');
} else {
  alert('Ошибка: имя пользователя не найдено');
}
