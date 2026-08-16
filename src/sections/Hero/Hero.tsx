import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
import profileImage from "../../assets/images/profile-placeholder.png";
import { useHeroAnimation } from "../../hooks/useHeroAnimation";
const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
export function Hero({ goTo }: { goTo: (id: string) => void }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  useHeroAnimation(ref, reduced);
  return (
    <section id="home" className="hero-section" ref={ref}>
      <div className="hero-index">
        <b>01</b>
        <span />
        <small>06</small>
      </div>
      <div className="hero-intro">
        <motion.div
          className="hero-word"
          initial="hidden"
          animate="show"
          variants={reveal}
        >
          <h1>
            LET'S
            <br />
            TALK<span>*</span>
          </h1>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={reveal}>
          <i className="orange-line" />
          <p>
            I build scalable, high-performance web applications with exceptional
            user experiences.
          </p>
          <button onClick={() => goTo("about")} className="scroll-link">
            SCROLL DOWN <ArrowDown size={15} />
          </button>
        </motion.div>
      </div>
      <motion.div
        className="hero-identity"
        initial="hidden"
        animate="show"
        variants={reveal}
      >
        <p>MY NAME IS</p>
        <h3>
          PRANAV P<span>.</span>
        </h3>
        <h4>
          FRONTEND
          <br />
          <b>DEVELOPER</b>
        </h4>
        <div>
          <MapPin size={15} /> KERALA, INDIA
        </div>
      </motion.div>
      <motion.div
        className="portrait-wrap"
        initial="hidden"
        animate="show"
        variants={reveal}
      >
        <div className="portrait-orbit" />
        <img src={profileImage} alt="Placeholder portrait for Pranav P." />
        <div className="dot-field" />
      </motion.div>
      <motion.aside
        className="socials"
        initial="hidden"
        animate="show"
        variants={reveal}
      >
        <span>FOLLOW ME</span>
        <a
          href="https://github.com/pranavpasad242"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Code2 />
        </a>
        <a
          href="https://www.linkedin.com/in/pranav-p"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BriefcaseBusiness />
        </a>
        <a href="mailto:pranavpasad242@gmail.com" aria-label="Email">
          <Mail />
        </a>
      </motion.aside>
    </section>
  );
}
