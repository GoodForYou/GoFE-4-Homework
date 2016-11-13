'use strict';

$(document).ready(function() {
  var html = $('#test').html();

  var question_block = [{
      question: '1. В каком году женщинам Швейцарии разрешили голосовать?',
      answer1: '1911',
      answer2: '1941',
      answer3: '1971',
  },
  {
      question: '2. Кто имеет право быть президентом Ливана?',
      answer1: 'Мусульманин-суннит',
      answer2: 'Христианин-маронит',
      answer3: 'Мусульманин-шиит',
  },
  {
      question: '3. Какое государство старейшее в Европе?',
      answer1: 'Сан-Марино',
      answer2: 'Мальта',
      answer3: 'Исландия',
  }
  ];

  localStorage.setItem('question', JSON.stringify(question_block));

  var test = localStorage.getItem('question');

  test = JSON.parse(test);

  var content = tmpl(html, {
    data: test
  });

  $('.content').append(content);

  $('label').click(function () {
    var input = this.querySelector('input');
    // console.log(input.checked);
    if (input.checked) {
      input.checked = true;
    } else {
      input.checked= false;
    }
  });

  $('.check_results').click(function () {
    var answer1 = $('input')[2];
    var answer2 = $('input')[4];
    var answer3 = $('input')[6];
    if (answer1.checked && answer2.checked && answer3.checked ) {
      alert('Тест пройден успешно')
    } else {
        alert('Попробуйте ещё раз');
    };
    for (var i = 0; i < $('input').length; i++) {
      $('input')[i].checked = false;
    };
  });
});
