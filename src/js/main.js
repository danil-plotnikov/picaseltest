const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1,
	autoHeight: true,

	navigation: {
			nextEl: '.swiper-button__next',
			prevEl: '.swiper-button__prev',
	},

	pagination: {
		el: '.swiper-pagination',
	},
});


//popup show and hide
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelectorAll('.popup-open');
let popupBg  = document.querySelector('.popup__bg');

for (let i = 0; i < popupOpenBtn.length; i++) {
	popupOpenBtn[i].onclick = () =>{
		popupToggle()
	}
}

popupOpenBtn.onclick = () =>{
	popupToggle()
}

document.querySelector('.popup__close').onclick = () =>{
	popupToggle()
}

popupBg.onclick = () =>{
	popupToggle()
}

document.querySelector('.popup-form').onsubmit = () =>{
	popupToggle()
}


function popupToggle() {
	popup.classList.toggle('show');
	document.body.classList.toggle('no-scroll');
}

let headerNav = document.querySelector('.header-nav');
let headerNavItem = document.querySelectorAll('.header-nav__item');

//mobile nav show
document.querySelector('.header-menu').onclick = () =>{
	headerNav.classList.add('show');
}

document.querySelector('.header-nav__close').onclick = () =>{
	headerNav.classList.remove('show');
}

for (let i = 0; i < headerNavItem.length; i++) {
	headerNavItem[i].onclick = () =>{
		headerNav.classList.remove('show');
	}
}

