//Implementing Javascript for the Off Canvas Sidebar Menu//

const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName ("span");

function toggleNav(){
    navTriggerEl.addEventListener("click",function(){
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburgers();
    }
)}

function animateHamburgers(){
    for(let item of hamburgerBarsEl){
        item.classList.toggle("change");
    }
}

toggleNav();