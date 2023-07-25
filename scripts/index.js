const resumeLinkOne = document.getElementById("resume-link-1");
// const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav-menu');

function downloadAndOpenResume(){

}

resumeLinkOne.addEventListener("click", function (event) {
    event.preventDefault();
    var url = this.href;
    window.open(url, "_blank");
    var fileName = "MOHAMMED-NAWAZ-RESUME.pdf";
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
});
    
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

  
  