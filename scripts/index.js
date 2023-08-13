const resumeLinkOne = document.getElementById("resume-button-1");
const resumeLinkTwo = document.getElementById("resume-button-2");
const navbar = document.getElementById('nav-menu');
let scrollUpButton = document.getElementById("scroll-up");
    
// Function to toggle the sticky class on the navbar
function toggleStickyNavbar() {
    if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('sticky');
    } else {
    navbar.classList.remove('sticky');
    }
}
  
// Listen for scroll events and apply the sticky class accordingly
window.addEventListener('scroll', toggleStickyNavbar);
  
// Js for Auto typed text   
var typed = new Typed('#auto-typing-text', {
    strings: ["Full Stack Web Developer", "Java Backend Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});


//   Scroll up button visibility
window.addEventListener("scroll", function() {
    var homeSection = document.getElementById("home");
    var scrolled = window.scrollY;

    if (scrolled < 50 && homeSection.getBoundingClientRect().bottom < window.innerHeight) {
      // Hide the scroll-up button when the user is on the home section or when the bottom of the home section is visible in the viewport
      scrollUpButton.style.display = "none";
    } else {
      // Show the scroll-up button in all other cases
      scrollUpButton.style.display = "block";
      scrollUpButton.style.position = "fixed";
    }
});

// Function to smoothly scroll to the top when the scroll-up button is clicked
scrollUpButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});

  