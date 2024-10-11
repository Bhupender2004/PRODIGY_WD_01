// Get the navbar element
const navbar = document.getElementById('navbar');

// Add scroll event listener
window.onscroll = function() {
    // Add "scrolled" class when page is scrolled down
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
