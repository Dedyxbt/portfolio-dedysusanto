// script.js

// Fungsi untuk toggle menu pada perangkat mobile
const menuToggle = document.querySelector('nav ul');
const menuButton = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
});

// Efek parallax untuk hero section (scrolling)
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
