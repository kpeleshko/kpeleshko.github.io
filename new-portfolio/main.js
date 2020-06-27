// COLOR CHANGER
let allBtn = document.querySelectorAll(".changer__color");
let root = document.querySelector(':root');
let colors = {
	"color1": ['white', 'black'],
	"color2": ['rgb(32, 29, 29)', 'rgb(179, 152, 162)'],
	"color3": ['rgb(87, 194, 240)', 'rgb(29, 18, 4)'],
};
for(let i = 0; i<allBtn.length; i++) {
	allBtn[i].addEventListener('click', (e) => {
		switch(allBtn[i].dataset.color) {
			case 'colorGroup1': 
				root.style.setProperty('--color-main', colors.color1[0]);
				root.style.setProperty('--color-secondary', colors.color1[1]);
				break;
			case 'colorGroup2': 
				root.style.setProperty('--color-main', colors.color2[0]);
				root.style.setProperty('--color-secondary', colors.color2[1]);
				break;
			case 'colorGroup3': 
				root.style.setProperty('--color-main', colors.color3[0]);	
				root.style.setProperty('--color-secondary', colors.color3[1]);
				break;
		}
	});
}


// //PORTFOLIO GALLERY
// function changeImg(largeLink, mediumLink, smallLink) {
// 	document.querySelector(".portfolio__img--large").src = largeLink;
// 	document.querySelector(".portfolio__img--medium").src = mediumLink;
// 	document.querySelector(".portfolio__img--small").src = smallLink;
// }

// function removeImg() {
// 	document.querySelector(".portfolio__img--large").src = '';
// 	document.querySelector(".portfolio__img--medium").src = '';
// 	document.querySelector(".portfolio__img--small").src = '';
// }

// MOVE NAV
const nav = document.querySelector('.nav');
const header = document.querySelector('.nav__wrapper');
const headerOptions = {};
const headerObserver = new 
	IntersectionObserver(function(
		entries, 
		headerObserver){
			entries.forEach(entry => {
				if(!entry.isIntersecting) {
					nav.classList.remove('nav--horizontal');
					nav.classList.add('nav--vertical');
				} else {
					nav.classList.add('nav--horizontal');
					nav.classList.remove('nav--vertical');
				}
			});
		},
		headerOptions);
headerObserver.observe(header);



// FADE IN 
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
	threshold: 1,
	rootMargin: '0px 0px -50px 0px'
};
const appearOnScroll = new IntersectionObserver(
	function(
		entries,
		appearOnScroll
	) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return;  
			} else {
				entry.target.classList.add('active');
				appearOnScroll.unobserve(entry.target);
			}
		})
	}, 
	appearOptions);
faders.forEach(fader => {
	appearOnScroll.observe(fader);
})



// MOVE BLOCK left
const movesLeft = document.querySelectorAll('.move-el-left');
const moveOptionsLeft = {
	rootMargin: '0px 0px -100px 0px'
};

const moveOnScrollLeft = new IntersectionObserver(
	function(
		entries,
		moveOnScrollLeft
	) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.toggle('move-el-left--active');
				moveOnScrollLeft.unobserve(entry.target);
			}
		})
	}, 
	moveOptionsLeft);
movesLeft.forEach(move => {
	moveOnScrollLeft.observe(move);
})


// MOVE BLOCK right
const movesRight = document.querySelectorAll('.move-el-right');
const moveOptionsRight = {
	rootMargin: '0px 0px -100px 0px'
};

const moveOnScrollRight = new IntersectionObserver(
	function(
		entries,
		moveOnScrollRight
	) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.toggle('move-el-right--active');
				moveOnScrollRight.unobserve(entry.target);
			}
		})
	}, 
	moveOptionsRight);
movesRight.forEach(move => {
	moveOnScrollRight.observe(move);
})



// STICKY ELEMENT
function isVisible (ele) {
	const { top, bottom } = ele.getBoundingClientRect();
	const vHeight = (window.innerHeight || document.documentElement.clientHeight);
	return (
	  (top > 0 || bottom > 0) &&
	  top < vHeight
	  );
}
let stickyElements = document.querySelectorAll('.sticky-to');
let titlesRight = document.querySelectorAll('.section-title__text--right');
let titlesLeft = document.querySelectorAll('.section-title__text--left');
let paragraph = document.querySelectorAll('.paragraph');

window.addEventListener('scroll', () => {
stickyElements.forEach(elem => {
	if (isVisible(elem)) {
		document.querySelector('.round-text-btn').classList.add('round-text-btn--sticky');
	};
});

scrollX = window.scrollY

titlesRight.forEach(title => {
	for(let i = 0; i <= scrollX; i++) {
		title.style.transform = `translateX(${scrollX}px)`
	}
})
titlesLeft.forEach(title => {
	for(let i = 0; i <= scrollX; i++) {
		title.style.transform = `translateX(-${scrollX}px)`
	}
})
}, false);


// Active link switching
$(document).ready(function() {
  
	var scrollLink = $('.scroll');
	$(window).scroll(function() {
	  var scrollbarLocation = $(this).scrollTop();
	  
	  scrollLink.each(function() {
		
		var sectionOffset = $(this.hash).offset().top - 20;
		
		if ( sectionOffset <= scrollbarLocation ) {
		  $(this).addClass('link--active');
		  $(this).siblings().removeClass('link--active');
		}
	  })
	  
	})
	
  })