let slideIndex = 0;
const slides = document.querySelectorAll('.hero-image .slide');
const totalSlides = slides.length;

console.log('Total slides:', totalSlides);

function showSlides() {
    console.log('Showing slide:', slideIndex);
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    showSlides();
});
