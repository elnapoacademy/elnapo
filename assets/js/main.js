const hero = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
    if(hero){
        const y = window.scrollY;
        hero.style.transform = `translateY(${y * 0.22}px) scale(1.08)`;
    }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight * 0.85;

        if (top < visible) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

revealOnScroll();
