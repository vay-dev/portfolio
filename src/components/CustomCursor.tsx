import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // hide default cursor
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      // dot snaps instantly
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      // ring follows with lag
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const onEnterClickable = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.6, duration: 0.2 });
      gsap.to(dot, { scale: 0.5, duration: 0.2 });
    };

    const onLeaveClickable = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const onMouseDown = () => gsap.to(ring, { scale: 0.85, duration: 0.1 });
    const onMouseUp = () => gsap.to(ring, { scale: 1, duration: 0.1 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // attach hover effect to all interactive elements
    const clickables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label, [data-cursor]"
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onEnterClickable);
      el.addEventListener("mouseleave", onLeaveClickable);
    });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterClickable);
        el.removeEventListener("mouseleave", onLeaveClickable);
      });
    };
  }, []);

  return (
    <>
      {/* outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(0, 255, 157, 0.7)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 10px rgba(0,255,157,0.3)",
          willChange: "transform",
        }}
      />
      {/* inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#00ff9d",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 8px rgba(0,255,157,0.9)",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
