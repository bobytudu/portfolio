import { Moon, Sun } from 'lucide-react'
import { profile } from '../data/profile'
export function Header({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">{profile.name}<span>.</span></a>
        <nav aria-label="Primary">
          <a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a>
        </nav>
        <button className="icon-btn" onClick={onToggle} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
      </div>
    </header>
  )
}
