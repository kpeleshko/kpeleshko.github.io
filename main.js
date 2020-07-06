(function () {

	const selectors = {
		'root': document.querySelector(':root'),
		'changeThemeColorBtn': document.querySelectorAll('.changer__color'),
		'header': document.querySelector('.main-header'),
		'nav': document.querySelector('.nav'),
		'faders': document.querySelectorAll('.fade-in'),
		'moveElLeft': document.querySelectorAll('.move-el-left'),
		'moveElRight': document.querySelectorAll('.move-el-right'),
		'stickyElements': document.querySelectorAll('.sticky-to'),
		'titlesRight': document.querySelectorAll('.section-title__text--right'),
		'titlesLeft': document.querySelectorAll('.section-title__text--left'),
	}

	const observersOption = {
		'appearOptions': {
			threshold: 1,
			rootMargin: '0px 0px -50px 0px'
		},
		'moveElOptions': {
			rootMargin: '0px 0px -100px 0px'
		}
	};

	const observers = {
		'header': new IntersectionObserver(moveNavigation, {}),
		'appearOnScroll': new IntersectionObserver(appearOnScroll, observersOption.appearOptions),
		'moveElLeftOnScroll': new IntersectionObserver(moveElLeftOnScroll, observersOption.moveElOptions),
		'moveElRightOnScroll': new IntersectionObserver(moveElRightOnScroll, observersOption.moveElOptions),
	}

	const themeColors = [
		['white', 'black'],
		['rgb(32, 29, 29)', 'rgb(179, 152, 162)'],
		['rgb(87, 194, 240)', 'rgb(29, 18, 4)']
	];

	// COLOR CHANGER
	function changeThemes(e) {
		const colorNumber = e.currentTarget.dataset.color;
		selectors.root.style.setProperty('--color-main', themeColors[colorNumber][0]);
		selectors.root.style.setProperty('--color-secondary', themeColors[colorNumber][1]);
	};

	// MOVE NAV
	function moveNavigation(entries) {
		entries.forEach(entry => {
			selectors.nav.classList.toggle('nav--horizontal', entry.isIntersecting);
			selectors.nav.classList.toggle('nav--vertical', !entry.isIntersecting);
		})
	};

	// FADE IN
	function appearOnScroll(appearEl) {
		appearEl.forEach(el => {
			if (el.isIntersecting) {
				el.target.classList.add('active');
				observers.appearOnScroll.unobserve(el.target);
			}
		})
	};

	// MOVE BLOCK left
	function moveElLeftOnScroll(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.toggle('move-el-left--active');
				observers.moveElLeftOnScroll.unobserve(entry.target);
			}
		})
	};

	// MOVE BLOCK right

	function moveElRightOnScroll(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.toggle('move-el-right--active');
				observers.moveElRightOnScroll.unobserve(entry.target);
			}
		})
	};
	
	selectors.moveElRight.forEach(move => {
		observers.moveElRightOnScroll.observe(move);
	})

	// CHECK WHETHER EL IS VISIBLE OR NOT (needed for sticky el)
	function isVisible(ele) {
		const { top, bottom } = ele.getBoundingClientRect();
		const vHeight = (window.innerHeight || document.documentElement.clientHeight);
		return (
			(top > 0 || bottom > 0) && top < vHeight);
	};

	// STICKY ELEMENT (CIRCLE BTN)
	function stickyElementsOnScroll() {
		selectors.stickyElements.forEach(elem => {
			if (isVisible(elem)) {
				document.querySelector('.round-text-btn').classList.add('round-text-btn--sticky');
			};
		});
	}

	// MOVE SECTION TITLES
	function moveSectionTitles() {
		selectors.titlesRight.forEach(title => {
			if(isVisible(title)) {
				title.style.transform = `translateX(${title.getBoundingClientRect().top}px)`;
			}
		});
		selectors.titlesLeft.forEach(title => {
			if(isVisible(title)) {
				title.style.transform = `translateX(-${title.getBoundingClientRect().top}px)`;
			}
		});

	}

	

	// Active link switching
	//@TODO rewrite it to native js
	$(document).ready(function () {
		var scrollLink = $('.scroll');
		$(window).scroll(function () {
			var scrollbarLocation = $(this).scrollTop();

			scrollLink.each(function () {
				var sectionOffset = $(this.hash).offset().top - 20;
				if (sectionOffset <= scrollbarLocation) {
					$(this).addClass('link--active');
					$(this).siblings().removeClass('link--active');
				}
			})
		})
	})




	function initObservers() {
		observers.header.observe(selectors.header);
		selectors.faders.forEach(fader => observers.appearOnScroll.observe(fader));
		selectors.moveElLeft.forEach(move => observers.moveElLeftOnScroll.observe(move));
	}

	function initEvents() {
		for (let i = 0; i < selectors.changeThemeColorBtn.length; i++) {
			selectors.changeThemeColorBtn[i].addEventListener('click', changeThemes);
		};

		window.addEventListener('scroll', () => {
			stickyElementsOnScroll();
			moveSectionTitles();
		});
	}

	initEvents();
	initObservers();
})()