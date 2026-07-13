import { motion, useReducedMotion } from 'framer-motion'
import { education } from '../data/resume'
import Section from './Section'
import { GraduationCapIcon } from './Icons'

export default function Education() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="education" title="Education" kicker="05.">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
              <GraduationCapIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm">{edu.school}</p>
              <p className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                {edu.period}
                {edu.detail && <> · {edu.detail}</>}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
