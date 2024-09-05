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


// =====================================================
// const innerWidth = window.innerWidth
// const innerHeight = window.innerHeight
// const mainDoc = document.querySelector("main")

// console.log(innerWidth)
// console.log(innerHeight)

// function displayNone() {
//     if (window.innerWidth <= 780) {
//         mainDoc.style.display = "none";
//     } else {
//         mainDoc.style.display = "block"; // Повертаємо відображення, якщо ширина більше 780 пікселів
//     }
// }

// displayNone()

// console.log(navigator.userAgent);

// function getChromeInfo(userAgent) {
// 	 let chromeInfo = userAgent.match(/Chrome\/[\d.]+/);
//     return chromeInfo ? chromeInfo[0] : "Chrome не знайдено";
// }

// let userAgent = navigator.userAgent;
// console.log(getChromeInfo(userAgent));

// let userAgent = navigator.userAgent;
// let isChrome = userAgent.includes("Chrome");
// console.log(isChrome); // Виведе: true або false

// let userAgent = navigator.userAgent;
// let index = userAgent.indexOf("Chrome");
// if (index !== -1) {
//     console.log("Chrome знайдено на позиції:", index);
// } else {
//     console.log("Chrome не знайдено");
// }


// if (navigator.userAgent.includes("Chrome")) {
// 	console.log('Chrome Browser');
// } else {
// 	console.log('Other Browser');
// }

// console.log(navigator.userAgentData.platform);
// console.log(navigator.userAgentData);

// const htmlElement = document.documentElement;

// console.log(htmlElement);

// -------------------------------------------


// const liSel = document.querySelectorAll('.navigation-header__item')

// liSel.forEach((liItem, index) => {
// 	liItem.innerHTML = `<span>New text ${index}</span>`
// 	// liItem.style.background = "red"
// })

const newElement = document.createElement('div.new-div')
newElement.innerHTML = `<span>text</span>`

const page = document.body

page.prepend(newElement)

console.log(newElement);
