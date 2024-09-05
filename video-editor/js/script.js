

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.burger-btn__container')) {
		document.documentElement.classList.toggle('menu-open');
	}
})