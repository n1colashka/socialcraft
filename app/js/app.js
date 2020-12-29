// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {

	function initReviewsSlider() {
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

	initReviewsSlider();

})
