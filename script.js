// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapse navbar on mobile after clicking a link
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        if (window.innerWidth < 992) {
            document.querySelector('.navbar-collapse').classList.remove('show');
        }
    });
});

// Shrink navbar on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').classList.add('shrink');
    } else {
        document.querySelector('header').classList.remove('shrink');
    }
});
