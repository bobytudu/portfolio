import { profile, services } from '../data/profile'
import { Reveal } from './Reveal'
export function About() {
  return (
    <>
      <section id="about" className="section container">
        <Reveal><h2>About</h2><p className="lead">{profile.about}</p></Reveal>
        <div className="stats">
          {profile.stats.map(s => <Reveal key={s.label}><div className="stat"><strong>{s.value}+</strong><span>{s.label}</span></div></Reveal>)}
        </div>
      </section>
      <section id="services" className="section container">
        <Reveal><h2>Services</h2></Reveal>
        <div className="grid">
          {services.map(s => <Reveal key={s.title}><div className="card"><h3>{s.title}</h3><p>{s.text}</p></div></Reveal>)}
        </div>
      </section>
    </>
  )
}
