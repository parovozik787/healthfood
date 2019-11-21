$(document).ready(function() {
  burger();
  search();
  slick();
  accordion();
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
  select();
});