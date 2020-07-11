(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // $(document).ready(function () {
  //   $('body').scrollspy({ target: '.navbar-nav' });

  //   $('.nav-link').on('click', function () {
  //     var clickedItem = $(this).attr('href');
  //     $('html, body').animate({
  //       scrollTop: $(clickedItem).offset().top
  //     }, 600);
  //   });

  // });


  // HOME SLIDER & COURSES & CLIENTS
  $('.home-slider').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    dots: false,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  })

  $('.owl-courses').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      }
    }
  });

  $('.owl-client').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      }
    }
  });


  // SMOOTHSCROLL
  $(function () {
    $('.custom-navbar a, #home a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

})(jQuery);

function onMailSend() {
  var name = document.getElementById("name").value;
  var emailId = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  if (name === '' || emailId === '' || phone === '' || message === '') {
    alert('Please fill all details in the form');
  } else {
    window.location.href = "mailto:pandey_anand68@yahoo.com,pandeyanand904@gmail.com?subject=ANAND ASSOCIATES ENQUIRY&body=Name: " + name + "%0DEmail: " + emailId + "%0DPhone: " + phone + "%0DMessage: " + message;

  }
}
