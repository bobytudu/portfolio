import { useMemo, useState } from 'react'
import { ExternalLink, Search, X } from 'lucide-react'
import { projects } from '../data/projects'
import { applyFilters, countBy, emptyFilters, fmtDate, type Filters } from '../lib/filter'
import { Reveal } from './Reveal'

function FilterGroup({ title, items, active, onPick }: { title: string; items: [string, number][]; active: string | null; onPick: (v: string | null) => void }) {
  return (
    <div className="filter">
      <h4>{title}</h4>
      <div className="chips">
        {items.map(([k, n]) => (
          <button key={k} className={'chip' + (active === k ? ' chip--on' : '')} onClick={() => onPick(active === k ? null : k)}>{k} <small>{n}</small></button>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const [f, setF] = useState<Filters>(emptyFilters)
  const shown = useMemo(() => applyFilters(projects, f), [f])
  const set = (patch: Partial<Filters>) => setF(prev => ({ ...prev, ...patch }))
  const dirty = f.query || f.category || f.stack
  return (
    <section id="projects" className="section container">
      <Reveal><h2>Projects</h2><p className="lead">Selected projects that are tested, built and ready to use.</p></Reveal>
      <div className="projects">
        <div>
          <label className="search"><Search size={16} />
            <input value={f.query} onChange={e => set({ query: e.target.value })} placeholder="Search projects…" aria-label="Search projects" />
          </label>
          <ul className="posts">
            {shown.map(p => (
              <li key={p.id} className="post">
                <time>{fmtDate(p.date)}</time>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul className="highlights">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                {p.live && <div className="links">
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live <ExternalLink size={13} /></a>}
                </div>}
                <div className="chips">
                  <span className="tag">{p.category}</span>
                  {p.stack.map(s => <span key={s} className="tag tag--stack">{s}</span>)}
                </div>
              </li>
            ))}
            {!shown.length && <li className="empty">No projects match your filters.</li>}
          </ul>
        </div>
        <aside>
          {dirty && <button className="btn btn--sm" onClick={() => setF(emptyFilters)}><X size={14} /> Clear filters</button>}
          <FilterGroup title="Category" items={countBy(projects, p => [p.category])} active={f.category} onPick={v => set({ category: v })} />
          <FilterGroup title="Tech" items={countBy(projects, p => p.stack)} active={f.stack} onPick={v => set({ stack: v })} />
        </aside>
      </div>
    </section>
  )
}
