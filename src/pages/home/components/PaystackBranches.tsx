import { motion } from "framer-motion";

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

const branches = [
  { id: "left-top", d: makePath(19, 46, 48, 2) },
  { id: "left-mid", d: makePath(19, 50, 48, 2) },
  { id: "left-bot", d: makePath(19, 54, 48, -2) },
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

const PaystackBranches = () => (
  <svg
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

      {/* green at node → purple at core */}
      <linearGradient id="grad-paystack" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#00ff9d" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.7" />
      </linearGradient>
    </defs>

    {branches.map((b, i) => (
      <g key={b.id}>
        {/* GLOW TUBE */}
        <motion.path
          d={b.d}
          fill="none"
          stroke="url(#grad-paystack)"
          strokeWidth="1.2"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ps-glow)"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          custom={i}
        />
        {/* SHARP LINE */}
        <motion.path
          d={b.d}
          fill="none"
          stroke="url(#grad-paystack)"
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

export default PaystackBranches;
