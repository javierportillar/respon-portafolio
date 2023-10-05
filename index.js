// Declarate and instancie of variables form html
const portafolio = document.getElementById("portafolio");
const pflBtn = document.getElementById("portafolio-btn")
const skills = document.querySelector(".skills")
const skillBtn = document.getElementById("skills-btn")

//Portafolio button event
pflBtn.addEventListener("click",()=>{
    skills.style.display = "none" //Desapear skills div
    portafolio.style.display = "flex";
    skillBtn.classList.remove("active-btn");
    pflBtn.classList.add("active-btn");

})
skillBtn.addEventListener("click",()=>{
    portafolio.style.display = "none" //Desapear pflo div
    skills.style.display = "flex";
    pflBtn.classList.remove("active-btn");
    skillBtn.classList.add("active-btn");

})