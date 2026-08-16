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
      if (next < 100) frame = requestAnimationFrame(tick);
      else window.setTimeout(done, 260);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [done, reduced]);
  return (
    <motion.div
      className="loader"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div>
        <small>LOADING PORTFOLIO</small>
        <strong>
          {String(value).padStart(2, "0")}
          <em>%</em>
        </strong>
        <span />
      </div>
    </motion.div>
  );
}
