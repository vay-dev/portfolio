import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * FrontendBranches
 * ----------------
 * SVG branch lines for the Frontend card.
 * 5 nodes: top-left (Angular), top-center (React), top-right (Next.js),
 *          mid-left (Bootstrap), mid-right (TypeScript)
 * ViewBox 0 0 100 100, preserveAspectRatio="none"
 */

const CX = 50;
const CY = 55; // core sits slightly below center to give top nodes more room
const R = 4;

const branches = [
  {
    // ANGULAR — exits upper-left side of core (CY-12) → horizontal left → curves up → Angular node
    id: "angular",
    color: "#00ff9d",
    d: `M ${CX} ${CY - 7} L ${22 + R} ${CY - 7} Q 22 ${CY - 7} 22 ${CY - 7 - R} L 22 18`,
  },
  {
    // REACT — tiny left stub then straight up — stub gives glow tube proper width
    id: "react",
    color: "#00ff9d",
    d: `M ${CX - 3} ${CY} L ${CX} ${CY} L ${CX} 25`,
  },
  {
    // NEXT.JS — exits upper-right side of core (CY-12) → horizontal right → curves up → Next.js node
    id: "nextjs",
    color: "#00ff9d",
    d: `M ${CX} ${CY - 7} L ${78 - R} ${CY - 7} Q 78 ${CY - 7} 78 ${CY - 7 - R} L 78 18`,
  },
  {
    // BOOTSTRAP — tiny upward stub then straight left — stub gives glow tube proper height
    id: "bootstrap",
    color: "#7c3aed",
    d: `M ${CX} ${CY - 3} L ${CX} ${CY} L 14 ${CY}`,
  },
  {
    // TAILWIND — tiny upward stub then straight right — stub gives glow tube proper height
    id: "tailwind",
    color: "#7c3aed",
    d: `M ${CX} ${CY - 3} L ${CX} ${CY} L 86 ${CY}`,
  },
];

const lineVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.18,
        duration: 1.2,
        ease: "easeInOut" as const,
      },
      opacity: { delay: i * 0.18, duration: 0.3 },
    },
  }),
};

const FrontendBranches = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-100px" });
  const [pulsing, setPulsing] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setPulsing(true), 2400);
    return () => clearTimeout(t);
  }, [inView]);

  return (
  <svg
    ref={svgRef}
    className="frontend-branches"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 3,
      overflow: "visible",
    }}
  >
    <defs>
      <filter id="fe-glow-green" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="fe-glow-red" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="fe-glow-purple" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

      <style>{`
        @keyframes fe-pulse {
          0%   { stroke-dashoffset: 120; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { stroke-dashoffset: -10; opacity: 0; }
        }
      `}</style>

    {branches.map((b, i) => {
      const filterId =
        b.color === "#7c3aed" ? "fe-glow-purple" : "fe-glow-green";

      return (
        <g key={b.id}>
          <motion.path
            d={b.d} fill="none" stroke={b.color} strokeWidth="0.6" strokeOpacity={0.45}
            strokeLinecap="round" strokeLinejoin="round" filter={`url(#${filterId})`}
            variants={lineVariant} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} custom={i}
          />
          <motion.path
            d={b.d} fill="none" stroke={b.color} strokeWidth="0.2" strokeOpacity={0.95}
            strokeLinecap="round" strokeLinejoin="round"
            variants={lineVariant} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} custom={i}
          />
          {pulsing && (
            <path
              d={b.d} fill="none" stroke={b.color} strokeWidth="0.8" strokeLinecap="round"
              filter={`url(#${filterId})`}
              style={{
                strokeDasharray: "10 110",
                strokeDashoffset: 120,
                animation: `fe-pulse ${2.2 + i * 0.35}s linear ${i * 0.5}s infinite`,
              }}
            />
          )}
        </g>
      );
    })}
  </svg>
  );
};

export default FrontendBranches;
