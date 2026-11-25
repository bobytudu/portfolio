import type { Project } from '../data/projects'
export interface Filters { query: string; category: string | null; stack: string | null }
export const emptyFilters: Filters = { query: '', category: null, stack: null }
export function applyFilters(list: Project[], f: Filters) {
  const q = f.query.trim().toLowerCase()
  return list
    .filter(p => (!f.category || p.category === f.category) && (!f.stack || p.stack.includes(f.stack)))
    .filter(p => !q || [p.title, p.summary, p.category, ...p.stack, ...p.highlights].join(' ').toLowerCase().includes(q))
    .sort((a, b) => b.date.localeCompare(a.date))
}
export function countBy(list: Project[], pick: (p: Project) => string[]) {
  const m = new Map<string, number>()
  list.forEach(p => pick(p).forEach(k => m.set(k, (m.get(k) ?? 0) + 1)))
  return [...m.entries()].sort((a, b) => b[1] - a[1])
}
export const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })
