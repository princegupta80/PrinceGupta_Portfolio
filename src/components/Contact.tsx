import { profile, socials } from '../data/resume'
import Section from './Section'
import { MailIcon, PhoneIcon, socialIcons } from './Icons'

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" kicker="07.">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-lg leading-relaxed">
          I&apos;m actively looking for SDE opportunities. Whether you have a role in mind, a
          question, or just want to say hi — my inbox is always open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-accent-600/25 transition-transform hover:-translate-y-0.5 hover:bg-accent-500 dark:bg-accent-500 dark:hover:bg-accent-400 dark:text-slate-950"
        >
          <MailIcon className="h-5 w-5" />
          Say Hello
        </a>
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <MailIcon className="h-4 w-4" /> {profile.email}
          </span>
          <span className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" /> {profile.phone}
          </span>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
        <div className="flex items-center justify-center gap-5">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon]
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
        <p className="mt-4 pb-8 font-mono text-xs text-slate-400 dark:text-slate-500">
          Designed & built by {profile.name} · © {new Date().getFullYear()}
        </p>
      </footer>
    </Section>
  )
}
