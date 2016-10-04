$(function() {
  var $wrapper = $('.wrapper');
  var $form = $('form');
  var $fieldBlock = $('.field');
  var $fieldName = $('label');
  $inputField = $('input');
  var $tooltip = $('.tooltip');
  $showHelpButton = $('button');

  $wrapper.css({
    width: '35%',
    margin: 'auto',
    padding: '10px 10px 100px 10px',
    border: '1px solid #ddd',
    'font-family': 'Arial',
  });

  $form.css({
    border: '2px solid #aaa',
  });

  $fieldBlock.css({
    display: 'block',
    margin: '5px 0 15px 5px',
  });

  $fieldName.css({
    display: 'inline-block',
    width: '80px',
  });

  $tooltip.css({
    'border-radius': '3px',
    'box-shadow': '0px 0px 1px 2px #bbb',
    padding: '5px',
    visibility: 'hidden',
  });

  $showHelpButton.css({
    'margin-top': '5px',
    'border-radius': '5px',
    'background-color': "#eee",
    'font-size': '16px',
  });

  $fieldName.click(function() {
    var fieldNameId = $(this).attr('for');
    var inputNameId = $("input[name=" + fieldNameId + "]");
    inputNameId.focus();
    var inputFieldId = $(inputNameId).attr('data-tooltip');
    $tooltip.css({
      visibility: 'hidden',
    });
    $("#"+inputFieldId).css({
      visibility: 'visible',
    });
  });

  $inputField.hover(
    function() {
      var inputFieldId = $(this).attr('data-tooltip');
      $("#"+inputFieldId).css({
        visibility: 'visible',
      });
    },
    function() {
      var inputFieldId = $(this).attr('data-tooltip');
      $("#"+inputFieldId).css({
        visibility: 'hidden',
      });
    }
  );

  $showHelpButton.click(function() {
    $('.tooltip').css({
      visibility: 'visible',
    });
  });

  $showHelpButton.hover(
    function() {
      $(this).css({
        'background-color': "#ddd",
      });
    },
    function() {
      $(this).css({
        'background-color': "#eee",
      });
    }
  );
});
