/**
 * Azores4fun 2024 - JavaScript Principal
 */

(function() {
    'use strict';

    // ===================================
    // SMOOTH SCROLL
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // HEADER SCROLL EFFECT
    // ===================================
    
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Fechar menu ao clicar num link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // ===================================
    // INTERSECTION OBSERVER (FADE IN)
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observar service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // ===================================
    // LAZY LOADING IMAGES
    // ===================================
    
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback para browsers antigos
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ===================================
    // FORM VALIDATION (SE EXISTIR)
    // ===================================
    
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    });

    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    
    console.log('%c🌊 Azores4fun 2024', 'font-size: 20px; font-weight: bold; color: #1a7fb8;');
    console.log('%cA Sua Aventura Completa nos Açores', 'font-size: 12px; color: #666;');

})();
