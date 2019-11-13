$(document).ready(function() {
  $('.search').click(function () {
    if ($(window).width() < 1161) {
      $('.search__inp').toggleClass('open').focus();
    }
    else {
      $('.search__inp').slideToggle(function () {
        $(this).focus();
      })
    }
  });
  $('.burger').click(function () {
    $('.subheader').slideToggle(function () {
      if ($(this).is(':hidden')){
        $('.search__inp').removeClass('open');
      }
    });
    $(this).toggleClass('active');
  });
  // $(function(){
  //   $(document).click(function(event) {
  //     if ($(event.target).closest(".subheader",".header").length) return;
  //     $(".search__inp" ).slideUp();
  //   });
  // });
  // $('.search__inp').on('submit', function(){
  //   let value = $(".search__inp").val();
  //   if (value.length>0){
  //     return true
  //   }
  //   return false;
  // });

  if ( $(window).width() < 1161) {
    const slider = document.querySelector('.calculator__menu');
    slider.remove();
    document.querySelector('.subheader>.container').appendChild(slider);
    const search = document.querySelector('.search');
    search.remove();
    document.querySelector('.header>.container').appendChild(search);
    const searchInp = document.querySelector('.search__inp');
    searchInp.remove();
    document.querySelector('.header>.container').appendChild(searchInp);
  }

  // popup();
  // slick();
  // burger();
  // search();
});