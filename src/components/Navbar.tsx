import { useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/resume'
import { MoonIcon, SunIcon } from './Icons'
import type { Theme } from '../hooks/useTheme'

type NavbarProps = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-lg font-semibold text-slate-900 dark:text-white">
          <span className="text-accent-600 dark:text-accent-400">&lt;</span>
          PG
          <span className="text-accent-600 dark:text-accent-400"> /&gt;</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              <span className="mr-1 font-mono text-xs text-accent-600 dark:text-accent-400">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={onToggleTheme}
            whileTap={{ scale: 0.85, rotate: 30 }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </motion.button>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-200/70 md:hidden dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200/60 bg-slate-50 px-6 py-4 md:hidden dark:border-slate-800/60 dark:bg-slate-950"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-600 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
