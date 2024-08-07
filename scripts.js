// Slider Variables and Functions
let currentSlide = 0;
const slides = document.querySelector('.slides');
const sliderImages = slides.querySelectorAll('img');
const totalSlides = sliderImages.length;

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

// Event listeners for slider navigation buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);

// Lightbox Variables and Functions
let currentLightboxIndex = 0;
const lightboxImages = document.querySelectorAll('.slide img'); // This should match the lightbox images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
    currentLightboxIndex = index;
    showLightboxImage(index);
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showLightboxImage(index) {
    lightboxImg.src = lightboxImages[index].src;
}

function changeSlide(n) {
    currentLightboxIndex = (currentLightboxIndex + n + lightboxImages.length) % lightboxImages.length;
    showLightboxImage(currentLightboxIndex);
}

// Event listeners for lightbox navigation buttons
document.querySelector('.lightbox .prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.lightbox .next').addEventListener('click', () => changeSlide(1));
