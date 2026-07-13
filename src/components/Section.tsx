import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  kicker: string
  children: ReactNode
}

/** Shared section wrapper: anchor target, numbered heading, scroll-reveal. */
export default function Section({ id, title, kicker, children }: SectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 sm:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="font-mono text-sm text-accent-600 dark:text-accent-400">{kicker}</p>
        <h2 className="mt-1 mb-10 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
          <span className="ml-4 inline-block h-px w-16 translate-y-[-6px] bg-accent-500/60 align-middle sm:w-24" />
        </h2>
        {children}
      </motion.div>
    </section>
  )
}
