// Smooth scrolling effect

document.querySelectorAll("nav li").forEach(item => {

    item.addEventListener("click", () => {

        const sectionName = item.textContent.toLowerCase();

        const section = document.querySelector("." + sectionName);

        if(section){
            section.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});


// Hero button animation

const button = document.querySelector("button");

button.addEventListener("click", () => {

    document.querySelector(".projects")
    .scrollIntoView({
        behavior:"smooth"
    });

});


// Fade animation when scrolling

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = 1;
            entry.target.style.transform =
            "translateY(0)";

        }

    });

});


document.querySelectorAll("section")
.forEach(section => {

    section.style.opacity = 0;

    section.style.transform =
    "translateY(40px)";

    section.style.transition =
    "0.8s ease";

    observer.observe(section);

});
