/**
 * Main script for the welcome page
 * Handles scroll-based animations and smooth interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
});

/**
 * Initialize scroll-based fade-in animations
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-scroll');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function(element) {
        observer.observe(element);
    });
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                return;
            }
            
            try {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } catch (error) {
                // Invalid selector, let browser handle the navigation
            }
        });
    });
}
