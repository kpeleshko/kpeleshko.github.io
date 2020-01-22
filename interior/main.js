let mainMenuStatus = false;

let mainMenu = function() {
    let getMainMenu = document.querySelector(".main-menu");

    if(mainMenuStatus) {
        getMainMenu.style.visibility = "hidden";
        mainMenuStatus = false;
    } else {
        getMainMenu.style.visibility = "visible";
        mainMenuStatus = true;
    }
}

// $('.portfolio__galery').slick({
    
//     slidesToShow: 4,
//     responsive: [
//     {
//         breakpoint: 768,
//         settings: {
//         slidesToShow: 1
//         }
//     },
    
//     ]
//     });


    $('.portfolio__galery').slick({
        focusOnSelect: true,
        slidesToShow: 4,
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });