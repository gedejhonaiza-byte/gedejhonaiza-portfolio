/* =========================================================
   JHONAIZA GEDE PORTFOLIO
   COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MAIN ELEMENTS
    ===================================================== */

    const body = document.body;

    const header =
        document.querySelector(".desktop-header");

    const cursor =
        document.querySelector(".cursor");

    const backToTop =
        document.querySelector(".back-to-top");

    const hero =
        document.querySelector(".hero");


    /* =====================================================
       LOADER COMPUTER CODE
    ===================================================== */

    const loaderCodeBackground =
        document.getElementById(
            "loaderCodeBackground"
        );


    const loaderCodeLines = [

        '<span class="code-keyword">const</span> portfolio = new CreativeExperience();',

        '<span class="code-keyword">function</span> buildWebsite() { return <span class="code-string">"experience"</span>; }',

        '&lt;section class=<span class="code-string">"portfolio"</span>&gt;',

        'display: grid;',

        'grid-template-columns: 1fr 1fr;',

        '<span class="code-keyword">const</span> designer = <span class="code-string">"Jhonaiza Gede"</span>;',

        'document.querySelector(<span class="code-string">".project"</span>);',

        'background: linear-gradient(135deg, #050505, #D7B56D);',

        '&lt;div class=<span class="code-string">"creative"</span>&gt;',

        'transform: translateY(-10px);',

        '<span class="code-keyword">let</span> creativity = true;',

        'animation: reveal .8s ease;',

        '<span class="code-keyword">if</span> (idea) { createExperience(); }',

        'font-family: "Poppins", sans-serif;',

        '<span class="code-keyword">const</span> skills = [<span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>, <span class="code-string">"JavaScript"</span>];',

        '&lt;article class=<span class="code-string">"project-card"</span>&gt;',

        'border: 1px solid rgba(215,181,109,.25);',

        '<span class="code-keyword">return</span> digitalExperience;',

        'window.addEventListener(<span class="code-string">"scroll"</span>, reveal);',

        'const brand = { creativity: true, purpose: true };',

        'backdrop-filter: blur(20px);',

        '&lt;nav class=<span class="code-string">"navbar"</span>&gt;',

        'responsive: true;',

        'userExperience.optimize();',

        '<span class="code-keyword">const</span> vision = <span class="code-string">"design with purpose"</span>;',

        'object-fit: cover;',

        'transition: all .4s ease;',

        'console.log(<span class="code-string">"Creating digital experiences..."</span>);',

        'creativeDeveloper.initialize();',

        '&lt;/portfolio&gt;'

    ];


    function buildLoaderCode() {

        if (!loaderCodeBackground) {
            return;
        }


        loaderCodeBackground.innerHTML = "";


        const width =
            window.innerWidth;


        let columns = 15;


        if (width <= 520) {

            columns = 6;

        } else if (width <= 900) {

            columns = 9;

        }


        for (
            let i = 0;
            i < columns;
            i++
        ) {

            const column =
                document.createElement("div");


            column.className =
                "code-column";


            column.style.left =
                `${(i / columns) * 100}%`;


            column.style.animationDuration =
                `${18 + Math.random() * 16}s`;


            column.style.animationDelay =
                `-${Math.random() * 18}s`;


            for (
                let j = 0;
                j < 16;
                j++
            ) {

                const line =
                    document.createElement("span");


                line.innerHTML =
                    loaderCodeLines[
                        Math.floor(
                            Math.random() *
                            loaderCodeLines.length
                        )
                    ];


                column.appendChild(line);

            }


            loaderCodeBackground.appendChild(
                column
            );

        }

    }


    buildLoaderCode();



    /* =====================================================
       HERO COMPUTER CODE BACKGROUND
    ===================================================== */

    const heroCodeBackground =
        document.getElementById(
            "heroCodeBackground"
        );


    const heroCodeBlocks = [

`const portfolio = {
  designer: "Jhonaiza Gede",
  role: "Creative Developer",
  creativity: true,
  responsive: true
};`,

`const skills = [
  "Web Design",
  "Graphic Design",
  "UI / UX",
  "JavaScript",
  "Branding",
  "SEO"
];`,

`function createExperience() {
  const idea = getVision();
  const design = buildInterface(idea);
  return optimize(design);
}`,

`.hero {
  position: relative;
  display: grid;
  min-height: 100vh;
  overflow: hidden;
}`,

`const projects =
document.querySelectorAll(
  ".project-card"
);

projects.forEach(project => {
  project.classList.add("active");
});`,

`@media (max-width: 767px) {
  .portfolio {
    grid-template-columns: 1fr;
    padding: 70px 20px;
  }
}`,

`function updateNavigation() {
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
  });
}`,

`<section id="projects">
  <article class="project">
    <h2>Creative Experience</h2>
    <p>Design • Develop • Create</p>
  </article>
</section>`,

`userExperience
  .design()
  .develop()
  .optimize()
  .deliver();`,

`const creativeProcess = {
  discover: true,
  design: true,
  develop: true,
  refine: true,
  deliver: true
};`

    ];


    const heroCodePositions = [

        {
            left: "2%",
            top: "10%"
        },

        {
            left: "35%",
            top: "6%"
        },

        {
            right: "2%",
            top: "14%"
        },

        {
            left: "4%",
            bottom: "5%"
        },

        {
            left: "38%",
            bottom: "7%"
        },

        {
            right: "1%",
            bottom: "8%"
        },

        {
            left: "25%",
            top: "42%"
        },

        {
            right: "25%",
            top: "48%"
        },

        {
            left: "59%",
            top: "27%"
        }

    ];


    function buildHeroCode() {

        if (!heroCodeBackground) {
            return;
        }


        heroCodeBackground.innerHTML = "";


        const width =
            window.innerWidth;


        let totalBlocks = 9;


        if (width <= 767) {

            totalBlocks = 7;

        }


        for (
            let i = 0;
            i < totalBlocks;
            i++
        ) {

            const block =
                document.createElement("pre");


            block.className =
                "hero-code-block";


            block.textContent =
                heroCodeBlocks[
                    i %
                    heroCodeBlocks.length
                ];


            const position =
                heroCodePositions[
                    i %
                    heroCodePositions.length
                ];


            Object.keys(position)
                .forEach(property => {

                    block.style[property] =
                        position[property];

                });


            block.style.animationDelay =
                `-${i * 1.7}s`;


            heroCodeBackground.appendChild(
                block
            );

        }

    }


    buildHeroCode();



    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const loader =
        document.getElementById(
            "pageLoader"
        );


    const loaderPercent =
        document.getElementById(
            "loaderPercent"
        );


    const loaderProgress =
        document.getElementById(
            "loaderProgress"
        );


    const loaderTypingText =
        document.getElementById(
            "loaderTypingText"
        );


    body.classList.add(
        "loader-active"
    );


    const loaderMessages = [

        "Initializing interface...",

        "Loading creative assets...",

        "Compiling digital experience...",

        "Preparing featured projects...",

        "Optimizing responsive layout...",

        "Connecting creative components...",

        "Almost ready...",

        "Launching portfolio..."

    ];


    let loaderMessageIndex = 0;

    let loaderCharacterIndex = 0;

    let loaderDeleting = false;

    let loaderTypingStopped = false;


    function typeLoaderMessage() {

        if (
            !loaderTypingText ||
            loaderTypingStopped
        ) {
            return;
        }


        const currentMessage =
            loaderMessages[
                loaderMessageIndex
            ];


        if (!loaderDeleting) {

            loaderCharacterIndex++;


            loaderTypingText.textContent =
                currentMessage.substring(
                    0,
                    loaderCharacterIndex
                );


            if (
                loaderCharacterIndex >=
                currentMessage.length
            ) {

                loaderDeleting = true;


                setTimeout(
                    typeLoaderMessage,
                    260
                );


                return;

            }


            setTimeout(
                typeLoaderMessage,
                25
            );

        } else {

            loaderCharacterIndex--;


            loaderTypingText.textContent =
                currentMessage.substring(
                    0,
                    loaderCharacterIndex
                );


            if (
                loaderCharacterIndex <= 0
            ) {

                loaderDeleting = false;


                loaderMessageIndex =
                    (
                        loaderMessageIndex +
                        1
                    ) %
                    loaderMessages.length;


                setTimeout(
                    typeLoaderMessage,
                    70
                );


                return;

            }


            setTimeout(
                typeLoaderMessage,
                12
            );

        }

    }


    typeLoaderMessage();



    /* =====================================================
       LOADER PROGRESS
       ABOUT 6.5 SECONDS
    ===================================================== */

    const loaderDuration =
        6500;


    const loaderStartTime =
        performance.now();


    let loaderComplete =
        false;


    function finishLoader() {

        if (loaderComplete) {
            return;
        }


        loaderComplete = true;

        loaderTypingStopped = true;


        if (loaderPercent) {

            loaderPercent.textContent =
                "100%";

        }


        if (loaderProgress) {

            loaderProgress.style.width =
                "100%";

        }


        if (loaderTypingText) {

            loaderTypingText.textContent =
                "Experience ready.";

        }


        setTimeout(() => {

            if (loader) {

                loader.classList.add(
                    "hide"
                );

            }


            body.classList.remove(
                "loader-active"
            );

        }, 650);

    }


    function updateLoaderProgress(
        currentTime
    ) {

        if (loaderComplete) {
            return;
        }


        const elapsed =
            currentTime -
            loaderStartTime;


        let progress =
            Math.min(
                elapsed /
                loaderDuration,
                1
            );


        /*
           Natural progress movement:
           quicker first half,
           slightly slower near completion.
        */

        if (progress < 0.55) {

            progress =
                progress * 1.08;

        } else if (
            progress < 0.88
        ) {

            progress =
                0.594 +
                (
                    progress -
                    0.55
                ) *
                0.82;

        } else {

            progress =
                0.8646 +
                (
                    progress -
                    0.88
                ) *
                1.128;

        }


        progress =
            Math.min(
                progress,
                1
            );


        const percent =
            Math.floor(
                progress *
                100
            );


        if (loaderPercent) {

            loaderPercent.textContent =
                `${percent}%`;

        }


        if (loaderProgress) {

            loaderProgress.style.width =
                `${percent}%`;

        }


        if (
            elapsed >=
            loaderDuration
        ) {

            finishLoader();

            return;

        }


        requestAnimationFrame(
            updateLoaderProgress
        );

    }


    requestAnimationFrame(
        updateLoaderProgress
    );


    /*
       Failsafe so the visitor
       can never become stuck
       on the loader.
    */

    setTimeout(
        finishLoader,
        7800
    );



    /* =====================================================
       HERO ROLE TYPEWRITER
    ===================================================== */

    const heroRoleTyping =
        document.getElementById(
            "heroRoleTyping"
        );


    const heroRoles = [

        "Web Design",

        "Graphic Design",

        "UI / UX Design",

        "Creative Development",

        "Branding",

        "SEO Optimization"

    ];


    let heroRoleIndex = 0;

    let heroCharacterIndex = 0;

    let heroDeleting = false;


    function typeHeroRole() {

        if (!heroRoleTyping) {
            return;
        }


        const currentRole =
            heroRoles[
                heroRoleIndex
            ];


        if (!heroDeleting) {

            heroCharacterIndex++;


            heroRoleTyping.textContent =
                currentRole.substring(
                    0,
                    heroCharacterIndex
                );


            if (
                heroCharacterIndex >=
                currentRole.length
            ) {

                heroDeleting = true;


                setTimeout(
                    typeHeroRole,
                    1250
                );


                return;

            }


            setTimeout(
                typeHeroRole,
                70
            );

        } else {

            heroCharacterIndex--;


            heroRoleTyping.textContent =
                currentRole.substring(
                    0,
                    heroCharacterIndex
                );


            if (
                heroCharacterIndex <= 0
            ) {

                heroDeleting = false;


                heroRoleIndex =
                    (
                        heroRoleIndex +
                        1
                    ) %
                    heroRoles.length;


                setTimeout(
                    typeHeroRole,
                    220
                );


                return;

            }


            setTimeout(
                typeHeroRole,
                35
            );

        }

    }


    setTimeout(
        typeHeroRole,
        900
    );



    /* =====================================================
       DESKTOP HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }


        header.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );



    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    if (cursor) {

        document.addEventListener(
            "mousemove",
            event => {

                cursor.style.left =
                    `${event.clientX}px`;


                cursor.style.top =
                    `${event.clientY}px`;

            }
        );


        document
            .querySelectorAll(
                `
                a,
                button,
                .service-card,
                .skill-card,
                .project-card,
                .about-stat
                `
            )
            .forEach(item => {

                item.addEventListener(
                    "mouseenter",
                    () => {

                        cursor.classList.add(
                            "active"
                        );

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    () => {

                        cursor.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            href
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const desktopNavLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    const mobileNavLinks =
        document.querySelectorAll(
            ".mobile-bottom-link"
        );


    function updateNavigation() {

        let current =
            "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop -
                220;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                    sectionTop &&
                window.scrollY <
                    sectionTop +
                    sectionHeight
            ) {

                current =
                    section.id;

            }

        });


        desktopNavLinks.forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`
                );

            }
        );


        mobileNavLinks.forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`
                );

            }
        );

    }


    updateNavigation();


    window.addEventListener(
        "scroll",
        updateNavigation,
        {
            passive: true
        }
    );



    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }


        backToTop.classList.toggle(
            "show",
            window.scrollY > 500
        );

    }


    updateBackToTop();


    window.addEventListener(
        "scroll",
        updateBackToTop,
        {
            passive: true
        }
    );



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = [

        ...document.querySelectorAll(
            ".section-heading"
        ),

        ...document.querySelectorAll(
            ".about-image-wrap"
        ),

        ...document.querySelectorAll(
            ".about-visual"
        ),

        ...document.querySelectorAll(
            ".about-portrait-wrap"
        ),

        ...document.querySelectorAll(
            ".about-content"
        ),

        ...document.querySelectorAll(
            ".about-stat"
        ),

        ...document.querySelectorAll(
            ".service-card"
        ),

        ...document.querySelectorAll(
            ".skill-card"
        ),

        ...document.querySelectorAll(
            ".process-item"
        ),

        ...document.querySelectorAll(
            ".project-card"
        ),

        ...document.querySelectorAll(
            ".why-heading"
        ),

        ...document.querySelectorAll(
            ".why-item"
        ),

        ...document.querySelectorAll(
            ".contact-container"
        )

    ];


    revealElements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

        }
    );


    if (
        "IntersectionObserver" in
        window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "active"
                                    );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"

                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "active"
                );

            }
        );

    }



    /* =====================================================
       PROJECT CARD TILT
    ===================================================== */

    document
        .querySelectorAll(
            ".project-card"
        )
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth <=
                        900
                    ) {
                        return;
                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (
                            (
                                y -
                                centerY
                            ) /
                            centerY
                        ) *
                        -1.2;


                    const rotateY =
                        (
                            (
                                x -
                                centerX
                            ) /
                            centerX
                        ) *
                        1.2;


                    card.style.transform =
                        `
                        perspective(1200px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-8px)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });



    /* =====================================================
       HERO CODE MOUSE DEPTH
    ===================================================== */

    if (
        hero &&
        heroCodeBackground
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth <=
                    900
                ) {
                    return;
                }


                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height;


                const moveX =
                    (
                        x -
                        0.5
                    ) *
                    -12;


                const moveY =
                    (
                        y -
                        0.5
                    ) *
                    -8;


                heroCodeBackground
                    .style
                    .transform =
                    `
                    translate3d(
                        ${moveX}px,
                        ${moveY}px,
                        0
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroCodeBackground
                    .style
                    .transform =
                    "translate3d(0,0,0)";

            }
        );

    }



    /* =====================================================
       OPTIONAL HERO PROFILE DEPTH
    ===================================================== */

    const heroProfileScene =
        document.querySelector(
            ".hero-photo-scene"
        );


    if (
        hero &&
        heroProfileScene
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth <=
                    900
                ) {
                    return;
                }


                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height;


                const moveX =
                    (
                        x -
                        0.5
                    ) *
                    5;


                const moveY =
                    (
                        y -
                        0.5
                    ) *
                    4;


                heroProfileScene
                    .style
                    .transform =
                    `
                    translate3d(
                        ${moveX}px,
                        ${moveY}px,
                        0
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroProfileScene
                    .style
                    .transform =
                    "";

            }
        );

    }



    /* =====================================================
       ABOUT STATS NUMBER ANIMATION
    ===================================================== */

    const aboutStats =
        document.querySelectorAll(
            ".about-stat strong"
        );


    function animateNumber(
        element
    ) {

        const originalText =
            element.textContent.trim();


        const numberMatch =
            originalText.match(
                /\d+/
            );


        if (!numberMatch) {
            return;
        }


        const finalNumber =
            parseInt(
                numberMatch[0],
                10
            );


        const suffix =
            originalText.replace(
                numberMatch[0],
                ""
            );


        let currentNumber = 0;


        const duration =
            1200;


        const frameRate =
            30;


        const totalFrames =
            Math.round(
                duration /
                frameRate
            );


        const increment =
            finalNumber /
            totalFrames;


        const timer =
            setInterval(() => {

                currentNumber +=
                    increment;


                if (
                    currentNumber >=
                    finalNumber
                ) {

                    element.textContent =
                        finalNumber +
                        suffix;


                    clearInterval(
                        timer
                    );


                    return;

                }


                element.textContent =
                    Math.floor(
                        currentNumber
                    ) +
                    suffix;

            }, frameRate);

    }


    if (
        aboutStats.length &&
        "IntersectionObserver" in window
    ) {

        const statsObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                animateNumber(
                                    entry.target
                                );


                                statsObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.7
                }
            );


        aboutStats.forEach(
            stat => {

                statsObserver.observe(
                    stat
                );

            }
        );

    }



    /* =====================================================
       REBUILD HERO CODE ON RESIZE
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        buildHeroCode();

                    },
                    280
                );

        }
    );



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const copyright =
        document.querySelector(
            ".copyright"
        );


    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} Jhonaiza Gede. All Rights Reserved.`;

    }

});
