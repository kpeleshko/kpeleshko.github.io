'use strict'

$('.slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 asNavFor: '.slides__wrapper'
});
$('.slides__wrapper').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: false,
 asNavFor: '.slider',
 centerMode: true,
 focusOnSelect: true,
 responsive: [{
     breakpoint: 1190,
     settings: {
       slidesToShow: 5,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 850,
     settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 650,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 400,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
     }
   }
 ]
});
