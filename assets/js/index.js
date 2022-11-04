
         function autoPlayYouTubeModal(){
           var trigger = $("body").find('[data-toggle="modal"]');
           trigger.click(function() {
             var theModal = $(this).data( "target" ),
             videoSRC = $(this).attr( "data-theVideo" ), 
             videoSRCauto = videoSRC+"?autoplay=1" ;
             $(theModal+' iframe').attr('src', videoSRCauto);
             $(theModal+' button.close').click(function () {
                 $(theModal+' iframe').attr('src', videoSRC);
             });   
           });
         }
         $(document).ready(function() {
         	autoPlayYouTubeModal();
         });
     
         $(window).scroll(function() {
                 var scrollDistance = $(window).scrollTop();
         
                
                 $('.common-pad').each(function(i) {
                         if ($(this).position().top <= scrollDistance) {
                                 $('menu a.active').removeClass('active');
                                 $('menu a').eq(i).addClass('active');
                         }
                 });
         }).scroll();
         
      
         $(window).scroll(function() {
             var header = $("header");
             $(window).scroll(function() {    
                 var scroll = $(window).scrollTop();
             
                 if (scroll >= 5) {
                     header.addClass('scrolled');
                 } else {
                     header.removeClass('scrolled');
                     $('menu a').removeClass('active');
                 }
             });
         });
         
         $(document).ready(function () {
         
         $('.tabs li').click(function(){
             // debugger;
             $('.tabs li').removeClass('active');    
             $(this).addClass('active'); 
             
             var winner = $(this).attr('data-index');
             $('.cycle-div').removeClass('open');
             $('#'+winner).addClass('open');
             
         }); 
         
         $('.hamburger-icon').click(function(){
             
             $('menu').addClass('open-menu');
             $('body').addClass('menuopen');
         }); 
         
         $('.hamburger-close, menu li').click(function(){
             
             $('menu').removeClass('open-menu');
             $('body').removeClass('menuopen');
         });  
         
        
         
         
         
         
          if (navigator.userAgent.indexOf('Mac OS X') != -1) {
                 $("body").addClass("mac")
             }
         
             
            
             
         $('.tcpop').click(function(){
             
             $('.tc-popup').addClass('open-tc');
             $('body').addClass('hide-scroll');
             
             
         }); 
         
         $('.close').click(function(){
             
             $('.tc-popup').removeClass('open-tc');
             $('body').removeClass('hide-scroll');
             
             
         }); 
         
         
             
         $(window).load(function () {
             $(".scrollbar").customScrollbar();             
         });
         
         
         });
         
         
         
      