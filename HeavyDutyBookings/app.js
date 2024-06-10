document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchOptions = document.querySelector('#search-options');
    const locationInput = document.querySelector('input[placeholder="Current Location"]');
    const destinationInput = document.querySelector('input[placeholder="Destination"]');

    searchButton.addEventListener('click', () => {
        const searchType = searchOptions.value;
        const location = locationInput.value;
        const destination = destinationInput.value;

        if (location && destination) {
            alert(`Searching for ${searchType} rides from ${location} to ${destination}`);
            // You can replace the alert with an actual search function
        } else {
            alert('Please enter both location and destination');
        }
    });

    // Form submission in the contact section
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            alert(`Thank you, ${name}. Your message has been sent!`);
            // Here you can add code to actually send the form data to your server
        } else {
            alert('Please fill out all fields before submitting');
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Log In and Sign In modals
    const loginButton = document.querySelector('.login');
    const signinButton = document.querySelector('.signin');
    const bookNowButton = document.querySelector('.cta');

    const loginModal = document.querySelector('#login-modal');
    const signinModal = document.querySelector('#signin-modal');
    const closeButtons = document.querySelectorAll('.close');

    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    signinButton.addEventListener('click', () => {
        signinModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signinModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });

    // Book Now button
    bookNowButton.addEventListener('click', () => {
        alert('Booking process initiated!');
        // You can replace the alert with actual booking logic
    });
});
