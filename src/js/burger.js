function burger() {
    $('.burger').click(function () {
        $('.subheader').slideToggle(function () {
            if ($(this).is(':hidden')) {
                $('.search__inp').removeClass('open');
            }
        });
        $(this).toggleClass('active');
    })
}