document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navigation-bar li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section based on the link's href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Get the target element's position offset by 50px
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 50;

            // Smoothly scroll to the calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});
