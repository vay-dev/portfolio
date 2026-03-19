import { motion } from "framer-motion";

/**
 * BackendBranches
 * ---------------
 * 3 parallel lines on each side of the core, with:
 *
 * 1. GLOW TRICK — each line starts with a tiny 2-unit Y deflection then
 *    immediately straightens. This gives the path a non-zero bounding box
 *    so feGaussianBlur spreads into a visible glow tube. Endpoints are unchanged.
 *    Pattern: M x1 (y+2) L x1 y  L x2 y
 *    The deflection is invisible at this scale but unlocks the blur spread.
 *
 * 2. GRADIENT — linearGradient per side:
 *    left lines:  green (#00ff9d) at node → purple (#7c3aed) at core
 *    right lines: purple (#7c3aed) at core → green (#00ff9d) at node
 */

// Each line: [x1, y, x2]  — start x, vertical y, end x
// The tiny Y-deflection is added programmatically, endpoints stay exact.
const leftLines: [number, number, number][] = [
  [13, 46, 48],
  [13, 50, 48],
  [13, 54, 48],
];

const rightLines: [number, number, number][] = [
  [50, 46, 86],
  [50, 50, 86],
  [50, 54, 86],
];

// Build path with tiny Y deflection at the start for glow spread
// deflect is +2 for top/mid lines, -2 for bottom (keeps deflection inward)
const makePath = (x1: number, y: number, x2: number, deflect: number) =>
  `M ${x1} ${y + deflect} L ${x1} ${y} L ${x2} ${y}`;

const branches = [
  // LEFT — deflect downward (+2) so stub goes inward toward center
  { id: "left-top", gradId: "grad-left", d: makePath(13, 46, 48, 2) },
  { id: "left-mid", gradId: "grad-left", d: makePath(13, 50, 48, 2) },
  { id: "left-bot", gradId: "grad-left", d: makePath(13, 54, 48, -2) },
  // RIGHT — deflect downward (+2) mirrored
  { id: "right-top", gradId: "grad-right", d: makePath(50, 46, 86, 2) },
  { id: "right-mid", gradId: "grad-right", d: makePath(50, 50, 86, 2) },
  { id: "right-bot", gradId: "grad-right", d: makePath(50, 54, 86, -2) },
];

const lineVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.12,
        duration: 1.0,
        ease: "easeInOut" as const,
      },
      opacity: { delay: i * 0.12, duration: 0.3 },
    },
  }),
};

const BackendBranches = () => (
  <svg
    className="backend-branches"
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
      {/* GLOW FILTERS */}
      <filter id="be-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* LEFT gradient: green (node side) → purple (core side) */}
      <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.7" />
      </linearGradient>

      {/* RIGHT gradient: purple (core side) → green (node side) */}
      <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.9" />
      </linearGradient>
    </defs>

    {branches.map((b, i) => (
      <g key={b.id}>
        {/* GLOW TUBE — wide blurred stroke using gradient */}
        <motion.path
          d={b.d}
          fill="none"
          stroke={`url(#${b.gradId})`}
          strokeWidth="1.2"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#be-glow)"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          custom={i}
        />
        {/* SHARP LINE — thin crisp line on top */}
        <motion.path
          d={b.d}
          fill="none"
          stroke={`url(#${b.gradId})`}
          strokeWidth="0.35"
          strokeOpacity={0.95}
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          custom={i}
        />
      </g>
    ))}
  </svg>
);

export default BackendBranches;
