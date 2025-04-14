// Introduction

const images = [
  "assets/img/introduction/1-bg_yellow.png",
  "assets/img/introduction/2-ghibli.jpg",
  "assets/img/introduction/3-lendo-praia.jpg",
  "assets/img/introduction/4-rj-escada.jpg",
  "assets/img/introduction/5-floresta-proibida.jpg",
];

let index = 0;
const imageElement = document.getElementById("profileImage");

setInterval(() => {
  index = (index + 1) % images.length;
  imageElement.style.opacity = 0;

  setTimeout(() => {
    imageElement.src = images[index];
    imageElement.style.opacity = 1;
  }, 1000);
}, 10000); // 10 segundos

// Introduction end
