$(function() {

  $wrapper = $('.wrapper');
  $tabs = $('.tabs');
  $tabsLink = $('.tabs-link');
  $tabsLinkCurrent = $('li.current');
  $tabsContent = $('.tabs-content');
  $tabsContentCurrent = $('div.current');

  $wrapper.css({
    width: '33%',
    height: '300px',
    margin: 'auto',
    padding: '5px 10px',
    border: '1px solid #ddd',
    'font-family': 'Arial',
    overflow: 'auto',
  });

  $tabs.css({
    padding: '10px 5px',
    'border-radius': '5px',
    background: "#eee",
  })

  $tabsLink.css({
    display: 'inline-block',
    padding: '5px 10px',
    border: '1px solid #ddd',
    'border-radius': '5px',
    'list-style': 'none',
    background: '#fafafa',
    color: '#000',
  });

  $tabsContent.css({
    display: 'none',
    margin: '0 10px',
  });

  $tabsLinkCurrent.css({
    background: '#4286f4',
    color: '#fff',
  });

  $tabsContentCurrent.css({
    display: 'block',
  });

  $tabsLink.click(function () {
    $tabsLink.removeClass('current');
    $(this).addClass('current');
    var tabId = $(this).attr('data-tab');

    $tabsLink.css({
      background: '#fafafa',
      color: '#000',
    });

    $tabsContent.css({
      display: 'none',
    });

    $(this).css({
      background: '#4286f4',
      color: '#fff',
    });

    $("#"+tabId).css({
      display: 'block',
    });
  });

  $tabsLink.mousedown(function () {
    $(this).css({
      border: '1px solid #4286f4',
    });
  });

  $tabsLink.mouseup(function () {
    $(this).css({
      border: '1px solid #ddd',
    });
  });

  $tabsLink.hover(
    function() {
      if($(this).attr('class')!='tabs-link current') {
        $(this).css({
          'background-color': '#eee',
        });
      }
    },
    function() {
      if($(this).attr('class')!='tabs-link current') {
        $(this).css({
          'background-color': '#fafafa',
        });
      }
    }
  );
});
