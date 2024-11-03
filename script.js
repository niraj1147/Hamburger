const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");



const maniContent =  document.querySelector(".main-content");
const goTo = document.querySelector(".go-to-top");
goTo.addEventListener("click" , () => {
    maniContent.scrollTo(0,0);
})

hamburgerIcon.addEventListener("click" , (e) => {
    e.stopPropagation();
    headerContent.classList.add("menu-open");
})

nav.addEventListener("click", (e) => {
    e.stopPropagation();
})

closeIcon.addEventListener("click" , ()=> {
    headerContent.classList.remove("menu-open");
})

window.addEventListener("click", () => {
    headerContent.classList.remove("menu-open");
})

