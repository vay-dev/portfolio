import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

/**
 * Attach to a container ref — all direct children animate in
 * from below as the section scrolls into view.
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  // useLayoutEffect fires before paint — gsap.set hides elements before browser renders them
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(selector);
    if (targets.length) gsap.set(targets, { y: options.y ?? 50, opacity: 0 });
  }, [selector, options.y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: options.duration ?? 0.85,
        stagger: options.stagger ?? 0.12,
        delay: options.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [selector, options.y, options.opacity, options.duration, options.stagger, options.delay]);

  return ref;
}
