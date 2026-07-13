import { profile } from '../data/resume'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" kicker="01.">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <p className="text-lg leading-relaxed">{profile.summary}</p>
        <div className="rounded-xl border border-slate-200 bg-white p-6 font-mono text-sm leading-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p>
            <span className="text-violet-600 dark:text-violet-400">const</span>{' '}
            <span className="text-slate-900 dark:text-white">prince</span> = {'{'}
          </p>
          <p className="pl-4">
            base: <span className="text-accent-600 dark:text-accent-300">'{profile.location}'</span>,
          </p>
          <p className="pl-4">
            stack: <span className="text-accent-600 dark:text-accent-300">'MERN'</span>,
          </p>
          <p className="pl-4">
            dsa: <span className="text-accent-600 dark:text-accent-300">'250+ solved'</span>,
          </p>
          <p className="pl-4">
            openToWork: <span className="text-violet-600 dark:text-violet-400">true</span>,
          </p>
          <p>{'}'}</p>
        </div>
      </div>
    </Section>
  )
}
