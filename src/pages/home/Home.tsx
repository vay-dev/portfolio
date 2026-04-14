import "./styles/Home.scss";
import "./styles/FloatingNav.scss";
import { useNavigate } from "react-router-dom";
import CusButton from "../../components/Button";
import Navbar from "../../components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
import ParticleBackground from "../../components/ParticleBackground";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";
import Seo from "../../components/Seo";
import { absoluteUrl } from "../../lib/site";
// import MobileBottomNav from "./components/MobileBottomNav";

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  useScrollAnimations();

  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // grab elements
    const title = el.querySelector<HTMLElement>(".hero__title");
    const titleWords = title?.querySelectorAll<HTMLElement>(".word");
    const stats = el.querySelectorAll<HTMLElement>(".hero__stats article");
    const statNumbers = el.querySelectorAll<HTMLElement>(".hero__stats h2");
    const card = el.querySelector<HTMLElement>(".hero__card");
    const btn = el.querySelector<HTMLElement>(".hero__projects-btn");
    const right = el.querySelector<HTMLElement>(".hero__right");
    const portrait = el.querySelector<HTMLElement>(".hero__image-con");
    const codeIcon = el.querySelector<HTMLElement>(".code-icon");

    // set initial states
    if (titleWords?.length) gsap.set(titleWords, { y: 80, opacity: 0, rotateX: -40 });
    else if (title) gsap.set(title, { y: 60, opacity: 0 });
    gsap.set(stats, { y: 40, opacity: 0 });
    gsap.set(card, { x: -50, opacity: 0 });
    gsap.set(btn, { y: 20, opacity: 0 });
    if (portrait) { portrait.style.opacity = "0"; portrait.style.transition = "none"; }
    if (codeIcon) codeIcon.style.opacity = "0";

    // SEQUENCE
    // 1. title words cascade in with 3D flip
    if (titleWords?.length) {
      tl.to(titleWords, {
        y: 0, opacity: 1, rotateX: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "back.out(1.4)",
      }, 0.1);
    } else if (title) {
      tl.to(title, { y: 0, opacity: 1, duration: 0.9 }, 0.1);
    }

    // 2. stats slide up with counter
    tl.to(stats, {
      y: 0, opacity: 1,
      duration: 0.7,
      stagger: 0.12,
    }, 0.55);

    // counter animation on the numbers
    statNumbers.forEach((num) => {
      const end = parseInt(num.textContent ?? "0");
      if (!isNaN(end)) {
        const obj = { val: 0 };
        tl.to(obj, {
          val: end,
          duration: 1.4,
          ease: "power2.out",
          onUpdate() { num.textContent = Math.round(obj.val) + "+"; },
        }, 0.65);
      }
    });

    // 3. card sweeps in from left with neon glow flash
    tl.to(card, {
      x: 0, opacity: 1,
      duration: 0.75,
      ease: "power3.out",
    }, 0.8);

    tl.fromTo(card, {
      boxShadow: "0 0 0px rgba(0,255,157,0)",
    }, {
      boxShadow: "0 0 32px rgba(0,255,157,0.35)",
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    }, 0.95);

    // 4. btn pops up
    tl.to(btn, {
      y: 0, opacity: 1,
      duration: 0.5,
      ease: "back.out(2)",
    }, 1.0);

    // 5. portrait fades in — CSS handles translate(-50%,-50%), don't touch transform with GSAP
    if (portrait) {
      tl.to(portrait, {
        opacity: 1,
        duration: 1.0,
        ease: "power2.out",
      }, 0.3);
    }

    // 6. code icon fades in — CSS handles transform: translate(-50%,-50%) scale(2), don't touch it with GSAP
    if (codeIcon) {
      tl.to(codeIcon, {
        opacity: 0.4,
        duration: 1.2,
        ease: "power2.out",
      }, 0.4);
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <div className="home-page">
      <Seo
        title="Full-Stack Developer Portfolio"
        description="Victor Ayeni, also known as Vay Dev, builds cinematic frontends and scalable backends. Explore projects, skills, and experience."
        path="/"
        type="profile"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Victor Ayeni",
            alternateName: "Vay Dev",
            url: absoluteUrl("/"),
            image: absoluteUrl("/images/me.png"),
            jobTitle: "Full-Stack Developer",
            email: "mailto:ayeniv69@gmail.com",
            sameAs: [
              "https://github.com/vay-dev/",
              "https://www.linkedin.com/in/ayeni-victor-6a403136b/",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Vay Dev Portfolio",
            url: absoluteUrl("/"),
            description:
              "Portfolio website for Victor Ayeni, a full-stack developer building modern web products.",
          },
        ]}
      />
      <FloatingNav />
      <section className="hero">
        {/* PARTICLES */}
        <ParticleBackground />

        {/* HERO BACKGROUND GRID */}
        <div className="hero__grid" />

        {/* HERO TOP NAVBAR */}
        <Navbar variant="hero" />

        {/* HERO MAIN CONTENT WRAPPER */}
        <div className="hero__content" ref={heroRef}>
          {/* LEFT PANEL: HEADLINE + SOCIAL PROOF + STATS + INTRO CARD */}
          <div className="hero__left">
            {/* HEADLINE — each word wrapped for per-word animation */}
            <h1 className="hero__title" style={{ perspective: "600px" }}>
              {["From", "Sketch", "to", "Scale", "—", "I", "Build", "the", "Web", "You", "Imagine"].map((w, i) => {
                const isAccent = w === "Sketch" || w === "Imagine";
                return (
                  <span key={i} className="word" style={{ display: "inline-block", marginRight: "0.25em" }}>
                    {isAccent ? <span className="accent">{w}</span> : w}
                  </span>
                );
              })}
            </h1>

            {/* SOCIAL PROOF: AVATARS + SUCCESS RATE */}
            {/* <div className="hero__proof">
              <div className="hero__avatars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>
                100% Success
                <br />
                Rate
              </p>
            </div> */}

            {/* METRICS: PROJECTS + EXPERIENCE */}
            <div className="hero__stats">
              <article>
                <h2>10+</h2>
                <p>Projects Completed</p>
              </article>
              <article>
                <h2>2+</h2>
                <p>Years Of Experience</p>
              </article>
            </div>

            {/* INTRO CARD + PRIMARY CTA */}
            <article className="hero__card">
              <p>
                I&apos;m <em>Victor Ayeni</em>, a developer who loves blending
                creative frontends with scalable backends to deliver meaningful
                digital products.
              </p>
              <CusButton className="hero__projects-btn" fullWidth onClick={() => navigate("/projects")}>
                View Projects -&gt;
              </CusButton>
            </article>
          </div>

          {/* RIGHT PANEL: DECORATIVE SHAPE + PORTRAIT PLACEHOLDER */}
          <div className="hero__right" aria-hidden="true">
            <img src="images/bg.png" alt="coding logo" className="code-icon" />
            <div className="hero__image-con">
              <img
                src="images/me.png"
                alt="Portrait of Victor Ayeni"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Home;
