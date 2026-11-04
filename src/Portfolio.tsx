import ProjectClips, {hasClips} from './ProjectClips';
import { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail, Menu, Sparkles, X } from 'lucide-react';
import { sections, labels } from './portfolioContent';
import { MediaImage, ResumeMenu, useMediaViewer } from './MediaViewer';

type PortfolioPage = (typeof sections)[string];
type PortfolioItem = PortfolioPage['items'][number];

const highlights = [
  ['Hall of Fame', 'FIRST Tech Challenge'],
  ['$50K+', 'Sponsorships and support'],
  ['4,500+', 'Organization-wide service hours'],
  ['Valedictorian', 'Harmony School of Advancement'],
];

const featuredPages = ['FIRST Robotics', 'Research', 'Projects', 'Cosmobots Robotics'];

const firstVideos = [
  { title: 'FTC season recap', url: 'https://www.youtube.com/embed/cIjSa_KR5-U' },
  { title: 'Programmed autonomous examples', url: 'https://www.youtube.com/embed/8LldWONLAaE' },
  { title: 'Solo autonomous run', url: 'https://www.youtube.com/embed/WUUOcWo_VNg' },
  { title: 'Michiana autonomous run', url: 'https://www.youtube.com/embed/Taopk8Zoc3A' },
];

const robotGallery = [
  { title: 'CenterStage final robot', image: '/images/csfinalbot.png', note: 'Rail-based transfer and slide-powered mechanisms' },
  { title: 'Into the Deep v1', image: '/images/itd1-bot.png', note: 'Linear extension and multi-axis outtake' },
  { title: 'Into the Deep final robot', image: '/images/carolinas-finalist-bot.png', note: 'Carbon-fiber structure and refined transfer path' },
  { title: 'Decode robot', image: '/images/auradecode-bot.png', note: 'Shooter and autonomous development' },
];

const firstPhotoWall = [
  { title: 'FTC team', image: '/images/ftc-team.jpg' },
  { title: 'League winners', image: '/images/ftc-league-winner.jpg' },
  { title: 'International alliance selections', image: '/images/ftc-international-alliance.jpg' },
  { title: 'Premier event', image: '/images/premier-international-finals.jpg' },
  { title: 'Regional preparation', image: '/images/ftc-regionals-setup.jpg' },
  { title: 'Team at competition', image: '/images/post-ftc-finals.jpg' },
];

export default function Portfolio() {
  const [page, setPage] = useState('Home');
  const { capture, viewer } = useMediaViewer();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const measure = () => document.documentElement.style.setProperty('--header-height', `${element.getBoundingClientRect().height}px`);
    measure();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    observer?.observe(element);
    window.addEventListener('resize', measure);
    const desktop = window.matchMedia('(min-width: 1001px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
      desktop.removeEventListener('change', closeOnDesktop);
      document.documentElement.style.removeProperty('--header-height');
    };
  }, []);

  function go(nextPage: string) {
    setPage(nextPage);
    setOpen(false);
    window.scrollTo({ top: 0 });
  }

  const content = sections[page];

  return (
    <div className="portfolio-shell" onClickCapture={capture}>
      <header ref={header} className="site-header" onKeyDown={event => {
        if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
      }}>
        <button className="brand" onClick={() => go('Home')}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-copy">
            <strong>Amey Mishra</strong>
            <small>Engineering portfolio · Houston, Texas</small>
          </span>
        </button>
        <button
          ref={menuButton}
          className="menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={open ? 'expanded' : ''} aria-label="Main navigation">
          {labels.map((label) => (
            <button
              key={label}
              onClick={() => go(label)}
              aria-current={label === page ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
          <ResumeMenu />
        </nav>
      </header>

      <main>
        {page === 'Home' ? (
          <>
            <section className="hero">
              <div className="hero-copy">
                <h1>Amey Mishra</h1>
                <p className="hero-tagline">Aerospace, robotics, and community-centered engineering</p>
                <p className="hero-summary">
                  I design robot mechanisms, write control software, and study orbital debris retrieval. As captain
                  of The Cosmobots and founder of Cosmobots Robotics, I also organize teams, raise funding,
                  and help students build and test their own robots.
                </p>
                <div className="quick-summary">
                  <h2><Sparkles size={18} aria-hidden="true" /> Quick summary</h2>
                  <ul>
                    <li>Founder of Cosmobots Robotics, delivering STEM access to underserved schools.</li>
                    <li>FTC captain and mechanical lead, with international premier-event wins and Hall of Fame recognition.</li>
                    <li>Independent orbital-debris research accepted at ISMSIT 2026, with IEEE Xplore publication pending.</li>
                  </ul>
                </div>
                <div className="actions">
                  <a className="contact-button" href="mailto:amey.mishra2020@gmail.com"><Mail size={19} aria-hidden="true" /> Contact Me</a>
                  <a className="linkedin-button" href="https://linkedin.com/in/amey-mishra/" target="_blank" rel="noopener noreferrer"><Linkedin size={19} aria-hidden="true" /> LinkedIn</a>
                </div>
              </div>
              <figure className="hero-portrait">
                <div className="image-frame">
                  <MediaImage src="/images/main-hero.jpg" alt="Amey with an FTC robot" />
                </div>
                <figcaption>
                  <span>01</span>
                  Mechanical design and competition development
                </figcaption>
              </figure>
            </section>

            <LatestHyperion onExplore={() => {go('Projects'); requestAnimationFrame(() => document.getElementById('chapter-1')?.scrollIntoView({block:'start'}));}} />
            <section className="numbers" aria-label="Selected achievements">
              {highlights.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </section>

            <section className="home-about" aria-labelledby="home-about-title">
              <div><p className="kicker">A quick introduction</p><h2 id="home-about-title">About me</h2></div>
              <div><p>I am a Houston-area student and the valedictorian of Harmony School of Advancement’s Class of 2027. I spend much of my time in the engineering lab, working on mechanisms, robots, and aerospace research. Outside the lab, I compete in speedcubing and play cards with my family and chess with my grandfather.</p>
              <div className="links"><button onClick={()=>go('About')}>More about me</button><a href="mailto:amey.mishra2020@gmail.com">Email</a><a href="https://linkedin.com/in/amey-mishra/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/AmeyMishra2024" target="_blank" rel="noopener noreferrer">GitHub</a></div></div>
            </section>
            <section className="featured-work">
              <div className="section-heading">
                <div>
                  <p className="kicker">Selected work</p>
                  <h2>Mechanisms, models, and measurable impact.</h2>
                </div>
                <p>A focused view of the work that best represents how I think, build, test, and lead.</p>
              </div>
              <div className="work-grid">
                {featuredPages.map((label, index) => (
                  <button key={label} onClick={() => go(label)}>
                    <span className="work-number">0{index + 1}</span>
                    <div>
                      <p className="card-label">{sections[label].kicker}</p>
                      <h3>{sections[label].title}</h3>
                      <p>{sections[label].intro}</p>
                    </div>
                    <small>Explore work</small>
                  </button>
                ))}
              </div>
            </section>

            <section className="home-context">
              <article>
                <p className="kicker">Professional experience</p>
                <h2>Engineering beyond competition.</h2>
                <p>
                  At Pike Robotics, I develop camera mounts and umbilical-management mechanisms for industrial tank
                  inspection. At Rice University, I investigated electromagnetic energy harvesting through
                  microcontroller tests and simulation.
                </p>
                <button onClick={() => go('Experience')}>View experience</button>
              </article>
              <article>
                <p className="kicker">Academic profile</p>
                <h2>Harmony School of Advancement</h2>
                <p>Valedictorian · Class of 2027 · 4.74 weighted GPA</p>
                <p>
                  National Merit Commended Scholar, AP Scholar with Distinction, and National Honor Society member.
                </p>
                <button onClick={() => go('About')}>About me</button>
              </article>
            </section>
          </>
        ) : <DetailPage page={page} content={content} />}
      </main>

      <footer>
        <div>
          <strong>Amey Mishra</strong>
          <span>Houston, Texas · Class of 2027</span>
        </div>
        <div className="footer-links">
          <a href="mailto:amey.mishra2020@gmail.com">Email</a>
          <a href="https://linkedin.com/in/amey-mishra/">LinkedIn</a>
          <a href="https://github.com/AmeyMishra2024">GitHub</a>
        </div>
        <small>© 2026 Amey Mishra</small>
      </footer>
      {viewer}
    </div>
  );
}

function PageLead({ content }: { content: PortfolioPage }) {
  return (
    <section className="page-lead detail-lead">
      <div>
        <p className="kicker">{content.kicker}</p>
        <h1>{content.title}</h1>
      </div>
      <p>{content.intro}</p>
    </section>
  );
}

function ContentCard({ item, index, hideVideo = false }: { item: PortfolioItem; index: number; hideVideo?: boolean }) {
  return (
    <article className={`detail-card ${item.image ? 'has-image' : ''} ${index === 0 ? 'primary-card' : ''}`}>
      {item.image && (
        <figure className="detail-card-image">
          <MediaImage src={item.image} alt={item.title} loading="lazy" />
          <figcaption>{item.caption ?? item.title}{item.credit && <a className="image-credit" href={item.credit[1]} target="_blank" rel="noopener noreferrer">{item.credit[0]}</a>}</figcaption>
        </figure>
      )}
      <div className="detail-card-copy">
        <div className="detail-card-meta"><span>{String(index + 1).padStart(2, '0')}</span><p>{item.meta}</p></div>
        <h2>{item.title}</h2>
        {item.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {item.title==='InMoov humanoid (2022–2025)' && <a href="#chapter-1">See Hyperion, my RV-gearbox humanoid</a>}
      {item.points && <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>}
        {item.links && (
          <div className="links">
            {item.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
          </div>
        )}
        {item.video && !hideVideo && (
          <div className="film"><iframe src={item.video} title={`${item.title} demonstration`} loading="lazy" allowFullScreen /></div>
        )}
      </div>
    </article>
  );
}

function PhotoGallery({ title, photos, captions = true }: { title: string; photos: { title: string; image: string }[]; captions?: boolean }) {
  return (
    <section className="detail-section photo-section">
      <div className="detail-section-heading"><p className="kicker">Competition archive</p><h2>{title}</h2></div>
      <div className="photo-grid">
        {photos.map((photo) => (
          <figure key={photo.title}>
            <MediaImage src={photo.image} alt={photo.title} loading="lazy" />
            {captions && <figcaption>{photo.title}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}

function DetailPage({ page, content }: { page: string; content: PortfolioPage }) {
  if (page === 'FIRST Robotics') return <FirstRoboticsPage content={content} />;
  if (page === 'Research') return <ResearchPage content={content} />;

  const [featured, ...chapters] = content.items;

  return (
    <div className="detail-page story-page" data-page={page}>
      <PageLead content={content} />

      <nav className="chapter-nav" aria-label={`Explore ${content.title}`}>
        <select aria-label="Jump to a section" defaultValue="" onChange={event => {
          document.getElementById(event.target.value)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
          event.target.value = '';
        }}>
          <option value="" disabled>Jump to a section</option>
          {content.items.map((item, index) => (
            <option key={item.title} value={`chapter-${index + 1}`}>{item.title}</option>
          ))}
        </select>
      </nav>

      <section className={`feature-story ${featured.image ? 'feature-with-image' : ''} ${hasClips(featured.title) ? 'feature-has-media' : ''}`} id="chapter-1">
        <div className="feature-story-copy">
          <p className="story-label"><span>01 / Featured</span>{featured.meta}</p>
          <h2>{featured.title}</h2>
          <StoryDetails item={hasClips(featured.title) ? {...featured,photos:undefined} : featured} />
        </div>
        {hasClips(featured.title) ? <MediaCollection item={featured}/> : <>{featured.image && <figure><MediaImage src={featured.image} alt={featured.caption ?? featured.title} /><figcaption>{featured.caption ?? featured.title}{featured.credit && <a className="image-credit" href={featured.credit[1]} target="_blank" rel="noopener noreferrer">{featured.credit[0]}</a>}</figcaption></figure>}</>}
      </section>

      {chapters.length > 0 && (
        <section className="story-chapters">
          <div className="story-chapters-heading"><p className="kicker">More from this area</p><h2>{page === 'Projects' ? 'Built, tested, and still in progress.' : page === 'Research' ? 'Studies and experiments.' : 'The work, step by step.'}</h2></div>
          <div className="story-list">
            {chapters.map((item, index) => (
              <article className={`story-row ${!hasClips(item.title) && (item.image || item.photoLayout === 'aside') ? 'story-row-with-image' : ''}`} id={`chapter-${index + 2}`} key={item.title}>
                <div className="story-row-label"><span>{String(index + 2).padStart(2, '0')}</span><p>{item.meta}</p></div>
                <div className="story-row-copy"><h3>{item.title}</h3><StoryDetails item={item.photoLayout === 'aside' || hasClips(item.title) ? {...item,photos:undefined} : item} /></div>
                {!hasClips(item.title) && item.photoLayout === 'aside' && item.photos && <div className="story-row-photo-stack">{item.photos.map(photo => <figure key={photo.image}><MediaImage src={photo.image} alt={photo.title} loading="lazy"/><figcaption>{photo.title}</figcaption></figure>)}</div>}
                {item.image && !hasClips(item.title) && <figure><MediaImage src={item.image} alt={item.caption ?? item.title} loading="lazy" /><figcaption>{item.caption ?? item.title}{item.credit && <a className="image-credit" href={item.credit[1]} target="_blank" rel="noopener noreferrer">{item.credit[0]}</a>}</figcaption></figure>}
                {hasClips(item.title) && <MediaCollection item={item}/>}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function StoryDetails({ item }: { item: PortfolioItem }) {
  return (
    <div className="story-details">
      {item.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {item.title==='InMoov humanoid (2022–2025)' && <a href="#chapter-1">See Hyperion, my RV-gearbox humanoid</a>}
      {item.points && <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>}
      {item.links && <div className="links">{item.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>}
      {item.photos && !item.poster && <div className={`project-gallery ${item.photos.length === 2 ? 'gallery-pair' : ''}`}>{item.photos.map(photo=><figure key={photo.image}><a href={photo.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${photo.title}`}><MediaImage linked src={photo.image} alt={photo.title} loading="lazy" /></a><figcaption>{photo.title}</figcaption></figure>)}</div>}
      {item.video && <div className="film"><iframe src={item.video} title={`${item.title} demonstration`} loading="lazy" allowFullScreen /></div>}
    </div>
  );
}

function FirstRoboticsPage({ content }: { content: PortfolioPage }) {
  return (
    <div className="detail-page detail-ftc" data-page="FIRST Robotics">
      <PageLead content={content} />

      <section className="ftc-highlights" aria-label="FTC highlights">
        <div><strong>Hall of Fame</strong><span>FIRST Tech Challenge recognition</span></div>
        <div><strong>Premier wins</strong><span>International event and division championships</span></div>
        <div><strong>Carbon fiber</strong><span>Structural design and mechanism integration</span></div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><p className="kicker">Competition teams</p><h2>Built with a team. Tested on the field.</h2></div>
        <div className="ftc-team-grid">
          <article className="ftc-team-card ftc-primary-team">
            <div className="ftc-team-banner"><span>FTC 25679</span><h3>The Cosmobots</h3><p>Founder · Captain · Mechanical lead</p></div>
            <MediaImage src="/images/ftc-premier-trophies.jpeg" alt="The Cosmobots robot with premier event banners and awards" loading="lazy" />
            <div className="ftc-team-copy">{content.items[0].text.map(p=><p key={p}>{p}</p>)}<ul>{content.items[0].points?.map(point=><li key={point}>{point}</li>)}</ul></div>
          </article>
        </div>
      </section>

      <section className="detail-section video-section">
        <div className="detail-section-heading"><p className="kicker">Mechanisms and match testing</p><h2>Season development</h2></div>
        <div className="ftc-season-grid">{['Centerstage','Into the Deep','DECODE'].map(season=><article key={season}><h3>{season}</h3><div className="season-clips"><ProjectClips title={season}/></div></article>)}</div>
      </section>

      <section className="detail-section video-section">
        <div className="detail-section-heading"><p className="kicker">On the field</p><h2>Match archive</h2></div>
        <details className="match-archive"><summary>Open four earlier match videos</summary><div className="video-grid">
          {firstVideos.map((video) => (
            <figure key={video.title}>
              <div className="video-frame"><iframe src={video.url} title={video.title} loading="lazy" allowFullScreen /></div>
              <figcaption>{video.title}</figcaption>
            </figure>
          ))}
        </div></details>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><p className="kicker">Mechanism development</p><h2>Design, build, compete, repeat.</h2></div>
        <div className="ftc-development-grid">
          <ContentCard item={content.items[1]} index={0} />
          <ContentCard item={content.items[3]} index={1} />
          <ContentCard item={content.items[4]} index={2} hideVideo />
        </div>
      </section>

      <section className="detail-section expertise-section">
        <div className="detail-section-heading"><p className="kicker">Technical expertise</p><h2>How the robots come together.</h2></div>
        <div className="expertise-grid">
          <article><h3>Mechanical design</h3><p>CAD, fabrication, carbon-fiber structures, and mechanism integration.</p></article>
          <article><h3>Control software</h3><p>Inverse kinematics, autonomous routines, and mechanism control tuned against match behavior.</p></article>
          <article><h3>Competition strategy</h3><p>Design reviews, driver preparation, testing, and decisions made around actual game constraints.</p></article>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-section-heading"><p className="kicker">Design archive</p><h2>Robots and design notes</h2></div>
        <div className="robot-grid">
          {robotGallery.map((robot) => (
            <figure key={robot.title}>
              <MediaImage src={robot.image} alt={robot.title} loading="lazy" />
              <figcaption><strong>{robot.title}</strong><span>{robot.note}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="detail-section ftc-earlier"><p className="kicker">Earlier seasons</p><div className="earlier-teams"><article><MediaImage src="/images/csfinalbot.png" alt="CenterStage final robot from earlier FTC work" loading="lazy"/><div><h3>FTC 8790</h3><p>Earlier experience as team captain included robot development, drive-team leadership, and repeated match testing.</p></div></article><article><h3>FTC 25943 · HIVE</h3><p>{content.items[2].text[0]}</p></article></div></section>
      <PhotoGallery title="Season photo wall" photos={firstPhotoWall} captions={false} />
    </div>
  );
}

function ResearchPage({content}:{content:PortfolioPage}) {
  return <div className="detail-page research-page" data-page="Research"><PageLead content={content}/>
    <nav className="research-index" aria-label="Research areas">{content.items.map((item,i)=><a href={`#research-${i+1}`} key={item.title}><span>{String(i+1).padStart(2,'0')}</span>{item.title}</a>)}</nav>
    <div className="research-papers">{content.items.map((item,i)=><article id={`research-${i+1}`} key={item.title} className={`research-paper ${i<2?'featured-paper':''}`}>
      <header className="paper-heading"><span className="paper-number">{String(i+1).padStart(2,'0')}</span><div><p className="kicker">{i<2?'Featured research':'Related work'}</p><h2>{item.title}</h2><p className="paper-meta">{item.meta}</p></div></header>
      <div className={item.poster?'paper-layout':'paper-body'}><div><StoryDetails item={{...item,video:undefined}}/>{i===0&&<aside className="research-limit"><strong>Scope of the results</strong><p>The reported results are simulations. Physical capture, detumbling, towing, and hub processing require further validation.</p></aside>}</div>
      {item.poster&&<figure className="research-poster"><a href={item.poster} target="_blank" rel="noopener noreferrer"><MediaImage linked src={item.photos?.[0].image} alt={item.photos?.[0].title ?? item.title+' research poster'} loading="lazy"/></a><figcaption><a href={item.poster} target="_blank" rel="noopener noreferrer">Open the full research poster (PDF) ↗</a></figcaption></figure>}</div>
    </article>)}</div></div>;
}

function LatestHyperion({onExplore}:{onExplore:()=>void}) {
  return <section className="project-preview" aria-label="Latest"><div><p className="kicker">Latest</p><h2>Hyperion</h2><p>Hyperion: my 6-ft humanoid robot. 55 joints, upper body powered, walking in simulation.</p><div className="links"><button onClick={onExplore}>Explore Hyperion</button></div></div><div className="teaser-images latest-photos"><MediaImage src="/media/posters/hyperion-wave-v2.jpg" alt="Hyperion, my built humanoid robot"/><MediaImage src="/media/extracted/hyperion-hand.jpg" alt="Hyperion tendon-driven hand"/></div></section>;
}

function MediaCollection({item}:{item:PortfolioItem}) {
  const candidates=item.image ? [{image:item.image,title:item.caption ?? item.title},...(item.photos ?? [])] : item.photos ?? [];
  const seen=new Set<string>();
  const photos=candidates.filter(photo=>{
    if(item.title==='Greenpower USA electric car' && photo.image==='/images/greenpower-electric-car.png')return false;
    if(seen.has(photo.image))return false;
    seen.add(photo.image);return true;
  });
  return <div className={`media-collection ${item.title.startsWith('Hyperion:')?'hyperion-media':''}`}>
    {photos.map(photo=><figure className="paired-photo" key={photo.image}><MediaImage src={photo.image} alt={photo.title} loading="lazy"/><figcaption>{photo.title}</figcaption></figure>)}
    <ProjectClips title={item.title}/>
  </div>;
}
