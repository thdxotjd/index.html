// JavaScript source code
const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber) {
	const image = new Image();
	image.src = `homeImg/${imgNumber + 1}.jpg`;
	image.classList.add("bgClass");
	body.prepend(image);
	
}

function genRandom() {
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;
}

function init() {
	const randomNumber = genRandom();
	paintImage(randomNumber);
}

init();

