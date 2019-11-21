function accordion() {
    if ( $(window).width() < 768) {
        $('.accordion__title').click(function () {
            $('.accordion__box').slideToggle();
            $(this).toggleClass('active');
        })
    }
}