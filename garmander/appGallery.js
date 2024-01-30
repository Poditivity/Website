const carousel = document.getElementById('carousel');
const carouselImages = carousel.getElementsByTagName('img');

function rotateCarousel() {
    const firstImage = carouselImages[0];
    const middleImage = carouselImages[1];
    const lastImage = carouselImages[2];

    carousel.appendChild(lastImage);
    carousel.appendChild(firstImage);
    carousel.appendChild(middleImage);
}

setInterval(rotateCarousel, 3000); // Rotate every 6 seconds