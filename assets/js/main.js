$(document).ready(function(){
//    header-style 
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll < 10) {
        $(".header-aria").removeClass("sticky");
       }else{
        $(".header-aria").addClass("sticky");
       }
     });
    
    
    
  $('.active-banner').owlCarousel({
    loop:true,
    margin:10,
      autoplay:true,
      navText:['<i class="fa fa-chevron-right">','<i class="fa fa-chevron-left">'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})
  $('.active-service').owlCarousel({
    loop:true,
    margin:10,
      autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})
  $('.our-client-active').owlCarousel({
    loop:true,
    margin:10,
      navText:['<i class="fa fa-chevron-right">','<i class="fa fa-chevron-left">'],
      autoplay:true,
      autoplayTimeout:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            loop:true
        }
    }
})
//    mixitup
var mixer = mixitup('.active-mix');
//  counter up
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });
//    one page nav
      $('#nav').onePageNav();
    $('#nav,.down').onePageNav({
    scrollOffset: 150
});




});


    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };


    // --------- OWL CARASOL --------


        $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              nav:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:3
                  },
                  1000:{
                      items:5
                  }
              }
          })
      