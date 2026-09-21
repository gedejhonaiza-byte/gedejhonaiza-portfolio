/* =========================================================
   FILEFLOW
   MODERN FILE MANAGER
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SAMPLE DATA
    ===================================================== */

    const defaultFolders = [

        {
            id: 1,
            name: "Client Projects",
            files: 12
        },

        {
            id: 2,
            name: "Brand Assets",
            files: 8
        },

        {
            id: 3,
            name: "Web Designs",
            files: 15
        },

        {
            id: 4,
            name: "Social Media",
            files: 22
        }

    ];


    const defaultFiles = [

        {
            id: 101,
            name: "Brand Guidelines.pdf",
            type: "document",
            ext: "PDF",
            size: 4.8,
            date: "2026-09-20",
            favorite: true,
            deleted: false
        },

        {
            id: 102,
            name: "Homepage Concept.psd",
            type: "image",
            ext: "PSD",
            size: 18.7,
            date: "2026-09-19",
            favorite: false,
            deleted: false
        },

        {
            id: 103,
            name: "Social Campaign.jpg",
            type: "image",
            ext: "JPG",
            size: 3.4,
            date: "2026-09-18",
            favorite: true,
            deleted: false
        },

        {
            id: 104,
            name: "Website Proposal.pdf",
            type: "document",
            ext: "PDF",
            size: 2.2,
            date: "2026-09-16",
            favorite: false,
            deleted: false
        },

        {
            id: 105,
            name: "Promo Reel.mp4",
            type: "video",
            ext: "MP4",
            size: 34.5,
            date: "2026-09-15",
            favorite: false,
            deleted: false
        },

        {
            id: 106,
            name: "Logo Collection.ai",
            type: "image",
            ext: "AI",
            size: 12.6,
            date: "2026-09-14",
            favorite: true,
            deleted: false
        },

        {
            id: 107,
            name: "Client Notes.docx",
            type: "document",
            ext: "DOC",
            size: 1.8,
            date: "2026-09-12",
            favorite: false,
            deleted: false
        },

        {
            id: 108,
            name: "Portfolio Preview.mp4",
            type: "video",
            ext: "MP4",
            size: 42.1,
            date: "2026-09-10",
            favorite: false,
            deleted: false
        }

    ];



    /* =====================================================
       STORAGE
    ===================================================== */

    let folders = JSON.parse(
        localStorage.getItem("fileflowFolders")
    ) || defaultFolders;


    let files = JSON.parse(
        localStorage.getItem("fileflowFiles")
    ) || defaultFiles;


    let activeFilter = "all";

    let viewMode = "grid";

    let searchTerm = "";



    /* =====================================================
       ELEMENTS
    ===================================================== */

    const folderGrid =
        document.getElementById("folderGrid");


    const filesContainer =
        document.getElementById("filesContainer");


    const emptyState =
        document.getElementById("emptyState");


    const searchInput =
        document.getElementById("searchInput");


    const sortSelect =
        document.getElementById("sortSelect");


    const gridViewBtn =
        document.getElementById("gridViewBtn");


    const listViewBtn =
        document.getElementById("listViewBtn");


    const fileInput =
        document.getElementById("fileInput");


    const uploadMainBtn =
        document.getElementById("uploadMainBtn");


    const heroUploadBtn =
        document.getElementById("heroUploadBtn");


    const folderModal =
        document.getElementById("folderModal");


    const folderForm =
        document.getElementById("folderForm");


    const folderName =
        document.getElementById("folderName");


    const modalClose =
        document.getElementById("modalClose");


    const cancelFolder =
        document.getElementById("cancelFolder");


    const newFolderBtn =
        document.getElementById("newFolderBtn");


    const newFolderTop =
        document.getElementById("newFolderTop");


    const createFolderQuick =
        document.getElementById("createFolderQuick");


    const toast =
        document.getElementById("toast");


    const toastText =
        document.getElementById("toastText");


    const sidebar =
        document.getElementById("sidebar");


    const mobileMenu =
        document.getElementById("mobileMenu");


    const mobileClose =
        document.getElementById("mobileClose");


    const mobileOverlay =
        document.getElementById("mobileOverlay");



    /* =====================================================
       SAVE DATA
    ===================================================== */

    function saveData() {

        localStorage.setItem(
            "fileflowFolders",
            JSON.stringify(folders)
        );


        localStorage.setItem(
            "fileflowFiles",
            JSON.stringify(files)
        );

    }



    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer;


    function showToast(message) {

        clearTimeout(toastTimer);


        toastText.textContent =
            message;


        toast.classList.add("show");


        toastTimer =
            setTimeout(() => {

                toast.classList.remove(
                    "show"
                );

            }, 2400);

    }



    /* =====================================================
       FORMAT DATE
    ===================================================== */

    function formatDate(dateString) {

        const date =
            new Date(dateString);


        return date.toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );

    }



    /* =====================================================
       FILE TYPE
    ===================================================== */

    function detectType(file) {

        const mime =
            file.type || "";


        const name =
            file.name.toLowerCase();


        if (
            mime.startsWith("image/") ||
            /\.(jpg|jpeg|png|webp|gif|svg|psd|ai)$/i.test(name)
        ) {

            return "image";

        }


        if (
            mime.startsWith("video/") ||
            /\.(mp4|mov|avi|webm)$/i.test(name)
        ) {

            return "video";

        }


        if (
            mime.includes("pdf") ||
            mime.includes("document") ||
            mime.includes("text") ||
            /\.(pdf|doc|docx|txt|ppt|pptx|xls|xlsx)$/i.test(name)
        ) {

            return "document";

        }


        return "other";

    }



    function getExtension(name) {

        const split =
            name.split(".");


        if (split.length < 2) {

            return "FILE";

        }


        return split
            .pop()
            .substring(0, 4)
            .toUpperCase();

    }



    /* =====================================================
       RENDER FOLDERS
    ===================================================== */

    function renderFolders() {

        folderGrid.innerHTML = "";


        folders.forEach((folder) => {


            const card =
                document.createElement("article");


            card.className =
                "folder-card";


            card.innerHTML = `

                <div class="folder-card-top">

                    <div class="folder-symbol"></div>

                    <button
                        class="folder-menu"
                        title="Delete folder"
                        data-folder-delete="${folder.id}"
                    >
                        ×
                    </button>

                </div>

                <h3>
                    ${escapeHTML(folder.name)}
                </h3>

                <p>
                    ${folder.files || 0} items
                </p>

            `;


            folderGrid.appendChild(card);

        });


        document
            .querySelectorAll(
                "[data-folder-delete]"
            )
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            Number(
                                button.dataset
                                    .folderDelete
                            );


                        folders =
                            folders.filter(
                                folder =>
                                    folder.id !== id
                            );


                        saveData();

                        renderFolders();

                        updateStats();

                        showToast(
                            "Folder removed"
                        );

                    }
                );

            });

    }



    /* =====================================================
       FILTER FILES
    ===================================================== */

    function getVisibleFiles() {

        let result =
            [...files];


        if (
            activeFilter === "trash"
        ) {

            result =
                result.filter(
                    file =>
                        file.deleted
                );

        } else {

            result =
                result.filter(
                    file =>
                        !file.deleted
                );


            if (
                activeFilter ===
                "favorite"
            ) {

                result =
                    result.filter(
                        file =>
                            file.favorite
                    );

            }


            if (
                activeFilter ===
                "document" ||
                activeFilter ===
                "image" ||
                activeFilter ===
                "video"
            ) {

                result =
                    result.filter(
                        file =>
                            file.type ===
                            activeFilter
                    );

            }


            if (
                activeFilter ===
                "recent"
            ) {

                result =
                    result
                        .sort(
                            (a, b) =>
                                new Date(b.date) -
                                new Date(a.date)
                        )
                        .slice(0, 6);

            }

        }


        if (searchTerm) {

            result =
                result.filter(
                    file =>
                        file.name
                            .toLowerCase()
                            .includes(
                                searchTerm
                            )
                );

        }


        const sort =
            sortSelect.value;


        if (
            sort === "newest"
        ) {

            result.sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );

        }


        if (
            sort === "oldest"
        ) {

            result.sort(
                (a, b) =>
                    new Date(a.date) -
                    new Date(b.date)
            );

        }


        if (
            sort === "name"
        ) {

            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }


        if (
            sort === "size"
        ) {

            result.sort(
                (a, b) =>
                    b.size - a.size
            );

        }


        return result;

    }



    /* =====================================================
       RENDER FILES
    ===================================================== */

    function renderFiles() {

        filesContainer.innerHTML =
            "";


        const visibleFiles =
            getVisibleFiles();


        emptyState.classList.toggle(
            "show",
            visibleFiles.length === 0
        );


        visibleFiles.forEach(
            (file) => {


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "file-card";


                const typeClass =
                    `file-type-${file.type}`;


                const favoriteIcon =
                    file.favorite
                        ? "★"
                        : "☆";


                const deleteIcon =
                    activeFilter === "trash"
                        ? "↺"
                        : "×";


                card.innerHTML = `

                    <div class="file-actions">

                        ${
                            activeFilter !==
                            "trash"

                            ? `

                            <button
                                class="file-action favorite ${
                                    file.favorite
                                        ? "active"
                                        : ""
                                }"
                                data-favorite="${file.id}"
                                title="Favorite"
                            >
                                ${favoriteIcon}
                            </button>

                            `

                            : ""
                        }

                        <button
                            class="file-action"
                            data-delete="${file.id}"
                            title="${
                                activeFilter ===
                                "trash"
                                    ? "Restore"
                                    : "Move to trash"
                            }"
                        >
                            ${deleteIcon}
                        </button>

                    </div>


                    <div class="file-preview">

                        <div class="file-type-box ${typeClass}">

                            ${escapeHTML(
                                file.ext
                            )}

                        </div>

                    </div>


                    <div class="file-info">

                        <h3 title="${escapeHTML(
                            file.name
                        )}">
                            ${escapeHTML(
                                file.name
                            )}
                        </h3>

                        <div class="file-meta">

                            <span>
                                ${file.size.toFixed(1)}
                                MB
                            </span>

                            <span>
                                ${formatDate(
                                    file.date
                                )}
                            </span>

                        </div>

                    </div>

                `;


                filesContainer.appendChild(
                    card
                );

            }
        );


        attachFileActions();

    }



    /* =====================================================
       FILE ACTIONS
    ===================================================== */

    function attachFileActions() {


        document
            .querySelectorAll(
                "[data-favorite]"
            )
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            Number(
                                button.dataset
                                    .favorite
                            );


                        const file =
                            files.find(
                                item =>
                                    item.id === id
                            );


                        if (!file) return;


                        file.favorite =
                            !file.favorite;


                        saveData();

                        renderFiles();

                        updateStats();


                        showToast(
                            file.favorite
                                ? "Added to favorites"
                                : "Removed from favorites"
                        );

                    }
                );

            });



        document
            .querySelectorAll(
                "[data-delete]"
            )
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const id =
                            Number(
                                button.dataset
                                    .delete
                            );


                        const file =
                            files.find(
                                item =>
                                    item.id === id
                            );


                        if (!file) return;


                        if (
                            activeFilter ===
                            "trash"
                        ) {

                            file.deleted =
                                false;


                            showToast(
                                "File restored"
                            );

                        } else {

                            file.deleted =
                                true;


                            showToast(
                                "File moved to trash"
                            );

                        }


                        saveData();

                        renderFiles();

                        updateStats();

                    }
                );

            });

    }



    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }



    /* =====================================================
       STATS
    ===================================================== */

    function updateStats() {

        const active =
            files.filter(
                file =>
                    !file.deleted
            );


        const documentCount =
            active.filter(
                file =>
                    file.type ===
                    "document"
            ).length;


        const imageCount =
            active.filter(
                file =>
                    file.type ===
                    "image"
            ).length;


        const videoCount =
            active.filter(
                file =>
                    file.type ===
                    "video"
            ).length;


        const trashCount =
            files.filter(
                file =>
                    file.deleted
            ).length;


        document.getElementById(
            "documentCount"
        ).textContent =
            documentCount;


        document.getElementById(
            "imageCount"
        ).textContent =
            imageCount;


        document.getElementById(
            "videoCount"
        ).textContent =
            videoCount;


        document.getElementById(
            "folderCount"
        ).textContent =
            folders.length;


        document.getElementById(
            "allCount"
        ).textContent =
            active.length;


        document.getElementById(
            "trashCount"
        ).textContent =
            trashCount;



        const used =
            active.reduce(
                (total, file) =>
                    total + file.size,
                0
            );


        const maxMB =
            5120;


        const percent =
            Math.min(
                100,
                (used / maxMB) * 100
            );


        document.getElementById(
            "storageUsed"
        ).textContent =
            used < 1024

                ? `${used.toFixed(1)} MB`

                : `${(
                    used / 1024
                ).toFixed(2)} GB`;


        document.getElementById(
            "storagePercent"
        ).textContent =
            `${Math.round(
                percent
            )}%`;


        document.getElementById(
            "storageFill"
        ).style.width =
            `${percent}%`;

    }



    /* =====================================================
       FILTER NAVIGATION
    ===================================================== */

    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(
        item => {

            item.addEventListener(
                "click",
                () => {

                    navItems.forEach(
                        nav =>
                            nav.classList.remove(
                                "active"
                            )
                    );


                    item.classList.add(
                        "active"
                    );


                    activeFilter =
                        item.dataset.filter;


                    updateSectionTitle();

                    renderFiles();

                    closeSidebar();

                }
            );

        }
    );



    function updateSectionTitle() {

        const currentLabel =
            document.getElementById(
                "currentLabel"
            );


        const currentTitle =
            document.getElementById(
                "currentTitle"
            );


        const labels = {

            all: [
                "ALL FILES",
                "Your Files"
            ],

            recent: [
                "RECENT",
                "Recently Used"
            ],

            favorite: [
                "FAVORITES",
                "Favorite Files"
            ],

            document: [
                "DOCUMENTS",
                "Documents"
            ],

            image: [
                "IMAGES",
                "Image Files"
            ],

            video: [
                "VIDEOS",
                "Video Files"
            ],

            trash: [
                "TRASH",
                "Deleted Files"
            ]

        };


        const value =
            labels[activeFilter] ||
            labels.all;


        currentLabel.textContent =
            value[0];


        currentTitle.textContent =
            value[1];

    }



    /* =====================================================
       SEARCH
    ===================================================== */

    searchInput.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value
                    .trim()
                    .toLowerCase();


            renderFiles();

        }
    );



    /* =====================================================
       SORT
    ===================================================== */

    sortSelect.addEventListener(
        "change",
        renderFiles
    );



    /* =====================================================
       VIEW SWITCH
    ===================================================== */

    gridViewBtn.addEventListener(
        "click",
        () => {

            viewMode =
                "grid";


            filesContainer.classList.remove(
                "list-view"
            );


            gridViewBtn.classList.add(
                "active"
            );


            listViewBtn.classList.remove(
                "active"
            );

        }
    );


    listViewBtn.addEventListener(
        "click",
        () => {

            viewMode =
                "list";


            filesContainer.classList.add(
                "list-view"
            );


            listViewBtn.classList.add(
                "active"
            );


            gridViewBtn.classList.remove(
                "active"
            );

        }
    );



    /* =====================================================
       FILE UPLOAD
    ===================================================== */

    function openFilePicker() {

        fileInput.click();

    }


    uploadMainBtn.addEventListener(
        "click",
        openFilePicker
    );


    heroUploadBtn.addEventListener(
        "click",
        openFilePicker
    );


    fileInput.addEventListener(
        "change",
        event => {

            const selectedFiles =
                Array.from(
                    event.target.files
                );


            if (
                selectedFiles.length === 0
            ) {

                return;

            }


            selectedFiles.forEach(
                selected => {

                    files.unshift({

                        id:
                            Date.now() +
                            Math.random(),

                        name:
                            selected.name,

                        type:
                            detectType(
                                selected
                            ),

                        ext:
                            getExtension(
                                selected.name
                            ),

                        size:
                            selected.size /
                            1024 /
                            1024,

                        date:
                            new Date()
                                .toISOString()
                                .slice(0, 10),

                        favorite:
                            false,

                        deleted:
                            false

                    });

                }
            );


            saveData();

            renderFiles();

            updateStats();


            showToast(
                `${selectedFiles.length} file${
                    selectedFiles.length > 1
                        ? "s"
                        : ""
                } added`
            );


            fileInput.value =
                "";

        }
    );



    /* =====================================================
       NEW FOLDER MODAL
    ===================================================== */

    function openFolderModal() {

        folderModal.classList.add(
            "show"
        );


        setTimeout(
            () => folderName.focus(),
            100
        );

    }


    function closeFolderModal() {

        folderModal.classList.remove(
            "show"
        );


        folderForm.reset();

    }


    newFolderBtn.addEventListener(
        "click",
        openFolderModal
    );


    newFolderTop.addEventListener(
        "click",
        openFolderModal
    );


    createFolderQuick.addEventListener(
        "click",
        openFolderModal
    );


    modalClose.addEventListener(
        "click",
        closeFolderModal
    );


    cancelFolder.addEventListener(
        "click",
        closeFolderModal
    );


    folderModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                folderModal
            ) {

                closeFolderModal();

            }

        }
    );


    folderForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                folderName.value.trim();


            if (!name) return;


            folders.unshift({

                id: Date.now(),

                name,

                files: 0

            });


            saveData();

            renderFolders();

            updateStats();

            closeFolderModal();


            showToast(
                `"${name}" created`
            );

        }
    );



    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    function openSidebar() {

        sidebar.classList.add(
            "open"
        );


        mobileOverlay.classList.add(
            "show"
        );

    }


    function closeSidebar() {

        sidebar.classList.remove(
            "open"
        );


        mobileOverlay.classList.remove(
            "show"
        );

    }


    mobileMenu.addEventListener(
        "click",
        openSidebar
    );


    mobileClose.addEventListener(
        "click",
        closeSidebar
    );


    mobileOverlay.addEventListener(
        "click",
        closeSidebar
    );



    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeFolderModal();

                closeSidebar();

            }

        }
    );



    /* =====================================================
       INITIALIZE
    ===================================================== */

    renderFolders();

    renderFiles();

    updateStats();

    updateSectionTitle();


});
