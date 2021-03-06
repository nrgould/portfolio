//for box animation
const boxPath = document.querySelector('#box-path');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

//for Dark/Light Mode
const darkBtn = document.querySelector('.appearance-toggle');
const darkBtnIcon = document.querySelector('.appearance-toggle i');

//for scrollmagic
const animElement = document.querySelectorAll('.anim-el');
let controller;
let pageScene;

//for NAV
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

//for work section
const workCard = document.querySelectorAll('.work-card');
const readMoreBtn = document.querySelectorAll('.read-more');

//for skills section
const skillIcon = document.querySelectorAll('.icons-collection svg');

//EVENT LISTENERS
darkBtn.addEventListener('click', darkModeToggle);
burger.addEventListener('click', navToggle);
navLinks.addEventListener('click', closeNav);

//BOX ANIMATION
function boxAnim() {
	let box1Tl = new gsap.timeline();
	box1Tl.to(box1, {
		duration: 3,
		repeat: -1,
		repeatDelay: 0,
		yoyo: false,
		ease: 'power1.inOut(2)',
		motionPath: {
			path: boxPath,
			align: boxPath,
			autoRotate: false,
			alignOrigin: [0.5, 0.5],
		},
	});
	let box2Tl = new gsap.timeline();
	box2Tl.to(box2, {
		duration: 3,
		repeat: -1,
		repeatDelay: 0,
		yoyo: false,
		ease: 'power1.inOut(2)',
		motionPath: {
			path: boxPath,
			align: boxPath,
			autoRotate: true,
			start: 0.5,
			end: 1.5,
			alignOrigin: [0.5, 0.5],
		},
	});
}

//Scroll Animations
function scrollReveal() {
	controller = new ScrollMagic.Controller();

	animElement.forEach((el) => {
		const pageTl = gsap.timeline({
			defaults: { duration: 1, ease: 'power2.inOut' },
		});
		if (el.classList.contains('anim-right')) {
			pageTl.fromTo(
				el,
				0.75,
				{ x: '-20%', opacity: 0, scale: 0.8 },
				{ x: '0%', opacity: 1, scale: 1 }
			);
		} else if (el.classList.contains('anim-left')) {
			pageTl.fromTo(
				el,
				0.75,
				{ x: '20%', opacity: 0, scale: 0.8 },
				{ x: '0%', opacity: 1, scale: 1 }
			);
		} else if (el.classList.contains('anim-up')) {
			pageTl.fromTo(
				el,
				0.75,
				{ y: '10%', opacity: 0 },
				{ y: '0%', opacity: 1 }
			);
		}
		pageScene = new ScrollMagic.Scene({
			triggerElement: el,
			triggerHook: 0.8,
			reverse: false,
		})
			.setTween(pageTl)
			.addTo(controller);
	});
}

//NAV TOGGLE
function navToggle(e) {
	if (!e.target.classList.contains('active')) {
		e.target.classList.add('active');
		navOverlay.style.display = 'initial';
		//burger => x
		gsap.to('.line1', 0.5, {
			ease: 'power3.inOut',
			rotate: '45',
			y: 9,
		});
		gsap.to('.line2', 0.5, {
			ease: 'power3.inOut',
			opacity: 0,
		});
		gsap.to('.line3', 0.5, {
			ease: 'power3.inOut',
			rotate: '-45',
			y: -9,
		});
		//nav overlay open
		gsap.fromTo(
			navOverlay,
			0.75,
			{
				opacity: 0,
				ease: 'power3.inOut',
				x: '100%',
			},
			{
				opacity: 1,
				ease: 'power3.inOut',
				x: '0%',
			}
		);
		// gsap.to(".nav-overlay", 1, {
		// 	ease: "power3.inOut",
		// 	clipPath: "circle(2500px at 100% -10%)",
		// });
		document.body.classList.add('hide');
	} else {
		e.target.classList.remove('active');
		//x => burger
		gsap.to('.line1', 0.5, {
			ease: 'power3.inOut',
			rotate: '0',
			y: 0,
		});
		gsap.to('.line2', 0.5, {
			ease: 'power3.inOut',
			opacity: 1,
			x: 0,
		});
		gsap.to('.line3', 0.5, {
			ease: 'power3.inOut',
			rotate: '0',
			y: 0,
		});

		//nav overlay close
		gsap.fromTo(
			navOverlay,
			0.75,
			{
				opacity: 1,
				ease: 'power3.inOut',
				x: '0%',
			},
			{
				opacity: 0,
				ease: 'power3.inOut',
				x: '100%',
			}
		);
		// gsap.to(".nav-overlay", 1, {
		// 	ease: "power3.inOut",
		// 	clipPath: "circle(50px at 100% -10%)",
		// });
		document.body.classList.remove('hide');
	}
}

function closeNav() {
	burger.classList.remove('active');
	gsap.to('.line1', 0.5, { rotate: '0', y: 0, background: 'white' });
	gsap.to('.line2', 0.5, { opacity: 1, x: 0, background: 'white' });
	gsap.to('.line3', 0.5, { rotate: '0', y: 0, background: 'white' });

	gsap.fromTo(
		navOverlay,
		0.75,
		{
			opacity: 1,
			ease: 'power3.inOut',
			x: '0%',
		},
		{
			opacity: 0,
			ease: 'power3.inOut',
			x: '100%',
		}
	);
	// gsap.to(".nav-overlay", 1, { clipPath: "circle(50px at 100% -10%)" });
	document.body.classList.remove('hide');
}

//DARK MODE
const skillsListItem = document.querySelectorAll('.skills-list li');
const skillsList = document.querySelectorAll('.skills-list');
const skillIcon2 = document.querySelectorAll('.skill-icon');

function darkModeToggle() {
	const darkItem = document.querySelectorAll('.dark-item');
	gsap.fromTo(
		darkBtn,
		0.25,
		{ ease: 'power3.inOut', scale: 0.5 },
		{ scale: 1 }
	);
	// gsap.fromTo(
	// 	darkBtn,
	// 	0.3,
	// 	{ ease: "power3.inOut", rotate: 0 },
	// 	{ ease: "power3.inOut", rotate: -360 }
	// );
	darkBtnIcon.classList.toggle('fa-sun');
	darkBtnIcon.classList.toggle('fa-moon');
	document.body.classList.toggle('light');
	darkItem.forEach((item) => {
		item.classList.toggle('light');
	});
}

boxAnim();
scrollReveal();
