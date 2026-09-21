/* =========================================================
   JHONAIZA GEDE PORTFOLIO
   RESPONSIVE NAVIGATION + INTERACTIONS
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ELEMENTS
        ================================================= */

        const body =
            document.body;


        const loader =
            document.querySelector(
                ".loader"
            );


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
           MOBILE MENU ELEMENTS
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



        /* =================================================
           PAGE LOADER
        ================================================= */

        window.addEventListener(
            "load",
            () => {


                setTimeout(
                    () => {


                        if (
                            loader
                        ) {

                            loader
                                .classList
                                .add(
                                    "hide"
                                );

                        }


                    },
                    650
                );


            }
        );



        /* =================================================
           MOBILE MENU
        ================================================= */

        function openMobileMenu() {


            if (
                !mobileMenu ||
                !menuBackdrop ||
                !menuToggle
            ) {

                return;

            }


            mobileMenu
                .classList
                .add(
                    "open"
                );


            menuBackdrop
                .classList
                .add(
                    "show"
                );


            body
                .classList
                .add(
                    "menu-open"
                );


            mobileMenu
                .setAttribute(
                    "aria-hidden",
                    "false"
                );


            menuToggle
                .setAttribute(
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


            mobileMenu
                .classList
                .remove(
                    "open"
                );


            menuBackdrop
                .classList
                .remove(
                    "show"
                );


            body
                .classList
                .remove(
                    "menu-open"
                );


            mobileMenu
                .setAttribute(
                    "aria-hidden",
                    "true"
                );


            menuToggle
                .setAttribute(
                    "aria-expanded",
                    "false"
                );


        }



        if (
            menuToggle
        ) {


            menuToggle
                .addEventListener(
                    "click",
                    openMobileMenu
                );


        }



        if (
            mobileMenuClose
        ) {


            mobileMenuClose
                .addEventListener(
                    "click",
                    closeMobileMenu
                );


        }



        if (
            menuBackdrop
        ) {


            menuBackdrop
                .addEventListener(
                    "click",
                    closeMobileMenu
                );


        }



        mobileNavLinks
            .forEach(
                link => {


                    link.addEventListener(
                        "click",
                        closeMobileMenu
                    );


                }
            );



        /* CLOSE WITH ESCAPE */

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



        /* CLOSE AFTER RESIZING TO DESKTOP */

        window.addEventListener(
            "resize",
            () => {


                if (
                    window.innerWidth >
                    900
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


            document
                .addEventListener(
                    "mousemove",
                    event => {


                        cursor
                            .style
                            .left =
                            event.clientX +
                            "px";


                        cursor
                            .style
                            .top =
                            event.clientY +
                            "px";


                    }
                );


            const
                interactiveElements =
                    document
                        .querySelectorAll(

                            "a, button, .service-card, .skill-card, .project-card"

                        );


            interactiveElements
                .forEach(
                    element => {


                        element
                            .addEventListener(
                                "mouseenter",
                                () => {


                                    cursor
                                        .classList
                                        .add(
                                            "active"
                                        );


                                }
                            );


                        element
                            .addEventListener(
                                "mouseleave",
                                () => {


                                    cursor
                                        .classList
                                        .remove(
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

        function
        updateHeader() {


            if (
                !header
            ) {

                return;

            }


            if (
                window.scrollY >
                50
            ) {


                header
                    .classList
                    .add(
                        "scrolled"
                    );


            } else {


                header
                    .classList
                    .remove(
                        "scrolled"
                    );


            }


        }



        updateHeader();



        window
            .addEventListener(
                "scroll",
                updateHeader,
                {
                    passive:
                        true
                }
            );



        /* =================================================
           BACK TO TOP
        ================================================= */

        function
        updateBackToTop() {


            if (
                !backToTop
            ) {

                return;

            }


            if (
                window.scrollY >
                500
            ) {


                backToTop
                    .classList
                    .add(
                        "show"
                    );


            } else {


                backToTop
                    .classList
                    .remove(
                        "show"
                    );


            }


        }



        updateBackToTop();



        window
            .addEventListener(
                "scroll",
                updateBackToTop,
                {
                    passive:
                        true
                }
            );



        /* =================================================
           SMOOTH INTERNAL LINKS
        ================================================= */

        const
            internalLinks =
                document
                    .querySelectorAll(
                        'a[href^="#"]'
                    );


        internalLinks
            .forEach(
                link => {


                    link
                        .addEventListener(
                            "click",
                            event => {


                                const
                                    targetId =
                                        link
                                            .getAttribute(
                                                "href"
                                            );


                                if (
                                    !targetId ||
                                    targetId ===
                                    "#"
                                ) {

                                    return;

                                }


                                const
                                    target =
                                        document
                                            .querySelector(
                                                targetId
                                            );


                                if (
                                    !target
                                ) {

                                    return;

                                }


                                event
                                    .preventDefault();


                                closeMobileMenu();


                                target
                                    .scrollIntoView(
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
           SCROLL REVEAL
        ================================================= */

        const
            revealElements = [

                ...document
                    .querySelectorAll(
                        ".section-heading"
                    ),

                ...document
                    .querySelectorAll(
                        ".about-image-wrap"
                    ),

                ...document
                    .querySelectorAll(
                        ".about-content"
                    ),

                ...document
                    .querySelectorAll(
                        ".service-card"
                    ),

                ...document
                    .querySelectorAll(
                        ".skill-card"
                    ),

                ...document
                    .querySelectorAll(
                        ".process-item"
                    ),

                ...document
                    .querySelectorAll(
                        ".project-card"
                    ),

                ...document
                    .querySelectorAll(
                        ".why-heading"
                    ),

                ...document
                    .querySelectorAll(
                        ".why-item"
                    ),

                ...document
                    .querySelectorAll(
                        ".contact-container"
                    )

            ];



        revealElements
            .forEach(
                element => {


                    element
                        .classList
                        .add(
                            "reveal"
                        );


                }
            );



        if (
            "IntersectionObserver"
            in window
        ) {


            const
                observer =
                    new IntersectionObserver(

                        entries => {


                            entries
                                .forEach(
                                    entry => {


                                        if (
                                            entry
                                                .isIntersecting
                                        ) {


                                            entry
                                                .target
                                                .classList
                                                .add(
                                                    "active"
                                                );


                                            observer
                                                .unobserve(
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



            revealElements
                .forEach(
                    element => {


                        observer
                            .observe(
                                element
                            );


                    }
                );


        } else {


            revealElements
                .forEach(
                    element => {


                        element
                            .classList
                            .add(
                                "active"
                            );


                    }
                );


        }



        /* =================================================
           STAGGERED SERVICE CARDS
        ================================================= */

        const
            serviceCards =
                document
                    .querySelectorAll(
                        ".service-card"
                    );


        serviceCards
            .forEach(
                (
                    card,
                    index
                ) => {


                    card
                        .style
                        .transitionDelay =
                        `${
                            index *
                            0.05
                        }s`;


                }
            );



        /* =================================================
           STAGGERED PROJECT CARDS
        ================================================= */

        const
            projectCards =
                document
                    .querySelectorAll(
                        ".project-card"
                    );


        projectCards
            .forEach(
                (
                    card,
                    index
                ) => {


                    card
                        .style
                        .transitionDelay =
                        `${
                            index *
                            0.07
                        }s`;


                }
            );



        /* =================================================
           ACTIVE DESKTOP NAVIGATION
        ================================================= */

        const
            sections =
                document
                    .querySelectorAll(
                        "section[id]"
                    );


        const
            desktopNavLinks =
                document
                    .querySelectorAll(
                        ".nav-links a"
                    );



        function
        updateNavigation() {


            let
                currentSection =
                    "";


            sections
                .forEach(
                    section => {


                        const
                            sectionTop =
                                section
                                    .offsetTop -
                                180;


                        const
                            sectionHeight =
                                section
                                    .offsetHeight;


                        if (

                            window.scrollY >=
                            sectionTop

                            &&

                            window.scrollY <
                            sectionTop +
                            sectionHeight

                        ) {


                            currentSection =
                                section
                                    .getAttribute(
                                        "id"
                                    );


                        }


                    }
                );



            desktopNavLinks
                .forEach(
                    link => {


                        link
                            .classList
                            .remove(
                                "active"
                            );


                        if (

                            link
                                .getAttribute(
                                    "href"
                                )

                            ===

                            `#${
                                currentSection
                            }`

                        ) {


                            link
                                .classList
                                .add(
                                    "active"
                                );


                        }


                    }
                );


        }



        window
            .addEventListener(
                "scroll",
                updateNavigation,
                {
                    passive:
                        true
                }
            );


        updateNavigation();



        /* =================================================
           HERO PARALLAX
        ================================================= */

        const
            heroPhoto =
                document
                    .querySelector(
                        ".hero-photo-wrap"
                    );


        const
            heroContent =
                document
                    .querySelector(
                        ".hero-content-side"
                    );



        function
        heroParallax() {


            if (
                window.innerWidth <=
                850
            ) {


                if (
                    heroPhoto
                ) {


                    heroPhoto
                        .style
                        .transform =
                        "";


                }


                if (
                    heroContent
                ) {


                    heroContent
                        .style
                        .transform =
                        "";


                }


                return;

            }



            const
                scroll =
                    window.scrollY;



            if (
                scroll <
                window.innerHeight
            ) {


                if (
                    heroPhoto
                ) {


                    heroPhoto
                        .style
                        .transform =

                        `translateY(${
                            scroll *
                            0.035
                        }px)`;


                }


                if (
                    heroContent
                ) {


                    heroContent
                        .style
                        .transform =

                        `translateY(${
                            scroll *
                            -0.018
                        }px)`;


                }


            }


        }



        window
            .addEventListener(
                "scroll",
                heroParallax,
                {
                    passive:
                        true
                }
            );



        /* =================================================
           PROJECT TILT
        ================================================= */

        const
            projectItems =
                document
                    .querySelectorAll(
                        ".project-card"
                    );



        projectItems
            .forEach(
                card => {


                    card
                        .addEventListener(
                            "mousemove",
                            event => {


                                if (
                                    window.innerWidth <=
                                    850
                                ) {

                                    return;

                                }



                                const
                                    rect =
                                        card
                                            .getBoundingClientRect();



                                const
                                    x =
                                        event.clientX -
                                        rect.left;



                                const
                                    y =
                                        event.clientY -
                                        rect.top;



                                const
                                    centerX =
                                        rect.width /
                                        2;



                                const
                                    centerY =
                                        rect.height /
                                        2;



                                const
                                    rotateX =

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



                                const
                                    rotateY =

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



                                card
                                    .style
                                    .transform = `

                                        perspective(
                                            1200px
                                        )

                                        rotateX(
                                            ${rotateX}deg
                                        )

                                        rotateY(
                                            ${rotateY}deg
                                        )

                                        translateY(
                                            -8px
                                        )

                                    `;


                            }
                        );



                    card
                        .addEventListener(
                            "mouseleave",
                            () => {


                                card
                                    .style
                                    .transform =
                                    "";


                            }
                        );


                }
            );



        /* =================================================
           REMOVE STAGGER DELAYS
        ================================================= */

        setTimeout(
            () => {


                document
                    .querySelectorAll(
                        ".reveal"
                    )
                    .forEach(
                        element => {


                            element
                                .style
                                .transitionDelay =
                                "0s";


                        }
                    );


            },
            1800
        );



        /* =================================================
           CURRENT YEAR
        ================================================= */

        const
            copyright =
                document
                    .querySelector(
                        ".copyright"
                    );


        if (
            copyright
        ) {


            const
                year =
                    new Date()
                        .getFullYear();


            copyright
                .innerHTML =

                `© ${year} Jhonaiza Gede. All Rights Reserved.`;


        }


    }
);
