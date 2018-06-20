$(function() {
    var $carousel = $('#carousel').ampCarousel({
        width:16,
        height:9,
        responsive:true
    }).css({
        'opacity': 1
    });

    $('.nav-prev').click(function() {
        $carousel.ampCarousel('prev');
    });

    $('.nav-next').click(function() {
        $carousel.ampCarousel('next');
    })

});