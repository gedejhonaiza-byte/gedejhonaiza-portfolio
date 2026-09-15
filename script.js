/* =====================================
   JHONAIZA LUXURY PORTFOLIO INTERACTIONS
===================================== */


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");


    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },800);

    }

});






/* =========================
   CUSTOM GOLD CURSOR
========================= */


const cursor =
document.querySelector(".cursor");



if(cursor){


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX + "px";


cursor.style.top =
e.clientY + "px";


});




const hoverElements =
document.querySelectorAll(
"a, button, .card, .skill-card, .project-card"
);



hoverElements.forEach(item=>{


item.addEventListener(
"mouseenter",
()=>{

cursor.classList.add("active");

});



item.addEventListener(
"mouseleave",
()=>{

cursor.classList.remove("active");

});


});


}








/* =========================
   HERO ENTRANCE ANIMATION
========================= */


const heroItems =
document.querySelectorAll(
".hero-content-side > *"
);



heroItems.forEach(
(item,index)=>{


item.style.opacity="0";

item.style.transform=
"translateY(40px)";



setTimeout(()=>{


item.style.transition=
"all .9s ease";


item.style.opacity="1";


item.style.transform=
"translateY(0)";



},300 + index * 150);



});








/* =========================
   SCROLL REVEAL
========================= */


const revealElements =
document.querySelectorAll(
".section, .card, .skill-card, .project-card"
);



if(
"IntersectionObserver" in window
){


const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);



revealObserver.unobserve(
entry.target
);


}


});


},
{

threshold:.15

});




revealElements.forEach(
(element)=>{


element.classList.add(
"reveal"
);


revealObserver.observe(
element
);


});


}

else{


revealElements.forEach(
(element)=>{


element.classList.add(
"visible"
);


});


}








/* =========================
   SMOOTH SCROLL
========================= */


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){



const target =
document.querySelector(
this.getAttribute("href")
);



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
   BUTTON LUXURY EFFECT
========================= */


document
.querySelectorAll(
".btn, .contact-btn, .social-btn"
)
.forEach(button=>{


button.addEventListener(
"mousedown",
()=>{


button.style.transform =
"scale(.94)";


});




button.addEventListener(
"mouseup",
()=>{


button.style.transform =
"";


});


});









/* =========================
   NAV ACTIVE EFFECT
========================= */


const sections =
document.querySelectorAll(
"section"
);


const navLinks =
document.querySelectorAll(
".navbar a"
);



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(
section=>{


const sectionTop =
section.offsetTop - 150;


if(
scrollY >= sectionTop
){

current =
section.getAttribute("id");

}


});



navLinks.forEach(
link=>{


link.style.color="";



if(
link.getAttribute("href")
===
"#"+current
){

link.style.color =
"#d4af37";

}


});


});








/* =========================
   GOLD PARALLAX EFFECT
========================= */


const hero =
document.querySelector(
".hero-premium"
);



if(hero){


window.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX /
window.innerWidth - .5)
* 20;


const y =
(e.clientY /
window.innerHeight - .5)
* 20;



hero.style.backgroundPosition =
`${x}px ${y}px`;



});


}
