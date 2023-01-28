

let menu = document.querySelector(".menu-container");
let links = document.querySelector(".links");
let body = document.querySelector("body")
let shade = document.querySelector(".shade")


menu.addEventListener("click", () =>{
    menu.classList.toggle("active")
    links.classList.toggle("active")
    shade.classList.toggle("active")
    if(menu.classList.contains("active"))
        document.body.style.overflowY = 'hidden';
    else
    document.body.style.overflowY = 'visible';

})