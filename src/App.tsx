import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { useTheme } from './hooks/useTheme'
import { profile } from './data/profile'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Header theme={theme} onToggle={toggle} />
      <main>
        <Hero /><About /><Projects />
      </main>
      <footer className="footer container">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
