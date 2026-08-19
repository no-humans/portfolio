import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
import profileImage from "../../assets/images/profile-white.png";
import { Lanyard } from "../../components/Lanyard/Lanyard";
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
    <section
      id="home"
      ref={ref}
      className="grid scroll-mt-28 gap-10 border-b border-[var(--line)] px-5 py-8 lg:grid-cols-[44px_minmax(0,1.08fr)_minmax(340px,0.92fr)_56px] lg:items-center lg:px-8 lg:py-12 xl:min-h-[calc(100vh-5rem)]"
    >
      <div className="hidden flex-col items-center justify-between py-6 lg:flex">
        <span className="text-sm font-medium text-[var(--ink)]">01</span>
        <div className="relative flex h-56 w-px flex-1 items-center bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.24))]">
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--orange)]" />
        </div>
        <span className="text-sm font-medium text-[var(--ink)]">06</span>
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)]">
        <div className="grid gap-8">
          <motion.div
            className="hero-word"
            initial="hidden"
            animate="show"
            variants={reveal}
          >
            <h1 className="max-w-[8ch] text-[clamp(4rem,12vw,8.4rem)] font-semibold uppercase leading-[0.85] tracking-[-0.08em] text-[var(--ink)]">
              LET&apos;S
              <br />
              TALK
              <span className="ml-2 align-top text-[var(--orange)]">*</span>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="show"
            variants={reveal}
          >
            <span className="mb-4 block h-px w-12 bg-[var(--orange)]" />
            <p className="max-w-md text-base leading-7 text-[var(--muted)] sm:text-lg">
              I build scalable, high-performance web applications with
              exceptional user experiences.
            </p>
            <button
              onClick={() => goTo("about")}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] hover:text-[var(--orange)]"
            >
              SCROLL DOWN <ArrowDown size={15} />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          className="grid content-end gap-3 self-end lg:pl-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">
            My name is
          </p>
          <h3 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-semibold uppercase tracking-[-0.08em] text-[var(--ink)]">
            PRANAV P<span className="text-[var(--orange)]">.</span>
          </h3>
          <p className="text-[clamp(1.2rem,2.2vw,2rem)] font-medium uppercase leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
            Frontend
            <br />
            <span className="text-[var(--orange)]">Developer</span>
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
            <MapPin size={15} />
            Kerala, India
          </div>
        </motion.div>
      </div>

      <motion.div
        className="portrait-wrap relative mx-auto w-full max-w-[520px] self-end overflow-visible lg:max-w-none"
        initial="hidden"
        animate="show"
        variants={reveal}
      >
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-[var(--line)] lg:rounded-[2.75rem]" />
          <div className="portrait-orbit absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(10,10,10,0.12)]" />
          <img
            src={profileImage}
            alt="Portrait of Pranav P."
            className="relative z-10 aspect-[4/5] w-full rounded-[2rem] object-cover object-top lg:rounded-[2.75rem]"
          />
          <div
            className="dot-field absolute right-[-2rem] bottom-[12%] hidden h-40 w-40 opacity-70 lg:block"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(10,10,10,0.14) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="absolute right-0 top-[9%] z-20 hidden h-[clamp(260px,30vw,340px)] w-[clamp(140px,15vw,190px)] translate-x-[16%] md:block">
          <Lanyard
            className="h-full w-full"
            profileImage={profileImage}
            name="PRANAV P."
            role="FRONTEND DEVELOPER"
            experience="2+ YEARS EXPERIENCE"
            location="KERALA, INDIA"
            skills="REACT • TYPESCRIPT • JAVASCRIPT"
            githubUrl="github.com/pranavpasad242"
            linkedinUrl="linkedin.com/in/pranav-p"
          />
        </div>
      </motion.div>

      <motion.aside
        className="socials hidden flex-col items-center justify-center gap-4 lg:flex"
        initial="hidden"
        animate="show"
        variants={reveal}
      >
        <span className="origin-left -rotate-90 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          Follow me
        </span>
        <a
          href="https://github.com/pranavpasad242"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] hover:text-[var(--orange)]"
        >
          <Code2 size={18} />
        </a>
        <a
          href="https://linkedin.com/in/pranav-prasad-511306222"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] hover:text-[var(--orange)]"
        >
          <BriefcaseBusiness size={18} />
        </a>
        <a
          href="mailto:pranavpasad242@gmail.com"
          aria-label="Email"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] hover:text-[var(--orange)]"
        >
          <Mail size={18} />
        </a>
      </motion.aside>
    </section>
  );
}
