import { BriefcaseBusiness, Check, Download, Mail, MapPin } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
export function About() {
  return (
    <section id="about" className="section about-section">
      <SectionTitle number="02">ABOUT ME</SectionTitle>
      <div className="about-grid">
        <div className="about-art">
          <div className="mini-sun" />
          <span>
            BUILDING FOR
            <br />
            THE WEB
          </span>
        </div>
        <div className="about-copy">
          <p>
            Frontend Developer with <b>2+ years</b> of hands-on experience
            building and maintaining multi-role web applications using React.js
            and modern JavaScript.
          </p>
          <p>
            I specialize in reusable components, thoughtful state management,
            API integration, and reliable user experiences.
          </p>
          <a
            className="outline-button"
            href="/assets/Pranav-P-Resume.pdf"
            download
          >
            DOWNLOAD RESUME <Download size={16} />
          </a>
        </div>
        <dl className="details">
          <div>
            <dt>
              <BriefcaseBusiness /> EXPERIENCE
            </dt>
            <dd>2+ Years</dd>
          </div>
          <div>
            <dt>
              <MapPin /> LOCATION
            </dt>
            <dd>Kerala, India</dd>
          </div>
          <div>
            <dt>
              <Mail /> EMAIL
            </dt>
            <dd>pranavpasad242@gmail.com</dd>
          </div>
          <div>
            <dt>
              <Check /> AVAILABILITY
            </dt>
            <dd>Open to Work</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
