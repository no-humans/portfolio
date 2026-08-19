import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
import {
  SectionReveal,
  getRevealProps,
  itemRevealVariants,
} from "../../components/common/SectionReveal";

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionReveal
      id="contact"
      className="scroll-mt-28 border-b border-[var(--line)] px-5 py-12 lg:px-8 lg:py-16"
      amount={0.16}
      y={32}
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          {...getRevealProps({
            reducedMotion,
            y: 16,
            duration: 0.55,
            amount: 0.2,
          })}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <SectionTitle number="08">LET&apos;S TALK</SectionTitle>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Open for select projects
          </span>
        </motion.div>

        <motion.div
          {...getRevealProps({
            reducedMotion,
            y: 0,
            duration: 0.08,
            amount: 0.2,
            staggerChildren: 0.08,
            delayChildren: 0.05,
          })}
          className="grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1.2fr)]"
        >
          <motion.div
            variants={itemRevealVariants}
            className="rounded-[2rem] border border-[var(--line)] bg-white p-6"
          >
            <h2 className="text-[clamp(3.2rem,7vw,6.2rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em] text-[var(--ink)]">
              LET&apos;S
              <br />
              TALK<span className="text-[var(--orange)]">.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemRevealVariants}
            className="rounded-[2rem] border border-[var(--line)] bg-white p-6"
          >
            <p className="max-w-sm text-base leading-8 text-[var(--muted)] sm:text-lg">
              Have a project in mind?
              <br />
              I&apos;d love to help bring it to life.
            </p>
            <a
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white! transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--orange)]"
              href="mailto:pranavpasad242@gmail.com"
            >
              START A PROJECT <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={itemRevealVariants}
            className="grid gap-3 rounded-[2rem] border border-[var(--line)] bg-white p-6"
          >
            <a
              href="mailto:pranavpasad242@gmail.com"
              className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--line)] p-4 transition-colors hover:border-[var(--orange)]"
            >
              <Mail className="mt-0.5 shrink-0 text-[var(--orange)]" />
              <div>
                <small className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Email
                </small>
                <span className="mt-1 block text-sm text-[var(--ink)]">
                  pranavpasad242@gmail.com
                </span>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/pranav-prasad-511306222"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--line)] p-4 transition-colors hover:border-[var(--orange)]"
            >
              <BriefcaseBusiness className="mt-0.5 shrink-0 text-[var(--orange)]" />
              <div>
                <small className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  LinkedIn
                </small>
                <span className="mt-1 block text-sm text-[var(--ink)]">
                  linkedin.com/in/pranav-prasad-511306222
                </span>
              </div>
            </a>
            <a
              href="https://github.com/no-humans"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--line)] p-4 transition-colors hover:border-[var(--orange)]"
            >
              <Code2 className="mt-0.5 shrink-0 text-[var(--orange)]" />
              <div>
                <small className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  GitHub
                </small>
                <span className="mt-1 block text-sm text-[var(--ink)]">
                  github.com/no-humans
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
