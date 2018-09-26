'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
	console.log('DOM is ready!');
	document.createElement('header');
	document.createElement('nav');
	document.createElement('section');
	document.createElement('article');
	document.createElement('aside');
	document.createElement('footer');
	document.createElement('details');
	document.createElement('summary');
	burgerMenu();
	showSlides();
	goCatalog();
	checkForm();
};
function burgerMenu() {
	var burger = document.getElementById('burger-button');
	var navBurger = document.getElementById('nav-burger');
	burger.addEventListener('click', function (event) {
		event.preventDefault();
		navBurger.classList.toggle('open');
		burger.classList.toggle('open');
	});
};
function showSlides() {

	window.onload = clearAnimationSize;

	var divSliders = document.querySelector('.main_description_examples_slider'),
	    divSlidersAnimation = document.querySelector('.main_description_examples_slider_div'),
	    switchAnimation = document.querySelector('.main_description_examples_slider_switch li .li_on'),
	    switchLink = document.querySelectorAll('.main_description_examples_slider_switch ul li'),
	    arrowRight = document.getElementById('arrow_right'),
	    arrowLeft = document.getElementById('arrow_left');
	var numberActiveLink = void 0,
	    marginLeftDivAnimationNumPoz = void 0,
	    divImgWidthNum = void 0,
	    linkNumber = void 0;
	var NOT_ACTIVE_LINK = 'not_active_link',
	    ACTIVE_LINK = 'active_link',
	    CLASS_DIV_ANIMATION = 'main_description_examples_slider_div',
	    CLASS_LINK_ANIMATION = 'li_on',
	    NAME_ANIMATION_SLIDE = 'slide',
	    NAME_ANIMATION_LINK = 'on';
	var linksSlideActive = Array.from(switchLink);
	linksSlideActive.forEach(function (link) {
		return link.addEventListener('click', goToSlide);
	});
	divSliders.addEventListener('mousemove', stopAnimation);
	divSliders.addEventListener('mouseout', goAnimation);
	//switchUl.addEventListener('mousemove', switchSetStyleHover);
	//switchUl.addEventListener('mouseout', switchSetStyleNotHover);
	arrowRight.addEventListener('click', showSlideRight);
	arrowLeft.addEventListener('click', showSlideLeft);

	function clearAnimationSize() {
		console.log('DOM is ready!');
		console.log(window.innerWidth);
		console.log(document.documentElement.clientWidth);
		if (document.documentElement.clientWidth <= 480 || window.innerWidth <= 480) {
			clearAnimation();
		}
	};
	function clearAnimation() {
		switchAnimation.style.display = 'none';
		divSlidersAnimation.style.animationName = 'none';
		switchAnimation.style.animationName = 'none';
	};
	function goToSlide() {
		clearAnimation();
		switchClassLink();
		var sizeMarginLeft = void 0;
		var numberActiveLink = this.innerText;
		if (numberActiveLink === 0) sizeMarginLeft = 0;else sizeMarginLeft = -(numberActiveLink * 100) + '%';
		divSlidersAnimation.style.marginLeft = sizeMarginLeft;
		this.classList.remove(NOT_ACTIVE_LINK);
		this.classList.add(ACTIVE_LINK);
		goAnimationAgain();
	};
	function goAnimationAgain() {
		window.setTimeout(returnAnimation, 400);
	};
	function returnAnimation() {
		getNumberActiveLink();
		if (document.documentElement.clientWidth > 480 || window.innerWidth > 480) {
			switchClassLink();
			divSlidersAnimation.classList.remove(CLASS_DIV_ANIMATION);
			switchAnimation.classList.remove(CLASS_LINK_ANIMATION);
			//https://css-tricks.com/restart-css-animation/
			void divSlidersAnimation.offsetWidth;
			void switchAnimation.offsetWidth;
			divSlidersAnimation.classList.add(CLASS_DIV_ANIMATION);
			switchAnimation.classList.add(CLASS_LINK_ANIMATION);
			divSlidersAnimation.style.animationName = +numberActiveLink === 0 ? NAME_ANIMATION_SLIDE : NAME_ANIMATION_SLIDE + '_' + numberActiveLink;
			divSlidersAnimation.style.webkitAnimationName = +numberActiveLink === 0 ? NAME_ANIMATION_SLIDE : NAME_ANIMATION_SLIDE + '_' + numberActiveLink;
			switchAnimation.style.animationName = +numberActiveLink === 0 ? NAME_ANIMATION_LINK : NAME_ANIMATION_LINK + '_' + numberActiveLink;
			switchAnimation.style.webkitAnimationName = +numberActiveLink === 0 ? NAME_ANIMATION_LINK : NAME_ANIMATION_LINK + '_' + numberActiveLink;
			console.log(divSlidersAnimation.style.animationName, switchAnimation.style.animationName);
			switchAnimation.style.display = 'block';
		}
	};
	function getNumberActiveLink() {
		linksSlideActive.map(function (link) {
			return link.className === ACTIVE_LINK && (numberActiveLink = link.innerText);
		});
		console.log(numberActiveLink);
	};
	function switchClassLink() {
		linksSlideActive.map(function (link) {
			return link.className === ACTIVE_LINK && (link.classList.remove(ACTIVE_LINK), link.classList.add(NOT_ACTIVE_LINK));
		});
	};
	function stopAnimation() {
		divSlidersAnimation.style.animationPlayState = 'paused';
		divSlidersAnimation.style.webkitAnimationPlayState = 'paused';
		switchAnimation.style.animationPlayState = 'paused';
		switchAnimation.style.webkitAnimationPlayState = 'paused';
	};
	function goAnimation() {
		divSlidersAnimation.style.animationPlayState = 'running';
		divSlidersAnimation.style.webkitAnimationPlayState = 'running';
		switchAnimation.style.animationPlayState = 'running';
		switchAnimation.style.webkitAnimationPlayState = 'running';
	};
	function showSlideRight() {
		showRight();
		goAnimationAgain();
	};
	function showSlideLeft() {
		showLeft();
		goAnimationAgain();
	};
	function showRight() {
		window.setTimeout(setLinkActiveRight, 150);
		window.setTimeout(showDivSlideRight, 200);
	};
	function showLeft() {
		window.setTimeout(showDivSlideLeft, 200);
		window.setTimeout(setLinkActiveLeft, 150);
	};
	function showDivSlideRight() {
		if (marginLeftDivAnimationNumPoz >= 0 && marginLeftDivAnimationNumPoz < divImgWidthNum * 5 - 1) {
			var nextMarginLeft = +marginLeftDivAnimationNumPoz + divImgWidthNum + 'px';
			divSlidersAnimation.style.marginLeft = '-' + nextMarginLeft;
			console.log(nextMarginLeft);
		};
	};
	function showDivSlideLeft() {
		if (marginLeftDivAnimationNumPoz > 0 && marginLeftDivAnimationNumPoz <= divImgWidthNum * 5 + 10) {
			var prevMarginLeft = +marginLeftDivAnimationNumPoz - divImgWidthNum + 'px';
			divSlidersAnimation.style.marginLeft = '-' + prevMarginLeft;
		};
	};
	function setLinkActiveRight() {
		setLinkActive();
		if (linkNumber < linksSlideActive.length - 1) {
			linksSlideActive[linkNumber + 1].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber + 1].classList.add(ACTIVE_LINK);
		} else {
			linksSlideActive[linkNumber].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber].classList.add(ACTIVE_LINK);
		};
	};
	function setLinkActiveLeft() {
		setLinkActive();
		if (linkNumber > 0) {
			linksSlideActive[linkNumber - 1].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber - 1].classList.add(ACTIVE_LINK);
		} else {
			linksSlideActive[linkNumber].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber].classList.add(ACTIVE_LINK);
		};
	};
	function setLinkActive() {
		getCurrStyleAndSetClassLink();
		if (marginLeftDivAnimationNumPoz === 0) linkNumber = 0;else linkNumber = Math.round(marginLeftDivAnimationNumPoz / divImgWidthNum);
		console.log('linkNumber =', linkNumber);
	};
	function getWidthDivSlider() {
		var divImg = document.body.querySelector('.main_description_examples_slider_div_slider');
		var divImgWidth = window.getComputedStyle(divImg).width;
		divImgWidthNum = Math.round(divImgWidth.split('px', 1).join());
		console.log('divImgWidthNum =', divImgWidthNum);
	};
	function getCurrStyleAndSetClassLink() {
		getMarginDivAnimation(); //marginLeftDivAnimationNumPoz - текущий margin-left 
		getWidthDivSlider(); //divImgWidthNum - ширина одного блока со слайдом - шаг прокрутки margin-left
		clearAnimation();
		switchClassLink();
	};
	function getMarginDivAnimation() {
		var styleDivAnimation = window.getComputedStyle(divSlidersAnimation);
		var marginLeftDivAnimation = styleDivAnimation.getPropertyValue('margin-left');
		console.log(marginLeftDivAnimation);
		var marginLeftDivAnimationNum = Math.round(marginLeftDivAnimation.split('px', 1).join());
		if (marginLeftDivAnimationNum === 0 || marginLeftDivAnimationNum === '0' || marginLeftDivAnimationNum === undefined) marginLeftDivAnimationNumPoz = 0;else marginLeftDivAnimationNumPoz = marginLeftDivAnimationNum * -1;
		console.log('marginLeftDivAnimationNumPoz =', marginLeftDivAnimationNumPoz);
	};
};
function goCatalog() {
	var btn_catalog = document.getElementById('btn_catalog');
	btn_catalog.addEventListener('click', function (event) {
		event.preventDefault();
		document.location.href = "https://ru.stackoverflow.com/questions/646449/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%B5%D1%80%D0%B5%D0%B9%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B4%D1%80%D1%83%D0%B3%D1%83%D1%8E-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%83";
	});
};
//https://ru.stackoverflow.com/questions/646449/%D0%9A%D0%B0%D0%BA-%D0%BF%D0%B5%D1%80%D0%B5%D0%B9%D1%82%D0%B8-%D0%BD%D0%B0-%D0%B4%D1%80%D1%83%D0%B3%D1%83%D1%8E-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%83
function checkForm() {
	var btn_newsletter = document.getElementById('btn_footer_newsletter'),
	    btn_form = document.getElementById('btn_footer_form'),
	    userName = void 0,
	    userEmail = void 0,
	    userTel = void 0,
	    userMessage = void 0,
	    pcreName = new RegExp('^([a-z]|[а-яёА-ЯЁ]){3,15}(\s([a-z]|[а-яёА-ЯЁ]){3,15})?', 'i'),
	    prceEmail = new RegExp('^.+@.+$'),
	    prceTel = new RegExp('^[+]?[ ]?([0-9]+(\-| )?)+[0-9]+$');
	//^([+]?[ ]?([0-9]{1,3}[ |\-]?)+[0-9]+)$ [+]?[\s]?(\d+(\s|\-)?)+\d+
	btn_newsletter.addEventListener('click', function () {

		var nameNewsLetter = document.getElementById('input_footer_newsletter_name'),
		    emailNewsLetter = document.getElementById('input_footer_newsletter_email');
		userName = nameNewsLetter.value;
		userEmail = emailNewsLetter.value;

		if (pcreName.test(userName) === false) {
			console.log('userName - NewsLetter false!');
			nameNewsLetter.value = '';
			nameNewsLetter.placeholder = 'Имя введено некорректно';
			nameNewsLetter.classList.add('class_error');
		} else {
			console.log('userName - NewsLetter true!');
			nameNewsLetter.classList.remove('class_error');
			nameNewsLetter.classList.add('class_success');
		};
		if (prceEmail.test(userEmail) === false) {
			console.log('userEmail - NewsLetter false!');
			emailNewsLetter.value = '';
			emailNewsLetter.placeholder = 'Почта введена некорректно';
			emailNewsLetter.classList.add('class_error');
		} else {
			console.log('userEmail - NewsLetter true!');
			emailNewsLetter.classList.remove('class_error');
			emailNewsLetter.classList.add('class_success');
		}
	});

	btn_form.addEventListener('click', function () {
		var nameForm = document.getElementById('input_footer_form_name'),
		    telForm = document.getElementById('input_footer_form_tel'),
		    emailForm = document.getElementById('input_footer_form_email'),
		    messageForm = document.getElementById('textarea_footer_form_message');
		userName = nameForm.value;
		userEmail = emailForm.value;
		userTel = telForm.value;
		userMessage = messageForm.value;
		console.log(userMessage);

		if (pcreName.test(userName) === false) {
			console.log('userName - Form false!');
			nameForm.value = '';
			nameForm.placeholder = 'Имя введено некорректно';
			nameForm.classList.add('class_error');
		} else {
			console.log('userName - Form true!');
			nameForm.classList.remove('class_error');
			nameForm.classList.add('class_success');
		};
		if (prceEmail.test(userEmail) === false) {
			console.log('userEmail - Form false!');
			emailForm.value = '';
			emailForm.placeholder = 'Почта введена некорректно';
			emailForm.classList.add('class_error');
		} else {
			console.log('userEmail - Form true!');
			emailForm.classList.remove('class_error');
			emailForm.classList.add('class_success');
		};
		if (userTel !== '') {
			if (prceTel.test(userTel) === false) {
				console.log('userTel - Form false!');
				telForm.value = '';
				telForm.placeholder = 'Телефон введён некорректно';
				telForm.classList.add('class_error');
			} else {
				console.log('userTel - Form true!');
				telForm.classList.remove('class_error');
				telForm.classList.add('class_success');
			};
		};

		if (userMessage === '') {
			console.log('userMessage - Form false!');
			//messageForm.value = '';
			messageForm.placeholder = 'Вы ничего не написали';
			messageForm.classList.add('class_error');
		} else {
			console.log('userMessage - Form true!');
			messageForm.classList.remove('class_error');
			messageForm.classList.add('class_success');
		};
	});
};