/**
 * Klangschalenmassage - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initMobileMenu();
    initScrollAnimations();
    initFAQAccordion();
    initSmoothScroll();
    initContactForm();
});

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function initFAQAccordion() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-btn')?.addEventListener('click', () => {
            const isOpen = item.getAttribute('data-open') === 'true';
            document.querySelectorAll('.faq-item').forEach(i => i.setAttribute('data-open', 'false'));
            item.setAttribute('data-open', isOpen ? 'false' : 'true');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });
}

function initContactForm() {
    document.getElementById('contact-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Vielen Dank für Ihre Nachricht!');
        this.reset();
    });
}
