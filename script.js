// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section > .container, .products-grid, .benefits-grid, .gallery-grid').forEach(el => {
    observer.observe(el);
});

// Add to Cart functionality
const cartButtons = document.querySelectorAll('.btn-cart');
let cartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        cartCount++;
        showToast(`Added ${productName} to cart!`);
        
        // Add animation
        button.textContent = 'Added!';
        button.style.background = '#6b8e6b';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = '';
        }, 2000);
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        showToast('Thank you! Your message has been sent. We\'ll get back to you soon!');
        contactForm.reset();
    } else {
        showToast('Please fill in all required fields.');
    }
});

// Newsletter Form
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (email) {
            showToast('Thank you for subscribing!');
            form.reset();
        }
    });
});

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Product card hover effects
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize on load
window.addEventListener('load', () => {
    // Add fade-in to hero
    document.querySelector('.hero-content').classList.add('fade-in');
    
    // Animate floating petals
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        petal.style.animationDelay = `${index * 2}s`;
    });
});

// Add active class to nav links on click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// New Item Popup
function showPopup() {
    const popup = document.getElementById('newItemPopup');
    if (!popup) {
        console.error('Popup element not found!');
        return;
    }
    
    console.log('showPopup called, popup element found');
    
    // Show popup immediately for testing
    setTimeout(() => {
        if (popup) {
            popup.classList.add('show');
            // Prevent body scroll when popup is open
            document.body.style.overflow = 'hidden';
            console.log('Popup class "show" added');
        } else {
            console.error('Popup element disappeared!');
        }
    }, 500); // Show popup after 0.5 seconds
}

function closePopup() {
    const popup = document.getElementById('newItemPopup');
    popup.classList.remove('show');
    // Restore body scroll
    document.body.style.overflow = '';
    // Mark popup as shown for this session
    sessionStorage.setItem('popupShown', 'true');
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('newItemPopup');
    if (e.target === popup) {
        closePopup();
    }
});

// Show popup on page load - try multiple ways
(function() {
    function initPopup() {
        console.log('Initializing popup...');
        const popup = document.getElementById('newItemPopup');
        if (popup) {
            console.log('Popup found, will show in 0.5 seconds');
            setTimeout(() => {
                popup.classList.add('show');
                document.body.style.overflow = 'hidden';
                console.log('Popup should be visible now');
            }, 500);
        } else {
            console.error('Popup element not found in DOM!');
        }
    }
    
    // Try immediately if DOM is ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initPopup, 100);
    } else {
        window.addEventListener('load', initPopup);
        document.addEventListener('DOMContentLoaded', initPopup);
    }
    
    // Also call the original function
    window.addEventListener('load', showPopup);
})();

