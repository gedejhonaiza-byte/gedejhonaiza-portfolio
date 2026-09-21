/* =========================================================
   JHONAIZA GEDE PORTFOLIO
   COMPLETE SCRIPT
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           BASIC ELEMENTS
        ================================================= */

        const body =
            document.body;


        const header =
            document.querySelector(
                "header"
            );


        const cursor =
            document.querySelector(
                ".cursor"
            );


        const backToTop =
            document.querySelector(
                ".back-to-top"
            );



        /* =================================================
           COMPUTER CODE LOADER
        ================================================= */

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


        const codeBackground =
            document.getElementById(
                "loaderCodeBackground"
            );


        body.classList.add(
            "loader-active"
        );



        /* =================================================
           CODE LINES
        ================================================= */

        const codeLines = [

            '<span class="code-keyword">const</span> portfolio = new CreativeExperience();',

            '<span class="code-keyword">function</span> createDesign() { return "impact"; }',

            '&lt;section class=<span class="code-string">"hero"</span>&gt;',

            'display: grid;',

            'grid-template-columns: 1fr 1fr;',

            'const designer = <span class="code-string">"Jhonaiza Gede"</span>;',

            'document.querySelector(<span class="code-string">".project"</span>);',

            'background: linear-gradient(135deg, #080808, #c9a84c);',

            '&lt;div class=<span class="code-string">"creative"</span>&gt;',

            'transform: translateY(-10px);',

            '<span class="code-keyword">let</span> creativity = true;',

            'animation: reveal 0.8s ease;',

            '<span class="code-keyword">if</span> (idea) { buildExperience(); }',

            'font-family: "Cormorant Garamond";',

            'const skills = [<span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>, <span class="code-string">"JS"</span>];',

            '&lt;article class=<span class="code-string">"project-card"</span>&gt;',

            'border: 1px solid rgba(201,168,76,.25);',

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



        /* =================================================
           BUILD CODE BACKGROUND
        ================================================= */

        function createCodeBackground() {


            if (
                !codeBackground
            ) {

                return;

            }


            const screenWidth =
                window.innerWidth;


            let columns;


            if (
                screenWidth <= 500
            ) {

                columns = 6;

            } else if (
                screenWidth <= 900
            ) {

                columns = 9;

            } else {

                columns = 15;

            }



            codeBackground.innerHTML =
                "";



            for (
                let i = 0;
                i < columns;
                i++
            ) {


                const column =
                    document.createElement(
                        "div"
                    );


                column.className =
                    "code-column";


                column.style.left =
                    `${(
                        i /
                        columns
                    ) * 100}%`;


                column.style.animationDuration =
                    `${
                        14 +
                        Math.random() *
                        15
                    }s`;


                column.style.animationDelay =
                    `-${
                        Math.random() *
                        18
                    }s`;


                column.style.opacity =
                    `${
                        0.35 +
                        Math.random() *
                        0.6
                    }`;



                const lineCount =
                    14;



                for (
                    let j = 0;
                    j < lineCount;
                    j++
                ) {


                    const line =
                        document.createElement(
                            "span"
                        );


                    const randomLine =
                        codeLines[
                            Math.floor(
                                Math.random() *
                                codeLines.length
                            )
                        ];


                    line.innerHTML =
                        randomLine;


                    column.appendChild(
                        line
                    );


                }


                codeBackground.appendChild(
                    column
                );


            }


        }



        createCodeBackground();



        /* =================================================
           LOADING PROGRESS
        ================================================= */

        let loadingValue =
            0;


        let loaderFinished =
            false;



        function renderLoader() {


            const roundedValue =
                Math.floor(
                    loadingValue
                );


            if (
                loaderPercent
            ) {

                loaderPercent.textContent =
                    `${roundedValue}%`;

            }


            if (
                loaderProgress
            ) {

                loaderProgress.style.width =
                    `${roundedValue}%`;

            }


        }



        function finishLoader() {


            if (
                loaderFinished
            ) {

                return;

            }


            loaderFinished =
                true;


            loadingValue =
                100;


            renderLoader();



            setTimeout(
                () => {


                    if (
                        loader
                    ) {

                        loader.classList.add(
                            "hide"
                        );

                    }


                    body.classList.remove(
                        "loader-active"
                    );


                    body.classList.add(
                        "site-loaded"
                    );


                },
                500
            );


        }



        function animateLoader() {


            if (
                loadingValue >= 100
            ) {

                finishLoader();

                return;

            }



            let increment;



            if (
                loadingValue < 25
            ) {

                increment =
                    Math.random() *
                    3 +
                    1;

            } else if (
                loadingValue < 65
            ) {

                increment =
                    Math.random() *
                    2 +
                    0.7;

            } else if (
                loadingValue < 90
            ) {

                increment =
                    Math.random() *
                    1.1 +
                    0.3;

            } else {

                increment =
                    Math.random() *
                    0.45 +
                    0.1;

            }



            loadingValue +=
                increment;



            if (
                loadingValue >
                99
            ) {

                loadingValue =
                    99;

            }



            renderLoader();



            setTimeout(
                animateLoader,
                35
            );


        }



        animateLoader();



        /* =================================================
           COMPLETE WHEN ASSETS LOAD
        ================================================= */

        window.addEventListener(
            "load",
            () => {


                const completeInterval =
                    setInterval(
                        () => {


                            loadingValue +=
                                5;


                            if (
                                loadingValue >=
                                100
                            ) {


                                loadingValue =
                                    100;


                                clearInterval(
                                    completeInterval
                                );


                                finishLoader();


                            }


                            renderLoader();


                        },
                        28
                    );


            }
        );



        /* =================================================
           FAILSAFE
        ================================================= */

        setTimeout(
            () => {


                finishLoader();


            },
            5500
        );



        /* =================================================
           REBUILD CODE AFTER RESIZE
        ================================================= */

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


                            if (
                                !loaderFinished
                            ) {

                                createCodeBackground();

                            }


                        },
                        250
                    );


            }
        );



        /* =================================================
           MOBILE MENU
        ================================================= */

        const menuToggle =
            document.getElementById(
                "menuToggle"
            );


        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        const mobileMenuClose =
            document.getElementById(
                "mobileMenuClose"
            );


        const menuBackdrop =
            document.getElementById(
                "menuBackdrop"
            );


        const mobileNavLinks =
            document.querySelectorAll(
                ".mobile-nav-link"
            );



        function openMobileMenu() {


            if (
                !mobileMenu ||
                !menuBackdrop ||
                !menuToggle
            ) {

                return;

            }


            mobileMenu.classList.add(
                "open"
            );


            menuBackdrop.classList.add(
                "show"
            );


            body.classList.add(
                "menu-open"
            );


            mobileMenu.setAttribute(
                "aria-hidden",
                "false"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );


        }



        function closeMobileMenu() {


            if (
                !mobileMenu ||
                !menuBackdrop ||
                !menuToggle
            ) {

                return;

            }


            mobileMenu.classList.remove(
                "open"
            );


            menuBackdrop.classList.remove(
                "show"
            );


            body.classList.remove(
                "menu-open"
            );


            mobileMenu.setAttribute(
                "aria-hidden",
                "true"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


        }



        if (
            menuToggle
        ) {

            menuToggle.addEventListener(
                "click",
                openMobileMenu
            );

        }



        if (
            mobileMenuClose
        ) {

            mobileMenuClose.addEventListener(
                "click",
                closeMobileMenu
            );

        }



        if (
            menuBackdrop
        ) {

            menuBackdrop.addEventListener(
                "click",
                closeMobileMenu
            );

        }



        mobileNavLinks.forEach(
            link => {


                link.addEventListener(
                    "click",
                    closeMobileMenu
                );


            }
        );



        document.addEventListener(
            "keydown",
            event => {


                if (
                    event.key ===
                    "Escape"
                ) {

                    closeMobileMenu();

                }


            }
        );



        /* =================================================
           CUSTOM CURSOR
        ================================================= */

        if (
            cursor
        ) {


            document.addEventListener(
                "mousemove",
                event => {


                    cursor.style.left =
                        `${event.clientX}px`;


                    cursor.style.top =
                        `${event.clientY}px`;


                }
            );


            const interactive =
                document.querySelectorAll(

                    "a, button, .service-card, .skill-card, .project-card"

                );


            interactive.forEach(
                element => {


                    element.addEventListener(
                        "mouseenter",
                        () => {


                            cursor.classList.add(
                                "active"
                            );


                        }
                    );


                    element.addEventListener(
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



        /* =================================================
           HEADER SCROLL
        ================================================= */

        function updateHeader() {


            if (
                !header
            ) {

                return;

            }


            header.classList.toggle(
                "scrolled",
                window.scrollY >
                50
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



        /* =================================================
           BACK TO TOP
        ================================================= */

        function updateBackToTop() {


            if (
                !backToTop
            ) {

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



        /* =================================================
           SMOOTH INTERNAL LINKS
        ================================================= */

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        internalLinks.forEach(
            link => {


                link.addEventListener(
                    "click",
                    event => {


                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId ===
                            "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (
                            !target
                        ) {

                            return;

                        }


                        event.preventDefault();


                        closeMobileMenu();


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



        /* =================================================
           REVEAL
        ================================================= */

        const revealElements = [

            ...document.querySelectorAll(
                ".section-heading"
            ),

            ...document.querySelectorAll(
                ".about-image-wrap"
            ),

            ...document.querySelectorAll(
                ".about-content"
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



        const observer =
            new IntersectionObserver(
                entries => {


                    entries.forEach(
                        entry => {


                            if (
                                entry.isIntersecting
                            ) {


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

                    threshold:
                        0.12,

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



        /* =================================================
           ACTIVE NAVIGATION
        ================================================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const desktopLinks =
            document.querySelectorAll(
                ".nav-links a"
            );



        function updateNavigation() {


            let current =
                "";


            sections.forEach(
                section => {


                    const top =
                        section.offsetTop -
                        180;


                    const height =
                        section.offsetHeight;


                    if (
                        window.scrollY >=
                        top &&
                        window.scrollY <
                        top +
                        height
                    ) {


                        current =
                            section.id;


                    }


                }
            );


            desktopLinks.forEach(
                link => {


                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        `#${current}`
                    ) {


                        link.classList.add(
                            "active"
                        );


                    }


                }
            );


        }



        window.addEventListener(
            "scroll",
            updateNavigation,
            {
                passive: true
            }
        );



        updateNavigation();



        /* =================================================
           HERO PARALLAX
        ================================================= */

        const heroPhoto =
            document.querySelector(
                ".hero-photo-wrap"
            );


        const heroContent =
            document.querySelector(
                ".hero-content-side"
            );



        function heroParallax() {


            if (
                window.innerWidth <=
                850
            ) {


                if (
                    heroPhoto
                ) {

                    heroPhoto.style.transform =
                        "";

                }


                if (
                    heroContent
                ) {

                    heroContent.style.transform =
                        "";

                }


                return;

            }


            const scroll =
                window.scrollY;


            if (
                scroll <
                window.innerHeight
            ) {


                if (
                    heroPhoto
                ) {


                    heroPhoto.style.transform =
                        `translateY(${
                            scroll *
                            0.035
                        }px)`;


                }


                if (
                    heroContent
                ) {


                    heroContent.style.transform =
                        `translateY(${
                            scroll *
                            -0.018
                        }px)`;


                }


            }


        }



        window.addEventListener(
            "scroll",
            heroParallax,
            {
                passive: true
            }
        );



        /* =================================================
           PROJECT TILT
        ================================================= */

        const projectCards =
            document.querySelectorAll(
                ".project-card"
            );


        projectCards.forEach(
            card => {


                card.addEventListener(
                    "mousemove",
                    event => {


                        if (
                            window.innerWidth <=
                            850
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
                                )
                                /
                                centerY
                            )
                            *
                            -1.3;


                        const rotateY =
                            (
                                (
                                    x -
                                    centerX
                                )
                                /
                                centerX
                            )
                            *
                            1.3;


                        card.style.transform =
                            `perspective(1200px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            translateY(-8px)`;


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



        /* =================================================
           CURRENT YEAR
        ================================================= */

        const copyright =
            document.querySelector(
                ".copyright"
            );


        if (
            copyright
        ) {


            const year =
                new Date()
                    .getFullYear();


            copyright.innerHTML =
                `© ${year} Jhonaiza Gede. All Rights Reserved.`;


        }


    }
);
