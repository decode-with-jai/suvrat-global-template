// ============================================
// SUVRAT GLOBAL - JAVASCRIPT FUNCTIONALITY
// ============================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeActiveLink();
    initializePortfolioFilters();
    initializeBlogFilters();
    initializeContactForm();
    initializeFAQ();
});

// ============================================
// NAVIGATION - HAMBURGER MENU
// ============================================

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && !navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });
}

// ============================================
// SET ACTIVE NAV LINK
// ============================================

function initializeActiveLink() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(link => {
        const href = link.getAttribute('href');
        if (currentLocation.includes(href) || 
            (currentLocation.endsWith('/') && href === 'index.html') ||
            (currentLocation.split('/').pop() === href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// PORTFOLIO FILTERING
// ============================================

function initializePortfolioFilters() {
    // Show all portfolio items by default
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.classList.add('show');
    });
}

function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter items
    portfolioItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// ============================================
// BLOG FILTERING & SEARCH
// ============================================

function initializeBlogFilters() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    // Show all blog cards by default
    blogCards.forEach(card => {
        card.classList.add('show');
    });

    // Initialize search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', searchBlog);
    }
}

function filterBlog(category) {
    const blogCards = document.querySelectorAll('.blog-card');
    const categoryBtns = document.querySelectorAll('.category-btn');
    let hasResults = false;

    // Update active button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.classList.add('show');
            hasResults = true;
        } else {
            card.classList.remove('show');
        }
    });

    showNoResults(!hasResults);
}

function searchBlog() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const blogCards = document.querySelectorAll('.blog-card');
    let hasResults = false;

    blogCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput) || category.includes(searchInput)) {
            card.classList.add('show');
            hasResults = true;
        } else {
            card.classList.remove('show');
        }
    });

    showNoResults(!hasResults);
}

function showNoResults(show) {
    const noResults = document.getElementById('noResults');
    if (noResults) {
        noResults.style.display = show ? 'block' : 'none';
    }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmit();
        });
    }
}

function handleContactFormSubmit() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !service || !message) {
        showFormMessage('Please fill in all required fields', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission (in real scenario, send to backend)
    setTimeout(() => {
        showFormMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
        form.reset();
    }, 500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Auto-hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// FAQ ACCORDION
// ============================================

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            faqItem.classList.toggle('active');
        });
    });
}

function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    
    // Close all other items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    faqItem.classList.toggle('active');
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .blog-card, .team-member').forEach(element => {
        observer.observe(element);
    });
}

// Call scroll animations on page load
if (document.readyState !== 'loading') {
    initializeScrollAnimations();
} else {
    document.addEventListener('DOMContentLoaded', initializeScrollAnimations);
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.addEventListener('click', function(e) {
    if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (navbar) {
        const scrollTop = window.scrollY;
        
        if (scrollTop > 50) {
            navbar.style.boxShadow = 'var(--shadow-lg)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-md)';
        }
        
        lastScrollTop = scrollTop;
    }
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
        const finalValue = parseInt(element.textContent);
        const duration = 2000;
        const startTime = Date.now();

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(finalValue * progress);
            
            if (element.textContent.includes('+')) {
                element.textContent = currentValue + '+';
            } else {
                element.textContent = currentValue;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        // Start animation when element is in view
        const observer = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                animate();
                observer.unobserve(element);
            }
        });

        observer.observe(element);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// FORM VALIDATION
// ============================================

const formInputs = document.querySelectorAll('input, textarea, select');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
    });

    input.addEventListener('blur', function() {
        this.style.borderColor = 'var(--gray-300)';
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for search
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// MOBILE MENU ENHANCEMENTS
// ============================================

function handleMobileMenu() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.getElementById('hamburger');
            
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', handleMobileMenu);

// ============================================
// PRINT FUNCTIONALITY
// ============================================

function printPage() {
    window.print();
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function shareOnSocial(platform) {
    const currentUrl = window.location.href;
    const title = document.title;
    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// ============================================
// LOADING STATE
// ============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', function(event) {
    console.error('An error occurred:', event.error);
});

// ============================================
// CONSOLE MESSAGES
// ============================================

console.log('%c Welcome to SUVRAT GLOBAL', 'font-size: 20px; font-weight: bold; color: #1e40af;');
console.log('%c Your trusted partner for IT Services, Road Construction & Print Solutions', 'font-size: 14px; color: #64748b;');
