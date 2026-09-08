import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    id: 'volvo',
    number: '01',
    title: 'Volvo ülések',
    category: 'Belső tér · Kárpit',
    description: 'A repedezett, elfáradt felületekből újra karakteres, használatra kész ülések születtek. Nem steril újszerűség volt a cél, hanem az eredeti hangulat visszahozása.',
    before: '/images/volvo-before.jpeg',
    after: '/images/volvo-after.jpeg',
  },
  {
    id: 'opel',
    number: '02',
    title: 'Opel belső tér',
    category: 'Belső tér · Restaurálás',
    description: 'A részletek adják vissza egy régi autó lelkét. Anyag, tónus, varrás és felület: minden döntés azért születik, hogy az autó újra önmaga legyen.',
    before: '/images/opel-before.jpeg',
    after: '/images/opel-after.jpg',
  },
  {
    id: 'transmission',
    number: '03',
    title: 'Váltó felújítás',
    category: 'Mechanika · Felújítás',
    description: 'Szétszerelés, tisztítás, javítás és precíz újraépítés. Az a munka, amit kívülről alig látni, de minden kilométeren érezni lehet.',
    before: '/images/trans-before.jpg',
    after: '/images/trans-after.jpg',
  },
  {
    id: 'tank',
    number: '04',
    title: 'Olajtank',
    category: 'Alkatrész · Felületkezelés',
    description: 'A rozsdás, elfeledett alkatrész is megérdemel még egy fejezetet. Tisztítás, javítás és felületkezelés után újra méltó helyére kerülhet.',
    before: '/images/tank-before.jpg',
    after: '/images/tank-after.jpg',
  },
]

const workshopItems = [
  { number: '01', title: 'Opel projekt', stage: 'Fényezés', image: '/images/opel-paint.jpeg', note: 'Karosszéria és felület' },
  { number: '02', title: 'Váltó', stage: 'Összeépítés', image: '/images/trans-after.jpg', note: 'Mechanikai felújítás' },
  { number: '03', title: 'Belső tér', stage: 'Finiselés', image: '/images/volvo-after.jpeg', note: 'Kárpit és részletek' },
]

const process = [
  ['01', 'Állapotfelmérés', 'Megnézzük az autót, dokumentáljuk az állapotát és tisztázzuk, mi marad eredeti.'],
  ['02', 'Restaurálási terv', 'Feladatlista, prioritások, anyagok és egy reális ütemezés készül.'],
  ['03', 'Újjáépítés', 'Karosszéria, mechanika, belső tér és részletek – lépésről lépésre.'],
  ['04', 'Finiselés', 'Beállítások, illesztések, felületek és az apró részletek véglegesítése.'],
  ['05', 'Átadás', 'Az autó nem vitrintárgyként, hanem újra használható klasszikusként tér vissza.'],
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function BeforeAfter({ before, after, title }) {
  const [position, setPosition] = useState(52)
  return (
    <div className="compare" style={{ '--position': `${position}%` }}>
      <img className="compare-base" src={after} alt={`${title} restaurálás után`} />
      <div className="compare-before">
        <img src={before} alt={`${title} restaurálás előtt`} />
      </div>
      <div className="compare-label compare-label-before">Előtte</div>
      <div className="compare-label compare-label-after">Utána</div>
      <div className="compare-line"><span>↔</span></div>
      <input
        aria-label="Előtte-utána összehasonlítás"
        type="range"
        min="4"
        max="96"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />
    </div>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(projects[1])
  const [visualizerImage, setVisualizerImage] = useState('')
  const [visualStyle, setVisualStyle] = useState('Factory Original')
  const [configColor, setConfigColor] = useState('Burgundy')

  const handleUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    setVisualizerImage(URL.createObjectURL(file))
  }

  const handleQuote = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Név: ${data.get('name') || '-'}`,
      `Autó: ${data.get('year') || ''} ${data.get('make') || ''} ${data.get('model') || ''}`.trim(),
      `Állapot: ${data.get('condition') || '-'}`,
      `Cél: ${data.get('goal') || '-'}`,
      `Keret: ${data.get('budget') || '-'}`,
      '',
      'Megjegyzés:',
      data.get('message') || '-',
    ].join('\n')
    window.location.href = `mailto:hello@aronsclassics.hu?subject=${encodeURIComponent('Restaurálási megkeresés')}&body=${encodeURIComponent(body)}`
  }

  return (
    <main>
      <nav className="nav">
        <a className="nav-mark" href="#top" aria-label="Aron's Classics kezdőlap">
          <img src="/images/logo.png" alt="Aron's Classics" />
        </a>
        <div className="nav-links">
          <a href="#munkaink">Munkáink</a>
          <a href="#visualizer">Visualizer</a>
          <a href="#studio">Configurator</a>
          <a href="#aron">Rólunk</a>
        </div>
        <a className="nav-cta" href="#ajanlat">Restauráld az autód <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <img className="hero-media" src="/images/opel-paint.jpeg" alt="Klasszikus autó restaurálása az Aron's Classics műhelyében" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Aron's Classics · Hungary</p>
          <h1>We bring classics<br /><em>back to life.</em></h1>
          <p className="hero-lead">Klasszikus autók restaurálása kézzel, türelemmel és az eredeti karakter tiszteletével. Nem újat építünk – megmentjük azt, amiért az autót megszeretted.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#ajanlat">Restauráld az autód <Arrow /></a>
            <a className="text-link" href="#munkaink">Nézd meg a munkáinkat <span>↓</span></a>
          </div>
        </div>
        <div className="hero-signature">
          <img src="/images/logo.png" alt="" />
          <div><span>Restore.</span><span>Preserve.</span><span>Drive.</span></div>
        </div>
        <div className="hero-index">01 — CRAFT / HERITAGE / PRECISION</div>
      </section>

      <section className="promise section-light">
        <p className="section-label">A klasszikus értéke nem az életkorában van.</p>
        <div className="promise-grid">
          <h2>Hanem abban,<br />hogy <em>mit őrzünk meg.</em></h2>
          <div>
            <p>Az Aron's Classics olyan autókkal foglalkozik, amelyeknek történetük van. A célunk nem a túlrestaurálás, hanem az arány: eredetiség, használhatóság és tartósság.</p>
            <a className="text-link dark" href="#aron">Ismerd meg Aront <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="transformation section-dark" id="munkaink">
        <div className="section-heading split">
          <div>
            <p className="section-label">Before / After</p>
            <h2>See what's<br /><em>possible.</em></h2>
          </div>
          <p>Húzd a csúszkát. Ugyanaz az alkatrész, ugyanaz a történet – csak újra olyan állapotban, ahogy megérdemli.</p>
        </div>
        <BeforeAfter before={activeProject.before} after={activeProject.after} title={activeProject.title} />
        <div className="project-selector" role="tablist" aria-label="Restaurálási projektek">
          {projects.map((project) => (
            <button
              key={project.id}
              className={activeProject.id === project.id ? 'active' : ''}
              onClick={() => setActiveProject(project)}
              role="tab"
              aria-selected={activeProject.id === project.id}
            >
              <span>{project.number}</span>
              <strong>{project.title}</strong>
              <small>{project.category}</small>
            </button>
          ))}
        </div>
        <div className="project-story">
          <p className="kicker">{activeProject.category}</p>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
        </div>
      </section>

      <section className="visualizer section-light" id="visualizer">
        <div className="visualizer-copy">
          <p className="section-label">Restoration Visualizer</p>
          <h2>Mi lehetne<br /><em>a te klasszikusodból?</em></h2>
          <p>Tölts fel egy fotót az autódról, válassz irányt, és készítsük elő együtt a restaurálási koncepciót. Az AI-látványterv modul következő fejlesztési lépésként kapcsolható ide.</p>
          <div className="style-chips" aria-label="Restaurálási stílus">
            {['Factory Original', 'Elegant Touring', 'Period Sport', 'Custom'].map((style) => (
              <button key={style} className={visualStyle === style ? 'active' : ''} onClick={() => setVisualStyle(style)}>{style}</button>
            ))}
          </div>
          <a className="button button-dark" href="#ajanlat">Kérek látványtervet <Arrow /></a>
        </div>
        <label className={`upload-stage ${visualizerImage ? 'has-image' : ''}`}>
          {visualizerImage ? (
            <>
              <img src={visualizerImage} alt="Feltöltött klasszikus autó előnézete" />
              <div className="upload-overlay"><span>Selected direction</span><strong>{visualStyle}</strong></div>
            </>
          ) : (
            <div className="upload-empty">
              <span className="upload-plus">+</span>
              <strong>Upload your classic</strong>
              <p>JPG / PNG · egy jól látható külső fotóval működik a legjobban</p>
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>
      </section>

      <section className="studio section-dark" id="studio">
        <div className="section-heading split">
          <div>
            <p className="section-label">3D Restoration Studio</p>
            <h2>Build your<br /><em>dream classic.</em></h2>
          </div>
          <p>A teljes 3D konfigurátor következő fázisa: karosszériaszín, belső tér, felnik és részletek egy forgatható webes modellen. A felületet már most ennek megfelelően készítettük elő.</p>
        </div>
        <div className="configurator-shell">
          <aside className="config-panel">
            <span className="config-step">01 / Exterior</span>
            <h3>Fényezés</h3>
            <div className="swatches">
              {[
                ['Burgundy', '#6f241d'],
                ['Ivory', '#e8dcc3'],
                ['Forest', '#263d32'],
                ['Midnight', '#15181b'],
              ].map(([name, color]) => (
                <button key={name} className={configColor === name ? 'active' : ''} onClick={() => setConfigColor(name)}>
                  <i style={{ background: color }} /> <span>{name}</span>
                </button>
              ))}
            </div>
            <div className="config-summary">
              <span>Selected</span>
              <strong>{configColor}</strong>
            </div>
          </aside>
          <div className={`config-stage config-${configColor.toLowerCase()}`}>
            <div className="prototype-badge">3D PROTOTYPE</div>
            <img src="/images/opel-paint.jpeg" alt="3D konfigurátor prototípus előnézet" />
            <div className="config-reticle"><span>Drag to rotate</span><b>↔</b></div>
          </div>
          <aside className="build-panel">
            <span>Your build</span>
            <h3>Classic Restoration</h3>
            <dl>
              <div><dt>Exterior</dt><dd>{configColor}</dd></div>
              <div><dt>Interior</dt><dd>Cognac</dd></div>
              <div><dt>Wheels</dt><dd>Original</dd></div>
              <div><dt>Chrome</dt><dd>Full restoration</dd></div>
            </dl>
            <a className="button button-primary" href="#ajanlat">Build request <Arrow /></a>
          </aside>
        </div>
      </section>

      <section className="workshop section-light">
        <div className="section-heading split dark-copy">
          <div>
            <p className="section-label">Currently in the workshop</p>
            <h2>A műhely<br /><em>most.</em></h2>
          </div>
          <p>Nem csak a kész autókat mutatjuk. A restaurálás értéke a köztes lépésekben, a döntésekben és a kézzel végzett munkában van.</p>
        </div>
        <div className="workshop-cards">
          {workshopItems.map((item) => (
            <article className="workshop-card" key={item.number}>
              <div className="workshop-image"><img src={item.image} alt={item.title} /></div>
              <div className="workshop-meta"><span>{item.number}</span><small>{item.note}</small></div>
              <h3>{item.title}</h3>
              <p>{item.stage}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-dark" id="aron">
        <div className="about-mark"><img src="/images/logo.png" alt="Aron's Classics embléma" /></div>
        <div className="about-copy">
          <p className="section-label">Meet Aron</p>
          <h2>Built by people who still care<br /><em>how things were made.</em></h2>
          <p className="about-lead">A nevem Kaló Áron. Azért szeretem a klasszikus autókat, mert nincs bennük felesleges távolság az ember és a gép között.</p>
          <div className="about-columns">
            <p>Az Aron's Classics nem futószalag. Minden projekt külön feladat: megérteni, mi menthető, mi javítható és mit kell úgy újraalkotni, hogy ne veszítse el az eredeti karakterét.</p>
            <blockquote>„Nem újat akarok építeni. Azt akarom, hogy ami egyszer jó volt, újra méltó legyen a következő évtizedekre.”</blockquote>
          </div>
        </div>
      </section>

      <section className="process section-light">
        <p className="section-label">How restoration works</p>
        <div className="process-head"><h2>Öt lépés.<br /><em>Egy következő fejezet.</em></h2></div>
        <div className="process-list">
          {process.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="ajanlat">
        <div className="quote-copy">
          <p className="section-label">Start a restoration</p>
          <h2>Van egy autód,<br />aminek <em>folytatódnia kell?</em></h2>
          <p>Írd meg röviden, miről van szó. Az űrlap a saját leveleződben készíti elő a megkeresést, így a részleteket és fotókat is könnyen hozzáadhatod.</p>
          <a href="mailto:hello@aronsclassics.hu" className="email-link">hello@aronsclassics.hu <Arrow /></a>
        </div>
        <form className="quote-form" onSubmit={handleQuote}>
          <label><span>Név</span><input name="name" placeholder="Teljes név" /></label>
          <div className="form-row three">
            <label><span>Évjárat</span><input name="year" placeholder="1956" /></label>
            <label><span>Márka</span><input name="make" placeholder="Opel" /></label>
            <label><span>Modell</span><input name="model" placeholder="Kapitän" /></label>
          </div>
          <div className="form-row">
            <label><span>Jelenlegi állapot</span><select name="condition" defaultValue=""><option value="" disabled>Válassz</option><option>Üzemképes</option><option>Részben szétszedett</option><option>Teljes felújításra vár</option><option>Nem tudom megítélni</option></select></label>
            <label><span>Cél</span><select name="goal" defaultValue=""><option value="" disabled>Válassz</option><option>Gyári állapot</option><option>Megbízható használati klasszikus</option><option>Restomod</option><option>Részfeladat / alkatrész</option></select></label>
          </div>
          <label><span>Tervezett keret</span><select name="budget" defaultValue=""><option value="" disabled>Válassz sávot</option><option>Egyeztetés szükséges</option><option>1–3 M Ft</option><option>3–6 M Ft</option><option>6–10 M Ft</option><option>10 M Ft felett</option></select></label>
          <label><span>Mesélj az autóról</span><textarea name="message" rows="5" placeholder="Mi a története, mi készült már el, és mit szeretnél belőle kihozni?" /></label>
          <button className="button button-primary form-submit" type="submit">Restoration request <Arrow /></button>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><img src="/images/logo.png" alt="Aron's Classics" /><span>Restore. Preserve. Drive.</span></div>
        <div className="footer-links"><a href="#munkaink">Munkáink</a><a href="#visualizer">Visualizer</a><a href="#studio">Configurator</a><a href="#ajanlat">Kapcsolat</a></div>
        <span className="copyright">© 2026 Aron's Classics · Hungary</span>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
