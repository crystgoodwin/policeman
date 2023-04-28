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

   //single image popup
   $('.image-popup-fit-width').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      image: {
         verticalFit: false
      }
   });

   //gallery image popup
   $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function (item) {
            return item.el.attr('title');
         }
      }
   });


   // review carousel
   $('.reviews .carousel-review').owlCarousel({
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
   });

   // cast carousel
   $('.cast .carousel-cast').owlCarousel({
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
            items: 2
         },
         1000: {
            items: 3
         }
      }
   });

});

