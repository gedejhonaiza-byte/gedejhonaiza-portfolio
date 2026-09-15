/* =====================================
   LUXURY PORTFOLIO INTERACTIONS
===================================== */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 500);

    }

});





/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");


if (cursor) {


    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });



    const cursorTargets =
    document.querySelectorAll("a, button");


    cursorTargets.forEach(item => {


        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");

        });



        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");

        });


    });


}






/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const revealElements =
document.querySelectorAll(
    ".section, .card, .project-card, .skill-card"
);



if ("IntersectionObserver" in window) {


    const observer =
    new IntersectionObserver(
    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("visible");


                observer.unobserve(entry.target);


            }


        });


    },
    {
        threshold:0.15
    });



    revealElements.forEach(element => {


        element.classList.add("reveal");


        observer.observe(element);


    });


} else {


    revealElements.forEach(element => {

        element.classList.add("visible");

    });


}







/* =========================
   SMOOTH NAVIGATION
========================= */


const navigationLinks =
document.querySelectorAll(
    'a[href^="#"]'
);



navigationLinks.forEach(link => {


    link.addEventListener("click", function(e){


        const targetID =
        this.getAttribute("href");


        const target =
        document.querySelector(targetID);



        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});






/* =========================
   BUTTON RIPPLE EFFECT
========================= */


document.querySelectorAll(".btn")
.forEach(button => {


    button.addEventListener("click", () => {


        button.style.transform =
        "scale(.96)";


        setTimeout(()=>{

            button.style.transform =
            "";

        },150);


    });


});
