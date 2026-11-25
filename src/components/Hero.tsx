import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
export function Hero() {
  return (
    <section id="top" className="hero container">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">Available for freelance work</p>
        <h1>{profile.title}</h1>
        <p className="lead">{profile.tagline}</p>
        <div className="actions">
          <a className="btn btn--primary" href="#projects">View projects <ArrowRight size={16} /></a>
        </div>
      </motion.div>
    </section>
  )
}
