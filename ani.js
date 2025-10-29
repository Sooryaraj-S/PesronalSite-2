const fadeUps = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
    fadeUps.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const email = "sooryaraj.dev@gmail.com";
    const subject = "Portfolio Inquiry";
    const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
