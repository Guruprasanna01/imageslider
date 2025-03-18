const back = document.getElementById("back");
const next = document.getElementById("next");
const move = document.querySelector(".gallery");

back.addEventListener("click",()=>{
    move.style.scrollBehavior = "smooth"
    move.scrollLeft-=930;
})

next.addEventListener("click",()=>{
    move.style.scrollBehavior = "smooth"
    move.scrollLeft+=930;
})
