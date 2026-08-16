import { BriefcaseBusiness, Code2, Sparkles, Zap } from 'lucide-react'
import { SectionTitle } from '../../components/common/SectionTitle'
import { CountUp } from './CountUp'
export function Stats() { return <div className="stats section"><SectionTitle number="03">STATS</SectionTitle><div className="stat-grid"><div><BriefcaseBusiness /><strong><CountUp end={2} suffix="+" /></strong><span>YEARS EXPERIENCE</span></div><div><Sparkles /><strong><CountUp end={4} suffix="+" /></strong><span>MAJOR PROJECTS</span></div><div><Code2 /><strong><CountUp end={4} suffix="+" /></strong><span>PRODUCT DOMAINS</span></div><div><Zap /><strong>100%</strong><span>COMMITMENT</span></div></div></div> }
