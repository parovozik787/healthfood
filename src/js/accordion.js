function accordion() {
    if ( $(window).width() < 768) {
        $('.accordion__title').click(function () {
            $('.accordion__box').slideToggle();
            $(this).toggleClass('active');
        })
    }
    $('.accordion__item ').click(function(e) {
        e.preventDefault();
        let $this = $(this);
        console.log( $this.parent().find('li .accordion__subBox'));
        if ($this.next('.accordion__subBox').hasClass('show')) {
            $this.next('.accordion__subBox').removeClass('show');
            $this.next('.accordion__subBox').slideUp(350);
        } else {
            $this.parent().parent().find('li .accordion__subBox').removeClass('show');
            $this.parent().parent().find('li .accordion__subBox').slideUp(350);
            $this.next('.accordion__subBox').addClass('show');
            $this.next('.accordion__subBox').slideDown(350);
        }
    });
}