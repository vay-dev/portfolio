import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CusButton from "../../../components/Button";

const SCROLL_THRESHOLD = 120;

const links = [
  { label: "Home", to: "/", end: true },
  { label: "Projects", to: "/projects", end: false },
  { label: "About Me", to: "#about", end: false },
  { label: "Contact", to: "#contact", end: false },
];

const FloatingNav = () => {
  const [visible, setVisible] = useState(false);

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
          <NavLink to="/" className="floating-nav__logo">
            <img src="/images/logo.png" alt="logo" />
          </NavLink>

          {/* LINKS */}
          <ul className="floating-nav__links">
            {links.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `floating-nav__link${isActive ? " is-active" : ""}`
                  }
                >
                  {label}
                  <span className="floating-nav__link-glow" aria-hidden="true" />
                </NavLink>
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
