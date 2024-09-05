"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.button-burger')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

const maxWidth = 600

let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.menu-footer__title')){
		if (window.innerWidth > maxWidth) {
			e.preventDefault()
		}
	}
}

let spoilersFold = (footerSpoiler, isOpen) => {
	footerSpoiler.forEach(footerSpoiler => {
			footerSpoiler.open = isOpen
		})
}

document.addEventListener('click', documentActions)

// footer spoilers

const footerSpoiler = document.querySelectorAll('.menu-footer__wrapper')
if (footerSpoiler.length) {
	const matchMedia = window.matchMedia(`(max-width: ${maxWidth}px)`)
	spoilersFold(footerSpoiler, !matchMedia.matches)
	matchMedia.addEventListener('change', () => {
		// if (matchMedia.matches) {
		// 	spoilersFold(footerSpoiler, false)
		// } else {
		// 	spoilersFold(footerSpoiler, true)
		// }
		spoilersFold(footerSpoiler, !matchMedia.matches)
	})
}

// let buyButton = document.querySelector('.buy-button')

// const removeContainer = document.querySelector('.collections__content')

// buyButton.beforeEnd = removeContainer

function moveElementOnResize () {
	const elementToMove = document.querySelector('.link-to-buy')
	const targetBlock = document.querySelector('.collections__content')

	function resize() {
		if(window.innerWidth < 980) {
			targetBlock.appendChild(elementToMove)
		} else {
			const originalBlock = document.querySelector('.collections__article')
			originalBlock.append(elementToMove)
		}
	}

	window.addEventListener('load', resize)
	window.addEventListener('resize', resize)
}

moveElementOnResize();

// top slider clone 
let copy = document.querySelector(".slider__body").cloneNode(true);
document.querySelector(".slider__top").appendChild(copy);


// slider before footer --- hero slide
const swiper = new Swiper('.best-sellers__swiper', {
  // Optional parameters
	loop: true,
	// slidesPerView: 4,
	// spaceBetween: 24,

	    // Responsive breakpoints
  breakpoints: {
	 320: {
		slidesPerView: 1.5,
      spaceBetween: 12
	 },
    420: {
      slidesPerView: 2.2,
      spaceBetween: 15
    },
    580: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
	},
});
