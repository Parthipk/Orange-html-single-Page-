 
let index = 0;

function nextSlide() {
    const slides = document.querySelector(".slides");
    const total = document.querySelectorAll(".img-box").length;

    index++;

    if (index >= total) {
        index = 0; // loop back
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
} 