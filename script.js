/* =========================================================
JHONAIZA GEDE PORTFOLIO
COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener(
"DOMContentLoaded",
() => {


/* =========================================================
ELEMENTS
========================================================= */

const body =
    document.body;


const header =
    document.querySelector(
        ".desktop-header"
    );


const cursor =
    document.querySelector(
        ".cursor"
    );


const backToTop =
    document.querySelector(
        ".back-to-top"
    );


const hero =
    document.querySelector(
        ".hero"
    );


const mobileBottomNav =
    document.getElementById(
        "mobileBottomNav"
    );



/* =========================================================
LOADER COMPUTER CODE
========================================================= */

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

    'transform: translateY(-10px);',

    '<span class="code-keyword">let</span> creativity = true;',

    'animation: reveal .8s ease;',

    '<span class="code-keyword">if</span> (idea) { createExperience(); }',

    'font-family: "Poppins", sans-serif;',

    '<span class="code-keyword">return</span> digitalExperience;',

    'responsive: true;',

    'userExperience.optimize();',

    'transition: all .4s ease;',

    'creativeDeveloper.initialize();'

];



function buildLoaderCode(){

    if(
        !loaderCodeBackground
    ){
        return;
    }


    loaderCodeBackground.innerHTML =
        "";


    const width =
        window.innerWidth;


    let columns =
        15;


    if(
        width <=
        520
    ){

        columns =
            6;

    }

    else if(
        width <=
        900
    ){

        columns =
            9;

    }


    for(
        let i = 0;
        i < columns;
        i++
    ){

        const column =
            document.createElement(
                "div"
            );


        column.className =
            "code-column";


        column.style.left =
            `${
                (
                    i /
                    columns
                )
                *
                100
            }%`;


        column.style.animationDuration =
            `${
                18 +
                Math.random()
                *
                16
            }s`;


        column.style.animationDelay =
            `-${
                Math.random()
                *
                18
            }s`;


        for(
            let j = 0;
            j < 16;
            j++
        ){

            const line =
                document.createElement(
                    "span"
                );


            line.innerHTML =
                loaderCodeLines[
                    Math.floor(
                        Math.random()
                        *
                        loaderCodeLines.length
                    )
                ];


            column.appendChild(
                line
            );

        }


        loaderCodeBackground.appendChild(
            column
        );

    }

}


buildLoaderCode();



/* =========================================================
HERO CODE BACKGROUND
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
);`,

`@media (max-width: 767px) {
.portfolio {
grid-template-columns: 1fr;
}
}`,

`userExperience
.design()
.develop()
.optimize()
.deliver();`

];


const heroCodePositions = [

    {
        left:"2%",
        top:"10%"
    },

    {
        left:"35%",
        top:"6%"
    },

    {
        right:"2%",
        top:"14%"
    },

    {
        left:"4%",
        bottom:"5%"
    },

    {
        left:"38%",
        bottom:"7%"
    },

    {
        right:"1%",
        bottom:"8%"
    },

    {
        left:"25%",
        top:"42%"
    }

];



function buildHeroCode(){

    if(
        !heroCodeBackground
    ){
        return;
    }


    heroCodeBackground.innerHTML =
        "";


    let totalBlocks =
        9;


    if(
        window.innerWidth <=
        767
    ){

        totalBlocks =
            8;

    }


    for(
        let i = 0;
        i < totalBlocks;
        i++
    ){

        const block =
            document.createElement(
                "pre"
            );


        block.className =
            "hero-code-block";


        block.textContent =
            heroCodeBlocks[
                i
                %
                heroCodeBlocks.length
            ];


        const position =
            heroCodePositions[
                i
                %
                heroCodePositions.length
            ];


        Object.keys(
            position
        )
        .forEach(
            property => {

                block.style[
                    property
                ] =
                    position[
                        property
                    ];

            }
        );


        heroCodeBackground.appendChild(
            block
        );

    }

}


buildHeroCode();



/* =========================================================
LOADER
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

    "Almost ready...",

    "Launching portfolio..."

];


let loaderMessageIndex =
    0;


let loaderCharacterIndex =
    0;


let loaderDeleting =
    false;


let loaderTypingStopped =
    false;



function typeLoaderMessage(){

    if(
        !loaderTypingText
        ||
        loaderTypingStopped
    ){
        return;
    }


    const currentMessage =
        loaderMessages[
            loaderMessageIndex
        ];


    if(
        !loaderDeleting
    ){

        loaderCharacterIndex++;


        loaderTypingText.textContent =
            currentMessage.substring(
                0,
                loaderCharacterIndex
            );


        if(
            loaderCharacterIndex
            >=
            currentMessage.length
        ){

            loaderDeleting =
                true;


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

    }

    else{

        loaderCharacterIndex--;


        loaderTypingText.textContent =
            currentMessage.substring(
                0,
                loaderCharacterIndex
            );


        if(
            loaderCharacterIndex
            <=
            0
        ){

            loaderDeleting =
                false;


            loaderMessageIndex =
                (
                    loaderMessageIndex
                    +
                    1
                )
                %
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



const loaderDuration =
    6500;


const loaderStartTime =
    performance.now();


let loaderComplete =
    false;



function finishLoader(){

    if(
        loaderComplete
    ){
        return;
    }


    loaderComplete =
        true;


    loaderTypingStopped =
        true;


    if(
        loaderPercent
    ){

        loaderPercent.textContent =
            "100%";

    }


    if(
        loaderProgress
    ){

        loaderProgress.style.width =
            "100%";

    }


    if(
        loaderTypingText
    ){

        loaderTypingText.textContent =
            "Experience ready.";

    }


    setTimeout(
        () => {

            if(
                loader
            ){

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
){

    if(
        loaderComplete
    ){
        return;
    }


    const elapsed =
        currentTime
        -
        loaderStartTime;


    const progress =
        Math.min(
            elapsed
            /
            loaderDuration,
            1
        );


    const percent =
        Math.floor(
            progress
            *
            100
        );


    if(
        loaderPercent
    ){

        loaderPercent.textContent =
            `${percent}%`;

    }


    if(
        loaderProgress
    ){

        loaderProgress.style.width =
            `${percent}%`;

    }


    if(
        elapsed
        >=
        loaderDuration
    ){

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
HERO TYPEWRITER
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



function typeHeroRole(){

    if(
        !heroRoleTyping
    ){
        return;
    }


    const currentRole =
        heroRoles[
            heroRoleIndex
        ];


    if(
        !heroDeleting
    ){

        heroCharacterIndex++;


        heroRoleTyping.textContent =
            currentRole.substring(
                0,
                heroCharacterIndex
            );


        if(
            heroCharacterIndex
            >=
            currentRole.length
        ){

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

    }

    else{

        heroCharacterIndex--;


        heroRoleTyping.textContent =
            currentRole.substring(
                0,
                heroCharacterIndex
            );


        if(
            heroCharacterIndex
            <=
            0
        ){

            heroDeleting =
                false;


            heroRoleIndex =
                (
                    heroRoleIndex
                    +
                    1
                )
                %
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

                        panel.classList.toggle(
                            "active",
                            panel.dataset.hirePanel
                            ===
                            selectedTab
                        );

                    }
                );


                if(
                    hireContentScroll
                ){

                    hireContentScroll.scrollTo(
                        {
                            top:0,
                            behavior:"smooth"
                        }
                    );

                }

            }
        );

    }
);



/* =========================================================
PORTFOLIO FILTER + PAGINATION
========================================================= */

const portfolioFilters =
    document.querySelectorAll(
        ".portfolio-filter"
    );


const portfolioItems =
    Array.from(
        document.querySelectorAll(
            ".portfolio-sample-card"
        )
    );


const portfolioResultCount =
    document.getElementById(
        "portfolioResultCount"
    );


const portfolioPageNumbers =
    document.getElementById(
        "portfolioPageNumbers"
    );


const portfolioFirst =
    document.getElementById(
        "portfolioFirst"
    );


const portfolioPrev =
    document.getElementById(
        "portfolioPrev"
    );


const portfolioNext =
    document.getElementById(
        "portfolioNext"
    );


const portfolioLast =
    document.getElementById(
        "portfolioLast"
    );


const portfolioGallery =
    document.getElementById(
        "portfolioGallery"
    );


const portfolioPerPage =
    6;


let portfolioFilter =
    "all";


let portfolioCurrentPage =
    1;



function getFilteredPortfolio(){

    if(
        portfolioFilter
        ===
        "all"
    ){

        return portfolioItems;

    }


    return portfolioItems.filter(
        item => {

            return (
                item.dataset.category
                ===
                portfolioFilter
            );

        }
    );

}



function buildPortfolioPageNumbers(
    totalPages
){

    if(
        !portfolioPageNumbers
    ){
        return;
    }


    portfolioPageNumbers.innerHTML =
        "";


    for(
        let page = 1;
        page <= totalPages;
        page++
    ){

        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "pagination-number";


        if(
            page
            ===
            portfolioCurrentPage
        ){

            button.classList.add(
                "active"
            );

        }


        button.textContent =
            page;


        button.addEventListener(
            "click",
            () => {

                portfolioCurrentPage =
                    page;


                renderPortfolio();


                if(
                    portfolioGallery
                ){

                    portfolioGallery.scrollIntoView(
                        {
                            behavior:"smooth",
                            block:"start"
                        }
                    );

                }

            }
        );


        portfolioPageNumbers.appendChild(
            button
        );

    }

}



function renderPortfolio(){

    if(
        portfolioItems.length
        ===
        0
    ){
        return;
    }


    const filtered =
        getFilteredPortfolio();


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filtered.length
                /
                portfolioPerPage
            )
        );


    if(
        portfolioCurrentPage
        >
        totalPages
    ){

        portfolioCurrentPage =
            totalPages;

    }


    const start =
        (
            portfolioCurrentPage
            -
            1
        )
        *
        portfolioPerPage;


    const end =
        Math.min(
            start
            +
            portfolioPerPage,
            filtered.length
        );


    portfolioItems.forEach(
        item => {

            item.classList.add(
                "is-hidden"
            );

        }
    );


    filtered
    .slice(
        start,
        end
    )
    .forEach(
        item => {

            item.classList.remove(
                "is-hidden"
            );

        }
    );


    if(
        portfolioResultCount
    ){

        if(
            filtered.length
            ===
            0
        ){

            portfolioResultCount.textContent =
                "No projects found";

        }

        else{

            portfolioResultCount.textContent =
                `Showing ${
                    start + 1
                }–${
                    end
                } of ${
                    filtered.length
                } projects`;

        }

    }


    buildPortfolioPageNumbers(
        totalPages
    );


    if(
        portfolioFirst
    ){

        portfolioFirst.disabled =
            portfolioCurrentPage
            ===
            1;

    }


    if(
        portfolioPrev
    ){

        portfolioPrev.disabled =
            portfolioCurrentPage
            ===
            1;

    }


    if(
        portfolioNext
    ){

        portfolioNext.disabled =
            portfolioCurrentPage
            ===
            totalPages;

    }


    if(
        portfolioLast
    ){

        portfolioLast.disabled =
            portfolioCurrentPage
            ===
            totalPages;

    }

}



portfolioFilters.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                portfolioFilters.forEach(
                    filterButton => {

                        filterButton.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                portfolioFilter =
                    button.dataset.filter;


                portfolioCurrentPage =
                    1;


                renderPortfolio();

            }
        );

    }
);



if(
    portfolioFirst
){

    portfolioFirst.addEventListener(
        "click",
        () => {

            portfolioCurrentPage =
                1;


            renderPortfolio();

        }
    );

}



if(
    portfolioPrev
){

    portfolioPrev.addEventListener(
        "click",
        () => {

            portfolioCurrentPage =
                Math.max(
                    1,
                    portfolioCurrentPage
                    -
                    1
                );


            renderPortfolio();

        }
    );

}



if(
    portfolioNext
){

    portfolioNext.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        getFilteredPortfolio()
                            .length
                        /
                        portfolioPerPage
                    )
                );


            portfolioCurrentPage =
                Math.min(
                    totalPages,
                    portfolioCurrentPage
                    +
                    1
                );


            renderPortfolio();

        }
    );

}



if(
    portfolioLast
){

    portfolioLast.addEventListener(
        "click",
        () => {

            portfolioCurrentPage =
                Math.max(
                    1,
                    Math.ceil(
                        getFilteredPortfolio()
                            .length
                        /
                        portfolioPerPage
                    )
                );


            renderPortfolio();

        }
    );

}


renderPortfolio();



/* =========================================================
HEADER
========================================================= */

function updateHeader(){

    if(
        !header
    ){
        return;
    }


    header.classList.toggle(
        "scrolled",
        window.scrollY
        >
        40
    );

}


updateHeader();


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive:true
    }
);



/* =========================================================
MOBILE NAVIGATION
========================================================= */

let previousScrollY =
    window.scrollY;


let mobileScrollTicking =
    false;



function showMobileNavigation(){

    if(
        !mobileBottomNav
    ){
        return;
    }


    mobileBottomNav.classList.remove(
        "nav-hidden"
    );

}



function hideMobileNavigation(){

    if(
        !mobileBottomNav
    ){
        return;
    }


    mobileBottomNav.classList.add(
        "nav-hidden"
    );

}



function updateMobileNavigationVisibility(){

    if(
        !mobileBottomNav
    ){
        return;
    }


    if(
        window.innerWidth
        >
        767
    ){

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
        currentScrollY
        -
        previousScrollY;


    if(
        currentScrollY
        <=
        35
    ){

        showMobileNavigation();

    }

    else if(
        difference
        >
        7
    ){

        hideMobileNavigation();

    }

    else if(
        difference
        <
        -5
    ){

        showMobileNavigation();

    }


    previousScrollY =
        currentScrollY;

}



window.addEventListener(
    "scroll",
    () => {

        if(
            !mobileScrollTicking
        ){

            requestAnimationFrame(
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
        passive:true
    }
);



document.addEventListener(
    "pointerdown",
    () => {

        if(
            window.innerWidth
            <=
            767
        ){

            showMobileNavigation();

        }

    },
    {
        passive:true
    }
);



document.addEventListener(
    "touchstart",
    () => {

        if(
            window.innerWidth
            <=
            767
        ){

            showMobileNavigation();

        }

    },
    {
        passive:true
    }
);



/* =========================================================
CUSTOM CURSOR
========================================================= */

if(
    cursor
){

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
        .portfolio-sample-card,
        .about-stat,
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
SMOOTH ANCHOR LINKS
========================================================= */

document.querySelectorAll(
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


                if(
                    !href
                    ||
                    href
                    ===
                    "#"
                ){
                    return;
                }


                const target =
                    document.querySelector(
                        href
                    );


                if(
                    !target
                ){
                    return;
                }


                event.preventDefault();


                /*
                Keep the exact URL hash.
                Example:
                #MyPortfolio
                */

                if(
                    window.location.hash
                    !==
                    href
                ){

                    history.pushState(
                        null,
                        "",
                        href
                    );

                }


                target.scrollIntoView(
                    {
                        behavior:"smooth",
                        block:"start"
                    }
                );

            }
        );

    }
);



/* =========================================================
OPEN DIRECT HASH CORRECTLY
========================================================= */

function scrollToCurrentHash(){

    const hash =
        window.location.hash;


    if(
        !hash
    ){
        return;
    }


    const target =
        document.querySelector(
            hash
        );


    if(
        !target
    ){
        return;
    }


    setTimeout(
        () => {

            target.scrollIntoView(
                {
                    behavior:"smooth",
                    block:"start"
                }
            );

        },
        850
    );

}


window.addEventListener(
    "hashchange",
    scrollToCurrentHash
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



function updateNavigation(){

    let current =
        "home";


    sections.forEach(
        section => {

            const sectionTop =
                section.offsetTop
                -
                220;


            const sectionBottom =
                sectionTop
                +
                section.offsetHeight;


            if(
                window.scrollY
                >=
                sectionTop
                &&
                window.scrollY
                <
                sectionBottom
            ){

                current =
                    section.id;

            }

        }
    );


    /*
    THE EXTRA PORTFOLIO GALLERY
    BELONGS TO #MyPortfolio
    */

    if(
        current
        ===
        "portfolio-gallery"
    ){

        current =
            "MyPortfolio";

    }


    desktopNavLinks.forEach(
        link => {

            link.classList.toggle(
                "active",
                link.getAttribute(
                    "href"
                )
                ===
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
                )
                ===
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
        passive:true
    }
);



/* =========================================================
BACK TO TOP
========================================================= */

function updateBackToTop(){

    if(
        !backToTop
    ){
        return;
    }


    backToTop.classList.toggle(
        "show",
        window.scrollY
        >
        500
    );

}


updateBackToTop();


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive:true
    }
);



/* =========================================================
REVEAL ANIMATION
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
        ".hire-sidebar"
    ),

    ...document.querySelectorAll(
        ".hire-content-window"
    ),

    ...document.querySelectorAll(
        ".project-card"
    ),

    ...document.querySelectorAll(
        ".portfolio-showcase-heading"
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



if(
    "IntersectionObserver"
    in window
){

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if(
                            entry.isIntersecting
                        ){

                            entry.target.classList.add(
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
                threshold:.12,
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

}

else{

    revealElements.forEach(
        element => {

            element.classList.add(
                "active"
            );

        }
    );

}



/* =========================================================
ABOUT ANIMATED NUMBERS
========================================================= */

const statNumbers =
    document.querySelectorAll(
        ".stat-number"
    );


let statsStarted =
    false;



function animateStat(
    element
){

    const finalNumber =
        Number(
            element.dataset.number
        );


    const suffix =
        element.dataset.suffix
        ||
        "";


    if(
        Number.isNaN(
            finalNumber
        )
    ){
        return;
    }


    const duration =
        1400;


    const startTime =
        performance.now();


    function update(
        currentTime
    ){

        const progress =
            Math.min(
                (
                    currentTime
                    -
                    startTime
                )
                /
                duration,
                1
            );


        const eased =
            1
            -
            Math.pow(
                1
                -
                progress,
                3
            );


        const currentValue =
            Math.round(
                finalNumber
                *
                eased
            );


        element.textContent =
            `${currentValue}${suffix}`;


        if(
            progress
            <
            1
        ){

            requestAnimationFrame(
                update
            );

        }

        else{

            element.textContent =
                `${finalNumber}${suffix}`;

        }

    }


    requestAnimationFrame(
        update
    );

}



const aboutStats =
    document.querySelector(
        ".about-stats"
    );


if(
    aboutStats
    &&
    "IntersectionObserver"
    in window
){

    const statsObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if(
                            entry.isIntersecting
                            &&
                            !statsStarted
                        ){

                            statsStarted =
                                true;


                            statNumbers.forEach(
                                (
                                    number,
                                    index
                                ) => {

                                    setTimeout(
                                        () => {

                                            animateStat(
                                                number
                                            );

                                        },
                                        index
                                        *
                                        140
                                    );

                                }
                            );


                            statsObserver.disconnect();

                        }

                    }
                );

            },
            {
                threshold:.3
            }
        );


    statsObserver.observe(
        aboutStats
    );

}



/* =========================================================
HERO PROFILE PARALLAX
========================================================= */

const heroProfileStage =
    document.querySelector(
        ".hero-profile-stage"
    );


if(
    hero
    &&
    heroProfileStage
){

    hero.addEventListener(
        "mousemove",
        event => {

            if(
                window.innerWidth
                <=
                900
            ){
                return;
            }


            const rect =
                hero.getBoundingClientRect();


            const x =
                (
                    event.clientX
                    -
                    rect.left
                )
                /
                rect.width;


            const y =
                (
                    event.clientY
                    -
                    rect.top
                )
                /
                rect.height;


            heroProfileStage.style.setProperty(
                "--hero-move-x",
                `${
                    (
                        x
                        -
                        .5
                    )
                    *
                    7
                }px`
            );


            heroProfileStage.style.setProperty(
                "--hero-move-y",
                `${
                    (
                        y
                        -
                        .5
                    )
                    *
                    6
                }px`
            );

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroProfileStage.style.setProperty(
                "--hero-move-x",
                "0px"
            );


            heroProfileStage.style.setProperty(
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


                    if(
                        window.innerWidth
                        >
                        767
                    ){

                        showMobileNavigation();

                    }

                },
                280
            );

    }
);



/* =========================================================
CURRENT YEAR
========================================================= */

const copyrightYear =
    document.getElementById(
        "copyrightYear"
    );


if(
    copyrightYear
){

    copyrightYear.textContent =
        new Date()
            .getFullYear();

}


}
);
