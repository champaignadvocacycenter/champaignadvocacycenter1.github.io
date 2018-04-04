// NAVBAR RESIZING
window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 30;
        shrinkOnNav = 65;
        navlist = document.getElementById("navlist");
        navbar = document.getElementById("navbar");

    if (distanceY > shrinkOn) {
        navlist.classList.add("smaller");
    } else {
        navlist.classList.remove("smaller");
    }

    if (distanceY > shrinkOnNav ){
        navbar.classList.add("navBarSmall");
        navbar.classList.remove("navBarLarge");
    } else {
        navbar.classList.remove("navBarSmall");
        navbar.classList.add("navBarLarge");
    }

});


// SMOOTH SCROLLING
$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
})