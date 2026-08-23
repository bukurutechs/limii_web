import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
  Headphones,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  X,
} from 'lucide-react'
import { useState } from 'react'

const facilityTypes = ['Pharmacies', 'ADDOs', 'Clinics', 'Hospitals']

const steps = [
  {
    number: '01',
    title: 'Find what you need',
    text: 'Search medicines and medical supplies by name, category or manufacturer.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Place your order',
    text: 'Choose quantities, confirm your delivery details and submit in minutes.',
    icon: ShoppingCart,
  },
  {
    number: '03',
    title: 'Follow every update',
    text: 'See the progress of your order from confirmation to delivery.',
    icon: Truck,
  },
]

const benefits = [
  ['Live product availability', 'Know what is available before you order.'],
  ['Clear order history', 'Review past purchases and reorder faster.'],
  ['Verified facilities', 'A trusted ordering environment for healthcare businesses.'],
  ['Reliable support', 'Get help whenever you need it.'],
]

function Logo({ light = false }) {
  return (
    <a className={light ? 'logo logo-light' : 'logo'} href="#top" aria-label="Limii home">
      <span className="logo-mark"><span></span><span></span><span></span></span>
      <span>Limii</span>
    </a>
  )
}

function ProductMockup() {
  return (
    <div className="mockup-wrap" aria-label="Preview of Limii ordering experience">
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>
      <div className="phone">
        <div className="phone-top"><span></span></div>
        <div className="phone-screen">
          <div className="app-head">
            <Logo />
            <div className="avatar">HM</div>
          </div>
          <p className="hello">Good morning</p>
          <h3>What do you need today?</h3>
          <div className="app-search"><Search size={16} /><span>Search medicines</span></div>
          <div className="quick-row">
            <div><span className="quick-icon mint"><PackageCheck size={18}/></span><b>Products</b><small>Browse stock</small></div>
            <div><span className="quick-icon amber"><Clock3 size={18}/></span><b>Orders</b><small>Track status</small></div>
          </div>
          <div className="section-title"><b>Popular products</b><span>View all</span></div>
          <div className="product-card">
            <div className="medicine-art"><span></span><span></span><span></span></div>
            <div><b>Medical supplies</b><small>Available now</small><strong>Order easily</strong></div>
            <button aria-label="Add product"><ShoppingCart size={15}/></button>
          </div>
          <div className="product-card compact">
            <div className="bottle-art"><span></span></div>
            <div><b>Everyday essentials</b><small>Verified products</small></div>
            <button aria-label="Add product"><ShoppingCart size={15}/></button>
          </div>
        </div>
      </div>
      <div className="float-card float-order">
        <span><PackageCheck size={20}/></span>
        <div><b>Order confirmed</b><small>We’re preparing it</small></div>
        <BadgeCheck size={18}/>
      </div>
      <div className="float-card float-delivery">
        <span><Truck size={20}/></span>
        <div><b>Reliable delivery</b><small>Follow every update</small></div>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div id="top">
      <header className="nav-shell">
        <nav className="nav container">
          <Logo />
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#how" onClick={closeMenu}>How it works</a>
            <a href="#why" onClick={closeMenu}>Why Limii</a>
            <a href="#facilities" onClick={closeMenu}>Who it’s for</a>
            <a href="#support" onClick={closeMenu}>Support</a>
          </div>
          <div className="nav-actions">
            <a className="text-link" href="#login">Sign in</a>
            <a className="button button-small" href="#join">Get started <ArrowRight size={16}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16}/> Built for healthcare businesses</div>
            <h1>Medicine ordering, made <em>effortless.</em></h1>
            <p className="hero-text">Find medicines and medical supplies, place your order, and follow its progress—all from one simple platform.</p>
            <div className="hero-actions">
              <a className="button" href="#join">Start ordering <ArrowRight size={18}/></a>
              <a className="button button-ghost" href="#how">See how it works <ChevronRight size={18}/></a>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={17}/> Secure access</span>
              <span><BadgeCheck size={17}/> Verified facilities</span>
              <span><Headphones size={17}/> Local support</span>
            </div>
          </div>
          <ProductMockup />
        </section>

        <section className="facility-strip" id="facilities">
          <div className="container strip-inner">
            <p>Designed for healthcare facilities of every size</p>
            <div>{facilityTypes.map((type) => <span key={type}><Check size={15}/>{type}</span>)}</div>
          </div>
        </section>

        <section className="section container" id="how">
          <div className="section-head">
            <div><span className="kicker">HOW LIMII WORKS</span><h2>From search to delivery<br/>in three simple steps.</h2></div>
            <p>No calls, no handwritten lists, no uncertainty. Limii keeps your ordering process clear from beginning to end.</p>
          </div>
          <div className="steps-grid">
            {steps.map(({number,title,text,icon:Icon}) => (
              <article className="step-card" key={number}>
                <div className="step-top"><span className="step-icon"><Icon/></span><small>{number}</small></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="step-line"></span>
              </article>
            ))}
          </div>
        </section>

        <section className="benefit-section" id="why">
          <div className="container benefit-grid">
            <div className="benefit-visual">
              <div className="visual-panel">
                <div className="mini-label">THIS WEEK</div>
                <h3>Your orders, always clear.</h3>
                <div className="timeline">
                  <div className="done"><span><Check/></span><div><b>Order placed</b><small>Today, 9:42 AM</small></div></div>
                  <div className="active"><span><PackageCheck/></span><div><b>Being prepared</b><small>Your items are being packed</small></div></div>
                  <div><span><Truck/></span><div><b>Out for delivery</b><small>Next update coming soon</small></div></div>
                </div>
                <div className="visual-foot"><Clock3/><span><b>Expected delivery</b><small>Shown clearly on every order</small></span></div>
              </div>
            </div>
            <div className="benefit-copy">
              <span className="kicker">WHY LIMII</span>
              <h2>More clarity.<br/>Less time ordering.</h2>
              <p>Limii gives your facility a faster, more dependable way to restock the products you need.</p>
              <div className="benefit-list">
                {benefits.map(([title,text]) => (
                  <div key={title}><span><Check size={16}/></span><p><b>{title}</b><small>{text}</small></p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section container" id="join">
          <div>
            <span className="cta-pattern"></span>
            <div className="cta-copy">
              <span className="kicker kicker-light">READY WHEN YOU ARE</span>
              <h2>Restock with confidence.</h2>
              <p>Join healthcare facilities using Limii to order faster and stay informed.</p>
              <a className="button button-white" href="#register">Create your account <ArrowRight size={18}/></a>
            </div>
            <div className="cta-badge"><ShieldCheck/><span><b>Fast. Simple. Reliable.</b><small>That’s the Limii promise.</small></span></div>
          </div>
        </section>
      </main>

      <footer id="support">
        <div className="container footer-top">
          <div className="footer-brand"><Logo light/><p>A simpler way for healthcare businesses to order medicines and medical supplies.</p></div>
          <div><b>Platform</b><a href="#how">How it works</a><a href="#why">Why Limii</a><a href="#join">Create account</a></div>
          <div><b>Help</b><a href="mailto:support@limii.app">Support</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Limii. All rights reserved.</span><span>Fast. Simple. Reliable.</span></div>
      </footer>
    </div>
  )
}
