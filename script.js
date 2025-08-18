// Add interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Form submission handler
            const form = document.getElementById('contactForm');
            const submitBtn = document.querySelector('.submit-btn');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Change button text temporarily
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '📤 Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '✅ Message Sent!';
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        form.reset();
                    }, 2000);
                }, 1500);
            });

            // Add hover effects to contact cards
            const contactCards = document.querySelectorAll('.contact-card');
            contactCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('.contact-icon');
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('.contact-icon');
                    icon.style.transform = 'scale(1) rotate(0deg)';
                });
            });

            // Add focus effects to form inputs
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateX(5px)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateX(0)';
                });
            });
        });
    