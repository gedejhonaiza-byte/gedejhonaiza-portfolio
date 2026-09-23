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

    function buildLoaderCode() {
        if (!loaderCodeBackground) return;

        loaderCodeBackground.innerHTML = "";

        const width = window.innerWidth;
        let columns = 15;

        if (width <= 520) {
            columns = 6;
        } else if (width <= 900) {
            columns = 9;
        }

        for (let i = 0; i < columns; i++) {
            const column = document.createElement("div");

            column.className = "code-column";
            column.style.left = `${(i / columns) * 100}%`;
            column.style.animationDuration = `${18 + Math.random() * 16}s`;
            column.style.animationDelay = `-${Math.random() * 18}s`;

            for (let j = 0; j < 16; j++) {
                const line = document.createElement("span");

                line.innerHTML =
                    loaderCodeLines[
                        Math.floor(Math.random() * loaderCodeLines.length)
                    ];

                column.appendChild(line);
            }

            loaderCodeBackground.appendChild(column);
        }
    }

    buildLoaderCode();

    const heroCodeBackground = document.getElementById("heroCodeBackground");

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
        { left: "2%", top: "10%" },
        { left: "35%", top: "6%" },
        { right: "2%", top: "14%" },
        { left: "4%", bottom: "5%" },
        { left: "38%", bottom: "7%" },
        { right: "1%", bottom: "8%" },
        { left: "25%", top: "42%" },
        { right: "25%", top: "48%" },
        { left: "59%", top: "27%" }
    ];

    function buildHeroCode() {
        if (!heroCodeBackground) return;

        heroCodeBackground.innerHTML = "";

        let totalBlocks = 9;

        if (window.innerWidth <= 767) {
            totalBlocks = 8;
        }

        for (let i = 0; i < totalBlocks; i++) {
            const block = document.createElement("pre");

            block.className = "hero-code-block";
            block.textContent = heroCodeBlocks[i % heroCodeBlocks.length];

            const position = heroCodePositions[i % heroCodePositions.length];

            Object.keys(position).forEach(property => {
                block.style[property] = position[property];
            });

            block.style.animationDelay = `-${i * 1.7}s`;

            heroCodeBackground.appendChild(block);
        }
    }

    buildHeroCode();

    const loader = document.getElementById("pageLoader");
    const loaderPercent = document.getElementById("loaderPercent");
    const loaderProgress = document.getElementById("loaderProgress");
    const loaderTypingText = document.getElementById("loaderTypingText");

    body.classList.add("loader-active");

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

    function typeLoaderMessage() {
        if (!loaderTypingText || loaderTypingStopped) return;

        const currentMessage = loaderMessages[loaderMessageIndex];

        if (!loaderDeleting) {
            loaderCharacterIndex++;

            loaderTypingText.textContent =
                currentMessage.substring(0, loaderCharacterIndex);

            if (loaderCharacterIndex >= currentMessage.length) {
                loaderDeleting = true;
                setTimeout(typeLoaderMessage, 260);
                return;
            }

            setTimeout(typeLoaderMessage, 25);
        } else {
            loaderCharacterIndex--;

            loaderTypingText.textContent =
                currentMessage.substring(0, loaderCharacterIndex);

            if (loaderCharacterIndex <= 0) {
                loaderDeleting = false;
                loaderMessageIndex =
                    (loaderMessageIndex + 1) % loaderMessages.length;

                setTimeout(typeLoaderMessage, 70);
                return;
            }

            setTimeout(typeLoaderMessage, 12);
        }
    }

    typeLoaderMessage();

    const loaderDuration = 6500;
    const loaderStartTime = performance.now();
    let loaderComplete = false;

    function finishLoader() {
        if (loaderComplete) return;

        loaderComplete = true;
        loaderTypingStopped = true;

        if (loaderPercent) {
            loaderPercent.textContent = "100%";
        }

        if (loaderProgress) {
            loaderProgress.style.width = "100%";
        }

        if (loaderTypingText) {
            loaderTypingText.textContent = "Experience ready.";
        }

        setTimeout(() => {
            if (loader) {
                loader.classList.add("hide");
            }

            body.classList.remove("loader-active");
        }, 650);
    }

    function updateLoaderProgress(currentTime) {
        if (loaderComplete) return;

        const elapsed = currentTime - loaderStartTime;

        let progress = Math.min(elapsed / loaderDuration, 1);

        if (progress < .55) {
            progress = progress * 1.08;
        } else if (progress < .88) {
            progress = .594 + (progress - .55) * .82;
        } else {
            progress = .8646 + (progress - .88) * 1.128;
        }

        progress = Math.min(progress, 1);

        const percent = Math.floor(progress * 100);

        if (loaderPercent) {
            loaderPercent.textContent = `${percent}%`;
        }

        if (loaderProgress) {
            loaderProgress.style.width = `${percent}%`;
        }

        if (elapsed >= loaderDuration) {
            finishLoader();
            return;
        }

        requestAnimationFrame(updateLoaderProgress);
    }

    requestAnimationFrame(updateLoaderProgress);

    setTimeout(finishLoader, 7800);

    const heroRoleTyping = document.getElementById("heroRoleTyping");

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
        if (!heroRoleTyping) return;

        const currentRole = heroRoles[heroRoleIndex];

        if (!heroDeleting) {
            heroCharacterIndex++;

            heroRoleTyping.textContent =
                currentRole.substring(0, heroCharacterIndex);

            if (heroCharacterIndex >= currentRole.length) {
                heroDeleting = true;
                setTimeout(typeHeroRole, 1250);
                return;
            }

            setTimeout(typeHeroRole, 70);
        } else {
            heroCharacterIndex--;

            heroRoleTyping.textContent =
                currentRole.substring(0, heroCharacterIndex);

            if (heroCharacterIndex <= 0) {
                heroDeleting = false;
                heroRoleIndex = (heroRoleIndex + 1) % heroRoles.length;

                setTimeout(typeHeroRole, 220);
                return;
            }

            setTimeout(typeHeroRole, 35);
        }
    }

    setTimeout(typeHeroRole, 900);

    const hireTabs = document.querySelectorAll(".hire-tab");
    const hirePanels = document.querySelectorAll(".hire-tab-panel");
    const hireContentScroll = document.querySelector(".hire-content-scroll");

    hireTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const selectedTab = tab.dataset.hireTab;

            hireTabs.forEach(button => {
                button.classList.remove("active");
            });

            tab.classList.add("active");

            hirePanels.forEach(panel => {
                const isActive = panel.dataset.hirePanel === selectedTab;
                panel.classList.toggle("active", isActive);
            });

            if (hireContentScroll) {
                hireContentScroll.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    });
document.addEventListener("DOMContentLoaded", function () {
    const galleryFilters = document.querySelectorAll(".gallery-filter");
    const galleryItems = Array.from(document.querySelectorAll(".gallery-card"));
    const galleryCount = document.getElementById("galleryCount");
    const galleryPageNumbers = document.getElementById("galleryPageNumbers");
    const galleryFirst = document.getElementById("galleryFirst");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const galleryLast = document.getElementById("galleryLast");
    const gallerySection = document.getElementById("portfolio-gallery");
    const featuredWorkSlider = document.querySelector(".featured-work-slider");

    let activeGalleryFilter = "all";
    let activeGalleryPage = 1;
    const galleryItemsPerPage = 6;
    let featuredSliderTimer = null;
    let featuredSliderPaused = false;

    function getFilteredGalleryItems() {
        return galleryItems.filter(function (item) {
            return activeGalleryFilter === "all" || item.dataset.galleryCategory === activeGalleryFilter;
        });
    }

    function renderGallery() {
        if (!galleryItems.length) return;

        const filteredItems = getFilteredGalleryItems();
        const totalPages = Math.max(1, Math.ceil(filteredItems.length / galleryItemsPerPage));

        activeGalleryPage = Math.min(activeGalleryPage, totalPages);

        const startIndex = (activeGalleryPage - 1) * galleryItemsPerPage;
        const endIndex = Math.min(startIndex + galleryItemsPerPage, filteredItems.length);

        galleryItems.forEach(function (item) {
            item.hidden = true;
        });

        filteredItems.slice(startIndex, endIndex).forEach(function (item) {
            item.hidden = false;
        });

        if (galleryCount) {
            galleryCount.textContent = filteredItems.length
                ? "Showing " + (startIndex + 1) + "-" + endIndex + " of " + filteredItems.length + " projects"
                : "No projects found";
        }

        if (galleryPageNumbers) {
            galleryPageNumbers.innerHTML = "";

            for (let page = 1; page <= totalPages; page++) {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "gallery-page-number";
                button.textContent = page;

                if (page === activeGalleryPage) {
                    button.classList.add("active");
                }

                button.addEventListener("click", function () {
                    activeGalleryPage = page;
                    renderGallery();

                    if (gallerySection) {
                        gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });

                galleryPageNumbers.appendChild(button);
            }
        }

        if (galleryFirst) galleryFirst.disabled = activeGalleryPage === 1;
        if (galleryPrev) galleryPrev.disabled = activeGalleryPage === 1;
        if (galleryNext) galleryNext.disabled = activeGalleryPage === totalPages;
        if (galleryLast) galleryLast.disabled = activeGalleryPage === totalPages;
    }

    galleryFilters.forEach(function (filter) {
        filter.addEventListener("click", function () {
            activeGalleryFilter = filter.dataset.galleryFilter;
            activeGalleryPage = 1;

            galleryFilters.forEach(function (button) {
                button.classList.toggle("active", button === filter);
            });

            renderGallery();
        });
    });

    if (galleryFirst) galleryFirst.addEventListener("click", function () {
        activeGalleryPage = 1;
        renderGallery();
    });

    if (galleryPrev) galleryPrev.addEventListener("click", function () {
        activeGalleryPage = Math.max(1, activeGalleryPage - 1);
        renderGallery();
    });

    if (galleryNext) galleryNext.addEventListener("click", function () {
        const totalPages = Math.max(1, Math.ceil(getFilteredGalleryItems().length / galleryItemsPerPage));
        activeGalleryPage = Math.min(totalPages, activeGalleryPage + 1);
        renderGallery();
    });

    if (galleryLast) galleryLast.addEventListener("click", function () {
        activeGalleryPage = Math.max(1, Math.ceil(getFilteredGalleryItems().length / galleryItemsPerPage));
        renderGallery();
    });

    function slideFeaturedWork() {
        if (!featuredWorkSlider || featuredSliderPaused) return;
        if (featuredWorkSlider.scrollWidth <= featuredWorkSlider.clientWidth) return;

        const firstCard = featuredWorkSlider.querySelector(".project-card");
        const distance = firstCard ? firstCard.offsetWidth + 22 : 340;
        const nearEnd = featuredWorkSlider.scrollLeft + featuredWorkSlider.clientWidth >= featuredWorkSlider.scrollWidth - 12;

        if (nearEnd) {
            featuredWorkSlider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            featuredWorkSlider.scrollBy({ left: distance, behavior: "smooth" });
        }
    }

    if (featuredWorkSlider) {
        featuredWorkSlider.addEventListener("mouseenter", function () {
            featuredSliderPaused = true;
        });

        featuredWorkSlider.addEventListener("mouseleave", function () {
            featuredSliderPaused = false;
        });

        featuredSliderTimer = setInterval(slideFeaturedWork, 3600);
    }

    renderGallery();
});
