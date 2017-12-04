$(function() {
    
    //Меню для секции "header"
    $('#header .toggle-menu').click(function() {
        $(this).toggleClass('on');
        $('#header .main-menu').slideToggle();
        return false;
    });
    
    //Меню для секции "footer"
    $('#footer .toggle-menu').click(function() {
        $(this).toggleClass('on');
        $('#footer .main-menu').slideToggle();
        return false;
    });
    
    //Плавный скрол для секции "footer" (изменение высоты меню)
    $("#footer .toggle-menu").click(function() {
        $("html, body").animate({scrollTop: $(document).height() + 200}, 800);
        return false;
    });
    
    //Tabs для секции "about-us"
    $('.wrapper-tab .tab').click(function() {
        $('.wrapper-tab  .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
    
    //Плавный скрол до секции "about-us"
    $(".arrow-down").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop : $("#about-us").offset().top
        }, 800);
    });
    
    //Popup для галереи в секции "works"
   $('.portfolio-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300
    });
    
    //Popup для всплывающих форм
    $("a[href='#callback']").click(function() {
        var dataForm = $(this).data("form");
        var dataText = $(this).data("text");
        $("#callback h4").text(dataText);
        $("#callback [name=admin-data]").val(dataForm);
    }).magnificPopup({
        type:"inline"
    });
    
    //Слайдер для секции "partners"
    $(".carousel-partners").owlCarousel({
        loop:true,
        margin: 30,
        nav: true,
        navText: [" "," "],
        responsive:{
                0:{
                        items:1,
                },
                520:{
                        items:1,
                },
                560:{
                        items:2,
                },
                768:{
                        items:2,
                },
                992:{
                        items:3,
                },
                1200:{
                        items:4,
                }
        }
    });
    
    //Выравнивание по высоте для секции "reviews"
    $(".reviews-text").equalHeights();
    
    //Плавная прокрутка по якорям
    $('a[data-target^="anchor"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('html, body').animate({scrollTop: bl_top}, 800);
    });
    
    //Кнопка "Наверх"
    $('body').append('<div class="top">');
    
    $('body').on("click", ".top", function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }
    });
    
    //Для отправки форм
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            th.find(".success").addClass("active");
            setTimeout(function() {
                // Done Functions
                th.find(".success").removeClass("active");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });
    
    //SVG Fallback для картинок
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

});//redy end
