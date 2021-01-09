(function($) {
    "use strict";
    
    


    jQuery(document).ready(function($) {

      // banner slider
     $('.slider-area').slick({
        autoplay: true,
        speed: 800,
        arrows:false,
        dots: true,
        fade:true
     });

    });

    
}(jQuery));

// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// price slider
//     var priceSlider = document.getElementById("myPriceRange");
//     var priceSliderOutput = document.getElementById("myPriceOutput");

//     priceSliderOutput.innerHTML = priceSlider.value;

//     priceSlider.oninput = function() {
//       priceSliderOutput.innerHTML = this.value;
//     }