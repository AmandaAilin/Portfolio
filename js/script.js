const header = document.querySelector("header");

/* --------- Sticky Navbar --------*/

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* --------- Reveal Animation --------*/

let sr = ScrollReveal({
    duration: 2500, 
    distance: "60px",
});