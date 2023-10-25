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
let contactForm = document.getElementById("contact-form");
const successPopup = document.getElementById("successPopup");
let slideInterval;

    
// Function to toggle the sticky class on the navbar
function toggleStickyNavbar() {
    if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('sticky');
    } else {
    navbar.classList.remove('sticky');
    }
}
  
// Listen for scroll event and apply the sticky class accordingly
window.addEventListener('scroll', toggleStickyNavbar);
  
// Js for Auto typed text   
var typed = new Typed('#auto-typing-text', {
    strings: ["Full Stack Web Developer", "Java Backend Developer", "Full Stack Java Developer", "Spring Boot Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});


// Scroll up button visibility

// Flag to track if the user has scrolled down
var hasScrolled = false;
scrollUpButton.style.display = "none";

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
        imageLink: "https://i0.wp.com/dbaontap.com/wp-content/uploads/2015/11/json-logo.png?fit=690%2C330&ssl=1",
        altName: "JSON_Logo",
        name: "JSON Server"
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

// Projects Array
let projects = [
    {
        projectTitle: "Book My Bus",
        projectDescription: "An intuitive online platform for bus reservations, providing users easy booking while enabling admins to manage routes, buses, and users.",
        projectImageSrc: "./images/projects/Book_My_Bus_Logo.png",
        projectImageSrcAlt: "Book-my-bus-Logo",
        projectGithubLink: "https://github.com/nmohammednawaz/Book-My-Bus",
        projectDeployedLink: "https://book-my-bus.netlify.app/",
        projectDemoLink: "#",
        projectTeckStacks: [
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
                imageLink: "https://avatars.githubusercontent.com/u/45949248?s=200&v=4",
                altName: "Lombok_Logo",
                name: "Project Lombok"
            },
            {
                imageLink: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
                altName: "SQL_Logo",
                name: "SQL"
            }
        ]
    },
    {
        projectTitle: "Customer Connect",
        projectDescription: "Customer Connect is a console-based project designed as an Online Customer Service Center that allows users to create and manage customer issues and facilitate their resolution.",
        projectImageSrc: "./images/projects/Customer_Connec_Logo.png",
        projectImageSrcAlt: "Customer-connect-Logo",
        projectGithubLink: "https://github.com/nmohammednawaz/Customer-Connect",
        projectDeployedLink: "https://www.youtube.com/watch?v=65FYAnaQjeE&feature=youtu.be",
        projectDemoLink: "https://www.youtube.com/watch?v=65FYAnaQjeE&feature=youtu.be",
        projectTeckStacks: [
            {
                imageLink: "https://i.pinimg.com/564x/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.jpg",
                altName: "Java_Logo",
                name: "Java"
            },
            {
                imageLink: "https://toppng.com/uploads/preview/hibernate-logo-11609364227r2rk6gphuk.png",
                altName: "Hibernate_Logo",
                name: "Hibernate"
            },
            {
                imageLink: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
                altName: "SQL_Logo",
                name: "SQL"
            }
        ]
    },
    {
        projectTitle: "Fabrica",
        projectDescription: "Fabrica is a clone of webiste called Columbia.com which is an apparel and footwear company. It designs, develops, markets, and distributes apparel, footwear, accessories and equipment for men, kids, women and youth.",
        projectImageSrc: "./images/projects/Fabrica_Logo.png",
        projectImageSrcAlt: "Fabrica-Logo",
        projectGithubLink: "https://github.com/nmohammednawaz/Fabrica",
        projectDeployedLink: "https://fabricaa.netlify.app/",
        projectDemoLink: "#",
        projectTeckStacks: [
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
                imageLink: "https://i0.wp.com/dbaontap.com/wp-content/uploads/2015/11/json-logo.png?fit=690%2C330&ssl=1",
                altName: "JSON_Logo",
                name: "JSON Server"
            },
            {
                imageLink: "https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png",
                altName: "RestApi_Logo",
                name: "REST API"
            }
        ]
    },
    {
        projectTitle: "Violet Beaute",
        projectDescription: "Violet Beaute is an e-commerce product-based web application, A website clone of purplle.com website",
        projectImageSrc: "./images/projects/VioletBeaute_Logo.png",
        projectImageSrcAlt: "Violetbeaute-Logo",
        projectGithubLink: "https://github.com/nmohammednawaz/Violet-Beaute",
        projectDeployedLink: "https://violetbeaute.netlify.app/",
        projectDemoLink: "#",
        projectTeckStacks: [
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
                imageLink: "https://i0.wp.com/dbaontap.com/wp-content/uploads/2015/11/json-logo.png?fit=690%2C330&ssl=1",
                altName: "JSON_Logo",
                name: "JSON Server"
            },
            {
                imageLink: "https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png",
                altName: "RestApi_Logo",
                name: "REST API"
            }
        ]
    },
    {
        projectTitle: "Jeevan Shailee",
        projectDescription: "Jeevan Shailee is an e-commerce product-based web application, It is an e-commerce website clone of lifestylestores.com",
        projectImageSrc: "./images/projects/JeevanShailee_Logo.png",
        projectImageSrcAlt: "JeevanShailee-Logo",
        projectGithubLink: "https://github.com/nmohammednawaz/JeevanShailee",
        projectDeployedLink: "https://jeevanshailee.netlify.app/",
        projectDemoLink: "#",
        projectTeckStacks: [
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
                imageLink: "https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png",
                altName: "RestApi_Logo",
                name: "REST API"
            }
        ]
    },
    {
        projectTitle: "Block Your Stocks",
        projectDescription: "Block Your Stocks is a console-based project designed as an Stock Broker System that allows users to buy and sell stocks.",
        projectImageSrc: "./images/projects/BlockYourStocks_Logo.png",
        projectImageSrcAlt: "Block-your-stocks-Logo",
        projectGithubLink: "https://github.com/nmohammednawaz/Block-Your-Stocks",
        projectDeployedLink: "#",
        projectDemoLink: "#",
        projectTeckStacks: [
            {
                imageLink: "https://i.pinimg.com/564x/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.jpg",
                altName: "Java_Logo",
                name: "Java"
            }
        ]
    },
];

// Function to create Project cards
function createProjectCard(projectDetails){
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
    <div>
        <h2>Teck Stacks Used</h2>
        <div class="project-tech-stack">
            
        </div>
    </div>
    <div>
        <img src="${projectDetails.projectImageSrc}" alt="${projectDetails.projectImageSrcAlt}" class="project-logo">
        <h1 class="project-title">${projectDetails.projectTitle}</h1>
        <p class="project-description">${projectDetails.projectDescription}</p>
    </div>
    <div>
        <div class="project-links">
            <a href="${projectDetails.projectGithubLink}" class="project-github-link" target="_blank">Explore Code <i class="fa-brands fa-github"></i></a>
            <a href="${projectDetails.projectDeployedLink}" class="project-deployed-link" target="_blank">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            <a href="${projectDetails.projectDemoLink}" class="project-demo-link" target="_blank">Watch Demo <i class="fa-solid fa-eye"></i></a>
        </div>
    </div>
    `;

    let projectTechStacksDiv = projectCard.querySelector(".project-tech-stack");
    projectDetails.projectTeckStacks.forEach(projectStack => {
        projectTechStacksDiv.appendChild(createSkillCard(projectStack));
    });

    return projectCard;
}

let projectSlider = document.querySelector(".project-slider");

projects.forEach(project => {
    projectSlider.append(createProjectCard(project));
})

const slider = document.querySelector('.project-slider');
const slides = document.querySelectorAll('.project-card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;

// Function to update slider
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to previous slide
function prevSlide() {
    clearInterval(slideInterval);
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        updateDots();
    }
}

// Function to move to next slide
function nextSlide() {
    clearInterval(slideInterval);
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
        updateDots();
    }
}

// Function to update dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}

// Function to create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        updateDots();
    });
    dotsContainer.appendChild(dot);
});

updateDots();

// Function to automatically switch to the next slide
function autoSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
    updateDots();
}

// Function to start the auto slide interval
function startAutoSlide() {
    slideInterval = setInterval(autoSlide, 5000);
}

// Start the initial auto slide interval
startAutoSlide();

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Function to toggle dots slider
dotsContainer.addEventListener('click', (event) => {
    const dotIndex = Array.from(dotsContainer.children).indexOf(event.target);
    if (dotIndex !== -1) {
        clearInterval(slideInterval);
        currentIndex = dotIndex;
        updateSlider();
        updateDots();
    }
});

// Function to send message(email)
function sendEmail(){
    emailjs.init("GhshwA9L7DSVyL0ll");

    let params = {
        senderName: contactForm.name.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value,
        replyTo: contactForm.email.value
    };

    const serviceID = "service_7xgn29i";
    const templateID = "template_vnl89sd";

    emailjs.send(serviceID, templateID, params)
    .then(response => {
        setTimeout(function () {
            // Shows the success popup
            successPopup.style.display = 'flex';
            // Hides the success popup after 3 seconds
            setTimeout(function () {
                successPopup.style.display = 'none';
            }, 3000);

            // Clears the form fields
            contactForm.reset();
        }, 1000);
    })
    .catch(error => {
        successPopup.innerHTML = `<p>Please enter valid email Id</p>`

    })
}


// Send Email On submit
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    sendEmail();
    
})
