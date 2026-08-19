import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Check, Download, Mail, MapPin } from "lucide-react";
import { SectionTitle } from "../../components/common/SectionTitle";
import {
  SectionReveal,
  getRevealProps,
  itemRevealVariants,
} from "../../components/common/SectionReveal";
import resumePdf from "../../assets/resume/Pranav_P_Main.pdf";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionReveal
      id="about"
      className="scroll-mt-28 border-b border-[var(--line)] px-5 py-12 lg:px-8 lg:py-16"
      amount={0.16}
      y={32}
    >
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
          <SectionTitle number="02">ABOUT ME</SectionTitle>
        </motion.div>

        <motion.div
          {...getRevealProps({
            reducedMotion,
            y: 0,
            duration: 0.08,
            amount: 0.18,
            staggerChildren: 0.08,
            delayChildren: 0.05,
          })}
          className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(280px,0.92fr)]"
        >
          <motion.div
            variants={itemRevealVariants}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,#161616_0%,#3c3c3c_42%,#f0f0f0_100%)] p-6 text-white shadow-[0_24px_80px_rgba(10,10,10,0.12)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,90,0,0.22),transparent_26%)]" />
            <div className="relative flex h-full min-h-[21rem] flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
                  Building for the web
                </span>
                <span className="text-xs uppercase tracking-[0.24em] text-white/65">
                  Since 2024
                </span>
              </div>
              <div>
                <p className="max-w-md text-xl font-medium leading-8 tracking-[-0.04em] text-white/90">
                  Clean interfaces, strong system thinking, and sharp attention
                  to motion are the three things I keep returning to.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemRevealVariants}
            className="grid gap-6 rounded-[2rem] border border-[var(--line)] bg-white p-6 lg:p-8"
          >
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Frontend Developer with{" "}
              <b className="text-[var(--ink)]">2+ years</b> of hands-on
              experience building and maintaining multi-role web applications
              using React.js and modern JavaScript.
            </p>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I specialize in reusable components, thoughtful state management,
              API integration, and reliable user experiences.
            </p>
            <a
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-full border border-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--orange)] hover:text-[var(--orange)]"
              href={resumePdf}
              download="Pranav_P_Main.pdf"
            >
              DOWNLOAD RESUME
              <Download size={16} />
            </a>
          </motion.div>

          <motion.dl
            variants={itemRevealVariants}
            className="grid gap-3 rounded-[2rem] border border-[var(--line)] bg-white p-6 lg:p-8"
          >
            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
              <dt className="flex min-w-28 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
                <BriefcaseBusiness size={18} />
                Experience
              </dt>
              <dd className="text-sm text-[var(--ink)]">2+ Years</dd>
            </div>
            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
              <dt className="flex min-w-28 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
                <MapPin size={18} />
                Location
              </dt>
              <dd className="text-sm text-[var(--ink)]">Kerala, India</dd>
            </div>
            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-4">
              <dt className="flex min-w-28 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
                <Mail size={18} />
                Email
              </dt>
              <dd className="text-sm text-[var(--ink)]">
                pranavpasad242@gmail.com
              </dd>
            </div>
            <div className="flex items-start gap-4">
              <dt className="flex min-w-28 items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orange)]">
                <Check size={18} />
                Availability
              </dt>
              <dd className="text-sm text-[var(--ink)]">Open to Work</dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
