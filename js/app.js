document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Welcome Modal Logic
    // ==========================================
    const welcomeModal = document.getElementById('welcome-modal');
    const modalCloseBtn = welcomeModal.querySelector('.modal-close');
    
    const showWelcomeModal = () => {
        // Show modal if not shown in current session
        if (!sessionStorage.getItem('crias_modal_seen')) {
            setTimeout(() => {
                welcomeModal.classList.add('active');
            }, 800); // Gentle delay after page load
        }
    };
    
    const closeWelcomeModal = () => {
        welcomeModal.classList.remove('active');
        sessionStorage.setItem('crias_modal_seen', 'true');
    };
    
    // Event Listeners for Modal
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
    
    // Trigger Modal Check
    showWelcomeModal();

    // ==========================================
    // 2. Mobile Menu & Navigation Dropdowns
    // ==========================================
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const navigationMenu = document.querySelector('.navigation-menu');
    const dropdownItems = document.querySelectorAll('.menu-item.has-dropdown');
    const submenuItems = document.querySelectorAll('.has-submenu');
    
    mobileMenuTrigger.addEventListener('click', () => {
        const isOpen = navigationMenu.classList.toggle('active');
        mobileMenuTrigger.classList.toggle('active');
        mobileMenuTrigger.setAttribute('aria-expanded', isOpen);
    });
    
    // Handle Dropdowns on Mobile click rather than hover
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent default navigation on mobile
                
                // Toggle active state
                const isActive = item.classList.toggle('dropdown-active');
                link.setAttribute('aria-expanded', isActive);
                
                // Close other open dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('dropdown-active');
                        otherItem.querySelector('.nav-link').setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    });
    
    submenuItems.forEach(item => {
        const link = item.querySelector('.dropdown-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('submenu-active');
            }
        });
    });

    // ==========================================
    // 3. Search Bar Toggle
    // ==========================================
    const searchToggle = document.getElementById('search-toggle');
    const searchDropdown = document.getElementById('search-dropdown');
    
    searchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = searchDropdown.classList.toggle('active');
        searchToggle.setAttribute('aria-expanded', isOpen);
        if (isOpen) {
            searchDropdown.querySelector('.search-input').focus();
        }
    });
    
    // Close search bar when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
            searchDropdown.classList.remove('active');
            searchToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // ==========================================
    // 4. Image Slider (Carousel)
    // ==========================================
    const slides = document.querySelectorAll('.slide-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let currentSlide = 0;
    let sliderInterval;
    const slideDuration = 4000; // 4 seconds autoplay
    
    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Wrap around limits
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };
    
    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };
    
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };
    
    const startAutoplay = () => {
        stopAutoplay();
        sliderInterval = setInterval(nextSlide, slideDuration);
    };
    
    const stopAutoplay = () => {
        if (sliderInterval) clearInterval(sliderInterval);
    };
    
    // Slider Listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoplay(); // Reset timer
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoplay(); // Reset timer
    });
    
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startAutoplay(); // Reset timer
        });
    });
    
    // Initialize Slider Autoplay
    startAutoplay();

    // ==========================================
    // 5. Accessibility Toolbar Panel Logic
    // ==========================================
    const a11yToolbar = document.getElementById('accessibility-toolbar');
    const a11yToggle = document.getElementById('a11y-toggle');
    const a11yButtons = document.querySelectorAll('.a11y-btn');
    
    let fontScale = 1.0;
    
    a11yToggle.addEventListener('click', () => {
        const isOpen = a11yToolbar.classList.toggle('active');
        a11yToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Close accessibility panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!a11yToolbar.contains(e.target) && !a11yToggle.contains(e.target)) {
            a11yToolbar.classList.remove('active');
            a11yToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Action handler for accessibility tools
    a11yButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            
            switch(action) {
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
    
    const updateFontSize = () => {
        document.documentElement.style.setProperty('--base-font-size', (16 * fontScale) + 'px');
    };
    
    const resetAccessibility = () => {
        fontScale = 1.0;
        updateFontSize();
        document.body.className = ''; // Remove all added accessibility classes
    };
});
