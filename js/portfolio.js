(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.projects-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.projects-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        $('#success').html("");
        $("#sendMessageButton").attr("disabled", false);
        $("#sendMessageButton").removeClass("disabled");
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  // Success message for contact form
  $(function () {
      $("#contactForm input,#contactForm textarea").not("[type=submit]").jqBootstrapValidation({
          submitSuccess: function($form, event) {
              console.log("Success");
              var name = $("input.name-field").val();
              $("#sendMessageButton").attr("disabled", true);
              $("#sendMessageButton").addClass("disabled");
              $('#success').html("<div class='alert alert-success'>");
              $('#success > .alert-success').append("<strong>Thank you, " + name + "! Your message has been sent. I will be in touch soon.</strong>");
              $('#success > .alert-success').append('</div>');
          }
      });
  });
  
})(jQuery); // End of use strict

// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };
//
// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];
//
//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//
//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//
//   var that = this;
//   var delta = 150 - Math.random() * 100;
//
//   if (this.isDeleting) { delta /= 2; }
//
//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     // this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }
//
//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };
//
// var loaded = true;
// window.onload = function () {
//   loaded = false;
// }
// document.onscroll = function () {
//   var y = $(this).scrollTop();
//   var x = $("#hello").position();
//   if ((x.top > $(window).height()/3) && !loaded) {
//     loaded = true;
//     var elements = document.getElementsByClassName('txt-rotate');
//     for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-rotate');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtRotate(elements[i], JSON.parse(toRotate), period);
//       }
//     }
//   }
// }
// window.onload = function() {

  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  // document.body.appendChild(css);
// };
