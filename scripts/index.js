const resumeLinkOne = document.getElementById("resume-button-1");
const resumeLinkTwo = document.getElementById("resume-button-2");
const navbar = document.getElementById('nav-menu');
let scrollUpButton = document.getElementById("scroll-up");
let hamburger = document.getElementById("hamburger");
let navbarMenu = document.getElementById("navbar-menu");
let frontEndSkillCardContainer = document.getElementById("front-end-skill-cards");
let backEndSkillCardContainer = document.getElementById("back-end-skill-cards");
let builtToolsContainer = document.getElementById("built-tools");
let softSkillsContainer = document.getElementById("soft-skills");
    
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


// //   Scroll up button visibility
// Flag to track if the user has scrolled down
var hasScrolled = false;

// Function to toggle the visibility of the scroll-up button
function toggleScrollUpButtonVisibility() {
    var homeSection = document.getElementById("home");
    var scrolled = window.scrollY;

    if (scrolled < 700 && homeSection.getBoundingClientRect().bottom <= window.innerHeight) {
        // Hide the scroll-up button when the user is on the home section or when the bottom of the home section is visible in the viewport
        scrollUpButton.style.display = "none";
        hasScrolled = false; // Reset the scroll flag
    } else {
        // Show the scroll-up button in all other cases
        scrollUpButton.style.display = "block";
        if (hasScrolled) {
            scrollUpButton.style.position = "fixed";
        }
    }
}

// Attach a scroll event listener to the window
window.addEventListener("scroll", function () {
    if (!hasScrolled) {
        hasScrolled = true;
    }
    toggleScrollUpButtonVisibility();
});

// Call the toggleScrollUpButtonVisibility function to initialize button visibility
toggleScrollUpButtonVisibility();


// Function to smoothly scroll to the top when the scroll-up button is clicked
scrollUpButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});

// Toggle Hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('open');
});


// Function to create skillCard
function createSkillCard(skillCardData){
    let skillCardDiv = document.createElement("div");
    skillCardDiv.classList.add("skills-card");

    skillCardDiv.innerHTML = `
    <img class="skills-card-img" src="${skillCardData.imageLink}" alt="${skillCardData.altName}">
    <p class="skills-card-name">${skillCardData.name}</p>
    `;

    return skillCardDiv;
}

// Front End Stacks Details Array
const frontEndStacks = [
    {
        imageLink: "https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
        altName: "HTML_Logo",
        name: "HTML"
    },
    {
        imageLink: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
        altName: "CSS_Logo",
        name: "CSS"
    },
    {
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        altName: "JavaScript_Logo",
        name: "JavaScript"
    },
    {
        imageLink: "https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_logo_icon_167804.png",
        altName: "jQuery_Logo",
        name: "jQuery"
    },
    {
        imageLink: "https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png",
        altName: "RestApi_Logo",
        name: "REST API"
    }
];

frontEndStacks.forEach((frontEndStack)=> {
    frontEndSkillCardContainer.append(createSkillCard(frontEndStack));
})


// Backend End Stacks Details Array
const backEndStacks = [
    {
        imageLink: "https://i.pinimg.com/564x/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.jpg",
        altName: "Java_Logo",
        name: "Java"
    },
    {
        imageLink: "https://www.bridgetech.co.id/storage/2021/02/spring-logo.png",
        altName: "Spring_Logo",
        name: "Spring"
    },
    {
        imageLink: "https://plugins.jetbrains.com/files/18622/305008/icon/pluginIcon.png",
        altName: "SpringBoot_Logo",
        name: "Spring Boot"
    },
    {
        imageLink: "https://www.javacodegeeks.com/wp-content/uploads/2014/07/spring-security-project.png",
        altName: "SpringSecurity_Logo",
        name: "Spring Security"
    },
    {
        imageLink: "https://toppng.com/uploads/preview/hibernate-logo-11609364227r2rk6gphuk.png",
        altName: "Hibernate_Logo",
        name: "Hibernate"
    },
    {
        imageLink: "https://avatars.githubusercontent.com/u/45949248?s=200&v=4",
        altName: "Lombok_Logo",
        name: "Project Lombok"
    },
    {
        imageLink: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
        altName: "SQL_Logo",
        name: "SQL"
    }
];

backEndStacks.forEach((backEndStack) => {
    backEndSkillCardContainer.append(createSkillCard(backEndStack));
})

// Built tools details array
const builtTools = [
    {
        imageLink: "./images/githubLogo.png",
        altName: "Github_Logo",
        name: "Github"
    },
    {
        imageLink: "https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png",
        altName: "Netlify_Logo",
        name: "Netlify"
    },
    {
        imageLink: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
        altName: "Postman_Logo",
        name: "Postman"
    },
    {
        imageLink: "https://dashboard.snapcraft.io/site_media/appmedia/2016/12/mysql.png",
        altName: "MysqlClient_Logo",
        name: "MySql Client"
    },
    {
        imageLink: "https://w7.pngwing.com/pngs/905/947/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png",
        altName: "VSCode_Logo",
        name: "Visual Studio"
    },
    {
        imageLink: "https://blog.kakaocdn.net/dn/cTqexF/btq1Qod0a5p/q5LIAZUoVvWyAgQyKpcank/img.png",
        altName: "STS_Logo",
        name: "STS"
    },
    {
        imageLink: "https://logowik.com/content/uploads/images/maven-apache3537.jpg",
        altName: "Maven_Logo",
        name: "Maven"
    },
    {
        imageLink: "./images/XAAMP.png",
        altName: "XAAMP_Logo",
        name: "XAAMP"
    }
];

builtTools.forEach((builtTool) => {
    builtToolsContainer.append(createSkillCard(builtTool));
})

// Soft skills details Array
const softSkills = [
    {
        imageLink: "https://static.vecteezy.com/system/resources/thumbnails/000/577/853/small/6-01.jpg",
        altName: "Leadership_Logo",
        name: "Leadership"
    },
    {
        imageLink: "https://cdn1.vectorstock.com/i/1000x1000/11/45/adaptability-icon-simple-element-from-life-skills-vector-34251145.jpg",
        altName: "Adaptability_Logo",
        name: "Adaptability"
    },
    {
        imageLink: "https://spopsprod.blob.core.windows.net/cp-cms/446099c6f88617c44da1/default",
        altName: "teamWork_Logo",
        name: "Team Work"
    },
    {
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4EUiv30BezlO637MN7iA2oekhWA1F0HCvA&usqp=CAU",
        altName: "communication_Logo",
        name: "Communication"
    },
    {
        imageLink: "https://static.vecteezy.com/system/resources/thumbnails/009/242/229/small_2x/problem-solving-outline-icon-free-vector.jpg",
        altName: "problemSolving_Logo",
        name: "Problem Solving"
    },
    {
        imageLink: "https://icon-library.com/images/learn-icon-png/learn-icon-png-26.jpg",
        altName: "Self_learning",
        name: "Self Learning"
    },
    {
        imageLink: "https://static.vecteezy.com/system/resources/previews/010/948/779/original/time-management-logo-template-check-mark-with-clock-icon-design-free-vector.jpg",
        altName: "TeamMngmnt_Logo",
        name: "Team Management"
    },
    {
        imageLink: "https://c8.alamy.com/comp/RHPN14/patience-icon-thin-outline-creativepatience-design-from-soft-skills-collection-web-design-apps-software-and-print-usage-RHPN14.jpg",
        altName: "Perseverance_Logo",
        name: "Perseverance"
    }
];

softSkills.forEach((softSkill) => {
    softSkillsContainer.append(createSkillCard(softSkill));
})
