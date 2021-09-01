// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
        $('.header').addClass('sticky');
        $('.nav-link').removeClass('text-white');
        $('#logoImg').attr('src','../img/logo.png');
    } else {
        $('.header').removeClass('sticky');
        $(".nav-link").addClass('text-white');
        $('#logoImg').attr('src','../img/logo_Avii.png');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.header').hasClass('open-nav')) {
        $('.header').removeClass('open-nav');
    } else {
        $('.header').addClass('open-nav');
    }
});

$('.main_h li a').click(function () {
    if ($('.header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.header').removeClass('open-nav');
    }
});

// navigation scroll 
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
