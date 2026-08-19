import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
import { SectionReveal, getRevealProps } from "../../components/common/SectionReveal";
import { projects } from "../../data/projects";
import { useProjectScroll } from "../../hooks/useProjectScroll";

const toneStyles: Record<string, string> = {
  suite: "from-[#fff7f0] via-white to-[#f7f7f7]",
  apartment: "from-[#f9f8f5] via-white to-[#f0f4f8]",
  hotel: "from-[#fff8f5] via-white to-[#f9f4ee]",
  flower: "from-[#fff8f2] via-white to-[#f2f7f0]",
};

export function Projects() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useProjectScroll(ref, viewportRef, trackRef, reduced);

  return (
    <SectionReveal
      ref={ref}
      id="projects"
      className="scroll-mt-28 border-b border-[var(--line)] px-5 py-12 lg:px-8 lg:py-16"
      amount={0.14}
      y={24}
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          {...getRevealProps({
            reducedMotion: reduced,
            y: 16,
            duration: 0.55,
            amount: 0.2,
          })}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <SectionTitle number="05">SELECTED PROJECTS</SectionTitle>
          <button className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--orange)]">
            VIEW ALL PROJECTS <ArrowUpRight size={16} />
          </button>
        </motion.div>

        <motion.div
          {...getRevealProps({
            reducedMotion: reduced,
            y: 12,
            duration: 0.45,
            amount: 0.2,
            delay: 0.05,
          })}
          className="mb-6 flex items-center justify-between gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Scroll to explore
          </span>
          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.number}
                onClick={() => setActive(index)}
                aria-label={`Select project ${project.number}`}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  index === active
                    ? "w-10 bg-[var(--orange)]"
                    : "w-2.5 bg-[rgba(10,10,10,0.18)]"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div
          ref={viewportRef}
          className="projects-viewport overflow-x-auto pb-2 lg:overflow-hidden lg:pb-0"
        >
          <div ref={trackRef} className="projects-track flex w-max gap-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                onViewportEnter={() => setActive(index)}
                viewport={{ amount: 0.6 }}
                className={`project-card min-w-[84vw] shrink-0 overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[0_18px_60px_rgba(10,10,10,0.06)] sm:min-w-[24rem] lg:min-w-[32rem] ${
                  toneStyles[project.tone] ?? toneStyles.suite
                }`}
              >
                <div className="border-b border-[var(--line)] bg-white/70 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                      {project.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--orange)]">
                      Case study
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="project-visual relative mb-4 overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(10,10,10,0.04),rgba(255,255,255,0.95))]">
                    <div className="grid min-h-[14rem] grid-rows-[auto_1fr_auto] p-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                        {project.title}
                      </span>
                      <div className="screen mt-4 grid gap-3">
                        <div className="h-3 w-2/3 rounded-full bg-[rgba(10,10,10,0.08)]" />
                        <div className="h-3 w-5/6 rounded-full bg-[rgba(10,10,10,0.08)]" />
                        <div className="h-3 w-1/2 rounded-full bg-[rgba(10,10,10,0.08)]" />
                      </div>
                      {/* <i className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)] not-italic">
                        View project <ArrowUpRight size={16} />
                      </i> */}
                    </div>
                  </div>

                  <div className="project-meta">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
                      {project.copy}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
