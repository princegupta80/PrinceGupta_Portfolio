import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile, socials } from '../data/resume'
import { MailIcon, socialIcons } from './Icons'

/** Cycles through taglines with a typewriter effect. */
function Typewriter({ words }: { words: readonly string[] }) {
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0])
      return
    }
    const word = words[wordIndex % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1)
          setText(next)
          if (next === word) setTimeout(() => setDeleting(true), 1800)
        } else {
          const next = word.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setWordIndex((i) => i + 1)
          }
        }
      },
      deleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, reduceMotion])

  return (
    <span className="text-accent-600 dark:text-accent-400">
      {text}
      <motion.span
        animate={reduceMotion ? undefined : { opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-accent-500"
      />
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft radial glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-400/10"
      />

      <motion.div
        variants={container}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 pt-16"
      >
        <motion.p variants={item} className="font-mono text-accent-600 dark:text-accent-400">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-3 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          {profile.name}.
        </motion.h1>
        <motion.h2
          variants={item}
          className="mt-3 text-3xl font-bold tracking-tight text-slate-500 sm:text-4xl lg:text-5xl dark:text-slate-400"
        >
          I&apos;m a <Typewriter words={profile.taglines} />
        </motion.h2>
        <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed">
          I build full-stack web applications with the MERN stack — from responsive UIs to
          secure, scalable backends. Currently seeking an SDE role.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent-600 px-6 py-3 font-medium text-white shadow-lg shadow-accent-600/25 transition-transform hover:-translate-y-0.5 hover:bg-accent-500 dark:bg-accent-500 dark:hover:bg-accent-400 dark:text-slate-950"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-5">
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
                className="text-slate-500 transition-all hover:-translate-y-1 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon className="h-6 w-6" />
              </a>
            )
          })}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
            className="text-slate-500 transition-all hover:-translate-y-1 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
