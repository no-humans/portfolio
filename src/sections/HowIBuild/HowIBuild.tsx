import { motion } from "framer-motion";
import { SectionTitle } from "../../components/common/SectionTitle";
const steps = [
  [
    "01",
    "UNDERSTAND",
    "I explore requirements thoroughly and align on the right solution.",
  ],
  ["02", "PLAN", "I structure features, architecture and user flows."],
  ["03", "BUILD", "I build scalable, reusable and maintainable code."],
  ["04", "OPTIMIZE", "I optimize performance, accessibility and experience."],
  ["05", "DEPLOY", "I test, deploy and ensure everything runs seamlessly."],
];
export function HowIBuild() {
  return (
    <section className="build-section section">
      <SectionTitle number="06">HOW I BUILD</SectionTitle>
      <div className="build-steps">
        {steps.map(([number, title, copy], index) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { delay: index * 0.08 } },
            }}
          >
            <b>{number}</b>
            <span />
            <h3>{title}</h3>
            <p>{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
