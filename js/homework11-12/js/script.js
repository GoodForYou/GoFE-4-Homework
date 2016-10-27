$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    var html = $('#profile').html();
    var cv = [
      {
        title: 'Personal details',
        content: 'Date of Birth: 26 May 1990'
      },
      {
        title: 'Hometown',
        content: 'Kryvyi Rih'
      },
      {
        title: 'Higher education',
        content: 'Master Sc. in International Economic Relations, National Taras Shevchenko University'
      },
      {
        title: 'Professional experience',
        content: 'Ernst & Young Audit Services LLC'
      },
      {
        title: 'Languages',
        content: 'English, French, Russian, Ukrainian'
      },
      {
        title: 'Volunteer activities',
        content: '20-th OSCE Ministerial Council'
      },
      {
        title: 'Sport',
        content: 'Table tennis'
      }
    ];

    var content = tmpl(html, {
      data: cv
    });

    $('body').append(content);
});
