const images = ["0.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/back/${chosenImage}`;
bgImage.id = 'background';

document.body.appendChild(bgImage);
