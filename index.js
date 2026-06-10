const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const themeBtn = document.getElementById("toggle-theme");
const themeIcon = themeBtn.querySelector("img");
const githubLogo = document.querySelector('a[aria-label="GitHub profile"] img');
const linkedinLogo = document.querySelector('a[aria-label="LinkedIn profile"] img');
const emailLogo = document.querySelector('a[aria-label="Send email"] img');

const lightLogos = {
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

function showSection(section) {
  const showSkills = section === "skills";
  portfolio.hidden = showSkills;
  skills.hidden = !showSkills;
  portfolioBtn.classList.toggle("active-btn", !showSkills);
  skillsBtn.classList.toggle("active-btn", showSkills);
  portfolioBtn.setAttribute("aria-selected", String(!showSkills));
  skillsBtn.setAttribute("aria-selected", String(showSkills));
}

function setTheme(isDark) {
  const logos = isDark ? darkLogos : lightLogos;
  githubLogo.src = logos.github;
  linkedinLogo.src = logos.linkedin;
  emailLogo.src = logos.email;
  themeIcon.src = logos.theme;
}

portfolioBtn.addEventListener("click", () => showSection("portfolio"));
skillsBtn.addEventListener("click", () => showSection("skills"));

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("isDark", String(isDark));
  setTheme(isDark);
});

const savedDarkMode = localStorage.getItem("isDark") === "true";
document.body.classList.toggle("dark-theme", savedDarkMode);
setTheme(savedDarkMode);
