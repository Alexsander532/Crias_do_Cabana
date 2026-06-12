document.addEventListener('DOMContentLoaded', () => {
    fixNavigationLinks();
    initWelcomeModal();
    initMobileMenu();
    initSearch();
    initSlider();
    initA11y();
    initReveal();
    initBackToTop();
    initAccordions();
    initScrollHandler();
});

function fixNavigationLinks() {
    const guardaHref = 'guarda-de-congo-sao-benedito.html';
    const colecoesHref = 'colecoes-artes.html';

    document.querySelectorAll('a').forEach((link) => {
        const text = link.textContent.replace(/\s+/g, ' ').trim();
        const href = link.getAttribute('href');

        if (
            text.includes('Guarda de São Benedito') ||
            text.includes('GUARDA DE CONGO SÃO BENEDITO')
        ) {
            if (!href || href === '#' || href.endsWith('#')) {
                link.setAttribute('href', guardaHref);
            }
        }
    });

    document.querySelectorAll('.menu-item.has-dropdown').forEach((item) => {
        const parentLink = item.querySelector(':scope > .nav-link');
        if (!parentLink) return;

        const label = parentLink.textContent.replace(/\s+/g, ' ').trim();
        if (label.startsWith('Coleções')) {
            const href = parentLink.getAttribute('href');
            if (!href || href === '#' || href.endsWith('#')) {
                parentLink.setAttribute('href', colecoesHref);
            }
        }
    });
}

function initWelcomeModal() {
    const welcomeModal = document.getElementById('welcome-modal');
    if (!welcomeModal) return;

    const modalCloseBtn = welcomeModal.querySelector('.modal-close');
    if (!modalCloseBtn) return;

    const showWelcomeModal = () => {
        if (!sessionStorage.getItem('crias_modal_seen')) {
            setTimeout(() => {
                welcomeModal.classList.add('active');
            }, 800);
        }
    };

    const closeWelcomeModal = () => {
        welcomeModal.classList.remove('active');
        sessionStorage.setItem('crias_modal_seen', 'true');
    };

    modalCloseBtn.addEventListener('click', closeWelcomeModal);

    welcomeModal.addEventListener('click', (e) => {
        if (e.target === welcomeModal) {
            closeWelcomeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && welcomeModal.classList.contains('active')) {
            closeWelcomeModal();
        }
    });

    showWelcomeModal();
}

function initMobileMenu() {
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const navigationMenu = document.querySelector('.navigation-menu');
    if (!mobileMenuTrigger || !navigationMenu) return;

    const dropdownItems = document.querySelectorAll('.menu-item.has-dropdown');
    const submenuItems = document.querySelectorAll('.has-submenu');

    const closeMobileMenu = () => {
        navigationMenu.classList.remove('active');
        mobileMenuTrigger.classList.remove('active');
        mobileMenuTrigger.setAttribute('aria-expanded', 'false');
        dropdownItems.forEach((item) => {
            item.classList.remove('dropdown-active');
            const link = item.querySelector('.nav-link');
            if (link) link.setAttribute('aria-expanded', 'false');
        });
    };

    mobileMenuTrigger.addEventListener('click', () => {
        const isOpen = navigationMenu.classList.toggle('active');
        mobileMenuTrigger.classList.toggle('active');
        mobileMenuTrigger.setAttribute('aria-expanded', isOpen);
    });

    dropdownItems.forEach((item) => {
        const link = item.querySelector('.nav-link');
        if (!link) return;

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const isActive = item.classList.toggle('dropdown-active');
                link.setAttribute('aria-expanded', isActive);

                dropdownItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('dropdown-active');
                        const otherLink = otherItem.querySelector('.nav-link');
                        if (otherLink) otherLink.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    });

    submenuItems.forEach((item) => {
        const link = item.querySelector('.dropdown-link');
        if (!link) return;

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('submenu-active');
            }
        });
    });

    navigationMenu.querySelectorAll('.dropdown-menu a[href]').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
}

function initSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchDropdown = document.getElementById('search-dropdown');
    if (!searchToggle || !searchDropdown) return;

    searchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = searchDropdown.classList.toggle('active');
        searchToggle.setAttribute('aria-expanded', isOpen);
        if (isOpen) {
            const input = searchDropdown.querySelector('.search-input');
            if (input) input.focus();
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
            searchDropdown.classList.remove('active');
            searchToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

function initSlider() {
    const slides = document.querySelectorAll('.slide-item');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    if (!slides.length || !prevBtn || !nextBtn) return;

    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let sliderInterval;
    const slideDuration = 4000;

    const showSlide = (index) => {
        slides.forEach((slide) => slide.classList.remove('active'));
        dots.forEach((dot) => dot.classList.remove('active'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    const startAutoplay = () => {
        stopAutoplay();
        sliderInterval = setInterval(nextSlide, slideDuration);
    };

    const stopAutoplay = () => {
        if (sliderInterval) clearInterval(sliderInterval);
    };

    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoplay();
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startAutoplay();
        });
    });

    startAutoplay();
}

function initA11y() {
    const a11yToolbar = document.getElementById('accessibility-toolbar');
    const a11yToggle = document.getElementById('a11y-toggle');
    const a11yButtons = document.querySelectorAll('.a11y-btn');
    if (!a11yToolbar || !a11yToggle) return;

    let fontScale = 1.0;

    const updateFontSize = () => {
        document.documentElement.style.setProperty('--base-font-size', (16 * fontScale) + 'px');
    };

    const resetAccessibility = () => {
        fontScale = 1.0;
        updateFontSize();
        document.body.className = '';
    };

    a11yToggle.addEventListener('click', () => {
        const isOpen = a11yToolbar.classList.toggle('active');
        a11yToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (!a11yToolbar.contains(e.target) && !a11yToggle.contains(e.target)) {
            a11yToolbar.classList.remove('active');
            a11yToggle.setAttribute('aria-expanded', 'false');
        }
    });

    a11yButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');

            switch (action) {
                case 'resize-plus':
                    if (fontScale < 1.5) {
                        fontScale += 0.1;
                        updateFontSize();
                    }
                    break;
                case 'resize-minus':
                    if (fontScale > 0.8) {
                        fontScale -= 0.1;
                        updateFontSize();
                    }
                    break;
                case 'grayscale':
                    document.body.classList.toggle('a11y-grayscale');
                    break;
                case 'high-contrast':
                    document.body.classList.remove('a11y-negative-contrast', 'a11y-light-bg');
                    document.body.classList.toggle('a11y-high-contrast');
                    break;
                case 'negative-contrast':
                    document.body.classList.remove('a11y-high-contrast', 'a11y-light-bg');
                    document.body.classList.toggle('a11y-negative-contrast');
                    break;
                case 'light-background':
                    document.body.classList.remove('a11y-high-contrast', 'a11y-negative-contrast');
                    document.body.classList.toggle('a11y-light-bg');
                    break;
                case 'links-underline':
                    document.body.classList.toggle('a11y-underline');
                    break;
                case 'readable-font':
                    document.body.classList.toggle('a11y-readable-font');
                    break;
                case 'reset':
                    resetAccessibility();
                    break;
            }
        });
    });
}

function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
}

function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    backToTopBtn.innerHTML = '↑';
    document.body.appendChild(backToTopBtn);

    const handleBackToTopVisibility = () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initAccordions() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    if (!accordionButtons.length) return;

    accordionButtons.forEach((btn) => {
        btn.removeAttribute('onclick');

        const iconSpan = btn.querySelector('span:first-child');
        if (iconSpan) {
            iconSpan.classList.add('accordion-icon');
        }

        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            if (!content) return;

            const isOpen = content.classList.contains('open');

            document.querySelectorAll('.accordion-content.open').forEach((item) => {
                if (item !== content) {
                    item.classList.remove('open');
                    item.style.maxHeight = null;
                    item.previousElementSibling?.classList.remove('open');
                }
            });

            if (isOpen) {
                content.classList.remove('open');
                content.style.maxHeight = null;
                btn.classList.remove('open');
            } else {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                btn.classList.add('open');
            }
        });
    });
}

function initScrollHandler() {
    const backToTopBtn = document.querySelector('.back-to-top');
    const mainHeader = document.querySelector('.main-header');
    const bannerImage = document.querySelector('.page-banner-image');

    const handleBackToTopVisibility = () => {
        if (!backToTopBtn) return;
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    const handleHeaderScroll = () => {
        if (!mainHeader) return;
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    };

    const handleParallax = () => {
        if (!bannerImage) return;
        const scrollY = window.scrollY;
        const bannerTop = bannerImage.getBoundingClientRect().top + scrollY;
        const windowBottom = scrollY + window.innerHeight;

        if (windowBottom > bannerTop && scrollY < bannerTop + bannerImage.offsetHeight) {
            const offset = (scrollY - bannerTop) * 0.15;
            bannerImage.style.transform = `translateY(${offset}px)`;
        }
    };

    let ticking = false;

    const onScroll = () => {
        handleBackToTopVisibility();
        handleHeaderScroll();
        handleParallax();
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    handleBackToTopVisibility();
    handleHeaderScroll();
}
