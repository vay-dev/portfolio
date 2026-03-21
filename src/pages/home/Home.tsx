import "./styles/Home.scss";
import "./styles/FloatingNav.scss";
import { useNavigate } from "react-router-dom";
import CusButton from "../../components/Button";
import Navbar from "../../components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
// import MobileBottomNav from "./components/MobileBottomNav";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <FloatingNav />
      <section className="hero">
        {/* HERO BACKGROUND GRID */}
        <div className="hero__grid" />

        {/* HERO TOP NAVBAR */}
        <Navbar variant="hero" />

        {/* HERO MAIN CONTENT WRAPPER */}
        <div className="hero__content">
          {/* LEFT PANEL: HEADLINE + SOCIAL PROOF + STATS + INTRO CARD */}
          <div className="hero__left">
            {/* HEADLINE (KEEP TEXT ORDER EXACT) */}
            <h1 className="hero__title">
              From <span>Sketch</span> to Scale - I Build the Web You{" "}
              <span>Imagine</span>
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
                alt="portrait of Morshed Al Masud"
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
