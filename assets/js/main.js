! function() { "use strict"; let e = (e, t = !1) => (e = e.trim(), t) ? [...document.querySelectorAll(e)] : document.querySelector(e),
        t = (t, i, l, s = !1) => { let o = e(i, s);
            o && (s ? o.forEach(e => e.addEventListener(t, l)) : o.addEventListener(t, l)) },
        i = (e, t) => { e.addEventListener("scroll", t) },
        l = e("#navbar .scrollto", !0),
        s = () => { let t = window.scrollY + 200;
            l.forEach(i => { if (!i.hash) return; let l = e(i.hash);
                l && (t >= l.offsetTop && t <= l.offsetTop + l.offsetHeight ? i.classList.add("active") : i.classList.remove("active")) }) };
    window.addEventListener("load", s), i(document, s); let o = t => { let i = e(t).offsetTop;
            window.scrollTo({ top: i, behavior: "smooth" }) },
        a = e(".back-to-top"); if (a) { let n = () => { window.scrollY > 100 ? a.classList.add("active") : a.classList.remove("active") };
        window.addEventListener("load", n), i(document, n) }
    t("click", ".mobile-nav-toggle", function(t) { e("body").classList.toggle("mobile-nav-active"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x") }), t("click", ".scrollto", function(t) { if (e(this.hash)) { t.preventDefault(); let i = e("body"); if (i.classList.contains("mobile-nav-active")) { i.classList.remove("mobile-nav-active"); let l = e(".mobile-nav-toggle");
                l.classList.toggle("bi-list"), l.classList.toggle("bi-x") }
            o(this.hash) } }, !0), window.addEventListener("load", () => { window.location.hash && e(window.location.hash) && o(window.location.hash) }); let r = e(".typed"); if (r) { let c = r.getAttribute("data-typed-items");
        c = c.split(","), new Typed(".typed", { strings: c, loop: !0, typeSpeed: 100, backSpeed: 50, backDelay: 2e3 }) } let d = e(".skills-content");
    d && new Waypoint({ element: d, offset: "80%", handler: function(t) { e(".progress .progress-bar", !0).forEach(e => { e.style.width = e.getAttribute("aria-valuenow") + "%" }) } }), window.addEventListener("load", () => { let i = e(".portfolio-container"); if (i) { let l = new Isotope(i, { itemSelector: ".portfolio-item" }),
                s = e("#portfolio-flters li", !0);
            t("click", "#portfolio-flters li", function(e) { e.preventDefault(), s.forEach(function(e) { e.classList.remove("filter-active") }), this.classList.add("filter-active"), l.arrange({ filter: this.getAttribute("data-filter") }), l.on("arrangeComplete", function() { AOS.refresh() }) }, !0) } }), GLightbox({ selector: ".portfolio-lightbox" }), new Swiper(".portfolio-details-slider", { speed: 400, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }), new Swiper(".testimonials-slider", { speed: 600, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 }, breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 20 } } }), window.addEventListener("load", () => { AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 }) }), new PureCounter }();