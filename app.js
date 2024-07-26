document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Hero Image Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.hero-image .slide');
    const totalSlides = slides.length;

    function showSlides() {
        console.log('Showing slide:', slideIndex);
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex = (slideIndex + 1) % totalSlides;
        slides[slideIndex].classList.add('active');
        setTimeout(showSlides, 3000); 
    }

    if (totalSlides > 0) {
        showSlides();
    }

    // Deals Slider
    const dealSlider = document.querySelector('.deal-slider');
    const newSlider = document.querySelector('.new-slider');
    const dealCards = dealSlider.querySelectorAll('.deal-card');
    const newItems = newSlider.querySelectorAll('.new-item');

    let currentDealIndex = 0;
    let currentNewIndex = 0;

    function updateSlider(slider, items, index) {
        const slideWidth = items[0].offsetWidth;
        console.log('Slide width:', slideWidth);
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function showNextDeal() {
        currentDealIndex = (currentDealIndex + 1) % dealCards.length;
        updateSlider(dealSlider, dealCards, currentDealIndex);
    }

    function showNextNewItem() {
        currentNewIndex = (currentNewIndex + 1) % newItems.length;
        updateSlider(newSlider, newItems, currentNewIndex);
    }

    if (dealCards.length > 0) {
        setInterval(showNextDeal, 3000);
    }
    if (newItems.length > 0) {
        setInterval(showNextNewItem, 3000); 
    }
});
