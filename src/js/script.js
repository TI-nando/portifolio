// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active section highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
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

// Initialize animations on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .education-category');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Skills section animation
const skillsSection = document.getElementById('skills');
const skillIcons = document.querySelectorAll('.skill-icon');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const icons = entry.target.querySelectorAll('.skill-icon');
            icons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.opacity = '1';
                    icon.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
    
    // Initialize skill icons state
    skillIcons.forEach(icon => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px) scale(0.8)';
        icon.style.transition = 'all 0.5s ease';
    });
}

// Typewriter effect for hero role
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    const heroRole = document.getElementById('hero-role');
    if (heroRole) {
        const text = heroRole.textContent;
        setTimeout(() => {
            typeWriter(heroRole, text, 100);
        }, 1000);
    }
});

// Parallax effect for hero shape
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroShape = document.querySelector('.hero-shape');
    
    if (heroShape) {
        const rate = scrolled * -0.3;
        heroShape.style.transform = `translateY(${rate}px)`;
    }
});

// Project cards hover effects
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0)';
        });
    });
});

// Update footer year
document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Social links hover effects
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.social-link, .footer-link').forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// WhatsApp button functionality
const whatsappButton = document.getElementById('whatsapp-button');

// Show/hide WhatsApp button on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        whatsappButton.classList.add('visible');
    } else {
        whatsappButton.classList.remove('visible');
    }
});

// WhatsApp button click handler
function openWhatsApp() {
    const phoneNumber = "64992094437";
    const message = "Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades de trabalho.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Header scroll effect
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // WhatsApp button visibility
    if (window.pageYOffset > 300) {
        whatsappButton.classList.add('visible');
    } else {
        whatsappButton.classList.remove('visible');
    }

    // Active section highlighting
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 10);

// Replace multiple scroll event listeners with single debounced handler
window.addEventListener('scroll', debouncedScrollHandler);

// Interactive background: track mouse and trigger ripple on pause
(() => {
  let pauseTimer;
  let rippleTimer;
  const setMouseVars = (x, y) => {
    document.documentElement.style.setProperty('--mouse-x', x + 'px');
    document.documentElement.style.setProperty('--mouse-y', y + 'px');
  };

  window.addEventListener('mousemove', (e) => {
    setMouseVars(e.clientX, e.clientY);
    document.body.classList.remove('paused');
    if (pauseTimer) clearTimeout(pauseTimer);
    if (rippleTimer) clearTimeout(rippleTimer);
    pauseTimer = setTimeout(() => {
      document.body.classList.add('paused');
      rippleTimer = setTimeout(() => {
        document.body.classList.remove('paused');
      }, 900);
    }, 350);
  });
})();
