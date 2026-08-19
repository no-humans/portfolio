import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";

export function Navbar({ goTo }: { goTo: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id: string) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <button
            className="text-xl font-semibold tracking-[-0.08em] text-[var(--ink)] transition-colors hover:text-[var(--orange)]"
            onClick={() => goTo("home")}
            aria-label="Back to home"
          >
            PRANAV <span className="text-[var(--orange)]">P.</span>
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-4 xl:flex"
          >
            {navigation.map(([number, label, id]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="group flex items-center gap-2 rounded-full px-2 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)] transition-colors hover:text-[var(--orange)]"
              >
                <small className="text-[10px] text-[var(--muted)] transition-colors group-hover:text-[var(--orange)]">
                  {number}.
                </small>
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="hidden items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] hover:text-[var(--orange)] lg:inline-flex"
              onClick={() => goTo("contact")}
            >
              LET&apos;S TALK <ArrowRight size={16} />
            </button>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)] lg:hidden"
              aria-label="Open navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/95 px-5 py-5 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex h-full max-w-[1600px] flex-col">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <span className="text-xl font-semibold tracking-[-0.08em]">
                  PRANAV <span className="text-[var(--orange)]">P.</span>
                </span>
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)]"
                  aria-label="Close navigation"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-3">
                {navigation.map(([, label, id], index) => (
                  <motion.button
                    key={id}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => navigate(id)}
                    className="flex items-center justify-between border-b border-[var(--line)] py-4 text-left text-2xl font-semibold uppercase tracking-[-0.05em]"
                  >
                    {label}
                    <ArrowUpRight className="text-[var(--orange)]" size={22} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
