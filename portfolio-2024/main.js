document.addEventListener('DOMContentLoaded', function() {
    // Hide the spinner when the page is loaded
    document.getElementById('spinner').style.display = 'none';



    // let path = document.querySelector('#path');
    //     let drawLength;


    //     fillSvgPaths()
    //     document.addEventListener('scroll', fillSvgPaths);

    //     function fillSvgPaths() {
    //         let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //         let pathLength = path.getTotalLength();

    //         path.style.strokeDasharray = pathLength;
    //         //path.style.strokeDashoffset = pathLength;

    //         drawLength = pathLength * scrollPercentage;
    //         //drawLength = pathLength * scrollPercentage;

    //         path.style.strokeDashoffset = (pathLength - drawLength);
    //     }



    // Get all elements with class .section-header__img
    const draggables = document.querySelectorAll('.section-header__img');

    // Loop through each element and add the .on class
    draggables.forEach(draggable => {
        draggable.classList.add('on');
    });

    let highestZIndex = 1;
  draggables.forEach(draggable => {
    draggable.addEventListener('touchstart', function(event) {
        draggable.style.zIndex = highestZIndex++;
        draggable.style.transition = 'none';
      
      const touch = event.targetTouches[0];
      let initialX = touch.clientX - draggable.getBoundingClientRect().left;
      let initialY = touch.clientY - draggable.getBoundingClientRect().top;

      function onTouchMove(event) {
        const touch = event.targetTouches[0];
        let newX = touch.clientX - initialX;
        let newY = touch.clientY - initialY;
        
        // Constrain the element within the viewport bounds
        newX = Math.min(Math.max(newX, 0), window.innerWidth - draggable.offsetWidth);
        newY = Math.min(Math.max(newY, 0), window.innerHeight - draggable.offsetHeight);
        
        draggable.style.left = newX + 'px'; /* Update left position */
        draggable.style.top = newY + 'px'; /* Update top position */
        
        event.preventDefault(); // Prevent default touchmove behavior to prevent scrolling
      }

      function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        // Remove the event listener for preventing scrolling after dragging ends
        document.removeEventListener('touchmove', preventScroll);
      }

      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
      // Add event listener for preventing scrolling after dragging ends
      document.addEventListener('touchmove', preventScroll);
    });

    draggable.addEventListener('touchmove', function(event) {
      event.preventDefault(); // Prevent scrolling while dragging
    });
  });

  // Prevent page scrolling while dragging
  function preventScroll(event) {
    event.preventDefault();
  }





  // Get all elements with class .draggable
const draggablesmessage = document.querySelectorAll('.draggable');

let highestMessageZIndex = 7;

draggablesmessage.forEach(draggable => {
    draggable.addEventListener('touchstart', function(event) {
        draggable.style.zIndex = highestMessageZIndex++;
        draggable.style.transition = 'none';

    });
});






  const envelope = document.querySelector('#envelope-wrapper');

  // Attach a click event listener to the envelope element
  envelope.addEventListener('click', function(event) {
      // Check if the clicked element or any of its ancestors have the class "lid"

      if (event.target.closest('.lid') || event.target.closest('.envelope')) {
          console.log('Clicked on element with class "lid"');
          envelope.querySelectorAll('.lid').forEach(item => {item.classList.toggle('show');})
          envelope.querySelectorAll('.heart').forEach(item => {item.classList.toggle('open');})
          
          envelope.querySelectorAll('.messages').forEach((message, i) => {

            if (message.dataset.animation === 'normal') {
                message.style.animationName = 'message-animation-' + message.dataset.number;
                message.dataset.animation = 'reverse'
                message.classList.remove('hide');
                console.log('Animation --- 1 --- up');
            

            } else if (message.dataset.animation === 'reverse') {

                message.style.animationName = 'none'
                message.classList.add('hide');
                message.dataset.animation = 'normal'
                console.log('Animation --- 2 --- down');
                
            }
        });
        envelope.querySelector('.message-future').classList.toggle('show');
      } 
  });

  
  











  // const outputDiv = document.querySelector('.section-title--text-print');
  // const txt = `1. ДОСВІД - до того як прийти у нішу 'створення сайтів під ключ - 3 роки програмувала в українських та американських ІТ компаніях. Працювала у великих командах над проектами світового масштабу. Знаю усі секрети та прийоми, які використовують світові гіганти на своїх сайтах та у маркетингу для кращого залучення та збільшення продажів.
  //   2. ПІДХІД - я вже пройшла етап 'беру в роботу все, за що платять :))'. Зараз працюю лише з тими проектами, які відгуються - це означає, що я маю час та сили вникати у кожен проект, шукати індивідуальний підхід та давати максимальний результат. 
  //   3. ЛЮБОВ - як до візуальної картинки, так і до технічної (програмування в крові))), так і до продаж (для цього ж сайти створюються). Якщо ви теж закохані у свій товар/послугу - лише уявіть, яке комбо стається :) 
  //   And that's all.`
  // // Create an Intersection Observer
  // const observer = new IntersectionObserver((entries, observer) => {
  //   entries.forEach(entry => {
  //     // Check if 30% of the target is visible
  //     if (entry.intersectionRatio >= 0.4) {
  //       observer.unobserve(entry.target); // Stop observing once condition is met
        
  //       // Variable to keep track of current character being typed:
  //       let i = 0; 
  
  //       // Execute a function every 50 milliseconds using setInterval():
  //       const intervalId = setInterval(() => {
  //         outputDiv.textContent += txt.charAt(i); // Write current character to output div
  //         i++; // Increase the value of i by 1
  
  //         // Check if i has reached the end of the text
  //         if (i === txt.length) {
  //           clearInterval(intervalId); // Stop the setInterval() loop once all characters are typed
  //         }
  //       }, 10);
  //     }
  //   });
  // }, { threshold: 0.4 });
  
  // // Target the section 'section-why'
  // const targetSection = document.querySelector('.section-why');
  // observer.observe(targetSection);

  







  var swiper = new Swiper(".service__wrapper", {
    effect: "cards",
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





// const outputDiv = document.querySelector('.section-title--text-print');

// const txt = `- до того як прийти у <span class="highlight">нішекрети та прийоми</span>, які використовують світові гіганти на своїх сайтах та у маркетингу для кращого залучення та збільшення продажів. `;

// // Variable to keep track of current character being typed:
// let i = 0; 

// // Execute a function every 50 milliseconds using setInterval():
// const intervalId = setInterval(() => {
//   outputDiv.textContent += txt.charAt(i); // Write current character to output div
//   i++; // Increase the value of i by 1

//   // Check if i has reached the end of the text
//   if (i === txt.length) {
//     clearInterval(intervalId); // Stop the setInterval() loop once all characters are typed
//   }
// }, 50);




// const sectionProjectsEl = document.getElementById('section-projects');
// const sectionReviewEl = document.getElementById('section-review');
// const sectionReviewWrEl = document.querySelector('.section-review__wr');

//   // Create a new Intersection Observer
// const projectSectionObs = new IntersectionObserver(
//     function(
//         entries,
//         reviewSectionObs
//     ) {
       
//             entries.forEach(entry => {
//                 console.log('Entry:', entry); // Debugging statement
                

    
//                 if (!entry.isIntersecting) {
//                     console.log('SHOWWW!!!!', entry.target.id);
//                     sectionReviewWrEl.classList.add('show');
//                     sectionReviewWrEl.querySelector('.review-front').classList.add('fix');
//                 }
//             });
//     }
// )
// const reviewSectionObs = new IntersectionObserver(
//     function(
//         entries,
//         reviewSectionObs
//     ) {
       
//             entries.forEach(entry => {
//                 console.log('Entry:', entry); // Debugging statement
    
//                 if (!entry.isIntersecting) {
//                     console.log('HIDEEEE!!!!', entry.target.id);
//                     sectionReviewWrEl.classList.remove('show');
//                     sectionReviewWrEl.querySelector('.review-envelope').classList.remove('fix');

//                 }
//             });
//     }
// )
// projectSectionObs.observe(sectionProjectsEl);
// reviewSectionObs.observe(sectionReviewEl);




// const myElement = document.getElementById('section-review');

// // Create a new Intersection Observer
// const reviewSectionObs = new IntersectionObserver(
//     function(entries, reviewSectionObs) {
//         entries.forEach(entry => {
//             console.log('Entry:', entry); // Debugging statement

//             // Check if the section is fully in the viewport
//             if (entry.isIntersecting && entry.intersectionRatio === 1) {
//                 console.log('Section is fully in viewport:', entry.target.id);
//             } else {
//                 console.log('Section is not fully in viewport:', entry.target.id);
//             }
//         });
//     },
//     { threshold: 1 } // Use threshold 1 to detect when the section is fully visible
// );

// reviewSectionObs.observe(myElement);

});