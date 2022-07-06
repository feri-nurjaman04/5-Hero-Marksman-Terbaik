let hamburger = document.querySelector(".burger");
let menu = document.querySelector("nav");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll("nav").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))