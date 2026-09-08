import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    id: 'volvo',
    number: '01',
    title: 'Volvo ülések',
    category: 'Belső tér · Kárpit',
    description: 'A repedezett, elfáradt felületekből újra karakteres, használatra kész ülések születtek. A cél nem a steril újszerűség, hanem az eredeti hangulat visszahozása volt.',
    before: '/images/volvo-before.jpeg',
    after: '/images/volvo-after.jpeg',
  },
  {
    id: 'opel',
    number: '02',
    title: 'Opel belső tér',
    category: 'Belső tér · Restaurálás',
    description: 'A részletek adják vissza egy régi autó lelkét. A belső tér minden eleme azért készült, hogy az első beszállás pillanatában újra megérkezzen az emlék.',
    before: '/images/opel-before.jpeg',
    after: '/images/opel-after.jpg',
  },
  {
    id: 'transmission',
    number: '03',
    title: 'Váltó felújítás',
    category: 'Mechanika · Felújítás',
    description: 'Ahol a kéz és a fém találkozik. Szétszerelés, tisztítás, javítás és újraépítés egy olyan alkatrészért, amelynek minden kapcsolásnál érezni kell a pontosságát.',
    before: '/images/trans-before.jpg',
    after: '/images/trans-after.jpg',
  },
  {
    id: 'tank',
    number: '04',
    title: 'Olajtank',
    category: 'Alkatrész · Felületkezelés',
    description: 'A rozsdás, elfeledett alkatrész is megérdemel még egy fejezetet. A tisztítás és felületkezelés után újra méltó helyére kerülhetett.',
    before: '/images/tank-before.jpg',
    after: '/images/tank-after.jpg',
  },
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <main>
      <nav className="nav">
        <a className="nav-mark" href="#top" aria-label="Aron's Classics kezdőlap">
          <img src="/images/logo.png" alt="Aron's Classics" />
        </a>
        <div className="nav-links">
          <a href="#tortenet">A történet</a>
          <a href="#projektek">Munkáim</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </div>
        <a className="nav-cta" href="#kapcsolat">Beszéljünk <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid"></div>
        <div className="hero-copy reveal">
          <p className="eyebrow"><span></span> Klasszikus autók új élete</p>
          <h1>Ami régi,<br /><em>az nem</em> értéktelen.</h1>
          <p className="hero-lead">Egy autó nem csak fémből és alkatrészekből áll. Története van. Én azért dolgozom, hogy ez a történet tovább folytatódhasson.</p>
          <a className="button button-primary" href="#tortenet">Ismerd meg a történetet <Arrow /></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-ring"></div>
          <img src="/images/logo.png" alt="" />
          <div className="hero-stamp">Est. 2023<br /><strong>Hungary</strong></div>
        </div>
        <div className="scroll-cue"><span></span> Görgess tovább</div>
      </section>

      <section className="intro section" id="tortenet">
        <div className="section-label">01 / A kezdet</div>
        <div className="intro-content">
          <p className="kicker">A nevem Kaló Áron</p>
          <h2>22 évesen<br /><span>régi autókról</span> álmodom.</h2>
          <div className="intro-text">
            <p>Mindig is vonzottak azok az autók, amelyeknek van mit mesélniük. A kopott kormány, a jellegzetes motorhang, az apró nyomok az előző tulajdonosoktól – ezek nem hibák, hanem egy történet részei.</p>
            <p>Az Aron's Classics ebből a rajongásból született. Nem tömegmunka, nem futószalag. Minden autó külön feladat, külön fejtörő, külön történet.</p>
          </div>
        </div>
        <div className="quote">„A célom nem az,<br /><em>hogy újat építsek.</em><br />Hanem hogy megmentsem<br />azt, ami már egyszer jó volt.”</div>
      </section>

      <section className="milestones section">
        <div className="section-label">02 / Útközben</div>
        <div className="milestone-list">
          <article className="milestone">
            <span className="milestone-year">01</span>
            <div><h3>Egy kis garázs</h3><p>Az első szerszámok, hosszú esték és az a bizonyos első projekt. Kevés hely, annál több kíváncsiság.</p></div>
          </article>
          <article className="milestone current">
            <span className="milestone-year">02</span>
            <div><h3>Felszerelt műhely</h3><p>Ma már saját műhelyben dolgozom, ahol a részleteknek és a türelmes munkának is megvan a helye.</p></div>
          </article>
          <article className="milestone">
            <span className="milestone-year">03</span>
            <div><h3>Minden nap új kihívás</h3><p>Nincs két egyforma rozsda, két egyforma alkatrész vagy két egyforma megoldás. Pont ezért szeretem.</p></div>
          </article>
        </div>
      </section>

      <section className="projects section" id="projektek">
        <div className="projects-heading">
          <div><div className="section-label">03 / A műhelyből</div><h2>Nyomokból<br /><span>történet.</span></h2></div>
          <p className="projects-intro">Néhány részlet abból, amin mostanában dolgoztam. Minden kép mögött ott van a szétszedés, a keresés, a próbálkozás és az a pillanat, amikor végre összeáll.</p>
        </div>
        <div className="project-tabs" role="tablist" aria-label="Projektek">
          {projects.map((project) => <button key={project.id} className={activeProject.id === project.id ? 'active' : ''} onClick={() => setActiveProject(project)} role="tab" aria-selected={activeProject.id === project.id}><span>{project.number}</span>{project.title}</button>)}
        </div>
        <div className="project-showcase">
          <div className="project-info">
            <p className="kicker">{activeProject.category}</p>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="project-note"><span>Folyamat</span><strong>Előtte <i>→</i> Utána</strong></div>
          </div>
          <div className="before-after">
            <figure><img src={activeProject.before} alt={`${activeProject.title} restaurálás előtt`} /><figcaption>Előtte</figcaption></figure>
            <figure><img src={activeProject.after} alt={`${activeProject.title} restaurálás után`} /><figcaption>Utána</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="workshop section">
        <div className="section-label">04 / A háttérben</div>
        <div className="workshop-grid">
          <div><h2>Ahol a<br /><em>vas</em> történetté válik.</h2><p>A műhelyben nincs gyors út. Van viszont jó fény, türelem, olajos kéz és rengeteg apró döntés, amitől egy régi autó újra önmaga lehet.</p></div>
          <div className="photo-placeholder"><img src="/images/opel-paint.jpeg" alt="Festési munka a műhelyben" /><span>Műhelynapló / 2024</span></div>
          <div className="photo-placeholder empty"><span>Ide érkeznek<br /><strong>a műhely pillanatai</strong></span><small>Hely a következő fotóknak</small></div>
        </div>
      </section>

      <section className="contact section" id="kapcsolat">
        <div className="contact-orbit"></div>
        <div className="section-label">05 / A következő fejezet</div>
        <h2>Van egy autód,<br />aminek <em>folytatódnia</em> kell?</h2>
        <p>Meséld el, min dolgozol. Nézzük meg együtt, mit lehet kihozni belőle.</p>
        <a className="button button-light" href="mailto:hello@aronsclassics.hu">hello@aronsclassics.hu <Arrow /></a>
      </section>

      <footer><img src="/images/logo.png" alt="Aron's Classics" /><span>Restore. Preserve. Drive.</span><span>© 2024 Aron's Classics</span></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)