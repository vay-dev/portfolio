import { motion } from "framer-motion";

/**
 * TechBranches
 * ------------
 * Absolutely-positioned SVG overlay that draws right-angle glowing branch
 * lines from the center core out to each tech node card.
 *
 * IMPORTANT: SVG path `d` attribute does NOT accept `%` units.
 * The viewBox is "0 0 100 100" so coordinates are plain numbers 0-100,
 * which map proportionally to the container size via preserveAspectRatio="none".
 *
 * Each branch renders two layered paths:
 *   1) Wide blurred path  → soft outer glow tube
 *   2) Thin sharp path    → crisp neon line on top
 */

// CENTER of core card in viewBox units (0-100)
const CX = 50;
const CY = 50;

/**
 * Branch definitions — each has:
 *   color : neon stroke color
 *   d     : SVG path string using plain numbers (NOT %)
 *           M = move to center, L = line to corner, L = line to node center
 */
// Corner curve radius in viewBox units — used in Q (quadratic bezier) commands
// Q cx cy ex ey draws a smooth curve through the corner point instead of a hard L turn
const R = 4;

const branches = [
  {
    // REACT — top-left (node center ~28, 26)
    // left from center → curved corner at (28, 50) → up to node
    id: "react",
    color: "#00ff9d",
    d: `M ${CX} ${CY} L ${28 + R} ${CY} Q 28 ${CY} 28 ${CY - R} L 28 26`,
  },
  {
    // ANGULAR — top-right (node center ~74, 18)
    // up from center → curved corner at (50, 18) → right to node
    id: "angular",
    color: "#00ff9d",
    d: `M ${CX} ${CY} L ${CX} ${18 + R} Q ${CX} 18 ${CX + R} 18 L 74 18`,
  },
  {
    // NODE.JS — mid-right (node center ~86, 42)
    // right from center → curved corner at (86, 50) → up to node
    id: "node",
    color: "#7c3aed",
    d: `M ${CX} ${CY} L ${86 - R} ${CY} Q 86 ${CY} 86 ${CY - R} L 86 42`,
  },
  {
    // POSTGRESQL — bottom-right (node center ~86, 72)
    // right from center → curved corner at (86, 50) → down to node
    id: "postgres",
    color: "#7c3aed",
    d: `M ${CX} ${CY} L ${86 - R} ${CY} Q 86 ${CY} 86 ${CY + R} L 86 72`,
  },
  {
    // FLUTTER — exits center going left → curved corner down → lands ~42 (slightly left of center, toward Django)
    id: "flutter",
    color: "#3b82f6",
    d: `M ${CX} ${CY} L ${CX - R} ${CY} Q ${CX - 8} ${CY} ${CX - 8} ${CY + R} L ${CX - 8} 86`,
  },
  {
    // DJANGO — bottom-left (node center ~14, 72)
    // left from center → curved corner at (14, 50) → down to node
    id: "django",
    color: "#3b82f6",
    d: `M ${CX} ${CY} L ${14 + R} ${CY} Q 14 ${CY} 14 ${CY + R} L 14 72`,
  },
];

// Framer Motion variant — pathLength 0→1 with stagger per branch
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

const TechBranches = () => {
  return (
    // Full-panel SVG overlay — pointer-events:none so nodes/rings stay clickable
    <svg
      className="tech-branches"
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
      {/* GLOW FILTER DEFS — one per branch color to allow different tints */}
      <defs>
        <filter id="glow-green" x="-80%" y="-80%" width="260%" height="260%">
          {/* blur spreads the stroke into a soft glow halo */}
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" /> {/* blurred glow behind */}
            <feMergeNode in="SourceGraphic" /> {/* sharp line on top */}
          </feMerge>
        </filter>
        <filter id="glow-purple" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-blue" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {branches.map((b, i) => {
        // map color to matching filter id
        const filterId =
          b.color === "#00ff9d"
            ? "glow-green"
            : b.color === "#7c3aed"
              ? "glow-purple"
              : "glow-blue";

        return (
          <g key={b.id}>
            {/* GLOW TUBE — wide, blurred, low opacity; gives the neon tube body */}
            <motion.path
              d={b.d}
              fill="none"
              stroke={b.color}
              strokeWidth="1.2"
              strokeOpacity={0.45}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#${filterId})`}
              variants={lineVariant}
              initial="hidden"
              animate="visible"
              custom={i}
            />

            {/* SHARP LINE — thin crisp 1px line on top of the glow tube */}
            <motion.path
              d={b.d}
              fill="none"
              stroke={b.color}
              strokeWidth="0.3"
              strokeOpacity={0.95}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={lineVariant}
              initial="hidden"
              animate="visible"
              custom={i}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default TechBranches;
