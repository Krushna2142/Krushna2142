// Example of simple interactivity
document.addEventListener('DOMContentLoaded', function () {

    // Example: Adding event listeners to links for dynamic content
    const projectLinks = document.querySelectorAll('.project a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            console.log('Project clicked:', event.target);
        });
    });

    // Example of contact form submission handling (if you integrate a form later)
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Here, you can handle form data submission (e.g., using EmailJS or other methods)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                responseMessage.textContent = 'Thank you for reaching out!';
                responseMessage.style.color = 'green';
            } else {
                responseMessage.textContent = 'Please fill out all fields.';
                responseMessage.style.color = 'red';
            }
        });
    }

});
