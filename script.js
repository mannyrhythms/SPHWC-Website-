// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate network delay
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Smooth scrolling for anchor links (if you add navigation later)
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
    
    // Add fade-in animation on scroll for better user experience
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
    
    // Observe all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effects for testimonials
    document.querySelectorAll('.testimonial').forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        testimonial.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Enhanced form input interactions
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        const label = input.parentElement.querySelector('label');
        
        input.addEventListener('focus', function() {
            label.style.color = '#4a7c73';
            label.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                label.style.color = '#2c3e50';
                label.style.transform = 'translateY(0)';
            }
        });
        
        // Keep label styled if input has value
        if (input.value) {
            label.style.color = '#4a7c73';
        }
    });
    
    // Lightning icon animation on hero section
    const lightningIcon = document.querySelector('.lightning-icon svg');
    if (lightningIcon) {
        let animationFrame;
        
        function animateLightning() {
            lightningIcon.style.filter = 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))';
            
            setTimeout(() => {
                lightningIcon.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))';
            }, 200);
        }
        
        // Animate every 3 seconds
        setInterval(animateLightning, 3000);
        
        // Animate on hover
        lightningIcon.addEventListener('mouseenter', animateLightning);
    }
});

// Utility function for responsive behavior
function handleResize() {
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;
    
    // Adjust any responsive JavaScript here if needed
    if (isMobile) {
        // Mobile-specific adjustments
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.margin = '0 0 20px 0';
        });
    } else if (isTablet) {
        // Tablet-specific adjustments
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.margin = '0 0 25px 0';
        });
    } else {
        // Desktop adjustments
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.margin = '0 0 30px 0';
        });
    }
}

// Listen for window resize
window.addEventListener('resize', handleResize);

// Run once on load
handleResize();
