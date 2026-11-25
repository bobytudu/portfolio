import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45 }}>{children}</motion.div>
}
