import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "../../components/common/SectionTitle";
import {
  SectionReveal,
  getRevealProps,
  itemRevealVariants,
} from "../../components/common/SectionReveal";

export function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionReveal className="scroll-mt-28 border-b border-[var(--line)] px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          {...getRevealProps({
            reducedMotion,
            y: 16,
            duration: 0.55,
            amount: 0.2,
          })}
          className="mb-8"
        >
          <SectionTitle number="07">EXPERIENCE</SectionTitle>
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
          className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <motion.div
            variants={itemRevealVariants}
            className="relative rounded-[2rem] border border-[var(--line)] bg-white p-6"
          >
            <div className="absolute left-8 top-6 bottom-6 w-px bg-[var(--line)]" />
            <div className="space-y-8 pl-14">
              <article className="relative">
                <span className="absolute -left-[3.55rem] top-2 h-3 w-3 rounded-full border-2 border-[var(--orange)] bg-white" />
                <time className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  May 2024 - Apr 2025
                </time>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--orange)]">
                  Frontend Developer Intern
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                  Zoiteckh Inc. | Remote
                </p>
              </article>

              <article className="relative">
                <span className="absolute -left-[3.55rem] top-2 h-3 w-3 rounded-full border-2 border-[var(--orange)] bg-white" />
                <time className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  May 2025 - Aug 2026
                </time>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--orange)]">
                  Frontend Developer
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                  Zoiteckh Inc. | Remote
                </p>
              </article>
            </div>
          </motion.div>

          <motion.div
            variants={itemRevealVariants}
            className="grid gap-4 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,#fff,rgba(255,255,255,0.78))] p-6 lg:p-8"
          >
            <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Promoted to permanent Frontend Developer based on performance.
            </p>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Worked on multi-role applications, reusable components, APIs and
              integrations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
