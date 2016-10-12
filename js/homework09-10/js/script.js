$(function() {

  $('.mySelectBoxClass').customSelect();

  $('.drop-down-menu').hover(
    function() {
      $(this).children('.submenu').show();
    },
    function() {
      $(this).children('.submenu').hide();
    }
  )
});
