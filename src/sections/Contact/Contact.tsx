import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
export function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <SectionTitle number="08">LET'S TALK</SectionTitle>
      <div className="contact-grid">
        <div>
          <h2>
            LET'S
            <br />
            TALK<span>.</span>
          </h2>
        </div>
        <div className="contact-cta">
          <p>
            Have a project in mind?
            <br />
            I'd love to help bring it to life.
          </p>
          <a className="dark-button" href="mailto:pranavpasad242@gmail.com">
            START A PROJECT <ArrowRight size={16} />
          </a>
        </div>
        <div className="contact-cards">
          <a href="mailto:pranavpasad242@gmail.com">
            <Mail />
            <small>EMAIL</small>
            <span>pranavpasad242@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-p"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness />
            <small>LINKEDIN</small>
            <span>linkedin.com/in/pranav-p</span>
          </a>
          <a
            href="https://github.com/pranavpasad242"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 />
            <small>GITHUB</small>
            <span>github.com/pranavpasad242</span>
          </a>
        </div>
      </div>
    </section>
  );
}
