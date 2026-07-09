const hero=document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{
    const y=window.scrollY;
    hero.style.transform=`translateY(${y*0.22}px) scale(1.08)`;
});

const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){
    reveals.forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight*0.85){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);
