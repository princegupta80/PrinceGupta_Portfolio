import { motion, useReducedMotion } from 'framer-motion'
import { experience } from '../data/resume'
import Section from './Section'
import { BriefcaseIcon } from './Icons'

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="experience" title="Experience" kicker="03.">
      <div className="relative ml-3 border-l-2 border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent-500/60 bg-slate-50 text-accent-600 dark:bg-slate-950 dark:text-accent-400">
              <BriefcaseIcon className="h-4 w-4" />
            </span>
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
              {job.period} · {job.location}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {job.role}{' '}
              <span className="text-accent-600 dark:text-accent-400">@ {job.company}</span>
            </h3>
            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
