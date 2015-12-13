/***** Clock block top animation *****/

topheight = $(".usltop").height(); 

$(window).scroll(function() 
{
   if ($(window).scrollTop() >= (topheight - 100) ) {
     $('.clockcont').css({"padding-top" : "110px" });
   } else {
    $('.clockcont').css({"padding-top" : "0" });
   }
  
});