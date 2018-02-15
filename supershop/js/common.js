$( document ).ready(function() {

"use strict";

//Banner Slider
$(".main_slider").slick({
    dots: true,
    appendArrows: $(".slider_nav .wrapper .slider_nav_right"),
    appendDots: $(".slider_nav .wrapper .slider_nav_left"),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-right"></span></button>',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
});

//Category
$(".category_title").click(function() {
    $(this).toggleClass("open");
    $(this).next(".category_content").slideToggle(500);
});

//Slider Range
$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 190, 728 ],
    slide: function( event, ui ) {
        $("input[name='min_price']").val("$" + ui.values[ 0 ]);
        $("input[name='max_price']").val("$" + ui.values[ 1 ]);
    }
});

$("input[name='min_price']").val("$" + $( "#slider-range" ).slider( "values", 0 ));
$("input[name='max_price']").val("$" + $( "#slider-range" ).slider( "values", 1 ));

//Cart
$("#cart_btn, .close_cart").click(function() {
    $("#cart").toggleClass("open");
});

//Sign In
$("#sign_in_btn").click(function() {
    $("#black_fill").toggleClass("open");
    $("#sign_in").toggleClass("open");
});

$("#black_fill, .sign_in_close").click(function() {
    $("#black_fill").toggleClass("open");
    $("#sign_in").toggleClass("open");
});

//Search
$(".search_btn").click(function(e) {
    e.preventDefault();
    $("#search_panel input[type='text']").toggleClass("open");
});

//Load More
$(".load_more").click(function(e) {
    e.preventDefault();
    $(".product_list").append('<a href="#" class="product"><div class="product_img"><img src="img/product_1.png" alt="product_1" class="img-responsive"></div><h3 class="product_title">Our Legacy Splash Jacquard Knit</h3><p class="product_descr">Black Grey Plants</p><span class="price">$290</span><span class="new">new</span></a><a href="#" class="product"><div class="product_img"><img src="img/product_1.png" alt="product_1" class="img-responsive"></div><h3 class="product_title">Our Legacy Splash Jacquard Knit</h3><p class="product_descr">Black Grey Plants</p><span class="price">$290</span><span class="new">new</span></a><a href="#" class="product"><div class="product_img"><img src="img/product_1.png" alt="product_1" class="img-responsive"></div><h3 class="product_title">Our Legacy Splash Jacquard Knit</h3><p class="product_descr">Black Grey Plants</p><span class="price">$290</span><span class="new">new</span></a>');

});


//Menu
$(".menu_btn").click(function() {
    $(".main_menu ul").slideToggle();
    return false;
})

});//end ready


