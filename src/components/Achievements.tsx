import { motion, useReducedMotion } from 'framer-motion'
import { achievements, certificates } from '../data/resume'
import Section from './Section'
import { CertificateIcon, TrophyIcon } from './Icons'

const cards = [
  ...achievements.map((a) => ({ ...a, kind: 'achievement' as const })),
  ...certificates.map((c) => ({ ...c, kind: 'certificate' as const })),
]

export default function Achievements() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="achievements" title="Achievements & Certificates" kicker="06.">
      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
              {card.kind === 'achievement' ? (
                <TrophyIcon className="h-6 w-6" />
              ) : (
                <CertificateIcon className="h-6 w-6" />
              )}
            </span>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-1 text-sm leading-relaxed">{card.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
