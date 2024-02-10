$(document).ready(function() {
    $('#login-but').click(function() {
        $('.login-form').toggleClass('active');
        $('#menu-but').removeClass('fa-times');
        $('header nav').removeClass('active');
    })

    $('#menu-but').click(function() {
        $(this).toggleClass('fa-times');
        $('header nav').toggleClass('active');
        $('.login-form').removeClass('active');
    })

    $(window).on('scroll load', function() {
        $('section').each(function() {
            let top = $(window).scrollTop(), height = $(this).height(), offset = $(this).offset().top - 200, id =
                $(this).attr('id');
            if(top >= offset && top < offset + height) {
                $('nav a').removeClass('active');
                $('nav').find(`[href="#${id}"]`).addClass('active');
            }
        })

        $('.login-form').removeClass('active');
        $('#menu-but').removeClass('fa-times');
        $('header nav').removeClass('active');
    })
})