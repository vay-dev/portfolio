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
            <nav className="footer__nav">
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">About Me</a>
              <a href="#">Contact</a>
            </nav>
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
            <a href="#" className="footer__social-link" aria-label="WhatsApp">
              <SiWhatsapp size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Discord">
              <SiDiscord size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <SiFacebook size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="GitHub">
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
