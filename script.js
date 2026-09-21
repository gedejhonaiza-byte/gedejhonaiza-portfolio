/* =========================================================
   JHONAIZA GEDE PORTFOLIO
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


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
           SLOW COMPUTER CODE LOADER
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


        const typingText =
            document.getElementById(
                "loaderTypingText"
            );


        const codeBackground =
            document.getElementById(
                "loaderCodeBackground"
            );


        body.classList.add(
            "loader-active"
        );



        /* =================================================
           COMPUTER CODE BACKGROUND
        ================================================= */

        const codeLines = [

            '<span class="code-keyword">const</span> portfolio = new CreativeExperience();',

            '<span class="code-keyword">function</span> buildWebsite() { return <span class="code-string">"experience"</span>; }',

            '&lt;section class=<span class="code-string">"portfolio"</span>&gt;',

            'display: grid;',

            'grid-template-columns: 1fr 1fr;',

            '<span class="code-keyword">const</span> designer = <span class="code-string">"Jhonaiza Gede"</span>;',

            'document.querySelector(<span class="code-string">".project"</span>);',

            'background: linear-gradient(135deg, #080808, #c9a84c);',

            '&lt;div class=<span class="code-string">"creative"</span>&gt;',

            'transform: translateY(-10px);',

            '<span class="code-keyword">let</span> creativity = true;',

            'animation: reveal .8s ease;',

            '<span class="code-keyword">if</span> (idea) { createExperience(); }',

            'font-family: "Cormorant Garamond";',

            '<span class="code-keyword">const</span> skills = [<span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>, <span class="code-string">"JavaScript"</span>];',

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

            'console.log(<span class="code-string">"Loading creative experience..."</span>);',

            'creativeDeveloper.initialize();',

            '&lt;/portfolio&gt;'

        ];



        function buildCodeBackground() {


            if (
                !codeBackground
            ) {

                return;

            }


            codeBackground.innerHTML =
                "";


            const width =
                window.innerWidth;


            let columnCount =
                15;


            if (
                width <=
                500
            ) {

                columnCount =
                    6;

            } else if (
                width <=
                900
            ) {

                columnCount =
                    9;

            }



            for (
                let i = 0;
                i < columnCount;
                i++
            ) {


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
                            columnCount
                        )
                        *
                        100
                    }%`;


                column.style.animationDuration =
                    `${
                        18 +
                        Math.random() *
                        16
                    }s`;


                column.style.animationDelay =
                    `-${
                        Math.random() *
                        18
                    }s`;



                for (
                    let lineIndex = 0;
                    lineIndex < 16;
                    lineIndex++
                ) {


                    const line =
                        document.createElement(
                            "span"
                        );


                    line.innerHTML =
                        codeLines[
                            Math.floor(
                                Math.random() *
                                codeLines.length
                            )
                        ];


                    column.appendChild(
                        line
                    );


                }


                codeBackground.appendChild(
                    column
                );


            }


        }



        buildCodeBackground();



        /* =================================================
           FAST TYPING STATUS
        ================================================= */

        const typingMessages = [

            "Initializing interface...",

            "Loading creative assets...",

            "Compiling digital experience...",

            "Preparing featured projects...",

            "Optimizing responsive layout...",

            "Connecting creative components...",

            "Almost ready...",

            "Launching portfolio..."

        ];


        let messageIndex =
            0;


        let characterIndex =
            0;


        let deleting =
            false;


        let typingStopped =
            false;



        function typeLoaderMessage() {


            if (
                !typingText ||
                typingStopped
            ) {

                return;

            }


            const message =
                typingMessages[
                    messageIndex
                ];



            if (
                !deleting
            ) {


                characterIndex++;


                typingText.textContent =
                    message.substring(
                        0,
                        characterIndex
                    );


                if (
                    characterIndex >=
                    message.length
                ) {


                    deleting =
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


            } else {


                characterIndex--;


                typingText.textContent =
                    message.substring(
                        0,
                        characterIndex
                    );


                if (
                    characterIndex <=
                    0
                ) {


                    deleting =
                        false;


                    messageIndex =
                        (
                            messageIndex +
                            1
                        )
                        %
                        typingMessages.length;


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



        /* =================================================
           SLOW 0–100% LOADER
           
           Approx. 6.5 seconds
        ================================================= */

        const loaderDuration =
            8000;


        const loaderStartTime =
            performance.now();


        let pageLoaded =
            false;


        let loaderComplete =
            false;



        window.addEventListener(
            "load",
            () => {


                pageLoaded =
                    true;


            }
        );



        function updateLoaderProgress(
            currentTime
        ) {


            if (
                loaderComplete
            ) {

                return;

            }


            const elapsed =
                currentTime -
                loaderStartTime;


            let rawProgress =
                elapsed /
                loaderDuration;


            rawProgress =
                Math.min(
                    rawProgress,
                    1
                );



            /*
             Smooth progress curve.

             Starts steadily,
             slows slightly around 60–90%,
             then completes.
            */

            let progress;


            if (
                rawProgress <
                0.55
            ) {


                progress =
                    rawProgress *
                    1.08;


            } else if (
                rawProgress <
                0.88
            ) {


                progress =
                    0.594 +
                    (
                        rawProgress -
                        0.55
                    )
                    *
                    0.82;


            } else {


                progress =
                    0.8646 +
                    (
                        rawProgress -
                        0.88
                    )
                    *
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



            if (
                loaderPercent
            ) {


                loaderPercent.textContent =
                    `${percent}%`;


            }



            if (
                loaderProgress
            ) {


                loaderProgress.style.width =
                    `${percent}%`;


            }



            if (
                rawProgress >=
                1
            ) {


                /*
                If page is loaded, finish.

                Even if a slow asset has an issue,
                the failsafe below guarantees the
                visitor isn't trapped.
                */

                finishPageLoader();


                return;

            }



            requestAnimationFrame(
                updateLoaderProgress
            );


        }



        requestAnimationFrame(
            updateLoaderProgress
        );



        /* =================================================
           FINISH LOADER
        ================================================= */

        function finishPageLoader() {


            if (
                loaderComplete
            ) {

                return;

            }


            loaderComplete =
                true;


            typingStopped =
                true;



            if (
                loaderPercent
            ) {


                loaderPercent.textContent =
                    "100%";


            }



            if (
                loaderProgress
            ) {


                loaderProgress.style.width =
                    "100%";


            }



            if (
                typingText
            ) {


                typingText.textContent =
                    "Experience ready.";


            }



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
                650
            );


        }



        /*
        Failsafe:
        loader always ends even if an asset
        takes unusually long.
        */

        setTimeout(
            finishPageLoader,
            7800
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
           CURSOR
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


            document
                .querySelectorAll(
                    "a, button, .service-card, .skill-card, .project-card"
                )
                .forEach(
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
           HEADER
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
           SMOOTH LINKS
        ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
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
                        )
                        ===
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
           YEAR
        ================================================= */

        const copyright =
            document.querySelector(
                ".copyright"
            );


        if (
            copyright
        ) {


            copyright.innerHTML =
                `© ${
                    new Date().getFullYear()
                } Jhonaiza Gede. All Rights Reserved.`;


        }


    }
);
