import type { LucideIcon } from "lucide-react";
import { Code2, Gauge, ListChecks, Rocket, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "../../components/common/SectionTitle";
import {
  SectionReveal,
  getRevealProps,
  itemRevealVariants,
} from "../../components/common/SectionReveal";

const steps: {
  number: string;
  title: string;
  copy: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    copy: "I explore requirements thoroughly and align on the right solution.",
    icon: Search,
  },
  {
    number: "02",
    title: "PLAN",
    copy: "I structure features, architecture and user flows.",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "BUILD",
    copy: "I build scalable, reusable and maintainable code.",
    icon: Code2,
  },
  {
    number: "04",
    title: "OPTIMIZE",
    copy: "I optimize performance, accessibility and experience.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "DEPLOY",
    copy: "I test, deploy and ensure everything runs seamlessly.",
    icon: Rocket,
  },
];

export function HowIBuild() {
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
          <SectionTitle number="06">HOW I BUILD</SectionTitle>
        </motion.div>

        <motion.div
          {...getRevealProps({
            reducedMotion,
            y: 0,
            duration: 0.08,
            amount: 0.2,
            staggerChildren: 0.08,
            delayChildren: 0.04,
          })}
          className="grid gap-4 xl:grid-cols-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={itemRevealVariants}
              className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <step.icon className="text-[var(--orange)]" size={20} />
                <span className="text-sm font-semibold text-[var(--orange)]">
                  {step.number}
                </span>
              </div>
              <div className="mt-5 h-px w-full bg-[var(--line)]" />
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
