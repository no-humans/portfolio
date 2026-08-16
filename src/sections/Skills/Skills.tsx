import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionTitle } from '../../components/common/SectionTitle'
import { skills } from '../../data/skills'
export function Skills() { return <div id="skills" className="skills section"><SectionTitle number="04">SKILLS</SectionTitle><div className="skills-grid">{skills.map((skill, index) => <motion.div key={skill} whileHover={{ y: -3 }}><span>{String(index + 1).padStart(2, '0')}</span>{skill}<ArrowUpRight size={14} /></motion.div>)}</div></div> }
