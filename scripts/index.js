// Js for sticky navbar
let navbar = document.getElementById("nav-menu");
let menu = document.getElementById("menu");
let header = document.getElementById("header");

header.classList.add("glowing-border");
window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
        navbar.classList.add("glowing-border");
        header.classList.remove("glowing-border");
    }else{
        navbar.classList.remove("sticky");
        navbar.classList.remove("glowing-border");
        header.classList.add("glowing-border");
    }
}

// Js for Auto typed text   
var typed = new Typed('#auto-typing-text', {
    strings: ["Full Stack Web Developer", "Java Backend Developer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});
