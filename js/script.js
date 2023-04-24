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

   //sample image popup
   $('.image-popup-fit-width').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      image: {
         verticalFit: false
      }
   });


   // review carousel
   $('.reviews .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   })

});

