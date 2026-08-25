/* =========================================================
   LUNNON SUPPORTS
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const backToTop = document.querySelector(".back-to-top");
    const year = document.querySelector("#year");

    // Ano automático no rodapé
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Menu mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Botão voltar ao topo
    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    }, { passive: true });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Animação de entrada
    const animatedElements = document.querySelectorAll(
        ".section-heading, .product-card, .benefit, .comparison-copy, .comparison-visual, .gallery-item, .social-proof-grid > div"
    );

    animatedElements.forEach(element => element.classList.add("reveal"));

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    animatedElements.forEach(element => observer.observe(element));
});
