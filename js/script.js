$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".navigation").css({ "background-color": "white" })
            $(".navigation").addClass('shadow');
            $(".logo-default").css({ "display": "inline-block" });
            $(".logo-white").css({ "display": "none" });
            $(".nav-link").css({ "color": "#000" });
        }
        else {
            $(".navigation").css({ "background-color": "transparent" })
            $(".logo-default").css({ "display": "none" });
            $(".logo-white").css({ "display": "inline-block" });
            $(".nav-link").css({ "color": "#fff" });
            $(".navigation").removeClass('shadow');
        }
    });


    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    AOS.init({
        duration: 650,
        once: true
    });
});