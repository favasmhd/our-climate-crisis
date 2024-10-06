document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all nav links
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');

        const targetId = this.getAttribute('href');
        
        // Check if targetId is a link to another HTML page
        if (targetId.endsWith('.html')) {
            window.location.href = targetId; // Navigate to another page
        } else {
            // If it's a section within the same page
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
