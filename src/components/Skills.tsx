import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/resume'
import Section from './Section'

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="skills" title="Skills" kicker="02.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: gi * 0.12, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-accent-500/10 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-700 ring-1 ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-300 dark:ring-accent-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
