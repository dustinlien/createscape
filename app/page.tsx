import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --void:       #0E0E14;
          --canvas:     #F5F2EE;
          --ember:      #FF4C1F;
          --circuit:    #4CF0A8;
          --broadcast:  #FFCE3D;
          --signal:     #A78BFF;
          --blueprint:  #1A8CFF;
          --n-800: #1C1C28;
          --n-700: #2E2E40;
          --n-500: #484860;
          --n-400: #7A7A96;
          --n-200: #B0B0C4;
          --n-100: #E0DDD8;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--void);
          color: var(--canvas);
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ─── HERO ─────────────────────────────────────── */
        .hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 64px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 70% at 50% 50%, rgba(14,14,20,0.35) 0%, rgba(14,14,20,0.88) 100%),
            linear-gradient(180deg, rgba(14,14,20,0.6) 0%, transparent 25%, transparent 65%, rgba(14,14,20,0.75) 100%);
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px 20px;
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-content-inner {
          background: rgba(14,14,20,0.55);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: clamp(32px, 5vw, 56px);
          width: 100%;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.1s;
          opacity: 0;
          flex-wrap: wrap;
        }

        .hero-eyebrow-line {
          width: 24px;
          height: 2px;
          background: var(--ember);
          flex-shrink: 0;
        }

        .hero-eyebrow-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ember);
        }

        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 7vw, 58px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 22px;
          color: var(--canvas);
          text-shadow: 0 2px 24px rgba(14,14,20,0.9);
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .hero-headline em {
          font-style: normal;
          color: var(--ember);
        }

        .hero-sub {
          font-size: clamp(15px, 2vw, 16px);
          font-weight: 400;
          line-height: 1.65;
          color: #e8e5e1;
          max-width: 560px;
          margin: 0 auto 36px;
          text-align: center;
          text-shadow: 0 1px 12px rgba(14,14,20,0.95);
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.35s;
          opacity: 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .btn-primary {
          background: var(--ember);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 7px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-block;
          border: none;
          cursor: pointer;
          min-height: 48px;
          display: inline-flex;
          align-items: center;
        }

        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

        /* ─── GUIDES GRID ─────────────────────────────── */
        .guides {
          padding: 60px 0;
          background: var(--n-800);
        }

        .guides-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .guides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .guide-card {
          background: var(--void);
          border: 1px solid var(--n-700);
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
          color: inherit;
        }

        .guide-card:hover {
          border-color: rgba(255,76,31,0.4);
          transform: translateY(-3px);
        }

        .guide-card-top {
          height: 200px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 16px;
          background: linear-gradient(160deg, #1a1230 0%, #0E0E14 100%);
        }

        .guide-card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .guide-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25;
          color: var(--canvas);
          margin-bottom: 10px;
          flex: 1;
        }

        /* ─── CATEGORIES ─────────────────────────────── */
        .categories {
          padding: 60px 0;
          background: var(--void);
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .cat-card {
          border: 1px solid var(--n-700);
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          background: var(--n-800);
          transition: border-color 0.2s, transform 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: inherit;
          min-height: 120px;
        }

        .cat-card:hover {
          border-color: var(--n-500);
          transform: translateY(-2px);
        }

        .cat-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--canvas);
        }

        /* ─── NEWSLETTER ─────────────────────────────── */
        .newsletter {
          padding: 60px 0;
          background: var(--n-800);
          border-top: 1px solid var(--n-700);
          border-bottom: 1px solid var(--n-700);
        }

        .newsletter-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .newsletter-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 700;
          line-height: 1.1;
          color: var(--canvas);
          margin-bottom: 16px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .newsletter-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .newsletter-input {
          flex: 1;
          min-width: 200px;
          background: var(--void);
          border: 1px solid var(--n-700);
          border-radius: 7px;
          padding: 13px 18px;
          font-size: 14px;
          color: var(--canvas);
          outline: none;
          transition: border-color 0.2s;
        }

        .newsletter-input::placeholder { color: var(--n-500); }
        .newsletter-input:focus { border-color: var(--n-500); }

        .newsletter-submit {
          background: var(--ember);
          color: #fff;
          border: none;
          border-radius: 7px;
          padding: 13px 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
          min-height: 48px;
        }

        .newsletter-submit:hover { opacity: 0.88; }

        /* ─── FOOTER ────────────────────────────────── */
        footer {
          background: var(--void);
          padding: 40px 0 20px;
          border-top: 1px solid rgba(255,255,255,0.04);
          text-align: center;
        }

        .footer-copy {
          font-size: 12px;
          color: var(--n-500);
        }

        /* ─── ANIMATIONS ─────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── RESPONSIVE ──────────────────────────────– */
        @media (max-width: 768px) {
          .hero-left { padding: 20px 16px; }
          .hero-content-inner { padding: clamp(24px, 4vw, 32px); }
          
          .guides-header { flex-direction: column; align-items: flex-start; }
          .guides-grid { grid-template-columns: 1fr; }

          .cat-grid { grid-template-columns: repeat(2, 1fr); }
          
          .newsletter-inner {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .newsletter-row {
            flex-direction: column;
          }

          .newsletter-input,
          .newsletter-submit {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          body { font-size: 15px; }
          
          .hero-headline { font-size: 28px; }
          .hero-sub { font-size: 14px; }
          
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary { width: 100%; }
          
          .cat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navigation />

      <main>
        <section className="hero">
          <div className="hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1400&h=800&fit=crop"
              alt="Modern creator workspace with standing desk, monitor, and professional equipment"
            />
            <div className="hero-bg-overlay"></div>
          </div>

          <div className="hero-left">
            <div className="hero-content-inner">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-line"></div>
                <span className="hero-eyebrow-text">Workspace guides for creators</span>
                <div className="hero-eyebrow-line"></div>
              </div>

              <h1 className="hero-headline">
                Everything you need to create your best work
              </h1>

              <p className="hero-sub">
                Standing desks, chairs, lighting, audio, cameras. Honest reviews. Real budgets. No BS.
              </p>

              <div className="hero-actions">
                <a href="/posts" className="btn-primary">Browse all guides</a>
              </div>
            </div>
          </div>
        </section>

        <section className="guides">
          <div className="container">
            <div className="guides-header">
              <h2>Featured guides</h2>
              <a href="/posts" style={{ color: 'var(--ember)', textDecoration: 'none', fontWeight: '500' }}>
                View all →
              </a>
            </div>

            <div className="guides-grid">
              <a href="/posts/standing-desk" className="guide-card">
                <div className="guide-card-top"></div>
                <div className="guide-card-body">
                  <div className="guide-card-title">Standing Desk Buying Guide</div>
                  <p style={{ fontSize: '13px', color: 'var(--n-400)', margin: 0 }}>Compare Uplift, FlexiSpot, Autonomous</p>
                </div>
              </a>

              <a href="/posts/ergonomic-chairs" className="guide-card">
                <div className="guide-card-top"></div>
                <div className="guide-card-body">
                  <div className="guide-card-title">Best Ergonomic Chairs</div>
                  <p style={{ fontSize: '13px', color: 'var(--n-400)', margin: 0 }}>Budget to premium options</p>
                </div>
              </a>

              <a href="/posts/studio-lighting" className="guide-card">
                <div className="guide-card-top"></div>
                <div className="guide-card-body">
                  <div className="guide-card-title">Studio Lighting for Creators</div>
                  <p style={{ fontSize: '13px', color: 'var(--n-400)', margin: 0 }}>Ring lights, key lights, setups</p>
                </div>
              </a>

              <a href="/posts/podcast-equipment" className="guide-card">
                <div className="guide-card-top"></div>
                <div className="guide-card-body">
                  <div className="guide-card-title">Podcast Equipment Guide</div>
                  <p style={{ fontSize: '13px', color: 'var(--n-400)', margin: 0 }}>USB vs XLR, complete setups</p>
                </div>
              </a>

              <a href="/posts/best-cameras" className="guide-card">
                <div className="guide-card-top"></div>
                <div className="guide-card-body">
                  <div className="guide-card-title">Best Cameras for YouTube</div>
                  <p style={{ fontSize: '13px', color: 'var(--n-400)', margin: 0 }}>Sony, Canon, DJI comparison</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="container">
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '700', marginBottom: '40px' }}>
              Browse by category
            </h2>

            <div className="cat-grid">
              <a href="/categories/desks" className="cat-card">
                <div style={{ fontSize: '24px' }}>🖥️</div>
                <div className="cat-name">Desks</div>
              </a>
              <a href="/categories/chairs" className="cat-card">
                <div style={{ fontSize: '24px' }}>🪑</div>
                <div className="cat-name">Chairs</div>
              </a>
              <a href="/categories/audio" className="cat-card">
                <div style={{ fontSize: '24px' }}>🎙️</div>
                <div className="cat-name">Audio</div>
              </a>
              <a href="/categories/cameras" className="cat-card">
                <div style={{ fontSize: '24px' }}>📸</div>
                <div className="cat-name">Cameras</div>
              </a>
              <a href="/categories/keyboards" className="cat-card">
                <div style={{ fontSize: '24px' }}>⌨️</div>
                <div className="cat-name">Keyboards</div>
              </a>
              <a href="/categories/monitors" className="cat-card">
                <div style={{ fontSize: '24px' }}>🖨️</div>
                <div className="cat-name">Monitors</div>
              </a>
              <a href="/categories/cables" className="cat-card">
                <div style={{ fontSize: '24px' }}>📦</div>
                <div className="cat-name">Organization</div>
              </a>
            </div>
          </div>
        </section>

        <section id="newsletter" className="newsletter">
          <div className="container">
            <div className="newsletter-inner">
              <div>
                <h2 className="newsletter-title">New guides every week</h2>
                <p style={{ fontSize: '15px', color: 'var(--n-400)', lineHeight: '1.6' }}>
                  Honest workspace reviews, real budgets, practical recommendations. No spam.
                </p>
              </div>
              <div className="newsletter-form">
                <div className="newsletter-row">
                  <input type="email" className="newsletter-input" placeholder="your@email.com" />
                  <button className="newsletter-submit">Subscribe</button>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--n-500)' }}>
                  One email per week. Unsubscribe anytime.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p className="footer-copy">© 2026 Createscape. Honest workspace guides for creators.</p>
        </div>
      </footer>
    </>
  )
}
