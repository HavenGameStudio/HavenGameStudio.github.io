// Navigation scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .service-card, .portfolio-card, .indie-item, .career-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Add animation class
document.querySelectorAll('section, .service-card, .portfolio-card, .indie-item, .career-card').forEach(el => {
    el.classList.add('animate-target');
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show success message (in production, you'd send this to a server)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 1500);
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = 'Subscribed!';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                emailInput.value = '';
            }, 3000);
        }, 1500);
    });
}

// Video placeholder click handler
const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // In production, you would embed a video player here
        alert('Video player would open here. Replace this placeholder with your showreel video embed.');
    });
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add CSS for animation targets
const style = document.createElement('style');
style.textContent = `
    .animate-target {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-target.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    section.animate-target {
        transition-delay: 0s;
    }

    .service-card.animate-target:nth-child(1) { transition-delay: 0.1s; }
    .service-card.animate-target:nth-child(2) { transition-delay: 0.15s; }
    .service-card.animate-target:nth-child(3) { transition-delay: 0.2s; }
    .service-card.animate-target:nth-child(4) { transition-delay: 0.25s; }
    .service-card.animate-target:nth-child(5) { transition-delay: 0.3s; }
    .service-card.animate-target:nth-child(6) { transition-delay: 0.35s; }
    .service-card.animate-target:nth-child(7) { transition-delay: 0.4s; }

    .portfolio-card.animate-target:nth-child(1) { transition-delay: 0.1s; }
    .portfolio-card.animate-target:nth-child(2) { transition-delay: 0.15s; }
    .portfolio-card.animate-target:nth-child(3) { transition-delay: 0.2s; }
    .portfolio-card.animate-target:nth-child(4) { transition-delay: 0.25s; }
    .portfolio-card.animate-target:nth-child(5) { transition-delay: 0.3s; }
    .portfolio-card.animate-target:nth-child(6) { transition-delay: 0.35s; }

    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);

console.log('NovaForge Studios website loaded successfully!');