import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CusButton from "../../../components/Button";

const SCROLL_THRESHOLD = 120;

const links = [
  { label: "Home", to: "/", route: true },
  { label: "Projects", to: "/projects", route: true },
  { label: "About Me", to: "#about", route: false },
  { label: "Contact", to: "#contact", route: false },
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
            {links.map(({ label, to, route }) => (
              <li key={to}>
                {route ? (
                  <NavLink
                    to={to}
                    end
                    className={({ isActive }) =>
                      `floating-nav__link${isActive ? " is-active" : ""}`
                    }
                  >
                    {label}
                    <span className="floating-nav__link-glow" aria-hidden="true" />
                  </NavLink>
                ) : (
                  <a href={to} className="floating-nav__link">
                    {label}
                    <span className="floating-nav__link-glow" aria-hidden="true" />
                  </a>
                )}
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
