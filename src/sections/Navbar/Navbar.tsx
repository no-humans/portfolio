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
      <header className="navbar">
        <button
          className="brand"
          onClick={() => goTo("home")}
          aria-label="Back to home"
        >
          PRANAV <b>P.</b>
        </button>
        <nav aria-label="Primary navigation">
          {navigation.map(([n, label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              <small>{n}.</small> {label}
            </button>
          ))}
        </nav>
        <button className="talk-button" onClick={() => goTo("contact")}>
          LET'S TALK <ArrowRight size={16} />
        </button>
        <button
          className="menu-button"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </button>
            {navigation.map(([, label, id], index) => (
              <motion.button
                key={id}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(id)}
              >
                {label}
                <ArrowUpRight />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
