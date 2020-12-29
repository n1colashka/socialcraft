// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {

	function initReviewsSlider() {

		if (document.querySelector('.reviews__slider')) {
			const reviewsSlider = new Swiper('.reviews__slider', {
				slidesPerView: 3,
				spaceBetween: 40,
				loop: true,
				// Navigation arrows
				navigation: {
					nextEl: '.reviews__button-next',
					prevEl: '.reviews__button-prev',
				},
			})
		}
		
	}

	function initAccordion() {
		if (document.querySelector('.questions')) {
			document.querySelector('.questions__list').addEventListener('click', (e) => {
				if (e.target.closest('.questions__item-head')) {
					document.querySelectorAll('.questions__item').forEach(item => {
						item.classList.remove('open');
					})
					e.target.closest('.questions__item').classList.toggle('open');
				}
			})
		}
		
	}
	
	initReviewsSlider();
	initAccordion();

})
