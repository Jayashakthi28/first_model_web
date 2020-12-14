$(document).ready(function (){ 
    $nav=$('.nav');
    $toggle=$('.toggle span');
    $toggle.click(function(){
        $nav.toggleClass('collapse');
    })
    $('.owl-carousel').owlCarousel({
        //loop:true,
        autoplay:true,
        autoplayTimeout:3500,
        dots:false,
        nav:true,
        navText:[$('.owl-nav .owl-prev'),$('.owl-nav .owl-next')],
        responsive:{
            1000:{
                items:3,
                nav:true,
                loop:true
            },
            787:{
                items:2,
                nav:true,
                loop:true
            },
            0:{
                items:1,
                nav:true,
                loop:true
            }

        }
    }); 
    $('.contact-us .top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
    AOS.init();
   });