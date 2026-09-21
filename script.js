/* =========================================================
   JHONAIZA GEDE PORTFOLIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ELEMENTS
        ================================================= */

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



        /* =================================================
           COMPUTER CODE
        ================================================= */

        const loaderCodeBackground =
            document.getElementById(
                "loaderCodeBackground"
            );


        const heroCodeBackground =
            document.getElementById(
                "heroCodeBackground"
            );



        const codeLines = [

            '<span class="code-keyword">const</span> portfolio = new CreativeExperience();',

            '<span class="code-keyword">function</span> buildWebsite() { return <span class="code-string">"experience"</span>; }',

            '&lt;section class=<span class="code-string">"portfolio"</span>&gt;',

            'display: grid;',

            'grid-template-columns: 1fr 1fr;',

            '<span class="code-keyword">const</span> designer = <span class="code-string">"Jhonaiza Gede"</span>;',

            'document.querySelector(<span class="code-string">".project"</span>);',

            'background: linear-gradient(135deg, #080808, #d0aa31);',

            '&lt;div class=<span class="code-string">"creative"</span>&gt;',

            'transform: translateY(-10px);',

            '<span class="code-keyword">let</span> creativity = true;',

            'animation: reveal .8s ease;',

            '<span class="code-keyword">if</span> (idea) { createExperience(); }',

            'font-family: "Cormorant Garamond";',

            '<span class="code-keyword">const</span> skills = [<span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>, <span class="code-string">"JavaScript"</span>];',

            '&lt;article class=<span class="code-string">"project-card"</span>&gt;',

            'border: 1px solid rgba(208,170,49,.25);',

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



        function buildCodeBackground(
            container,
            options = {}
        ) {


            if (
                !container
            ) {

                return;

            }


            container.innerHTML =
                "";


            const width =
                window.innerWidth;


            let columns =
                options.desktopColumns ||
                15;


            if (
                width <=
                520
            ) {

                columns =
                    options.mobileColumns ||
                    6;

            }

            else if (
                width <=
                900
            ) {

                columns =
                    options.tabletColumns ||
                    9;

            }



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
                    `${
                        (
                            i /
                            columns
                        )
                        *
                        100
                    }%`;


                const minimumDuration =
                    options.minimumDuration ||
                    18;


                const durationRange =
                    options.durationRange ||
                    16;


                column.style.animationDuration =
                    `${
                        minimumDuration +
                        Math.random() *
                        durationRange
                    }s`;


                column.style.animationDelay =
                    `-${
                        Math.random() *
                        20
                    }s`;


                const lineCount =
                    options.lineCount ||
                    16;


                for (
                    let lineIndex = 0;
                    lineIndex < lineCount;
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


                container.appendChild(
                    column
                );


            }


        }



        buildCodeBackground(
            loaderCodeBackground,
            {
                desktopColumns: 15,
                tabletColumns: 9,
                mobileColumns: 6,
                minimumDuration: 18,
                durationRange: 16,
                lineCount: 16
            }
        );



        buildCodeBackground(
            heroCodeBackground,
            {
                desktopColumns: 13,
                tabletColumns: 8,
                mobileColumns: 6,
                minimumDuration: 30,
                durationRange: 22,
                lineCount: 18
            }
        );



        /* =================================================
           LOADER
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


        body.classList.add(
            "loader-active"
        );



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


            }

            else {


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



        const loaderDuration =
            6500;


        const loaderStartTime =
            performance.now();


        let loaderComplete =
            false;



        function finishLoader() {


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


                },
                650
            );


        }



        function updateLoader(
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


            let progress =
                Math.min(
                    elapsed /
                    loaderDuration,
                    1
                );


            /*
             Gives progress a more natural
             loading rhythm instead of
             a perfectly linear bar.
            */

            if (
                progress <
                .55
            ) {

                progress =
                    progress *
                    1.08;

            }

            else if (
                progress <
                .88
            ) {

                progress =
                    .594 +
                    (
                        progress -
                        .55
                    )
                    *
                    .82;

            }

            else {

                progress =
                    .8646 +
                    (
                        progress -
                        .88
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
                elapsed >=
                loaderDuration
            ) {

                finishLoader();

                return;

            }


            requestAnimationFrame(
                updateLoader
            );


        }



        requestAnimationFrame(
            updateLoader
        );


        setTimeout(
            finishLoader,
            7800
        );



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


            document
                .querySelectorAll(
                    "a, button, .service-card, .skill-card, .project-card"
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



        /* =================================================
           SMOOTH INTERNAL LINKS
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


                            if (
                                !target
                            ) {

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



        /* =================================================
           ACTIVE NAVIGATION
        ================================================= */

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


        }

        else {


            revealElements.forEach(
                element => {


                    element.classList.add(
                        "active"
                    );


                }
            );


        }



        /* =================================================
           PROJECT CARD TILT
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
                                    )
                                    /
                                    centerY
                                )
                                *
                                -1.2;


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
                                1.2;


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
           REBUILD ANIMATED CODE AFTER RESIZE
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


                            buildCodeBackground(
                                heroCodeBackground,
                                {
                                    desktopColumns: 13,
                                    tabletColumns: 8,
                                    mobileColumns: 6,
                                    minimumDuration: 30,
                                    durationRange: 22,
                                    lineCount: 18
                                }
                            );


                        },
                        300
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


            copyright.textContent =
                `© ${
                    new Date().getFullYear()
                } Jhonaiza Gede. All Rights Reserved.`;


        }


    }
);
