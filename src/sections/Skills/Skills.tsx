import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
import {
  SectionReveal,
  getRevealProps,
  itemRevealVariants,
} from "../../components/common/SectionReveal";
import { skills } from "../../data/skills";

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionReveal id="skills" className="scroll-mt-28 px-5 py-12 lg:px-8 lg:py-16">
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
          <SectionTitle number="04">SKILLS</SectionTitle>
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
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={itemRevealVariants}
              whileHover={{ y: -3 }}
              className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white px-4 py-4 text-sm font-medium text-[var(--ink)] shadow-[0_1px_0_rgba(10,10,10,0.02)]"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {skill}
              </span>
              <ArrowUpRight className="text-[var(--orange)]" size={14} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
