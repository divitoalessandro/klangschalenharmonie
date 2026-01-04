/**
 * Klangschalenmassage - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function () {
    lucide.createIcons();
    initMobileMenu();
    initScrollAnimations();
    initFAQAccordion();
    initImpactCards();
    initSmoothScroll();
    initContactForm();
    initPhoneReveal();
});

/**
 * Phone number reveal for spam protection
 */
function initPhoneReveal() {
    document.querySelectorAll('.phone-reveal').forEach(btn => {
        btn.addEventListener('click', function () {
            const container = this.parentElement;
            const phoneSpan = container.querySelector('.phone-hidden');
            if (phoneSpan) {
                const fullNumber = phoneSpan.getAttribute('data-phone');
                phoneSpan.textContent = fullNumber;
                phoneSpan.classList.remove('phone-hidden');
                this.remove();
            }
        });
    });
}

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

function initImpactCards() {
    document.querySelectorAll('.impact-card').forEach(card => {
        const btn = card.querySelector('.impact-card-btn');
        if (!btn) return;

        const toggleCard = () => {
            const isOpen = card.getAttribute('data-open') === 'true';
            // Close all other cards
            document.querySelectorAll('.impact-card').forEach(c => {
                c.setAttribute('data-open', 'false');
                c.querySelector('.impact-card-btn')?.setAttribute('aria-expanded', 'false');
            });
            // Toggle current card
            card.setAttribute('data-open', isOpen ? 'false' : 'true');
            btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        };

        btn.addEventListener('click', toggleCard);

        // Keyboard navigation
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard();
            }
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Wird gesendet...';
        lucide.createIcons();

        // Get form data
        const formData = {
            fields: [
                {
                    name: "firstname",
                    value: document.getElementById('firstName').value
                },
                {
                    name: "lastname",
                    value: document.getElementById('lastName').value
                },
                {
                    name: "email",
                    value: document.getElementById('email').value
                },
                {
                    name: "phone",
                    value: document.getElementById('phone').value || ""
                },
                {
                    name: "subject",
                    value: document.getElementById('subject').value
                },
                {
                    name: "message",
                    value: document.getElementById('message').value
                }
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title
            }
        };

        try {
            const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/145042453/9980fcf2-79ad-47dd-a011-4d6e42ab9112', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Hide all form fields and show success message
                form.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-12 text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 border-2 border-green-200">
                            <i data-lucide="check" class="w-10 h-10 text-green-600"></i>
                        </div>
                        <h3 class="text-2xl font-serif text-stone-900 mb-4">Danke für deine Nachricht</h3>
                        <p class="text-base text-stone-600 max-w-md leading-relaxed">
                            Ich melde mich zeitnah mit einer Antwort bei dir.<br>
                            Liebe Grüsse<br>
                            <span class="font-medium text-stone-800">Roberta</span>
                        </p>
                    </div>
                `;
                lucide.createIcons();

            } else {
                throw new Error('Submission failed');
            }

        } catch (error) {
            console.error('Error:', error);

            // Error message
            submitBtn.innerHTML = '<i data-lucide="x-circle" class="w-4 h-4"></i> Fehler! Bitte erneut versuchen';
            submitBtn.classList.remove('bg-orange-600');
            submitBtn.classList.add('bg-red-600');
            lucide.createIcons();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                submitBtn.classList.remove('bg-red-600');
                submitBtn.classList.add('bg-orange-600', 'hover:bg-orange-700');
                lucide.createIcons();
            }, 3000);
        }
    });
}
