// Change Navbar Background on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "black";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
    }
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
