import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getRevealProps } from "../../components/common/SectionReveal";

export function Footer({ goTo }: { goTo: (id: string) => void }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.footer
      className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      {...getRevealProps({
        reducedMotion,
        y: 24,
        duration: 0.55,
        amount: 0.12,
      })}
    >
      <button
        className="text-xl font-semibold tracking-[-0.08em] text-[var(--ink)] transition-colors hover:text-[var(--orange)]"
        onClick={() => goTo("home")}
      >
        PRANAV <span className="text-[var(--orange)]">P.</span>
      </button>
      <span className="text-sm text-[var(--muted)]">
        &copy; 2026 Pranav P. All rights reserved.
      </span>
      <button
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition-colors hover:text-[var(--orange)]"
        onClick={() => goTo("home")}
      >
        BACK TO TOP <ArrowUpRight size={15} />
      </button>
    </motion.footer>
  );
}
