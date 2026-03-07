import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiDart,
  SiAppwrite,
  SiFirebase,
  SiWebpack,
  SiVite,
  SiGit,
  SiDocker,
  SiLinux,
  SiUbuntu,
  SiSass,
} from "@icons-pack/react-simple-icons";

const LANGS = [
  { icon: SiHtml5,      label: "HTML5",      color: "#E34F26" },
  { icon: SiCss,        label: "CSS3",       color: "#1572B6" },
  { icon: SiSass,       label: "Sass",       color: "#CC6699" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiPython,     label: "Python",     color: "#3776AB" },
  { icon: SiDart,       label: "Dart",       color: "#0175C2" },
  { icon: SiAppwrite,   label: "Appwrite",   color: "#FD366E" },
  { icon: SiFirebase,   label: "Firebase",   color: "#FFCA28" },
  { icon: SiWebpack,    label: "Webpack",    color: "#8DD6F9" },
  { icon: SiVite,       label: "Vite",       color: "#646CFF" },
  { icon: SiGit,        label: "Git",        color: "#F05032" },
  { icon: SiDocker,     label: "Docker",     color: "#2496ED" },
  { icon: SiUbuntu,     label: "Ubuntu",     color: "#E95420" },
  { icon: SiLinux,      label: "Linux",      color: "#FCC624" },
];

function InfiniteSlider({
  children,
  gap = 16,
  speed = 60,
  speedOnHover = 20,
  reverse = false,
}: {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
}) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (width === 0) return;
    const contentSize = width + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    const duration = Math.abs(to - from) / currentSpeed;

    let controls;
    if (isTransitioning) {
      const remaining = Math.abs(translation.get() - to);
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: remaining / currentSpeed,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((k) => k + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }
    return () => controls?.stop();
  }, [key, translation, currentSpeed, width, gap, isTransitioning, reverse]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        className="lang-carousel__track"
        style={{ x: translation, gap: `${gap}px` }}
        onHoverStart={() => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        }}
        onHoverEnd={() => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const LangCarousel = () => {
  return (
    <div className="lang-carousel">
      <div className="lang-carousel__label">
        <span>Languages</span>
      </div>

      <div className="lang-carousel__fade-wrap">
        <InfiniteSlider gap={16} speed={55} speedOnHover={18}>
          {LANGS.map(({ icon: Icon, label, color }) => (
            <div key={label} className="lang-carousel__pill">
              <Icon size={20} color={color} />
              <span>{label}</span>
            </div>
          ))}
        </InfiniteSlider>
      </div>

      <div className="lang-carousel__fade-wrap lang-carousel__fade-wrap--reverse">
        <InfiniteSlider gap={16} speed={45} speedOnHover={15} reverse>
          {[...LANGS].reverse().map(({ icon: Icon, label, color }) => (
            <div key={label} className="lang-carousel__pill">
              <Icon size={20} color={color} />
              <span>{label}</span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default LangCarousel;
