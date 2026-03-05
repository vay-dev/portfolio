import "./../styles/AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      {/* SECTION ACTION BUTTONS (PLACEHOLDER) */}

      <div className="about-section__content">
        {/* LEFT: LABEL + TITLE + COPY + CTA */}
        <article className="about-section__left">
          <span className="about-section__pill">About Me</span>

          <h2 className="about-section__title">
            EVERYTHING ABOUT <span>MORSHED</span>
          </h2>

          <p>
            Hi, <em>Morshed Ali Masud</em> a passionate{" "}
            <em>Full Stack Developer</em> who loves crafting modern web
            applications that are both beautiful on the surface and powerful
            under the hood.
          </p>

          <p>
            With expertise in{" "}
            <strong>React, Next.js, Node.js, Express, and PostgreSQL</strong>, I
            bring together intuitive design and efficient functionality. My
            experience with authentication systems, payment gateways, and cloud
            deployment makes me confident in delivering production-ready
            solutions for real-world clients.
          </p>

          <p>
            Whether it&apos;s a <em>Startup MVP</em> or a scalable enterprise
            application, I focus on writing clean, maintainable code and
            creating experiences that users love.
          </p>

          <button className="about-section__cta" type="button">
            MORE ABOUT ME -&gt;
          </button>
        </article>

        {/* RIGHT: SPECIAL LOGO PLACEHOLDER (YOU WILL REPLACE WITH SVG) */}
        <aside
          className="about-section__right"
          aria-label="Tech logo network placeholder"
        >
          {/* CSS DIV RINGS — box-shadow handles inset+outer depth, container repositions at breakpoints */}
          <div className="about-section__rings">
            <div className="about-section__ring about-section__ring--1" />
            <div className="about-section__ring about-section__ring--2" />
            <div className="about-section__ring about-section__ring--3" />
            <div className="about-section__ring about-section__ring--4" />
            <div className="about-section__ring about-section__ring--5" />
          </div>

          <div className="about-section__node about-section__node--top-left">
            R
          </div>
          <div className="about-section__node about-section__node--top-right">
            EX
          </div>
          <div className="about-section__node about-section__node--mid-right">
            N
          </div>
          <div className="about-section__node about-section__node--bottom-right">
            JS
          </div>
          <div className="about-section__node about-section__node--bottom-left">
            PG
          </div>

          <div className="about-section__core">
            <span>SVG</span>
            <small>Placeholder</small>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
