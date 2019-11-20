$(document).ready(function() {
  document.querySelector('.filter').addEventListener('click', () => filter.classList.toggle('active'));
  const filterParams = [...document.querySelectorAll('.filter > .filter__item')];
  const filter = document.querySelector('.filter');
  filterParams.forEach(el => {
    el.addEventListener('click', function () {
      if (filter.classList.contains('active') && !el.classList.contains(('filter__item--active'))) {
        document.querySelector('.filter__item--active').classList.remove('filter__item--active');
        el.classList.add('filter__item--active');
      }
    });
  });
  burger();
  search();
  slick();
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

});