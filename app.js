//for box animation
const boxPath = document.querySelector("#box-path");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

//for Dark/Light Mode
const darkBtn = document.querySelector(".appearance-toggle");

//for scrollmagic
const animElement = document.querySelectorAll(".anim-el");
let controller;
let pageScene;

//for NAV
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

//for work section
const workCard = document.querySelectorAll(".work-card");
const readMoreBtn = document.querySelectorAll(".read-more");

//for skills section
const skillIcon = document.querySelectorAll(".icons-collection svg");

//EVENT LISTENERS

// readMoreBtn.forEach((btn) => {
// 	btn.addEventListener("click", () => readMore(idx));
// });

darkBtn.addEventListener("click", darkModeToggle);
burger.addEventListener("click", navToggle);
//BOX ANIMATION
function boxAnim() {
	let box1Tl = new gsap.timeline();
	box1Tl.to(box1, {
		duration: 3,
		repeat: -1,
		repeatDelay: 0,
		yoyo: false,
		ease: "power1.inOut(2)",
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
		stagger: 1,
		yoyo: false,
		ease: "power1.inOut(2)",
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
		// const animRight = el.querySelectorAll(".anim-right");
		// const animLeft = el.querySelectorAll(".anim-left");
		const pageTl = gsap.timeline({
			defaults: { duration: 1, ease: "power2.inOut" },
		});
		if (el.classList.contains("anim-right")) {
			pageTl.fromTo(
				el,
				1,
				{ x: "-20%", opacity: 0, scale: 0.8 },
				{ x: "0%", opacity: 1, scale: 1 }
			);
		} else if (el.classList.contains("anim-left")) {
			pageTl.fromTo(
				el,
				1,
				{ x: "20%", opacity: 0, scale: 0.5 },
				{ x: "0%", opacity: 1, scale: 1 }
			);
		} else if (el.classList.contains("anim-up")) {
			pageTl.fromTo(el, 1, { y: "10%", opacity: 0 }, { y: "0%", opacity: 1 });
		}
		pageScene = new ScrollMagic.Scene({
			triggerElement: el,
			triggerHook: 0.8,
			// duration: "50%",
			reverse: true,
		})
			.setTween(pageTl)
			.addTo(controller);
	});
}

//NAV TOGGLE

const navOverlay = document.querySelector(".nav-overlay");

function navToggle(e) {
	if (!e.target.classList.contains("active")) {
		e.target.classList.add("active");
		navOverlay.style.display = "initial";
		gsap.to(".line1", 0.5, {
			ease: "power3.inOut",
			rotate: "45",
			y: 12,
		});
		gsap.to(".line2", 0.5, {
			ease: "power3.inOut",
			opacity: 0,
		});
		gsap.to(".line3", 0.5, {
			ease: "power3.inOut",
			rotate: "-45",
			y: -12,
		});
		gsap.to("#logo", 1, { ease: "power3.inOut", color: "white" });
		gsap.fromTo(
			".nav-overlay",
			0.75,
			{
				opacity: 0,
				ease: "power3.inOut",
				x: "100%",
			},
			{
				opacity: 1,
				ease: "power3.inOut",
				x: "0%",
			}
		);
		// gsap.to(".nav-overlay", 1, {
		// 	ease: "power3.inOut",
		// 	clipPath: "circle(2500px at 100% -10%)",
		// });
		document.body.classList.add("hide");
		// document.querySelector(".line2").classList.add("hide");
	} else {
		e.target.classList.remove("active");
		gsap.to(".line1", 0.5, {
			ease: "power3.inOut",
			rotate: "0",
			y: 0,
		});
		gsap.to(".line2", 0.5, {
			ease: "power3.inOut",
			opacity: 1,
			x: 0,
		});
		gsap.to(".line3", 0.5, {
			ease: "power3.inOut",
			rotate: "0",
			y: 0,
		});
		gsap.to("#logo", 1, { ease: "power3.inOut", color: "black" });
		gsap.fromTo(
			".nav-overlay",
			0.75,
			{
				opacity: 1,
				ease: "power3.inOut",
				x: "0%",
			},
			{
				opacity: 0,
				ease: "power3.inOut",
				x: "100%",
			}
		);
		// gsap.to(".nav-overlay", 1, {
		// 	ease: "power3.inOut",
		// 	clipPath: "circle(50px at 100% -10%)",
		// });
		document.body.classList.remove("hide");
		// document.querySelector(".line2").classList.remove("hide");
	}
}

navLinks.addEventListener("click", () => {
	gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
	gsap.to(".line2", 0.5, { opacity: 1, x: 0, background: "white" });
	gsap.to(".line3", 0.5, { rotate: "0", y: 0, background: "white" });
	gsap.to("#logo", 1, { color: "white" });
	gsap.to(".nav-overlay", 1, { x: "100%" });
	// gsap.to(".nav-overlay", 1, { clipPath: "circle(50px at 100% -10%)" });
	document.body.classList.remove("hide");
});

//READ MORE

//on click, create element p
//need to know which card we're activating
// append to skills card
//if statement to see if active
//if active, click removes element
//bonus: animating arrow icon

// function readMore(idx) {
// 	console.log(idx);
// }

//DARK MODE

const skillsListItem = document.querySelectorAll(".skills-list li");
const skillsList = document.querySelectorAll(".skills-list");
const skillIcon2 = document.querySelectorAll(".skill-icon");

//select all items elligible to toggle from dark to light
//check if classlist contains 'light'
//switch darkBtn innerHTML
//add light class to them (default is dark)
//modify each class individually
function darkModeToggle() {
	const darkItem = document.querySelectorAll(".dark-item");
	gsap.fromTo(darkBtn, 0.3, { ease: "power2.inOut", scale: 0.8 }, { scale: 1 });
	gsap.fromTo(
		darkBtn,
		0.2,
		{ ease: "power2.inOut", rotate: 0 },
		{ rotate: -360 }
	);
	// if (darkBtn.classList.contains("light")) {
	// 	gsap.to(darkBtn, 0.2, { rotate: 360, ease: "power2.inOut" });
	// 	darkBtn.innerHTML = `<svgxmlns="http://www.w3.org/2000/svg"width="30"height="30"viewBox="0 0 30 30"><pathid="toggle-bg"class="dark-item"d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"fill="#272b2e"/><patclass="dark-itemid="toggle-moond="M18.846,16.436c-.119,0-.239.008-.358.008a7.252,7.252,0,0,1-5.216-2.2,7.494,7.494,0,0,1-2.16-5.3,7.588,7.588,0,0,1,.72-3.237,10.722,10.722,0,0,1,.559-.963.162.162,0,0,0-.16-.251,7.956,7.956,0,0,0,1.213,15.8,7.755,7.755,0,0,0,5.961-2.8,7.514,7.514,0,0,0,.675-.9.166.166,0,0,0-.169-.251A7.025,7.025,0,0,1,18.846,16.436Ztransform="translate(1.985 2.605)fill="#ffffff"/></svgxmlns=>`;
	// } else {
	// 	darkBtn.innerHTML =
	// 		'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z" fill="#31363a"/><path d="M6.083,4.238,4.651,2.814,3.529,3.936,4.953,5.36Zm-2.2,4.5H1.5v1.591H3.887ZM11.048.825H9.456V3.172h1.591V.825Zm5.927,3.111L15.853,2.814,14.429,4.238,15.551,5.36l1.424-1.424Zm-2.554,10.9,1.424,1.432,1.122-1.122-1.432-1.424-1.114,1.114Zm2.2-6.095v1.591H19V8.742ZM10.252,4.763a4.774,4.774,0,1,0,4.774,4.774A4.778,4.778,0,0,0,10.252,4.763Zm-.8,13.486h1.591V15.9H9.456ZM3.529,15.138,4.651,16.26l1.424-1.432L4.953,13.706,3.529,15.138Z" transform="translate(5 5.138)" fill="#fff"/></svg>';
	// }
	document.body.classList.toggle("light");
	darkItem.forEach((item) => {
		item.classList.toggle("light");
	});
	// console.log(skillIcon2.classList.contains("light"));
	// skillIcon2.forEach((item) => {
	// 	if (item.classList.contains("light")) {
	// 		item.innerHTML = `<img
	// 							class="dark-item skill-icon"
	// 							src="./svg/Icon awesome-js-dark.svg"
	// 							alt=""
	// 						/>`;
	// 	}
	// });
}

boxAnim();
scrollReveal();
