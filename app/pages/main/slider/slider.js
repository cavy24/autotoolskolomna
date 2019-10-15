function showSlides() {
  
	window.onload = clearAnimationSize;
	
	let	divSliders = document.querySelector('.main_description_examples_slider'),
		divSlidersAnimation = document.querySelector('.main_description_examples_slider_div'),
		switchAnimation = document.querySelector('.main_description_examples_slider_switch li .li_on'),
		switchLink = document.querySelectorAll('.main_description_examples_slider_switch ul li'),
		arrowRight = document.getElementById('arrow_right'),
		arrowLeft = document.getElementById('arrow_left');
	let numberActiveLink,
	marginLeftDivAnimationNumPoz,
	divImgWidthNum,
	linkNumber;
	const NOT_ACTIVE_LINK = 'not_active_link',
		ACTIVE_LINK = 'active_link',
		CLASS_DIV_ANIMATION = 'main_description_examples_slider_div',
		CLASS_LINK_ANIMATION = 'li_on',
		NAME_ANIMATION_SLIDE = 'slide',
		NAME_ANIMATION_LINK = 'on';
	let linksSlideActive = Array.from(switchLink);
	linksSlideActive.forEach(link => link.addEventListener('click', goToSlide));
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
		if(document.documentElement.clientWidth <= 480 || window.innerWidth <= 480) {
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
    let sizeMarginLeft;
		let numberActiveLink = this.innerText;
		if(numberActiveLink === 0) sizeMarginLeft = 0;
		else sizeMarginLeft = -(numberActiveLink * 100) + '%';
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
		if(document.documentElement.clientWidth > 480 || window.innerWidth > 480) {
		switchClassLink();
		divSlidersAnimation.classList.remove(CLASS_DIV_ANIMATION);
		switchAnimation.classList.remove(CLASS_LINK_ANIMATION);
		//https://css-tricks.com/restart-css-animation/
		void divSlidersAnimation.offsetWidth;
		void switchAnimation.offsetWidth;
		divSlidersAnimation.classList.add(CLASS_DIV_ANIMATION);
		switchAnimation.classList.add(CLASS_LINK_ANIMATION);
		divSlidersAnimation.style.animationName = (+numberActiveLink === 0) ? NAME_ANIMATION_SLIDE : (NAME_ANIMATION_SLIDE + '_' + numberActiveLink);
		divSlidersAnimation.style.webkitAnimationName = (+numberActiveLink === 0) ? NAME_ANIMATION_SLIDE : (NAME_ANIMATION_SLIDE + '_' + numberActiveLink);
		switchAnimation.style.animationName = (+numberActiveLink === 0) ? NAME_ANIMATION_LINK : (NAME_ANIMATION_LINK + '_' + numberActiveLink);
		switchAnimation.style.webkitAnimationName = (+numberActiveLink === 0) ? NAME_ANIMATION_LINK : (NAME_ANIMATION_LINK + '_' + numberActiveLink);
		console.log(divSlidersAnimation.style.animationName, switchAnimation.style.animationName);
		switchAnimation.style.display = 'block';
		}
	};
	function getNumberActiveLink() {
    linksSlideActive.map(link => (link.className === ACTIVE_LINK) && (numberActiveLink = link.innerText));
		console.log(numberActiveLink);
	};
		function switchClassLink() {
		linksSlideActive.map(link => link.className === ACTIVE_LINK && (link.classList.remove(ACTIVE_LINK), link.classList.add(NOT_ACTIVE_LINK)));
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
		if(marginLeftDivAnimationNumPoz >= 0 && marginLeftDivAnimationNumPoz < divImgWidthNum * 5 - 1) {
		let nextMarginLeft = +marginLeftDivAnimationNumPoz + divImgWidthNum + 'px';
		divSlidersAnimation.style.marginLeft = '-' + nextMarginLeft;
		console.log(nextMarginLeft);
		};
	};
	function showDivSlideLeft() {
		if(marginLeftDivAnimationNumPoz > 0 && marginLeftDivAnimationNumPoz <= divImgWidthNum * 5 + 10) {
		let prevMarginLeft = +marginLeftDivAnimationNumPoz - divImgWidthNum + 'px';
		divSlidersAnimation.style.marginLeft = '-' + prevMarginLeft;
		};
	};
	function setLinkActiveRight() {
		setLinkActive();
		if(linkNumber < linksSlideActive.length - 1) {
			linksSlideActive[linkNumber + 1].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber + 1].classList.add(ACTIVE_LINK);
		}
		else {
			linksSlideActive[linkNumber].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber].classList.add(ACTIVE_LINK);
		};
	};
	function setLinkActiveLeft() {
		setLinkActive();
		if(linkNumber > 0) {
		linksSlideActive[linkNumber - 1].classList.remove(NOT_ACTIVE_LINK);
		linksSlideActive[linkNumber - 1].classList.add(ACTIVE_LINK);
		}
		else {
			linksSlideActive[linkNumber].classList.remove(NOT_ACTIVE_LINK);
			linksSlideActive[linkNumber].classList.add(ACTIVE_LINK);
		};
	};
	function setLinkActive() {
		getCurrStyleAndSetClassLink();
		if(marginLeftDivAnimationNumPoz === 0)
		linkNumber = 0;
		else linkNumber = Math.round(marginLeftDivAnimationNumPoz/divImgWidthNum);
		console.log('linkNumber =', linkNumber);
	};
	function getWidthDivSlider() {
    let divImg = document.body.querySelector('.main_description_examples_slider_div_slider');
    let divImgWidth = window.getComputedStyle(divImg).width;
		divImgWidthNum = Math.round(divImgWidth.split('px', 1).join());
		console.log('divImgWidthNum =', divImgWidthNum);
	};
	function getCurrStyleAndSetClassLink() {
		getMarginDivAnimation();//marginLeftDivAnimationNumPoz - текущий margin-left 
		getWidthDivSlider();//divImgWidthNum - ширина одного блока со слайдом - шаг прокрутки margin-left
		clearAnimation();
		switchClassLink();
	};
function getMarginDivAnimation() {
		let styleDivAnimation = window.getComputedStyle(divSlidersAnimation);
		let marginLeftDivAnimation = styleDivAnimation.getPropertyValue('margin-left');
		console.log(marginLeftDivAnimation);
		let marginLeftDivAnimationNum = Math.round(marginLeftDivAnimation.split('px', 1).join());
    if(marginLeftDivAnimationNum === 0 || marginLeftDivAnimationNum === '0' || marginLeftDivAnimationNum === undefined)
		marginLeftDivAnimationNumPoz = 0;
		else marginLeftDivAnimationNumPoz = marginLeftDivAnimationNum * (-1);
		console.log('marginLeftDivAnimationNumPoz =', marginLeftDivAnimationNumPoz);
	};
};