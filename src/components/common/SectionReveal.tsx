import { forwardRef } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealOptions = {
  amount?: number;
  delay?: number;
  delayChildren?: number;
  duration?: number;
  reducedMotion?: boolean | null;
  once?: boolean;
  staggerChildren?: number;
  y?: number;
};

const defaultDuration = 0.72;

export function getRevealProps({
  amount = 0.15,
  delay = 0,
  delayChildren,
  duration = defaultDuration,
  reducedMotion,
  once = true,
  staggerChildren,
  y = 40,
}: RevealOptions = {}) {
  if (reducedMotion) {
    return {};
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut" as const,
        ...(typeof staggerChildren === "number" ? { staggerChildren } : {}),
        ...(typeof delayChildren === "number" ? { delayChildren } : {}),
      },
    },
  };

  return {
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once, amount },
    variants,
  };
}

export const itemRevealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export const staggerRevealVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

type SectionRevealProps = Omit<HTMLMotionProps<"section">, "children"> &
  RevealOptions & {
    children: ReactNode;
  };

export const SectionReveal = forwardRef<HTMLElement, SectionRevealProps>(
  function SectionReveal(
    {
      children,
      className,
      amount,
      delay,
      delayChildren,
      duration,
      once,
      staggerChildren,
      y,
      ...props
    },
    ref,
  ) {
    const reducedMotion = useReducedMotion();
    const revealProps = reducedMotion
      ? {}
      : getRevealProps({
          amount,
          delay,
          delayChildren,
          duration,
          once,
          staggerChildren,
          y,
        });

    return (
      <motion.section
        ref={ref}
        className={className}
        {...props}
        {...revealProps}
      >
        {children}
      </motion.section>
    );
  },
);
