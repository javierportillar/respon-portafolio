// Declarate and instancie of variables form html
const portafolio = document.getElementById("portafolio");
const pflBtn = document.getElementById("portafolio-btn");
const skills = document.querySelector(".skills");
const skillBtn = document.getElementById("skills-btn");

//Portafolio button event
pflBtn.addEventListener("click", () => {
  skills.style.display = "none"; //Desapear skills div
  portafolio.style.display = "flex";
  skillBtn.classList.remove("active-btn");
  pflBtn.classList.add("active-btn");
});

skillBtn.addEventListener("click", () => {
  portafolio.style.display = "none"; //Desapear pflo div
  skills.style.display = "flex";
  pflBtn.classList.remove("active-btn");
  skillBtn.classList.add("active-btn");
});

// Ligth and Dark mode

document.addEventListener("DOMContentLoaded", () => {
  const toggleThemBtn = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme-icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const ligthLogos = {
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
  };
  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };


});
