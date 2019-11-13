$(document).ready(function() {
  $('.search').click(function () {
    $('.search__inp').slideToggle(function () {
          $(this).focus();
    })
  });
  $(function(){
    $(document).click(function(event) {
      if ($(event.target).closest(".subheader").length) return;
      $(".search__inp" ).slideUp();
    });
  });
  
  // popup();
  // slick();
  // burger();
  // search();
});