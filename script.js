/* =========================================================
JHONAIZA GEDE PORTFOLIO
COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector(".desktop-header");
    const cursor = document.querySelector(".cursor");
    const backToTop = document.querySelector(".back-to-top");
    const hero = document.querySelector(".hero");
    const mobileBottomNav = document.getElementById("mobileBottomNav");

    const loaderCodeBackground = document.getElementById("loaderCodeBackground");

    /* =========================================================
    LOADER BACKGROUND CODE
    ========================================================= */

    const loaderCodeLines = [
        '<span class="code-keyword">const</span> portfolio = new CreativeExperience();',

        '<span class="code-keyword">function</span> buildWebsite() { return <span class="code-string">"experience"</span>; }',

        '&lt;section class=<span class="code-string">"portfolio"</span>&gt;',

        "display: grid;",

        "grid-template-columns: 1fr 1fr;",

        '<span class="code-keyword">const</span> designer = <span class="code-string">"Jhonaiza Gede"</span>;',

        'document.querySelector(<span class="code-string">".project"</span>);',

        "background: linear-gradient(135deg, #050505, #D7B56D);",

        '&lt;div class=<span class="code-string">"creative"</span>&gt;',

        "transform: translateY(-10px);",

        '<span class="code-keyword">let</span> creativity = true;',

        "animation: reveal .8s ease;",

        '<span class="code-keyword">if</span> (idea) { createExperience(); }',

        'font-family: "Poppins", sans-serif;',

        '<span class="code-keyword">const</span> skills = [<span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>, <span class="code-string">"JavaScript"</span>];',

        '&lt;article class=<span class="code-string">"portfolio-card"</span>&gt;',

        "border: 1px solid rgba(215,181,109,.25);",

        '<span class="code-keyword">return</span> digitalExperience;',

        'window.addEventListener(<span class="code-string">"scroll"</span>, reveal);',

        "const brand = { creativity: true, purpose: true };",

        "backdrop-filter: blur(20px);",

        '&lt;nav class=<span class="code-string">"navbar"</span>&gt;',

        "responsive: true;",

        "userExperience.optimize();",

        '<span class="code-keyword">const</span> vision = <span class="code-string">"design with purpose"</span>;',

        "object-fit: cover;",

        "transition: all .4s ease;",

        'console.log(<span class="code-string">"Creating digital experiences..."</span>);',

        "creativeDeveloper.initialize();",

        "&lt;/portfolio&gt;"
    ];


    /* =========================================================
    BUILD LOADER TYPING CODE
    ========================================================= */

    function buildLoaderCode() {

        if (!loaderCodeBackground) return;

        loaderCodeBackground.innerHTML = "";

        const width = window.innerWidth;

        let panelCount = 5;
        let linesPerPanel = 7;


        if (width <= 520) {

            panelCount = 3;
            linesPerPanel = 6;

        } else if (width <= 900) {

            panelCount = 4;
            linesPerPanel = 7;

        }


        const panelPositions = [

            {
                left: "2%",
                top: "8%"
            },

            {
                right: "3%",
                top: "4%"
            },

            {
                left: "8%",
                bottom: "7%"
            },

            {
                right: "5%",
                bottom: "8%"
            },

            {
                left: "37%",
                top: "30%"
            }

        ];


        for (
            let i = 0;
            i < panelCount;
            i++
        ) {

            const panel =
                document.createElement("div");

            const position =
                panelPositions[
                    i %
                    panelPositions.length
                ];


            panel.className =
                "loader-code-panel";


            Object.keys(
                position
            ).forEach(
                property => {

                    panel.style[property] =
                        position[property];

                }
            );


            for (
                let j = 0;
                j < linesPerPanel;
                j++
            ) {

                const line =
                    document.createElement("span");


                const lineIndex =
                    (
                        i * 5 +
                        j
                    ) %
                    loaderCodeLines.length;


                const typeDelay =
                    .15 +
                    (
                        i *
                        .22
                    ) +
                    (
                        j *
                        .16
                    );


                const typeDuration =
                    .48 +
                    (
                        (
                            j %
                            3
                        ) *
                        .08
                    );


                line.className =
                    "loader-code-line";


                line.style.setProperty(
                    "--type-delay",
                    `${typeDelay}s`
                );


                line.style.setProperty(
                    "--type-duration",
                    `${typeDuration}s`
                );


                line.innerHTML =
                    loaderCodeLines[
                        lineIndex
                    ];


                panel.appendChild(
                    line
                );

            }


            loaderCodeBackground.appendChild(
                panel
            );

        }

    }


    buildLoaderCode();


    /* =========================================================
    HERO COMPUTER CODE BACKGROUND
    ========================================================= */

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

`const portfolioItems =
document.querySelectorAll(
".project-card"
);

portfolioItems.forEach(item => {
item.classList.add("active");
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
<article class="portfolio">
<h2>Creative Experience</h2>
<p>Design • Develop • Create</p>
</article>
</section>`,

`userExperience
.design()
.develop()
.optimize()
.deliver();`

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

        if (!heroCodeBackground) return;

        heroCodeBackground.innerHTML = "";

        let totalBlocks = 9;


        if (
            window.innerWidth <=
            767
        ) {

            totalBlocks = 8;

        }


        for (
            let i = 0;
            i < totalBlocks;
            i++
        ) {

            const block =
                document.createElement(
                    "pre"
                );


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


            Object.keys(
                position
            ).forEach(
                property => {

                    block.style[property] =
                        position[property];

                }
            );


            block.style.animationDelay =
                `-${i * 1.7}s`;


            heroCodeBackground.appendChild(
                block
            );

        }

    }


    buildHeroCode();


    /* =========================================================
    PAGE LOADER
    ========================================================= */

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

        "Preparing featured portfolio...",

        "Optimizing responsive layout...",

        "Connecting creative components...",

        "Almost ready...",

        "Launching portfolio..."

    ];


    let loaderMessageIndex = 0;

    let loaderCharacterIndex = 0;

    let loaderDeleting = false;

    let loaderTypingStopped = false;


    /* =========================================================
    LOADER TEXT TYPING
    ========================================================= */

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
                loaderCharacterIndex <=
                0
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


    /* =========================================================
    LOADER PROGRESS
    ========================================================= */

    const loaderDuration =
        6500;


    const loaderStartTime =
        performance.now();


    let loaderComplete =
        false;


    function finishLoader() {

        if (loaderComplete) return;


        loaderComplete =
            true;


        loaderTypingStopped =
            true;


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


        setTimeout(
            () => {

                if (loader) {

                    loader.classList.add(
                        "hide"
                    );

                }


                body.classList.remove(
                    "loader-active"
                );

            },
            650
        );

    }


    function updateLoaderProgress(
        currentTime
    ) {

        if (loaderComplete) return;


        const elapsed =
            currentTime -
            loaderStartTime;


        let progress =
            Math.min(
                elapsed /
                loaderDuration,
                1
            );


        if (
            progress <
            .55
        ) {

            progress =
                progress *
                1.08;

        } else if (
            progress <
            .88
        ) {

            progress =
                .594 +
                (
                    progress -
                    .55
                ) *
                .82;

        } else {

            progress =
                .8646 +
                (
                    progress -
                    .88
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


    setTimeout(
        finishLoader,
        7800
    );


    /* =========================================================
    HERO ROLE TYPEWRITER
    ========================================================= */

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


    let heroRoleIndex =
        0;


    let heroCharacterIndex =
        0;


    let heroDeleting =
        false;


    function typeHeroRole() {

        if (!heroRoleTyping) return;


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

                heroDeleting =
                    true;


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
                heroCharacterIndex <=
                0
            ) {

                heroDeleting =
                    false;


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


    /* =========================================================
    SERVICES TABS
    ========================================================= */

    const hireTabs =
        document.querySelectorAll(
            ".hire-tab"
        );


    const hirePanels =
        document.querySelectorAll(
            ".hire-tab-panel"
        );


    const hireContentScroll =
        document.querySelector(
            ".hire-content-scroll"
        );


    hireTabs.forEach(
        tab => {

            tab.addEventListener(
                "click",
                () => {

                    const selectedTab =
                        tab.dataset.hireTab;


                    hireTabs.forEach(
                        button => {

                            button.classList.remove(
                                "active"
                            );

                        }
                    );


                    tab.classList.add(
                        "active"
                    );


                    hirePanels.forEach(
                        panel => {

                            const isActive =
                                panel.dataset
                                    .hirePanel ===
                                selectedTab;


                            panel.classList.toggle(
                                "active",
                                isActive
                            );

                        }
                    );


                    if (
                        hireContentScroll
                    ) {

                        hireContentScroll.scrollTo(
                            {

                                top: 0,

                                behavior:
                                    "smooth"

                            }
                        );

                    }

                }
            );

        }
    );


    /* =========================================================
    FEATURED WORK AUTO SLIDER

    6 MEDIUM CARDS

    DESKTOP = 3
    TABLET  = 2
    MOBILE  = 1

    ========================================================= */

    const featuredSliderShell =
        document.querySelector(
            ".featured-slider-shell"
        );


    const featuredSlider =
        document.getElementById(
            "featuredSlider"
        );


    const featuredTrack =
        document.getElementById(
            "featuredTrack"
        );


    const featuredSlides =
        Array.from(
            document.querySelectorAll(
                ".featured-slide"
            )
        );


    const featuredPrev =
        document.getElementById(
            "featuredPrev"
        );


    const featuredNext =
        document.getElementById(
            "featuredNext"
        );


    const featuredDots =
        document.getElementById(
            "featuredDots"
        );


    let featuredIndex =
        0;


    let featuredTimer =
        null;


    let featuredTouchStartX =
        0;


    let featuredTouchDeltaX =
        0;


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    /* =========================================================
    FEATURED RESPONSIVE VISIBLE COUNT
    ========================================================= */

    function getFeaturedVisibleCount() {

        if (
            window.innerWidth <=
            767
        ) {

            return 1;

        }


        if (
            window.innerWidth <=
            1100
        ) {

            return 2;

        }


        return 3;

    }


    function getFeaturedMaxIndex() {

        return Math.max(

            0,

            featuredSlides.length -
            getFeaturedVisibleCount()

        );

    }


    function getFeaturedGap() {

        if (!featuredTrack) {

            return 0;

        }


        const styles =
            window.getComputedStyle(
                featuredTrack
            );


        return (
            parseFloat(
                styles.columnGap ||
                styles.gap
            ) ||
            0
        );

    }


    /* =========================================================
    FEATURED DOTS
    ========================================================= */

    function buildFeaturedDots() {

        if (!featuredDots) return;


        const maxIndex =
            getFeaturedMaxIndex();


        featuredDots.innerHTML =
            "";


        for (
            let index = 0;
            index <= maxIndex;
            index++
        ) {

            const dot =
                document.createElement(
                    "button"
                );


            dot.type =
                "button";


            dot.className =
                "featured-dot";


            dot.setAttribute(
                "aria-label",
                `Show featured project group ${index + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    featuredIndex =
                        index;


                    updateFeaturedSlider(
                        true
                    );


                    restartFeaturedAuto();

                }
            );


            featuredDots.appendChild(
                dot
            );

        }

    }


    function updateFeaturedDots() {

        if (!featuredDots) return;


        featuredDots
            .querySelectorAll(
                ".featured-dot"
            )
            .forEach(
                (
                    dot,
                    index
                ) => {

                    dot.classList.toggle(
                        "active",
                        index ===
                        featuredIndex
                    );

                }
            );

    }


    /* =========================================================
    MOVE FEATURED SLIDER
    ========================================================= */

    function updateFeaturedSlider(
        animate = true
    ) {

        if (
            !featuredTrack ||
            !featuredSlides.length
        ) {

            return;

        }


        const maxIndex =
            getFeaturedMaxIndex();


        featuredIndex =
            Math.min(

                Math.max(
                    featuredIndex,
                    0
                ),

                maxIndex

            );


        const slideWidth =
            featuredSlides[0]
                .getBoundingClientRect()
                .width;


        const step =
            slideWidth +
            getFeaturedGap();


        featuredTrack.style.transition =
            animate &&
            !prefersReducedMotion.matches
                ?
                "transform .75s cubic-bezier(.22,1,.36,1)"
                :
                "none";


        featuredTrack.style.transform =
            `translate3d(-${featuredIndex * step}px, 0, 0)`;


        updateFeaturedDots();


        if (featuredPrev) {

            featuredPrev.setAttribute(
                "aria-disabled",
                String(
                    maxIndex ===
                    0
                )
            );

        }


        if (featuredNext) {

            featuredNext.setAttribute(
                "aria-disabled",
                String(
                    maxIndex ===
                    0
                )
            );

        }

    }


    function setFeaturedIndex(
        index
    ) {

        const maxIndex =
            getFeaturedMaxIndex();


        if (
            maxIndex <=
            0
        ) {

            featuredIndex =
                0;


            updateFeaturedSlider(
                true
            );


            return;

        }


        if (
            index >
            maxIndex
        ) {

            featuredIndex =
                0;


        } else if (
            index <
            0
        ) {

            featuredIndex =
                maxIndex;


        } else {

            featuredIndex =
                index;

        }


        updateFeaturedSlider(
            true
        );

    }


    function nextFeaturedSlide() {

        setFeaturedIndex(
            featuredIndex +
            1
        );

    }


    function previousFeaturedSlide() {

        setFeaturedIndex(
            featuredIndex -
            1
        );

    }


    /* =========================================================
    FEATURED AUTO PLAY
    ========================================================= */

    function stopFeaturedAuto() {

        if (featuredTimer) {

            window.clearInterval(
                featuredTimer
            );


            featuredTimer =
                null;

        }

    }


    function startFeaturedAuto() {

        stopFeaturedAuto();


        if (

            prefersReducedMotion.matches ||

            getFeaturedMaxIndex() <=
            0 ||

            document.hidden

        ) {

            return;

        }


        featuredTimer =
            window.setInterval(
                () => {

                    nextFeaturedSlide();

                },
                3600
            );

    }


    function restartFeaturedAuto() {

        stopFeaturedAuto();

        startFeaturedAuto();

    }


    /* =========================================================
    FEATURED ARROWS
    ========================================================= */

    if (featuredPrev) {

        featuredPrev.addEventListener(
            "click",
            () => {

                previousFeaturedSlide();

                restartFeaturedAuto();

            }
        );

    }


    if (featuredNext) {

        featuredNext.addEventListener(
            "click",
            () => {

                nextFeaturedSlide();

                restartFeaturedAuto();

            }
        );

    }


    /* =========================================================
    PAUSE SLIDER ON HOVER / FOCUS
    ========================================================= */

    if (featuredSliderShell) {

        featuredSliderShell.addEventListener(
            "mouseenter",
            stopFeaturedAuto
        );


        featuredSliderShell.addEventListener(
            "mouseleave",
            startFeaturedAuto
        );


        featuredSliderShell.addEventListener(
            "focusin",
            stopFeaturedAuto
        );


        featuredSliderShell.addEventListener(
            "focusout",
            startFeaturedAuto
        );

    }


    /* =========================================================
    MOBILE SWIPE
    ========================================================= */

    if (featuredSlider) {

        featuredSlider.addEventListener(
            "touchstart",
            event => {

                featuredTouchStartX =
                    event.touches[0]
                        .clientX;


                featuredTouchDeltaX =
                    0;


                stopFeaturedAuto();

            },
            {
                passive: true
            }
        );


        featuredSlider.addEventListener(
            "touchmove",
            event => {

                featuredTouchDeltaX =
                    event.touches[0]
                        .clientX -
                    featuredTouchStartX;

            },
            {
                passive: true
            }
        );


        featuredSlider.addEventListener(
            "touchend",
            () => {

                if (
                    Math.abs(
                        featuredTouchDeltaX
                    ) >
                    45
                ) {

                    if (
                        featuredTouchDeltaX <
                        0
                    ) {

                        nextFeaturedSlide();

                    } else {

                        previousFeaturedSlide();

                    }

                }


                featuredTouchStartX =
                    0;


                featuredTouchDeltaX =
                    0;


                startFeaturedAuto();

            },
            {
                passive: true
            }
        );

    }


    /* =========================================================
    PAUSE WHEN TAB HIDDEN
    ========================================================= */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                stopFeaturedAuto();

            } else {

                startFeaturedAuto();

            }

        }
    );


    /* =========================================================
    RESPONSIVE FEATURED SLIDER
    ========================================================= */

    let featuredResizeTimer;


    window.addEventListener(
        "resize",
        () => {

            window.clearTimeout(
                featuredResizeTimer
            );


            featuredResizeTimer =
                window.setTimeout(
                    () => {

                        const maxIndex =
                            getFeaturedMaxIndex();


                        featuredIndex =
                            Math.min(
                                featuredIndex,
                                maxIndex
                            );


                        buildFeaturedDots();


                        updateFeaturedSlider(
                            false
                        );


                        startFeaturedAuto();

                    },
                    150
                );

        }
    );


    if (
        featuredSlides.length
    ) {

        buildFeaturedDots();

        updateFeaturedSlider(
            false
        );

        startFeaturedAuto();

    }


    /* =========================================================
    MY PORTFOLIO FILTER GALLERY
    ========================================================= */

    const galleryFilters =
        document.querySelectorAll(
            ".gallery-filter"
        );


    const galleryItems =
        Array.from(
            document.querySelectorAll(
                ".gallery-card"
            )
        );


    const galleryCount =
        document.getElementById(
            "galleryCount"
        );


    const galleryPageNumbers =
        document.getElementById(
            "galleryPageNumbers"
        );


    const galleryFirst =
        document.getElementById(
            "galleryFirst"
        );


    const galleryPrev =
        document.getElementById(
            "galleryPrev"
        );


    const galleryNext =
        document.getElementById(
            "galleryNext"
        );


    const galleryLast =
        document.getElementById(
            "galleryLast"
        );


    /*
    IMPORTANT

    Portfolio navigation points to
    #MyPortfolio
    */


    const gallerySection =
        document.getElementById(
            "MyPortfolio"
        );


    const galleryItemsPerPage =
        6;


    let activeGalleryFilter =
        "all";


    let activeGalleryPage =
        1;


    /* =========================================================
    FILTER GALLERY
    ========================================================= */

    function getFilteredGalleryItems() {

        return galleryItems.filter(
            item => {

                return (

                    activeGalleryFilter ===
                    "all" ||

                    item.dataset
                        .galleryCategory ===
                    activeGalleryFilter

                );

            }
        );

    }


    /* =========================================================
    PAGINATION NUMBERS
    ========================================================= */

    function getGalleryPaginationItems(
        totalPages
    ) {

        if (
            totalPages <=
            5
        ) {

            return Array.from(

                {
                    length:
                        totalPages
                },

                (
                    _,
                    index
                ) =>
                    index +
                    1

            );

        }


        if (
            activeGalleryPage <=
            3
        ) {

            return [

                1,

                2,

                3,

                4,

                "...",

                totalPages

            ];

        }


        if (
            activeGalleryPage >=
            totalPages -
            2
        ) {

            return [

                1,

                "...",

                totalPages -
                3,

                totalPages -
                2,

                totalPages -
                1,

                totalPages

            ];

        }


        return [

            1,

            "...",

            activeGalleryPage -
            1,

            activeGalleryPage,

            activeGalleryPage +
            1,

            "...",

            totalPages

        ];

    }


    /* =========================================================
    BUILD PAGINATION
    ========================================================= */

    function renderGalleryPagination(
        totalPages
    ) {

        if (
            !galleryPageNumbers
        ) {

            return;

        }


        galleryPageNumbers.innerHTML =
            "";


        getGalleryPaginationItems(
            totalPages
        )
        .forEach(
            item => {

                if (
                    item ===
                    "..."
                ) {

                    const ellipsis =
                        document.createElement(
                            "span"
                        );


                    ellipsis.className =
                        "gallery-page-ellipsis";


                    ellipsis.textContent =
                        "...";


                    galleryPageNumbers
                        .appendChild(
                            ellipsis
                        );


                    return;

                }


                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "gallery-page-number";


                button.textContent =
                    item;


                button.setAttribute(
                    "aria-label",
                    `Go to portfolio page ${item}`
                );


                if (
                    item ===
                    activeGalleryPage
                ) {

                    button.classList.add(
                        "active"
                    );


                    button.setAttribute(
                        "aria-current",
                        "page"
                    );

                }


                button.addEventListener(
                    "click",
                    () => {

                        setGalleryPage(
                            item,
                            true
                        );

                    }
                );


                galleryPageNumbers
                    .appendChild(
                        button
                    );

            }
        );

    }


    /* =========================================================
    UPDATE PAGINATION BUTTONS
    ========================================================= */

    function updateGalleryControls(
        totalPages
    ) {

        [
            galleryFirst,
            galleryPrev
        ]
        .forEach(
            button => {

                if (button) {

                    button.disabled =
                        activeGalleryPage ===
                        1;

                }

            }
        );


        [
            galleryNext,
            galleryLast
        ]
        .forEach(
            button => {

                if (button) {

                    button.disabled =
                        activeGalleryPage ===
                        totalPages;

                }

            }
        );

    }


    /* =========================================================
    RENDER GALLERY
    ========================================================= */

    function renderGallery(
        shouldScroll
    ) {

        if (
            !galleryItems.length
        ) {

            return;

        }


        const filteredItems =
            getFilteredGalleryItems();


        const totalItems =
            filteredItems.length;


        const totalPages =
            Math.max(

                1,

                Math.ceil(
                    totalItems /
                    galleryItemsPerPage
                )

            );


        activeGalleryPage =
            Math.min(
                activeGalleryPage,
                totalPages
            );


        const startIndex =
            (
                activeGalleryPage -
                1
            ) *
            galleryItemsPerPage;


        const endIndex =
            Math.min(

                startIndex +
                galleryItemsPerPage,

                totalItems

            );


        galleryItems.forEach(
            item => {

                item.hidden =
                    true;

            }
        );


        filteredItems
            .slice(
                startIndex,
                endIndex
            )
            .forEach(
                item => {

                    item.hidden =
                        false;

                }
            );


        if (galleryCount) {

            galleryCount.textContent =
                totalItems
                    ?
                    `Showing ${startIndex + 1}-${endIndex} of ${totalItems} projects`
                    :
                    "No projects found";

        }


        renderGalleryPagination(
            totalPages
        );


        updateGalleryControls(
            totalPages
        );


        if (
            shouldScroll &&
            gallerySection
        ) {

            gallerySection.scrollIntoView(
                {

                    behavior:
                        "smooth",

                    block:
                        "start"

                }
            );

        }

    }


    function setGalleryPage(
        page,
        shouldScroll
    ) {

        activeGalleryPage =
            page;


        renderGallery(
            shouldScroll
        );

    }


    /* =========================================================
    GALLERY FILTER BUTTONS
    ========================================================= */

    galleryFilters.forEach(
        filter => {

            filter.addEventListener(
                "click",
                () => {

                    activeGalleryFilter =
                        filter.dataset
                            .galleryFilter;


                    activeGalleryPage =
                        1;


                    galleryFilters.forEach(
                        button => {

                            button.classList.toggle(
                                "active",
                                button ===
                                filter
                            );

                        }
                    );


                    renderGallery(
                        false
                    );

                }
            );

        }
    );


    /* =========================================================
    GALLERY FIRST
    ========================================================= */

    if (galleryFirst) {

        galleryFirst.addEventListener(
            "click",
            () => {

                setGalleryPage(
                    1,
                    true
                );

            }
        );

    }


    /* =========================================================
    GALLERY PREVIOUS
    ========================================================= */

    if (galleryPrev) {

        galleryPrev.addEventListener(
            "click",
            () => {

                setGalleryPage(

                    Math.max(
                        1,
                        activeGalleryPage -
                        1
                    ),

                    true

                );

            }
        );

    }


    /* =========================================================
    GALLERY NEXT
    ========================================================= */

    if (galleryNext) {

        galleryNext.addEventListener(
            "click",
            () => {

                const totalPages =
                    Math.max(

                        1,

                        Math.ceil(
                            getFilteredGalleryItems()
                                .length /
                            galleryItemsPerPage
                        )

                    );


                setGalleryPage(

                    Math.min(
                        totalPages,
                        activeGalleryPage +
                        1
                    ),

                    true

                );

            }
        );

    }


    /* =========================================================
    GALLERY LAST
    ========================================================= */

    if (galleryLast) {

        galleryLast.addEventListener(
            "click",
            () => {

                const totalPages =
                    Math.max(

                        1,

                        Math.ceil(
                            getFilteredGalleryItems()
                                .length /
                            galleryItemsPerPage
                        )

                    );


                setGalleryPage(
                    totalPages,
                    true
                );

            }
        );

    }


    renderGallery(
        false
    );


    /* =========================================================
    DESKTOP HEADER SCROLL
    ========================================================= */

    function updateHeader() {

        if (!header) return;


        header.classList.toggle(

            "scrolled",

            window.scrollY >
            40

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


    /* =========================================================
    MOBILE NAVIGATION
    ========================================================= */

    let previousScrollY =
        window.scrollY;


    let mobileScrollTicking =
        false;


    function showMobileNavigation() {

        if (
            !mobileBottomNav
        ) {

            return;

        }


        mobileBottomNav
            .classList.remove(
                "nav-hidden"
            );

    }


    function hideMobileNavigation() {

        if (
            !mobileBottomNav
        ) {

            return;

        }


        mobileBottomNav
            .classList.add(
                "nav-hidden"
            );

    }


    function updateMobileNavigationVisibility() {

        if (
            !mobileBottomNav
        ) {

            return;

        }


        if (
            window.innerWidth >
            767
        ) {

            showMobileNavigation();


            previousScrollY =
                window.scrollY;


            return;

        }


        const currentScrollY =
            Math.max(
                window.scrollY,
                0
            );


        const difference =
            currentScrollY -
            previousScrollY;


        if (
            currentScrollY <=
            35
        ) {

            showMobileNavigation();


        } else if (
            difference >
            7
        ) {

            hideMobileNavigation();


        } else if (
            difference <
            -5
        ) {

            showMobileNavigation();

        }


        previousScrollY =
            currentScrollY;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (
                !mobileScrollTicking
            ) {

                window.requestAnimationFrame(
                    () => {

                        updateMobileNavigationVisibility();


                        mobileScrollTicking =
                            false;

                    }
                );


                mobileScrollTicking =
                    true;

            }

        },
        {
            passive: true
        }
    );


    /* =========================================================
    TOUCH SCREEN SHOW MOBILE NAVIGATION
    ========================================================= */

    document.addEventListener(
        "pointerdown",
        () => {

            if (
                window.innerWidth <=
                767
            ) {

                showMobileNavigation();

            }

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "touchstart",
        () => {

            if (
                window.innerWidth <=
                767
            ) {

                showMobileNavigation();

            }

        },
        {
            passive: true
        }
    );


    /* =========================================================
    CUSTOM CURSOR
    ========================================================= */

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


        document.querySelectorAll(
            `
            a,
            button,
            .project-card,
            .about-stat,
            .hero-experience-card,
            .hire-tool-card,
            .experience-card,
            .education-card,
            .achievement-card
            `
        )
        .forEach(
            item => {

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

            }
        );

    }


    /* =========================================================
    SMOOTH INTERNAL LINKS
    ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !href ||
                            href ===
                            "#"
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


                        target.scrollIntoView(
                            {

                                behavior:
                                    "smooth",

                                block:
                                    "start"

                            }
                        );

                    }
                );

            }
        );


    /* =========================================================
    ACTIVE NAVIGATION
    ========================================================= */

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


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop -
                    220;


                const sectionHeight =
                    section.offsetHeight;


                if (

                    window.scrollY >=
                    sectionTop

                    &&

                    window.scrollY <
                    sectionTop +
                    sectionHeight

                ) {

                    current =
                        section.id;

                }

            }
        );


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


    /* =========================================================
    BACK TO TOP
    ========================================================= */

    function updateBackToTop() {

        if (!backToTop) {

            return;

        }


        backToTop.classList.toggle(

            "show",

            window.scrollY >
            500

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


    /* =========================================================
    SCROLL REVEAL
    ========================================================= */

    const revealElements = [

        ...document.querySelectorAll(
            ".section-heading"
        ),

        ...document.querySelectorAll(
            ".about-visual"
        ),

        ...document.querySelectorAll(
            ".about-content"
        ),

        ...document.querySelectorAll(
            ".about-stat"
        ),

        ...document.querySelectorAll(
            ".hire-sidebar"
        ),

        ...document.querySelectorAll(
            ".hire-content-window"
        ),

        ...document.querySelectorAll(
            ".project-card"
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
        "IntersectionObserver"
        in window
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
                                    .classList.add(
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

                    threshold:
                        .12,

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


    /* =========================================================
    ABOUT STATS ANIMATION
    ========================================================= */

    const statNumbers =
        document.querySelectorAll(
            ".stat-number"
        );


    let statsStarted =
        false;


    function animateStat(
        element
    ) {

        const finalNumber =
            Number(
                element.dataset
                    .number
            );


        const suffix =
            element.dataset
                .suffix ||
            "";


        if (
            Number.isNaN(
                finalNumber
            )
        ) {

            return;

        }


        const duration =
            1400;


        const startTime =
            performance.now();


        function update(
            currentTime
        ) {

            const progress =
                Math.min(

                    (
                        currentTime -
                        startTime
                    ) /
                    duration,

                    1

                );


            const eased =
                1 -
                Math.pow(
                    1 -
                    progress,
                    3
                );


            const currentValue =
                Math.round(
                    finalNumber *
                    eased
                );


            element.textContent =
                `${currentValue}${suffix}`;


            if (
                progress <
                1
            ) {

                requestAnimationFrame(
                    update
                );


            } else {


                element.textContent =
                    `${finalNumber}${suffix}`;

            }

        }


        requestAnimationFrame(
            update
        );

    }


    function startStats() {

        if (
            statsStarted
        ) {

            return;

        }


        statsStarted =
            true;


        statNumbers.forEach(
            (
                element,
                index
            ) => {

                setTimeout(
                    () => {

                        animateStat(
                            element
                        );

                    },
                    index *
                    140
                );

            }
        );

    }


    const aboutStats =
        document.querySelector(
            ".about-stats"
        );


    if (
        aboutStats &&
        "IntersectionObserver"
        in window
    ) {

        const statsObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                startStats();


                                statsObserver
                                    .disconnect();

                            }

                        }
                    );

                },
                {
                    threshold:
                        .35
                }
            );


        statsObserver.observe(
            aboutStats
        );


    } else {


        startStats();

    }


    /* =========================================================
    PORTFOLIO FEATURE CARDS 3D HOVER
    ========================================================= */

    document
        .querySelectorAll(
            ".project-card"
        )
        .forEach(
            card => {

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
                            rect.width /
                            2;


                        const centerY =
                            rect.height /
                            2;


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

            }
        );


    /* =========================================================
    HERO CODE BACKGROUND PARALLAX
    ========================================================= */

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
                        .5
                    ) *
                    -12;


                const moveY =
                    (
                        y -
                        .5
                    ) *
                    -8;


                heroCodeBackground
                    .style.transform =
                    `translate3d(${moveX}px, ${moveY}px, 0)`;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroCodeBackground
                    .style.transform =
                    "translate3d(0,0,0)";

            }
        );

    }


    /* =========================================================
    HERO PROFILE FLOAT PARALLAX
    ========================================================= */

    const heroProfileStage =
        document.querySelector(
            ".hero-profile-stage"
        );


    if (
        hero &&
        heroProfileStage
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
                        .5
                    ) *
                    7;


                const moveY =
                    (
                        y -
                        .5
                    ) *
                    6;


                heroProfileStage
                    .style.setProperty(
                        "--hero-move-x",
                        `${moveX}px`
                    );


                heroProfileStage
                    .style.setProperty(
                        "--hero-move-y",
                        `${moveY}px`
                    );

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroProfileStage
                    .style.setProperty(
                        "--hero-move-x",
                        "0px"
                    );


                heroProfileStage
                    .style.setProperty(
                        "--hero-move-y",
                        "0px"
                    );

            }
        );

    }


    /* =========================================================
    RESPONSIVE RESIZE
    ========================================================= */

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


                        if (
                            window.innerWidth <=
                            900 &&
                            heroProfileStage
                        ) {

                            heroProfileStage
                                .style.setProperty(
                                    "--hero-move-x",
                                    "0px"
                                );


                            heroProfileStage
                                .style.setProperty(
                                    "--hero-move-y",
                                    "0px"
                                );

                        }


                        if (
                            window.innerWidth >
                            767
                        ) {

                            showMobileNavigation();

                        }

                    },
                    280
                );

        }
    );


   /* =========================================================
CONTACT COPY BUTTONS
========================================================= */

const contactCopyButtons =
    document.querySelectorAll(
        ".contact-copy-btn"
    );


async function copyContactValue(
    button
) {

    const textToCopy =
        button.dataset.copy;


    if (!textToCopy) {

        return;

    }


    const originalAriaLabel =
        button.getAttribute(
            "aria-label"
        );


    const originalTitle =
        button.getAttribute(
            "title"
        );


    try {

        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            await navigator.clipboard.writeText(
                textToCopy
            );


        } else {

            const temporaryInput =
                document.createElement(
                    "textarea"
                );


            temporaryInput.value =
                textToCopy;


            temporaryInput.setAttribute(
                "readonly",
                ""
            );


            temporaryInput.style.position =
                "fixed";


            temporaryInput.style.left =
                "-9999px";


            temporaryInput.style.top =
                "0";


            temporaryInput.style.opacity =
                "0";


            document.body.appendChild(
                temporaryInput
            );


            temporaryInput.select();


            temporaryInput.setSelectionRange(
                0,
                temporaryInput.value.length
            );


            document.execCommand(
                "copy"
            );


            temporaryInput.remove();

        }


        button.classList.add(
            "copied"
        );


        button.setAttribute(
            "aria-label",
            "Copied"
        );


        button.setAttribute(
            "title",
            "Copied!"
        );


        setTimeout(
            () => {

                button.classList.remove(
                    "copied"
                );


                if (
                    originalAriaLabel
                ) {

                    button.setAttribute(
                        "aria-label",
                        originalAriaLabel
                    );


                } else {

                    button.removeAttribute(
                        "aria-label"
                    );

                }


                if (
                    originalTitle
                ) {

                    button.setAttribute(
                        "title",
                        originalTitle
                    );


                } else {

                    button.removeAttribute(
                        "title"
                    );

                }

            },
            1400
        );


    } catch (error) {

        console.error(
            "Unable to copy contact information:",
            error
        );

    }

}


contactCopyButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                copyContactValue(
                    button
                );

            }
        );

    }
);
    
    /* =========================================================
    COPYRIGHT YEAR
    ========================================================= */

    const copyrightYear =
        document.getElementById(
            "copyrightYear"
        );


    if (copyrightYear) {

        copyrightYear.textContent =
            new Date()
                .getFullYear();

    }

});
