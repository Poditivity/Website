
const source = document.querySelector('.video-container video');

if (screen.width <= 435) {
    source.src = "./images/mobile.mp4";
    console.log(source.src);
} else {
    console.log(source.src);
}
