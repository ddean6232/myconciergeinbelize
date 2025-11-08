// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            // Don't prevent default for "Become a Member" button to allow normal behavior
            if (href === '#book') {
                // Scroll to contact form if #book doesn't exist
                const target = document.querySelector('#book') || document.querySelector('#contact');
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !message) {
                showFormStatus('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state
            showFormStatus('Sending your inquiry...', 'loading');
            
            // Disable submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate form submission (replace with actual API call)
            // For now, we'll simulate a successful submission
            setTimeout(() => {
                // In a real application, you would make an API call here
                // Example: fetch('/api/contact', { method: 'POST', body: formData })
                
                showFormStatus('Thank you! Your inquiry has been sent. We\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Inquiry';
                
                // Clear status message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                }, 5000);
            }, 1500);
        });
    }

    // Function to show form status messages
    function showFormStatus(message, type) {
        if (!formStatus) return;
        
        formStatus.textContent = message;
        formStatus.className = type;
        
        // Add styling classes
        formStatus.style.padding = '1em';
        formStatus.style.borderRadius = '8px';
        formStatus.style.marginTop = '1em';
        formStatus.style.textAlign = 'center';
        formStatus.style.fontWeight = '500';
        
        if (type === 'success') {
            formStatus.style.backgroundColor = '#d4edda';
            formStatus.style.color = '#155724';
            formStatus.style.border = '1px solid #c3e6cb';
        } else if (type === 'error') {
            formStatus.style.backgroundColor = '#f8d7da';
            formStatus.style.color = '#721c24';
            formStatus.style.border = '1px solid #f5c6cb';
        } else if (type === 'loading') {
            formStatus.style.backgroundColor = '#d1ecf1';
            formStatus.style.color = '#0c5460';
            formStatus.style.border = '1px solid #bee5eb';
        }
    }

    // Add scroll effect to header/nav
    let lastScroll = 0;
    const header = document.querySelector('header nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(0, 128, 128, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'rgba(0, 128, 128, 0.85)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Add fade-in animation for cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

