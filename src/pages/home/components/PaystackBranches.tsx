import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * PaystackBranches
 * ----------------
 * 3 parallel lines from left node (Paystack) into the core.
 * No right node — single-sided pipeline.
 *
 * Glow trick: each line starts with a tiny 2-unit Y deflection then
 * straightens immediately. Gives feGaussianBlur a bounding box to spread
 * into a visible glow tube on what is otherwise a flat horizontal line.
 * Pattern: M x1 (y+deflect) L x1 y L x2 y   — endpoint (x2, y) unchanged.
 *
 * Gradient: green (#00ff9d) at node → purple (#7c3aed) at core.
 */

// M x1 y L x2 y — edit these to reposition line start/end
// x1 = right edge of Paystack node, x2 = left edge of core
const makePath = (x1: number, y: number, x2: number, deflect: number) =>
  `M ${x1} ${y + deflect} L ${x1} ${y} L ${x2} ${y}`;

// Paths start at core (48) and end at node (19) so pulse travels core→node
const branches = [
  { id: "left-top", d: makePath(48, 46, 19, 2) },
  { id: "left-mid", d: makePath(48, 50, 19, 2) },
  { id: "left-bot", d: makePath(48, 54, 19, -2) },
];

const lineVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.12, duration: 1.0, ease: "easeInOut" as const },
      opacity: { delay: i * 0.12, duration: 0.3 },
    },
  }),
};

const PaystackBranches = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { once: true, margin: "-100px" });
  const [pulsing, setPulsing] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setPulsing(true), 2200);
    return () => clearTimeout(t);
  }, [inView]);

  return (
  <svg
    ref={svgRef}
    className="paystack-branches"
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
      <filter id="ps-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* purple at core → green at node — path now goes right→left */}
      <linearGradient id="grad-paystack" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop offset="0%"   stopColor="#00ff9d" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.7" />
      </linearGradient>
    </defs>

      <style>{`
        @keyframes ps-pulse {
          0%   { stroke-dashoffset: 120; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { stroke-dashoffset: -10; opacity: 0; }
        }
      `}</style>

    {branches.map((b, i) => (
      <g key={b.id}>
        <motion.path
          d={b.d} fill="none" stroke="url(#grad-paystack)" strokeWidth="0.6" strokeOpacity={0.5}
          strokeLinecap="round" strokeLinejoin="round" filter="url(#ps-glow)"
          variants={lineVariant} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} custom={i}
        />
        <motion.path
          d={b.d} fill="none" stroke="url(#grad-paystack)" strokeWidth="0.2" strokeOpacity={0.95}
          strokeLinecap="round" strokeLinejoin="round"
          variants={lineVariant} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} custom={i}
        />
        {pulsing && (
          <path
            d={b.d} fill="none" stroke="#00ff9d" strokeWidth="0.8" strokeLinecap="round"
            filter="url(#ps-glow)"
            style={{
              strokeDasharray: "10 110",
              strokeDashoffset: 120,
              animation: `ps-pulse ${2.0 + i * 0.3}s linear ${i * 0.45}s infinite`,
            }}
          />
        )}
      </g>
    ))}
  </svg>
  );
};

export default PaystackBranches;
