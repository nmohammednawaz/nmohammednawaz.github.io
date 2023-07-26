const resumeLinkOne = document.getElementById("resume-button-1");
const resumeLinkTwo = document.getElementById("resume-button-2");
// const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav-menu');

function downloadAndOpenResume(event){
    event.preventDefault();
    var url = this.location.href;
    const resumeLink = "./resume/MOHAMMED-NAWAZ-RESUME.pdf";
    window.open(resumeLink, "_blank");
    var fileName = "MOHAMMED-NAWAZ-RESUME.pdf";
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
}

resumeLinkOne.addEventListener("click", (event) => {
    downloadAndOpenResume(event);
});

resumeLinkTwo.addEventListener("click", (event) => {
    downloadAndOpenResume(event);
})
    
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

  
  