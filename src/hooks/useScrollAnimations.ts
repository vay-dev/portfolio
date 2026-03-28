import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollAnimations
 * -------------------
 * All scroll-driven GSAP animations for the Home page.
 * Uses useLayoutEffect so gsap.set() hides elements before first paint,
 * preventing a flash of visible content before ScrollTrigger fires.
 */
export function useScrollAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ─── Pre-hide elements before paint ───────────────────────────────────
      gsap.set(".about-section__right",   { x: 80, opacity: 0 });
      gsap.set(".skills-section__card",   { y: 60, opacity: 0 });
      gsap.set(".skills-section__pill",   { clipPath: "inset(0 100% 0 0)", opacity: 0 });
      gsap.set(".skills-section__title",  { clipPath: "inset(0 100% 0 0)", y: 20, opacity: 0 });

      // ─── 1. HERO EXIT — scrubbed scale + fade ─────────────────────────────
      gsap.to(".hero", {
        scale: 0.93,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // ─── 2. HERO PARALLAX ─────────────────────────────────────────────────
      gsap.to(".hero__image-con", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".code-icon", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // ─── 3. ABOUT right panel slides in from right ────────────────────────
      gsap.to(".about-section__right", {
        x: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 78%",
          once: true,
        },
      });

      // ─── 4. SKILLS HEADER clip-path wipe ──────────────────────────────────
      gsap.to(".skills-section__pill", {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-section__header",
          start: "top 85%",
          once: true,
        },
      });

      gsap.to(".skills-section__title", {
        clipPath: "inset(0 0% 0 0)",
        y: 0,
        opacity: 1,
        duration: 0.85,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section__header",
          start: "top 85%",
          once: true,
        },
      });

      // ─── 5. SKILLS CARDS staggered rise ───────────────────────────────────
      gsap.to(".skills-section__card", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-section__grid",
          start: "top 85%",
          once: true,
        },
      });

    });

    // Defer refresh by one frame so Lenis has initialised its scroll proxy
    const t = setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);
}
