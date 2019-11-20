function slick() {
  $('.mainArt').slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    speed: 600,
    slidesToShow: 1,
    responsive: [
      { breakpoint: 767,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          pauseOnHover: false,
          pauseOnFocus: false
        }
      }
    ]
  });
}
