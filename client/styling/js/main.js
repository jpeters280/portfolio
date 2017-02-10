        // loader 
      $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
      })

        // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_header').addClass('sticky');
            } else {
                $('.main_header').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });



        // wow js
    
    new WOW().init();

        // nice scroll

      $(document).ready(

        function() { 

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      ); 

      // portfolio filter

      $(function () {
        
        var filterList = {
        
          init: function () {
          
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
              seletors:{
                target: '.portfolio',
                filter: '.filter'
              },
              animation: {
                effectsOut: 'fade translateX(-100%)'
              },
              // // targetSelector: '.portfolio',
              // // filterSelector: '.filter',
              // effects: ['fade'],
              // easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });       
          
          },
          
          hoverEffect: function () {
          
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
              }   
            );        
          
          }

        };
        
        // Run the show!
        filterList.init();
        
        
      }); 


      // Skillset js 

      var object = [

        {

          'headline':'HTML & CSS',
          'value':4,
          'length':5,
          'description':'Knowlageable in HTML(5) and CSS.'

        },
        {

          'headline':'JavaScript & jQuery',
          'value':4,
          'length':5,
          'description':'Experience with object-oriented JavaScript and DOM manipulation in aiding UI.'

        },
        {

          'headline':'Python',
          'value':3,
          'length':5,
          'description':'Proficient in the use of Python'

        },
        {

          'headline':'Angular',
          'value':4,
          'length':5,
          'description':'This page is written in it ... sorry, what a <b><i>MEAN</i></b> thing to say<br>... i crack me up <b>&#9786;</b>'

        },

        {

          'headline':'Ruby',
          'value':4,
          'length':5,
          'description':'Adept with the use of Ruby'

        },
        {

          'headline':'Databases',
          'value':5,
          'length':5,
          'description':'Skilled in the integration, structuring, and use of relational and non-relational databases.'

        }

      ];

      $(document).ready(function(){

        $("#skillset").skillset({

          object:object,
          duration:40

        });

      });


        // Owl carousel

      $(document).ready(function() {
               
        $("#testimonial_carousel").owlCarousel({
                    margin: 10,
                    transitionStyle : "backSlide",
                    responsiveClass:true,
                    responsive:{
                      0:{
                          items:1,
                          nav:false,
                          loop:true
                      },
                      600:{
                          items:2,
                          nav:false,
                          loop:true
                      },
                      960:{
                          items:3,
                          nav:false,
                          loop:true
                      }
                    },
                    autoplayHoverPause:false,
                    autoplay:true,
                    autoplayTimeout:2000,
                    dots:false
});


               
      });

      // Up to top js

      $(document).ready(function() {
        
        $().UItoTop({ easingType: 'easeOutQuart' });
        
      });