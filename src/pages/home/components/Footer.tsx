import React from "react";
import { ArrowRight } from "lucide-react";
import {
  SiFacebook,
  SiWhatsapp,
  SiGithub,
  SiDiscord,
} from "@icons-pack/react-simple-icons";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" style={{ position: "relative" }}>
      <div className="footer__glow" />
      <div className="footer__inner">
        {/* TOP CTA */}
        <div className="footer__cta-block">
          <h1 className="footer__heading">
            Let's Build Something <em>Amazing</em>
          </h1>
          <p className="footer__sub">
            I'm currently open to full-time opportunities and impactful product
            teams.
          </p>
          <button className="footer__cta-btn">
            Get In Touch <ArrowRight size={18} />
          </button>
        </div>

        {/* MIDDLE */}
        <div className="footer__mid">
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img src="images/logo.png" alt="logo" />
            </div>
          </div>

          <div className="footer__contact">
            <p>Available for select opportunities.</p>
            <p>
              Drop me a line at{" "}
              <a href="mailto:ayeniv69@gmail.com" target="_blank">
                ayeniv69@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer__bottom">
          <div className="footer__socials">
            <a
              href="https://wa.me/2348105315495?text=Hi%20Victor%2C%20I%20checked%20out%20your%20portfolio."
              className="footer__social-link"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <SiWhatsapp size={20} />
            </a>
            <a
              href="https://discord.com/users/vaydev24"
              className="footer__social-link"
              aria-label="Discord"
              target="_blank"
              rel="noreferrer"
            >
              <SiDiscord size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayeni-victor-6a403136b/"
              className="footer__social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <SiFacebook size={20} />
            </a>
            <a
              href="https://github.com/vay-dev/"
              className="footer__social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size={20} />
            </a>
          </div>

          <p className="footer__copy">
            © {new Date().getFullYear()} — Designed by <span>Ayeni Victor</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
