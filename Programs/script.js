const loader = document.querySelector(".loaderBlock");
const global = document.querySelector(".Global")
const box = document.querySelectorAll(".box")
const navItems2 = document.querySelector("#navItems2");
const homePage = document.querySelector("#homePage");
const headerWrapper = document.querySelector("#headerWrapper");
const shoppingCart = document.getElementById("shoppingCart");

// Loader

window.addEventListener("load",()=>{
    loader.style.display = "none";
    global.style.opacity = "1";
})

// reloader
window.addEventListener("beforeunload",()=>{
    window.history.scrollRestoration = "manual";
    window.scrollTo(0,0);
})

// Intersection

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target)
        }
    })
    
},{threshold: 0.25})

box.forEach(entry=>{
    observer.observe(entry)
})


// Nav Scroll
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        headerWrapper.style.top = "-100%";
    } else {
        headerWrapper.style.top = "0px";
        headerWrapper.style.backgroundColor = "white";
    }
    lastScrollY = scrollY;
});

// Nav2 Show

window.NavMenu = ()=>{
    const currentDisplay = window.getComputedStyle(navItems2).display;

    if (currentDisplay === "none") {
        navItems2.style.display = "flex";
    } else {
        navItems2.style.display = "none";
    }
}


// Cart
shoppingCart.addEventListener("click", () => {
  cartAdder.classList.toggle("active");
});