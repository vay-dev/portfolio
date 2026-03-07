import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CusButton from "../../../components/Button";

const SCROLL_THRESHOLD = 120;

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="floating-nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          {/* LOGO */}
          <div className="floating-nav__logo">
            <img src="images/logo.png" alt="logo" />
          </div>

          {/* LINKS */}
          <ul className="floating-nav__links">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`floating-nav__link ${activeLink === href ? "is-active" : ""}`}
                  onClick={() => setActiveLink(href)}
                >
                  {label}
                  <span className="floating-nav__link-glow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <CusButton className="floating-nav__cta">
            Let&apos;s Talk &rarr;
          </CusButton>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
