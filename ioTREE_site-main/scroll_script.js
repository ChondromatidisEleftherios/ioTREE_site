/* IoTREE – Minimal guaranteed ScrollTrigger setup (with markers) */
(() => {
    const ready = (fn) =>
      document.readyState !== "loading"
        ? fn()
        : document.addEventListener("DOMContentLoaded", fn);
  
    ready(() => {
      if (!window.gsap || !window.ScrollTrigger) {
        console.warn("[IoTREE] GSAP/ScrollTrigger missing");
        return;
      }
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: "none", overwrite: "auto" });
  
      const hero    = document.querySelector("#main-cont");
      const about   = document.querySelector("#about-main-cont");
      const heroBg  = document.querySelector(".index-bg");
      const aboutBg = document.querySelector(".IoTREE-about-bg");
      const h       = hero?.querySelector(".bottom-header");
      const mid     = hero?.querySelector(".bottom-mid-text");
      const low     = hero?.querySelector(".bottom-low-text");
  
      // QUICK VISIBILITY: confirm file loaded
      console.log("[IoTREE] scroll_script.js loaded",
        {hero:!!hero, about:!!about, heroBg:!!heroBg, aboutBg:!!aboutBg, h:!!h, mid:!!mid, low:!!low});
  
      // --- HERO background parallax (slow)
      if (hero && heroBg) {
        gsap.to(heroBg, {
          y: 90,
          scrollTrigger: {
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true, // remove when τελειώσουμε
          },
        });
      }
  
      // --- HERO texts (3 βάθη)
      if (hero && h) {
        gsap.fromTo(h, { y: -10, autoAlpha: 1 }, {
          y: 40,
          scrollTrigger: {
            trigger: hero,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      }
      if (hero && mid) {
        gsap.fromTo(mid, { y: 0, autoAlpha: 1 }, {
          y: 70,
          scrollTrigger: {
            trigger: hero,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      }
      if (hero && low) {
        gsap.fromTo(low, { y: 0, autoAlpha: 1 }, {
          y: 110,
          scrollTrigger: {
            trigger: hero,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      }
  
      // --- ABOUT background parallax (ανεβαίνει ελαφρά)
      if (about && aboutBg) {
        gsap.to(aboutBg, {
          y: -70,
          scrollTrigger: {
            trigger: about,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      }
  
      // Recalculate μετά το φόρτωμα εικόνων
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      setTimeout(refresh, 300); // δεύτερο refresh για safety
    });
  })();