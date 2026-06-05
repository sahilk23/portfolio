document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.getElementById('custom-cursor');
    
    // Only enable custom cursor if device has pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add hover effect for clickable elements
        const clickables = document.querySelectorAll('a, button, .pill-btn, .skill-chip, .glass-card');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '24px';
                cursor.style.height = '24px';
                cursor.style.backgroundColor = 'transparent';
                cursor.style.border = '2px solid #00D4FF';
                cursor.style.boxShadow = '0 0 10px #00D4FF';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '6px';
                cursor.style.height = '6px';
                cursor.style.backgroundColor = 'var(--text-primary)';
                cursor.style.border = 'none';
                cursor.style.boxShadow = '0 0 10px 6px rgba(108, 99, 255, 0.6)';
            });
        });
    } else {
        cursor.style.display = 'none';
    }

    // 2. Typewriter Effect
    const words = ["AI Engineer", "Data Scientist", "ML Engineer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeElement = document.getElementById('typewriter-tagline');
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typewriter
    setTimeout(typeEffect, 1000);

    // 3. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Scroll Reveal (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-section');
    const skillChips = document.querySelectorAll('.skill-chip');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // If this is the skills section, trigger staggered animation for chips
                if (entry.target.id === 'skills') {
                    skillChips.forEach((chip, index) => {
                        setTimeout(() => {
                            chip.classList.add('visible');
                        }, index * 50); // 50ms delay per chip
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    fadeElements.forEach(el => {
        revealObserver.observe(el);
    });
});
