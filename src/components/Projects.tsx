import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/resume'
import Section from './Section'
import { ExternalLinkIcon, GitHubIcon } from './Icons'

export default function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="projects" title="Projects" kicker="04.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent-500/10 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center justify-between">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-accent-600 dark:text-accent-400" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 7a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z" />
              </svg>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-slate-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                {project.title}
                <ExternalLinkIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </h3>
            <p className="mt-3 grow leading-relaxed">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
