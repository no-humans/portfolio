import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "./sections/Loading/LoadingScreen";
import { Navbar } from "./sections/Navbar/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Stats } from "./sections/Stats/Stats";
import { Skills } from "./sections/Skills/Skills";
import { Projects } from "./sections/Projects/Projects";
import { HowIBuild } from "./sections/HowIBuild/HowIBuild";
import { Experience } from "./sections/Experience/Experience";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/Footer/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <LoadingScreen done={() => setLoaded(true)} />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen text-[var(--ink)]"
        >
          <Navbar goTo={goTo} />
          <main className="w-full bg-white">
            <Hero goTo={goTo} />
            <About />
            <section className="grid border-y border-[var(--line)] lg:grid-cols-[1.02fr_0.98fr]">
              <Stats />
              <Skills />
            </section>
            <Projects />
            <HowIBuild />
            <Experience />
            <Contact />
          </main>
          <Footer goTo={goTo} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default App;
