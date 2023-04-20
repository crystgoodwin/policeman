$(document).ready(function () {
   //navigation bar toggle
   $('#navbar-toggle').click(function () {
      $('.navbar-collapse').slideToggle(400);
   });

   //navbar background change on scroll
   $(window).scroll(function () {
      let pos = $(window).scrollTop();
      if (pos >= 100) {
         $('.navbar').addClass('cng-navbar');
      } else {
         $('.navbar').removeClass('cng-navbar');
      }
   });

   //sample video popup
   $(document).ready(function () {
      $('.popup-youtube').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
      });
   });


   // review carousel
   $('.reviews .owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      nav: false,
      items: 1
   })

});

