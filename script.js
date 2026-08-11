// ==========================================
// Website Loaded
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");

// ==========================================
// Mobile Menu
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.add("active");

        menuOverlay.classList.add("active");

    });

}

if (closeMenu) {

    closeMenu.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

    });

}

if (menuOverlay) {

    menuOverlay.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

    });

}
    // ==========================================
    // Active Navigation Menu
    // ==========================================

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            // Close menu after clicking (Mobile)
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("active");
            }

        });

    });

    // ==========================================
    // Search Button
    // ==========================================

    const searchBtn = document.querySelector(".search-btn");

    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            alert("Search functionality will be added.");

        });

    }

    // ==========================================
    // Reset Button
    // ==========================================

    const resetBtn = document.querySelector(".reset-btn");

    if (resetBtn) {

        resetBtn.addEventListener("click", function () {

            location.reload();

        });

    }

    // ==========================================
    // Load More Button
    // ==========================================

    const loadMoreBtn = document.querySelector(".load-more-btn");

    if (loadMoreBtn) {

        loadMoreBtn.addEventListener("click", function () {

            alert("More projects will be loaded.");

        });

    }

    // ==========================================
    // Smooth Scroll
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId !== "#") {

                e.preventDefault();

                const target = document.querySelector(targetId);

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

    // ==========================================
    // Project Card Hover
    // ==========================================

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-5px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });

    // ==========================================
    // Footer Year
    // ==========================================

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});