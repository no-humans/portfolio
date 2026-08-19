import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function LoadingScreen({ done }: { done: () => void }) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      done();
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const next = Math.min(Math.round((now - start) / 9), 100);
      setValue(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(done, 260);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [done, reduced]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-white px-6"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-full max-w-md rounded-[2rem] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_18px_60px_rgba(10,10,10,0.06)]">
        <small className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Loading portfolio
        </small>
        <strong className="mt-4 block text-[clamp(3rem,8vw,5rem)] font-semibold tracking-[-0.08em] text-[var(--ink)]">
          {String(value).padStart(2, "0")}
          <em className="text-[var(--orange)] not-italic">%</em>
        </strong>
        <span className="mt-6 block h-px w-full bg-[var(--line)]" />
      </div>
    </motion.div>
  );
}
