/* =========================================================
   JHONAIZA GEDE PORTFOLIO
   COMPLETE RESPONSIVE SCRIPT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           MAIN ELEMENTS
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


        const hero =
            document.querySelector(
                ".hero"
            );



        /* =================================================
           LOADER COMPUTER CODE
        ================================================= */

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


            if (
                !loaderCodeBackground
            ) {

                return;

            }


            loaderCodeBackground.innerHTML =
                "";


            const width =
                window.innerWidth;


            let columns =
                15;


            if (
                width <=
                520
            ) {

                columns =
                    6;

            }

            else if (
                width <=
                900
            ) {

                columns =
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
                    let j = 0;
                    j < 16;
                    j++
                ) {


                    const line =
                        document.createElement(
                            "span"
                        );


                    line.innerHTML =
                        loaderCodeLines[
                            Math.floor(
                                Math.random() *
                                loaderCodeLines.length
                            )
                        ];


                    column.appendChild(
                        line
                    );


                }


                loaderCodeBackground
                    .appendChild(
                        column
                    );


            }


        }



        buildLoaderCode();



        /* =================================================
           HERO COMPUTER CODE
        ================================================= */

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


            if (
                !heroCodeBackground
            ) {

                return;

            }


            heroCodeBackground.innerHTML =
                "";


            const width =
                window.innerWidth;


            let totalBlocks =
                9;


            if (
                width <=
                767
            ) {

                totalBlocks =
                    7;

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


                block.style.animationDelay =
                    `-${
                        i *
                        1.7
                    }s`;


                heroCodeBackground
                    .appendChild(
                        block
                    );


            }


        }



        buildHeroCode();



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


        let loaderMessageIndex =
            0;


        let loaderCharacterIndex =
            0;


        let loaderDeleting =
            false;


        let loaderTypingStopped =
            false;



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



            if (
                !loaderDeleting
            ) {


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

            else {


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


                    loaderDeleting =
                        false;


                    loaderMessageIndex =
                        (
                            loaderMessageIndex +
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



        function finishLoader() {


            if (
                loaderComplete
            ) {

                return;

            }


            loaderComplete =
                true;


            loaderTypingStopped =
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
                loaderTypingText
            ) {

                loaderTypingText.textContent =
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



        /* =================================================
           HERO ROLE TYPEWRITER
        ================================================= */

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


            if (
                !heroRoleTyping
            ) {

                return;

            }


            const currentRole =
                heroRoles[
                    heroRoleIndex
                ];



            if (
                !heroDeleting
            ) {


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


            }

            else {


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
                    `
                    a,
                    button,
                    .service-card,
                    .skill-card,
                    .project-card,
                    .about-stat
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
           SCROLL REVEAL
        ================================================= */

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
           ANIMATED ABOUT NUMBERS
        ================================================= */

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
                    element.dataset.number
                );


            const suffix =
                element.dataset.suffix ||
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
                        )
                        /
                        duration,
                        1
                    );


                /*
                   Ease-out animation.
                */

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


                }

                else {


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


                                    statsObserver.disconnect();


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


        }

        else {


            startStats();


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



        /* =================================================
           HERO CODE MOUSE DEPTH
        ================================================= */

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
                        )
                        /
                        rect.width;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        )
                        /
                        rect.height;


                    const moveX =
                        (
                            x -
                            .5
                        )
                        *
                        -12;


                    const moveY =
                        (
                            y -
                            .5
                        )
                        *
                        -8;


                    heroCodeBackground
                        .style
                        .transform =
                        `translate3d(
                            ${moveX}px,
                            ${moveY}px,
                            0
                        )`;


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



        /* =================================================
           HERO PROFILE DEPTH
           USES CSS VARIABLES TO PRESERVE RESPONSIVE SCALE
        ================================================= */

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
                        )
                        /
                        rect.width;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        )
                        /
                        rect.height;


                    const moveX =
                        (
                            x -
                            .5
                        )
                        *
                        5;


                    const moveY =
                        (
                            y -
                            .5
                        )
                        *
                        4;


                    heroProfileStage
                        .style
                        .setProperty(
                            "--hero-move-x",
                            `${moveX}px`
                        );


                    heroProfileStage
                        .style
                        .setProperty(
                            "--hero-move-y",
                            `${moveY}px`
                        );


                }
            );


            hero.addEventListener(
                "mouseleave",
                () => {


                    heroProfileStage
                        .style
                        .setProperty(
                            "--hero-move-x",
                            "0px"
                        );


                    heroProfileStage
                        .style
                        .setProperty(
                            "--hero-move-y",
                            "0px"
                        );


                }
            );


        }



        /* =================================================
           RESPONSIVE RESIZE
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


                            buildHeroCode();


                            /*
                               Prevent custom desktop
                               parallax values lingering
                               when switching to mobile.
                            */

                            if (
                                window.innerWidth <=
                                900 &&
                                heroProfileStage
                            ) {


                                heroProfileStage
                                    .style
                                    .setProperty(
                                        "--hero-move-x",
                                        "0px"
                                    );


                                heroProfileStage
                                    .style
                                    .setProperty(
                                        "--hero-move-y",
                                        "0px"
                                    );


                            }


                        },
                        280
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


            copyright.textContent =
                `© ${
                    new Date().getFullYear()
                } Jhonaiza Gede. All Rights Reserved.`;


        }


    }
);
