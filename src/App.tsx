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
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <AnimatePresence mode="wait">
      {!loaded ? (
        <LoadingScreen done={() => setLoaded(true)} />
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Navbar goTo={goTo} />
          <main>
            <Hero goTo={goTo} />
            <About />
            <section className="split-section">
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
