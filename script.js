// Prevent access on devices smaller than desktop width
if (window.innerWidth < 1450) {
    document.body.innerHTML = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #0B2346;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        padding: 20px;
        font-family: 'Poppins', sans-serif;
      ">
        Desktop preview only. Please use a desktop device to view this site.
      </div>
    `;
}

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navigation');
    if (window.scrollY > 50) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-scrolled');
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Open mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'block';
    });

    // Close mobile menu
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Booking functionality
function handleBooking(service) {
    // Show an alert for booking - replace with actual booking system
    alert(`Thank you for your interest in ${service}. Please call +357 26 322 095 to complete your booking or visit us at Latchi Harbour for immediate assistance.`);
}

// Newsletter subscription
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    if (!email) {
        alert('Please enter your email address to subscribe.');
        return;
    }
    
    // Newsletter signup logic would be integrated here with your email service
    alert('Thank you for subscribing to our newsletter! You will receive the latest news and special offers from Latchi Watersports Center.');
    document.getElementById('email').value = '';
}

// Carousel auto-scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-wrapper');
    if (carousel) {
        let isScrolling = false;
        
        // Auto scroll every 5 seconds
        setInterval(() => {
            if (!isScrolling) {
                const scrollAmount = 320;
                carousel.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                
                // Reset to beginning if reached end
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                    setTimeout(() => {
                        carousel.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 2000);
                }
            }
        }, 5000);
        
        // Pause auto-scroll when user is manually scrolling
        carousel.addEventListener('scroll', () => {
            isScrolling = true;
            clearTimeout(carousel.scrollTimeout);
            carousel.scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1000);
        });
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.activity-card, .testimonial-card, .booking-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone number click tracking (for analytics if needed)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Track phone call clicks for analytics
        console.log('Phone call initiated:', this.getAttribute('href'));
    });
});

// Form validation enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced newsletter form
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = document.getElementById('email');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#ff6b6b';
                this.setAttribute('title', 'Please enter a valid email address');
            } else {
                this.style.borderColor = '';
                this.removeAttribute('title');
            }
        });
        
        emailInput.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(255, 107, 107)') {
                this.style.borderColor = '';
            }
        });
    }
});

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg');
    if (heroBackground) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Add click handlers for activity cards
document.addEventListener('DOMContentLoaded', function() {
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
