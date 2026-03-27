import { NavLink } from "react-router-dom";
import CusButton from "./Button";

interface NavbarProps {
  variant?: "hero" | "fixed";
}

// Links that are real routes get NavLink; hash anchors get plain <a>
const navLinks = [
  { label: "Home", to: "/", route: true },
  { label: "Projects", to: "/projects", route: true },
  { label: "About Me", to: "#about", route: false },
  { label: "Contact", to: "#contact", route: false },
];

const NavItem = ({
  label,
  to,
  route,
  activeClass,
}: {
  label: string;
  to: string;
  route: boolean;
  activeClass: string;
}) => {
  if (!route) {
    return (
      <a href={to}>
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => (isActive ? activeClass : "")}
    >
      {label}
    </NavLink>
  );
};

const Navbar = ({ variant = "hero" }: NavbarProps) => {
  const menuClass = variant === "fixed" ? "projects-page__menu" : "hero__menu";
  const logoClass = variant === "fixed" ? "projects-page__logo" : "hero__logo";
  const navClass  = variant === "fixed" ? "projects-page__nav"  : "hero__nav";
  const activeClass = "is-active";

  return (
    <header className={navClass}>
      <NavLink to="/" className={logoClass}>
        <img src="/images/logo.png" alt="VAY logo" />
      </NavLink>
      <nav className={menuClass}>
        {navLinks.map(({ label, to, route }) => (
          <NavItem
            key={to}
            label={label}
            to={to}
            route={route}
            activeClass={activeClass}
          />
        ))}
      </nav>
      {variant === "hero" && (
        <CusButton className="hero__talk-btn">Let&apos;s Talk &rarr;</CusButton>
      )}
    </header>
  );
};

export default Navbar;
