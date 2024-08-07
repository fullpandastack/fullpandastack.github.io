let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideImages = slides.querySelectorAll('img');
const totalSlides = slideImages.length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Automatically switch slides every 3 seconds
setInterval(nextSlide, 3000);

// Event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);
