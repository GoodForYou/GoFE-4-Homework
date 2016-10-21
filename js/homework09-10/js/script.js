$(function() {

  $('.mySelectBoxClass').customSelect();

  $('.drop-down-menu').hover(
    function() {
      $(this).children('.submenu').show();
    },
    function() {
      $(this).children('.submenu').hide();
    }
  );

  $(".menu li").hover(
    function () {
      $(this).animate({
        backgroundColor:"#ff4300",
      }), 250 },
      function () {
        $(this).animate({
          backgroundColor:"#ffd73a",
        }), 250 });
});
