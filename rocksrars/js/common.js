//Preloader
$(window).load(function() {
    $('.loader-inner').fadeOut();
    $('.loader').delay(400).fadeOut('slow');
});

$( document ).ready(function() {
    
    //Плавный скролл по секциям
    $(".navbar-nav a").mPageScroll2id({
        offset: 113
    });

});//end ready


