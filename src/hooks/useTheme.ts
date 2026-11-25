import { useEffect, useState } from 'react'
type Theme = 'light' | 'dark'
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { const s = localStorage.getItem('theme'); if (s === 'light' || s === 'dark') return s } catch { /* ignore */ }
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return { theme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) }
}
