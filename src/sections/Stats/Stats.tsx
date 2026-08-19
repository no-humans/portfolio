import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Code2, Sparkles, Zap } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
import {
  SectionReveal,
  getRevealProps,
  itemRevealVariants,
} from "../../components/common/SectionReveal";
import { CountUp } from "./CountUp";

export function Stats() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionReveal
      className="scroll-mt-28 border-b border-[var(--line)] px-5 py-12 lg:border-b-0 lg:border-r lg:px-8 lg:py-16"
      amount={0.18}
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
          className="mb-8"
        >
          <SectionTitle number="03">STATS</SectionTitle>
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
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          <motion.article
            variants={itemRevealVariants}
            className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5"
          >
            <BriefcaseBusiness className="mb-4 text-[var(--orange)]" size={22} />
            <strong className="block text-[clamp(2.4rem,4vw,3.4rem)] font-semibold tracking-[-0.08em] text-[var(--ink)]">
              <CountUp end={2} suffix="+" />
            </strong>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Years experience
            </span>
          </motion.article>

          <motion.article
            variants={itemRevealVariants}
            className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5"
          >
            <Sparkles className="mb-4 text-[var(--orange)]" size={22} />
            <strong className="block text-[clamp(2.4rem,4vw,3.4rem)] font-semibold tracking-[-0.08em] text-[var(--ink)]">
              <CountUp end={4} suffix="+" />
            </strong>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Major projects
            </span>
          </motion.article>

          <motion.article
            variants={itemRevealVariants}
            className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5"
          >
            <Code2 className="mb-4 text-[var(--orange)]" size={22} />
            <strong className="block text-[clamp(2.4rem,4vw,3.4rem)] font-semibold tracking-[-0.08em] text-[var(--ink)]">
              <CountUp end={4} suffix="+" />
            </strong>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Product domains
            </span>
          </motion.article>

          <motion.article
            variants={itemRevealVariants}
            className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5"
          >
            <Zap className="mb-4 text-[var(--orange)]" size={22} />
            <strong className="block text-[clamp(2.4rem,4vw,3.4rem)] font-semibold tracking-[-0.08em] text-[var(--ink)]">
              100%
            </strong>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Commitment
            </span>
          </motion.article>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
