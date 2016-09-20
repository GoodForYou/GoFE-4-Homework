function checkInteger (a) {
  if (parseInt(a) == a) {
    return 1;
  } else {
    return 0;
  }
}

function  pow (x, n) {
  var x = +prompt('Введите целое число');
  var n = +prompt('Введите степень (только целое число)');
  var result = 1;

  if(checkInteger(x) && checkInteger(n)) {
    if ( n > 0 ) {
      for (var i = 1 ; i <= n ; i++) {
        result = result * x;
      }
      return result;
    } else if ( n < 0 ){
      for (var i = -1 ; i >= n ; i--) {
        result *= 1/x;
      }
      return result;
    } else {
      return 1;
    }
  } else {
    alert('Можно вводить только целые числа')
  }
}

console.log(pow());
