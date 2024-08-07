// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const totalImages = images.length;
    let currentIndex = 0;
    const interval = 3000; // Time between slides in milliseconds

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, interval);
});
