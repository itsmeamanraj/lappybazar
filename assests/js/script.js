document.querySelector("#bar").addEventListener("click",function(){
    document.querySelector(".mobile-header").style.right = "0"    
})
document.querySelector("#xmark").addEventListener("click",function(){
    document.querySelector(".mobile-header").style.right = "-100%"    
})


// sticky header---------
document.addEventListener("DOMContentLoaded", function () {
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
    header.classList.add("scrolled");
    } else {
    header.classList.remove("scrolled");
    }
});
});