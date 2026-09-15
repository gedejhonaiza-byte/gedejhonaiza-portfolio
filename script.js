/* =========================
   LUXURY PORTFOLIO SCRIPT
========================= */


/* PAGE LOAD ANIMATION */

document.addEventListener("DOMContentLoaded", () => {


    const heroItems = document.querySelectorAll(
        ".hero-content-card > *"
    );


    heroItems.forEach((item,index)=>{

        item.style.opacity="0";

        item.style.transform="translateY(40px)";


        setTimeout(()=>{

            item.style.transition=
            "all .8s ease";


            item.style.opacity="1";

            item.style.transform=
            "translateY(0)";


        },300 + (index * 150));


    });


});






/* =========================
   TYPING EFFECT
========================= */


const typingText =
document.querySelector(".typing");


if(typingText){


const words=[

"Creative Developer",

"Web Designer",

"UI Designer",

"Digital Creator"

];


let wordIndex=0;

let charIndex=0;

let deleting=false;



function typeEffect(){


let currentWord=
words[wordIndex];


if(!deleting){


typingText.textContent =
currentWord.substring(
0,
charIndex++
);


if(charIndex >
currentWord.length){


deleting=true;

setTimeout(typeEffect,1200);

return;


}


}else{


typingText.textContent =
currentWord.substring(
0,
charIndex--
);



if(charIndex===0){


deleting=false;

wordIndex++;


if(wordIndex>=words.length){

wordIndex=0;

}


}


}


setTimeout(typeEffect,
deleting ? 60 : 120);


}



typeEffect();


}








/* =========================
   SCROLL REVEAL
========================= */


const revealElements =
document.querySelectorAll(
".section, .card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},
{

threshold:.15

});



revealElements.forEach(el=>{


el.classList.add("hidden");


observer.observe(el);


});







/* =========================
   GOLD CURSOR GLOW
========================= */


const glow =
document.createElement("div");


glow.className="cursor-glow";


document.body.appendChild(glow);



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";


});







/* =========================
   SMOOTH NAVIGATION
========================= */


document.querySelectorAll(
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

behavior:"smooth"

});


}


});


});
