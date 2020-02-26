/*
 * Off Canvas
 * --------------------------------------------------
 */
  $(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $(".offcanvas-collapse").toggleClass("open");
      $(".screen-overlay").toggleClass("show");
    });
// Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
          $(".offcanvas-collapse").removeClass("open");
           $(".screen-overlay").removeClass("show");
           $(".container-hamburger").removeClass("change");
        }
        console.log("funcionó el esc");
    });

    $('.offcanvas-header .btn-close').click(function(e){
    	$(".screen-overlay").removeClass("show");
      console.log("entréee");
    }); 


 $('body').scroll(function(){;
    $('.navbar').toggleClass('bg-primary', $(this).scrollTop() > 150);
    console.log("sí entré");
});


$('.container-hamburger').click(function(e){
  $(".container-hamburger").toggleClass("change");
  console.log("entréee");
}); 

});
