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
});