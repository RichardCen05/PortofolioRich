// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
    const aboutSections = document.querySelectorAll('.about-section');
    const aboutImages = document.querySelectorAll('.about-image');

    // Set initial state
    aboutSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    aboutImages.forEach(image => {
        image.style.opacity = '0';
        image.style.transform = 'translateX(-20px)';
        image.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Function to animate elements in viewport
    function animateOnScroll() {
        aboutSections.forEach(section => {
            if (isInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
        
        aboutImages.forEach(image => {
            if (isInViewport(image)) {
                image.style.opacity = '1';
                image.style.transform = 'translateX(0)';
            }
        });
    }
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Check if mobile menu elements exist before adding event listeners
    if (mobileMenuBtn && mobileMenu) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    if (closeMenuBtn && mobileMenu) {
        // Close mobile menu
        closeMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    if (mobileNavLinks.length && mobileMenu) {
        // Close menu when clicking a nav link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Close menu when clicking outside
    if (mobileMenu) {
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && 
                (!mobileMenuBtn || !mobileMenuBtn.contains(event.target)) && 
                mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message (you could create a more sophisticated notification)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Scroll reveal animation (simple version)
    const revealElements = document.querySelectorAll('.project-card, .timeline-item, .achievement-card, .about-section');
    
    if (revealElements.length) {
        function checkScroll() {
            const windowHeight = window.innerHeight;
            
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial state for animation
        revealElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Check elements on load
        window.addEventListener('load', checkScroll);
        
        // Check elements on scroll
        window.addEventListener('scroll', checkScroll);
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Function to align images with sections
    function alignImages() {
        // Only run on desktop
        if (window.innerWidth >= 768) {
            const whoSection = document.querySelector('.who-section');
            const approachSection = document.querySelector('.approach-section');
            const missionSection = document.querySelector('.mission-section');
            
            const whoImage = document.querySelector('.who-image');
            const approachImage = document.querySelector('.approach-image');
            const missionImage = document.querySelector('.mission-image');
            
            // Reset margins first to avoid compounding issues
            if (whoImage) whoImage.style.marginTop = '0';
            if (approachImage) approachImage.style.marginTop = '0';
            if (missionImage) missionImage.style.marginTop = '0';
            
            // Set a small delay to ensure DOM measurements are accurate
            setTimeout(() => {
                if (whoSection && whoImage) {
                    const whoTop = whoSection.offsetTop;
                    whoImage.style.marginTop = whoTop + 'px';
                }
                
                if (approachSection && approachImage && whoImage) {
                    const approachTop = approachSection.offsetTop;
                    const whoImageHeight = whoImage.offsetHeight;
                    const whoImageBottom = whoImage.offsetTop + whoImageHeight;
                    const marginTop = Math.max(0, approachTop - whoImageBottom - 20);
                    approachImage.style.marginTop = marginTop + 'px';
                }
                
                if (missionSection && missionImage && approachImage) {
                    const missionTop = missionSection.offsetTop;
                    const approachImageHeight = approachImage.offsetHeight;
                    const approachImageBottom = approachImage.offsetTop + approachImageHeight;
                    const marginTop = Math.max(0, missionTop - approachImageBottom - 20);
                    missionImage.style.marginTop = marginTop + 'px';
                }
            }, 100);
        } else {
            // Reset margins on mobile
            const images = document.querySelectorAll('.about-image');
            images.forEach(img => {
                img.style.marginTop = '';
            });
        }
    }
    
    // Run alignImages function if the about section exists
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        // Run on load and resize
        alignImages();
        window.addEventListener('resize', debounce(alignImages, 250));
        
        // Run again after images load to ensure accurate calculations
        window.addEventListener('load', alignImages);
        
        // Run after a short delay to ensure all styles are applied
        setTimeout(alignImages, 500);
    }
});

// Debounce function to limit how often a function can be called
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}