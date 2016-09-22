var dom = {
  wrapper: function () {
    wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    document.body.appendChild(wrapper);
  },

  header: function () {
    header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = "Тест по программированию";

    document.querySelector('.wrapper').appendChild(header);
  },

  testForm: function () {
    form = document.createElement('form');
    form.classList.add('form-inline');

    document.querySelector('.wrapper').appendChild(form);
  },

  test: function ()  {
    orderedList = document.createElement('ol');
    orderedList.classList.add('list-group');
    orderedList.classList.add('test');

    document.querySelector('.form-inline').appendChild(orderedList);
  },

  question: function (testQuestion) {
    orderedListItem = document.createElement('li');
    orderedListItem.classList.add('list-group-item');
    orderedListItem.classList.add('questionBlock');

    document.querySelector('.test').appendChild(orderedListItem);

    unorderedList = document.createElement('ul');
    unorderedList.classList.add('list-group');
    unorderedList.classList.add('questionText');
    unorderedList.innerHTML = testQuestion;

    questionBlockCurrent = document.querySelectorAll('.questionBlock');
    questionBlockCurrent[questionBlockCurrent.length-1].appendChild(unorderedList)
  },

  answer: function (testAnswer) {
    var unorderedListItem = document.createElement('li');
    unorderedListItem.classList.add('list-group-item');
    unorderedListItem.classList.add('answerVariant');

    questionTextCurrent = document.querySelectorAll('.questionText');
    questionTextCurrent[questionTextCurrent.length-1].appendChild(unorderedListItem);

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    answerVariantCurrent = document.querySelectorAll('.answerVariant');
    answerVariantCurrent[answerVariantCurrent.length-1].appendChild(checkbox);

    var label = document.createElement('label');
    label.classList.add('answerText');
    label.innerHTML = testAnswer;

    answerVariantCurrent[answerVariantCurrent.length-1].appendChild(label);
  },

  checkResult: function () {
    submit = document.createElement('button');
    submit.type = 'submit';
    submit.classList.add('btn');
    submit.classList.add('btn-info');
    submit.classList.add('submitForm');
    submit.innerHTML = 'Проверить мои результаты';

    document.querySelector('.form-inline').appendChild(submit);
  }
}

dom.wrapper();
dom.header();
dom.testForm();
dom.test();
dom.question('Вопрос №1');
dom.answer('Вариант ответа №1');
dom.answer('Вариант ответа №2');
dom.answer('Вариант ответа №3');
dom.question('Вопрос №2');
dom.answer('Вариант ответа №1');
dom.answer('Вариант ответа №2');
dom.answer('Вариант ответа №3');
dom.question('Вопрос №3');
dom.answer('Вариант ответа №1');
dom.answer('Вариант ответа №2');
dom.answer('Вариант ответа №3');
dom.checkResult();
