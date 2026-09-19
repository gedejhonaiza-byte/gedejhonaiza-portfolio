/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", showMenu);
}

function showMenu() {
    navMenu.classList.add("show-menu");
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

const skillNumbers = document.querySelectorAll(".skills__number");
const skillBars = document.querySelectorAll(".skills__percentage");

// Define the percentage values for each skill
const skillValues = [
    100, 100, 85, 75,
    92, 70, 90, 65,
    73, 100, 79, 84,
    90, 85, 88, 86, 80,
    85, 81, 83, 89, 82,
    100, 80, 93, 90, 85
];

// Function to animate the skill bar and number
function updateSkills() {
    skillBars.forEach((bar, index) => {
        let targetWidth = skillValues[index];
        let numberElement = skillNumbers[index];

        let currentWidth = 0;
        let currentNumber = 0;

        numberElement.style.opacity = 1;

        const interval = setInterval(() => {
            if (currentWidth < targetWidth) {
                currentWidth++;
                currentNumber++;

                bar.style.width = `${currentWidth}%`;
                numberElement.textContent = `${currentNumber}%`;
            } else {
                clearInterval(interval);
            }
        }, 30);
    });
}

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
        updateSkills();
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });

        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });

        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});

/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidePerView: 2,
        },
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const verticalScrollPosition =
        window.verticalScrollPosition || window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if (
            verticalScrollPosition > sectionTop &&
            verticalScrollPosition <= sectionTop + sectionHeight
        ) {
            const activeLink = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

            if (activeLink) {
                activeLink.classList.add("active-link");
            }

        } else {

            const activeLink = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

            if (activeLink) {
                activeLink.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");

    if (!nav) return;

    if (window.pageYOffset >= 80) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    if (!scrollUp) return;

    if (window.pageYOffset >= 560) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK / LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const logo = document.getElementById("logo");
const favicon = document.getElementById("favicon");

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

/* Saved theme */
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

/* Get current theme */
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme)
        ? "dark"
        : "light";

const getCurrentIcon = () =>
    themeButton && themeButton.classList.contains(iconTheme)
        ? "uil-moon"
        : "uil-sun";

/* Apply saved theme */
if (selectedTheme) {
    document.body.classList[
        selectedTheme === "dark" ? "add" : "remove"
    ](darkTheme);

    if (themeButton) {
        themeButton.classList[
            selectedIcon === "uil-moon"
                ? "add"
                : "remove"
        ](iconTheme);
    }
}

/*
Your GitHub only uses one logo/favicon image:
Favicon.png.webp

So the image remains the same in both
light mode and dark mode.
*/

if (logo) {
    logo.src = "Favicon.png.webp";
}

if (favicon) {
    favicon.href = "Favicon.png.webp";
}

/* Toggle theme */
if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle(darkTheme);

        themeButton.classList.toggle(iconTheme);

        /*
        Keep the same Jhonaiza favicon/logo
        for both themes.
        */

        if (logo) {
            logo.src = "Favicon.png.webp";
        }

        if (favicon) {
            favicon.href = "Favicon.png.webp";
        }

        /* Save theme */
        localStorage.setItem(
            "selected-theme",
            getCurrentTheme()
        );

        localStorage.setItem(
            "selected-icon",
            getCurrentIcon()
        );
    });
}

/*==================== HOME SUBTITLE ====================*/

/* Typewriter constructor */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.isDeleting = false;

    this.tick();
};

/* Typewriter effect */
TxtType.prototype.tick = function () {

    var i =
        this.loopNum %
        this.toRotate.length;

    var fullTxt =
        this.toRotate[i];

    if (this.isDeleting) {

        this.txt =
            fullTxt.substring(
                0,
                this.txt.length - 1
            );

    } else {

        this.txt =
            fullTxt.substring(
                0,
                this.txt.length + 1
            );
    }

    this.el.innerHTML =
        '<span class="wrap">' +
        this.txt +
        "</span>";

    var that = this;

    var delta = 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (
        !this.isDeleting &&
        this.txt === fullTxt
    ) {

        delta = this.period;

        this.isDeleting = true;

    } else if (
        this.isDeleting &&
        this.txt === ""
    ) {

        this.isDeleting = false;

        this.loopNum++;

        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

/* Initialize typewriter */
window.addEventListener("load", function () {

    var elements =
        document.getElementsByClassName(
            "typewrite"
        );

    for (
        var i = 0;
        i < elements.length;
        i++
    ) {

        var toRotate =
            elements[i].getAttribute(
                "data-type"
            );

        var period =
            elements[i].getAttribute(
                "data-period"
            );

        if (toRotate) {

            new TxtType(
                elements[i],
                JSON.parse(toRotate),
                period
            );
        }
    }
});
