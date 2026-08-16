import { SectionTitle } from "../../components/common/SectionTitle";
export function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <SectionTitle number="07">EXPERIENCE</SectionTitle>
      <div className="experience-grid">
        <div className="timeline">
          <article>
            <time>May 2024 – Apr 2025</time>
            <h3>Frontend Developer Intern</h3>
            <p>Zoiteckh Inc. | Remote</p>
          </article>
          <article>
            <time>May 2025 – Aug 2026</time>
            <h3>Frontend Developer</h3>
            <p>Zoiteckh Inc. | Remote</p>
          </article>
        </div>
        <div className="experience-notes">
          <p>Promoted to permanent Frontend Developer based on performance.</p>
          <p>
            Worked on multi-role applications, reusable components, APIs and
            integrations.
          </p>
        </div>
      </div>
    </section>
  );
}
