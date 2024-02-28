document.addEventListener('DOMContentLoaded', function() {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'none';

//   const draggables = document.querySelectorAll('.section-header__img');
//   let highestZIndex = 1;

//   function handleTouchStart(event) {
//       const draggable = event.target;
//       draggable.style.zIndex = highestZIndex++;
//       draggable.style.transition = 'none';

//       const touch = event.targetTouches[0];
//       let initialX = touch.clientX - draggable.getBoundingClientRect().left;
//       let initialY = touch.clientY - draggable.getBoundingClientRect().top;

//       function onTouchMove(event) {
//           const touch = event.targetTouches[0];
//           let newX = touch.clientX - initialX;
//           let newY = touch.clientY - initialY;

//           newX = Math.min(Math.max(newX, 0), window.innerWidth - draggable.offsetWidth);
//           newY = Math.min(Math.max(newY, 0), window.innerHeight - draggable.offsetHeight);

//           draggable.style.left = newX + 'px';
//           draggable.style.top = newY + 'px';

//           event.preventDefault();
//       }

//       function onTouchEnd() {
//           document.removeEventListener('touchmove', onTouchMove);
//           document.removeEventListener('touchend', onTouchEnd);
//           document.removeEventListener('touchmove', preventScroll);
//       }

//       document.addEventListener('touchmove', onTouchMove);
//       document.addEventListener('touchend', onTouchEnd);
//       document.addEventListener('touchmove', preventScroll);
//   }

//   function handleTouchMove(event) {
//       event.preventDefault();
//   }

//   draggables.forEach(draggable => {
//       draggable.classList.add('on');
//       draggable.addEventListener('touchstart', handleTouchStart);
//       draggable.addEventListener('touchmove', handleTouchMove);
//   });

const draggables = document.querySelectorAll('.section-header__img');
let highestZIndex = 1;

function handleTouchStart(event) {
    const draggable = event.target;
    draggable.style.zIndex = highestZIndex++;
    draggable.style.transition = 'none';

    const touch = event.targetTouches[0];
    let initialX = touch.clientX - draggable.getBoundingClientRect().left;
    let initialY = touch.clientY - draggable.getBoundingClientRect().top;

    function onTouchMove(event) {
        const touch = event.targetTouches[0];
        let newX = touch.clientX - initialX;
        let newY = touch.clientY - initialY;

        newX = Math.min(Math.max(newX, 0), window.innerWidth - draggable.offsetWidth);
        newY = Math.min(Math.max(newY, 0), window.innerHeight - draggable.offsetHeight);

        draggable.style.left = newX + 'px';
        draggable.style.top = newY + 'px';

        event.preventDefault();
    }

    function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        document.removeEventListener('touchmove', preventScroll);
    }

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchmove', preventScroll);
}

function handleTouchMove(event) {
    event.preventDefault();
}

function handleMouseDown(event) {
    const draggable = event.target;
    draggable.style.zIndex = highestZIndex++;
    draggable.style.transition = 'none';

    let initialX = event.clientX - draggable.getBoundingClientRect().left;
    let initialY = event.clientY - draggable.getBoundingClientRect().top;

    function onMouseMove(event) {
        let newX = event.clientX - initialX;
        let newY = event.clientY - initialY;

        newX = Math.min(Math.max(newX, 0), window.innerWidth - draggable.offsetWidth);
        newY = Math.min(Math.max(newY, 0), window.innerHeight - draggable.offsetHeight);

        draggable.style.left = newX + 'px';
        draggable.style.top = newY + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

draggables.forEach(draggable => {
    draggable.classList.add('on');
    draggable.addEventListener('touchstart', handleTouchStart);
    draggable.addEventListener('touchmove', handleTouchMove);
    draggable.addEventListener('mousedown', handleMouseDown);
});


  //

  const draggablesmessage = document.querySelectorAll('.draggable');
  let highestMessageZIndex = 7;

  draggablesmessage.forEach(draggable => {
      draggable.addEventListener('touchstart', function(event) {
          draggable.style.zIndex = highestMessageZIndex++;
          draggable.style.transition = 'none';
      });
  });

  const envelope = document.querySelector('#envelope-wrapper');
  envelope.addEventListener('click', function(event) {
      const lid = event.target.closest('.lid');
      const envelopeClicked = event.target.closest('.envelope');
      
      if (lid || envelopeClicked) {
          envelope.querySelectorAll('.lid').forEach(item => item.classList.toggle('show'));
          envelope.querySelectorAll('.heart').forEach(item => item.classList.toggle('open'));

          envelope.querySelectorAll('.messages').forEach(message => {
              if (message.dataset.animation === 'normal') {
                  message.style.animationName = `message-animation-${message.dataset.number}`;
                  message.dataset.animation = 'reverse';
                  message.classList.remove('hide');
              } else if (message.dataset.animation === 'reverse') {
                  message.style.animationName = 'none';
                  message.classList.add('hide');
                  message.dataset.animation = 'normal';
              }
          });

          envelope.querySelector('.message-future').classList.toggle('show');
      }
  });

  var swiper = new Swiper(".service__wrapper", {
      effect: "cards",
      grabCursor: true,
      keyboard: { enabled: true },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  });

  const revealOnScrollElements = document.querySelectorAll('.reveal-on-scroll');

  function isInView(element) {
      const rect = element.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150);
  }

  function scrollClassToggle() {
      revealOnScrollElements.forEach(el => isInView(el) && el.classList.add('show'));
  }

  window.addEventListener('scroll', scrollClassToggle);
});

function preventScroll(event) {
  event.preventDefault();
}