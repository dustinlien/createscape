'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const words = document.querySelectorAll('.cycle-word')
    let current = 0
    const interval = setInterval(() => {
      words[current].classList.remove('active')
      words[current].classList.add('exit')
      const prev = current
      current = (current + 1) % words.length
      words[current].classList.add('active')
      setTimeout(() => words[prev].classList.remove('exit'), 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

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

        /* ─── NAV ─────────────────────────────────────── */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 40px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14,14,20,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--canvas);
          text-decoration: none;
        }

        .nav-logo span { color: var(--ember); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          font-size: 13px;
          font-weight: 400;
          color: var(--n-400);
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--canvas); }

        .nav-cta {
          background: var(--ember);
          color: #fff !important;
          padding: 10px 18px;
          border-radius: 6px;
          font-weight: 500 !important;
          font-size: 13px !important;
          transition: opacity 0.2s !important;
          min-height: 44px;
          display: inline-flex !important;
          align-items: center;
        }

        .nav-cta:hover { opacity: 0.88; }

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
          object-position: center center;
          display: block;
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
          padding: 80px 40px;
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-content-inner {
          background: rgba(14,14,20,0.55);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 56px 64px;
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
          text-shadow: 0 1px 8px rgba(14,14,20,0.9);
        }

        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 4.2vw, 58px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 22px;
          color: var(--canvas);
          text-shadow: 0 2px 24px rgba(14,14,20,0.9), 0 1px 4px rgba(14,14,20,0.8);
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .hero-headline em {
          font-style: normal;
          color: var(--ember);
        }

        .hero-sub {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.65;
          color: #e8e5e1;
          max-width: 560px;
          margin: 0 auto 36px;
          text-align: center;
          text-shadow: 0 1px 12px rgba(14,14,20,0.95), 0 1px 3px rgba(14,14,20,0.9);
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.35s;
          opacity: 0;
        }

        .hero-sub strong {
          color: var(--canvas);
          font-weight: 500;
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
        }

        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

        .btn-ghost {
          color: var(--n-400);
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }

        .btn-ghost:hover { color: var(--canvas); }

        .btn-ghost::after { content: '→'; }

        /* ─── SECTION COMMONS ──────────────────────────── */
        section { position: relative; }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--n-500);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .section-label::before {
          content: '';
          width: 20px;
          height: 1px;
          background: var(--n-500);
          flex-shrink: 0;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--canvas);
        }

        .section-title em {
          font-style: normal;
          color: var(--ember);
        }

        /* ─── ABOUT / POSITIONING ──────────────────────── */
        .about {
          padding: 120px 0;
          background: var(--void);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-copy {
          font-size: 16px;
          line-height: 1.75;
          color: var(--n-400);
          margin-top: 28px;
        }

        .about-copy p + p { margin-top: 20px; }

        .about-copy strong {
          color: var(--canvas);
          font-weight: 500;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-card {
          background: var(--n-800);
          border: 1px solid var(--n-700);
          border-radius: 12px;
          padding: 24px 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: border-color 0.2s;
        }

        .about-card:hover { border-color: var(--n-500); }

        .about-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          background: rgba(255,76,31,0.15);
        }

        .about-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--canvas);
          margin-bottom: 4px;
        }

        .about-card-text {
          font-size: 13px;
          color: var(--n-400);
          line-height: 1.55;
        }

        /* ─── GUIDES GRID ─────────────────────────────── */
        .guides {
          padding: 120px 0;
          background: var(--n-800);
        }

        .guides-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 56px;
        }

        .view-all {
          font-size: 13px;
          color: var(--ember);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          transition: gap 0.2s;
          cursor: pointer;
        }

        .view-all:hover { gap: 10px; }

        .guides-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
          position: relative;
          color: inherit;
          cursor: pointer;
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
        }

        .guide-bg-1 { background: linear-gradient(160deg, #1a1230 0%, #0E0E14 100%); }
        .guide-bg-2 { background: linear-gradient(160deg, #121e2a 0%, #0E0E14 100%); }
        .guide-bg-3 { background: linear-gradient(160deg, #1e1520 0%, #0E0E14 100%); }
        .guide-bg-4 { background: linear-gradient(160deg, #1a1e14 0%, #0E0E14 100%); }
        .guide-bg-5 { background: linear-gradient(160deg, #201a10 0%, #0E0E14 100%); }

        .guide-card-top::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .guide-card-icon-large {
          font-size: 48px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          opacity: 0.2;
        }

        .guide-card-body {
          padding: 20px 22px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .guide-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 20px;
          margin-bottom: 12px;
          width: fit-content;
        }

        .tag-gear { background: rgba(76,240,168,0.1); color: var(--circuit); }
        .tag-setup { background: rgba(167,139,255,0.1); color: var(--signal); }
        .tag-audio { background: rgba(255,206,61,0.1); color: var(--broadcast); }
        .tag-guide { background: rgba(255,76,31,0.1); color: var(--ember); }

        .guide-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--canvas);
          margin-bottom: 10px;
          flex: 1;
        }

        .guide-card-desc {
          font-size: 13px;
          color: var(--n-400);
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .guide-card-meta {
          font-size: 11px;
          color: var(--n-500);
          font-family: 'JetBrains Mono', monospace;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .guide-card.featured {
          grid-column: span 2;
          flex-direction: row;
        }

        .guide-card.featured .guide-card-top {
          width: 340px;
          min-width: 340px;
          height: auto;
          border-radius: 0;
        }

        .guide-card.featured .guide-card-body {
          padding: 32px 32px;
        }

        .guide-card.featured .guide-card-title {
          font-size: 22px;
        }

        /* ─── CATEGORIES ─────────────────────────────── */
        .categories {
          padding: 120px 0;
          background: var(--void);
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .cat-card {
          border: 1px solid var(--n-700);
          border-radius: 12px;
          padding: 28px 24px;
          text-decoration: none;
          background: var(--n-800);
          transition: border-color 0.2s, transform 0.2s, background 0.2s;
          display: flex;
          flex-direction: column;
          gap: 14px;
          cursor: pointer;
          color: inherit;
        }

        .cat-card:hover {
          border-color: var(--n-500);
          transform: translateY(-2px);
          background: var(--n-700);
        }

        .cat-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .cat-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--canvas);
          letter-spacing: -0.01em;
        }

        .cat-count {
          font-size: 12px;
          color: var(--n-400);
          margin-top: -6px;
        }

        .cat-arrow {
          font-size: 16px;
          color: var(--n-500);
          margin-top: auto;
          transition: color 0.2s, transform 0.2s;
        }

        .cat-card:hover .cat-arrow {
          color: var(--ember);
          transform: translateX(4px);
        }

        /* ─── NEWSLETTER ──────────────────────────────── */
        .newsletter {
          padding: 100px 0;
          background: var(--n-800);
          border-top: 1px solid var(--n-700);
          border-bottom: 1px solid var(--n-700);
        }

        .newsletter-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .newsletter-title {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--canvas);
          margin-bottom: 16px;
        }

        .newsletter-title em {
          font-style: normal;
          color: var(--ember);
        }

        .newsletter-sub {
          font-size: 15px;
          color: var(--n-400);
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .newsletter-row {
          display: flex;
          gap: 10px;
        }

        .newsletter-input {
          flex: 1;
          background: var(--void);
          border: 1px solid var(--n-700);
          border-radius: 7px;
          padding: 13px 18px;
          font-family: 'DM Sans', sans-serif;
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
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .newsletter-submit:hover { opacity: 0.88; }

        .newsletter-promise {
          font-size: 11px;
          color: var(--n-500);
        }

        /* ─── FOOTER ────────────────────────────────── */
        footer {
          background: var(--void);
          padding: 60px 0 40px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          margin-bottom: 28px;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--canvas);
          text-decoration: none;
        }

        .footer-logo span { color: var(--ember); }

        .footer-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }

        .footer-links a {
          font-size: 13px;
          color: var(--n-400);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: var(--canvas); }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copy {
          font-size: 12px;
          color: var(--n-500);
        }

        .footer-accent {
          display: flex;
          gap: 6px;
        }

        .footer-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        
        @media (max-width: 768px) {
          .cat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .cat-grid {
            grid-template-columns: 1fr;
          }
        }

        
        @media (max-width: 1024px) {
          .guides-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .guides-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .guides-grid {
            grid-template-columns: 1fr;
          }

          .guides-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        
        @media (max-width: 768px) {
          .newsletter-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .newsletter-title {
            font-size: clamp(24px, 5vw, 32px);
          }

          .newsletter-row {
            flex-direction: column;
          }

          .newsletter-input,
          .newsletter-submit {
            width: 100%;
          }
        }

        
        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .footer-links {
            flex-direction: column;
            gap: 12px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        /* ─── ANIMATIONS ─────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── WORD CYCLE ─────────────────────────────── */
        .hero-word-cycle {
          position: relative;
          display: inline-block;
          color: var(--ember);
        }

        .cycle-word {
          display: inline-block;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          transform: translateY(16px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          white-space: nowrap;
          pointer-events: none;
        }

        .cycle-word.active {
          opacity: 1;
          position: relative;
          transform: translateY(0);
          pointer-events: auto;
        }

        .cycle-word.exit {
          opacity: 0;
          position: absolute;
          transform: translateY(-16px);
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">Create<span>scape</span></a>
        <ul className="nav-links">
          <li><a href="/posts">Guides</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/newsletter" className="nav-cta">Get the newsletter</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1600&h=900&fit=crop" alt="Creator at their workspace with professional setup including standing desk, monitor, and studio lighting" />
          <div className="hero-bg-overlay"></div>
        </div>

        <div className="hero-left">
          <div className="hero-content-inner">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line"></div>
              <span className="hero-eyebrow-text">Workspace gear & inspiration for creators</span>
              <div className="hero-eyebrow-line"></div>
            </div>

            <h1 className="hero-headline">
              Everything you need<br />to create your<br />best <span className="hero-word-cycle"><span className="cycle-word active">videos.</span><span className="cycle-word">podcast.</span><span className="cycle-word">app.</span><span className="cycle-word">business.</span></span>
            </h1>

            <p className="hero-sub">
              Top creators build environments that make their best work feel effortless. Createscape makes it easy to <strong>discover the best gear, tools, and setups</strong> to build a workspace that feels like home — and get inspired along the way.
            </p>

            <div className="hero-actions">
              <a href="/posts" className="btn-primary">Browse all guides</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">What we're building</div>
              <h2 className="section-title">Gear intel for people<br />who <em>actually ship.</em></h2>
              <div className="about-copy">
                <p>Most workspace content is either generic roundups or spec-sheet noise. We're building something different: <strong>honest, in-depth guides</strong> built around how creators actually work — from the developer with three monitors and a mechanical keyboard habit, to the podcaster who turned a closet into a proper studio.</p>
                <p>Whether you're setting up your first proper home office or rebuilding from scratch, Createscape covers the decisions that matter: what to buy, what to skip, and what's actually worth the money.</p>
                <p>And soon — <strong>real creator workspace features</strong>. Real people, real gear, real spaces you can actually get inspired by.</p>
              </div>
            </div>
            <div className="about-right">
              <div className="about-card">
                <div className="about-card-icon">🎯</div>
                <div>
                  <div className="about-card-title">Built for all creator types</div>
                  <div className="about-card-text">Developers, video creators, podcasters, streamers, writers — if you work from a desk, we've got you covered.</div>
                </div>
              </div>
              <div className="about-card">
                <div className="about-card-icon">🔧</div>
                <div>
                  <div className="about-card-title">Practical, not aspirational</div>
                  <div className="about-card-text">We cover real budget ranges, real tradeoffs, and real setups — not just what looks good in a photoshoot.</div>
                </div>
              </div>
              <div className="about-card">
                <div className="about-card-icon">📸</div>
                <div>
                  <div className="about-card-title">Real creator workspaces, coming soon</div>
                  <div className="about-card-text">We're building a directory of featured creator spaces — real people, real gear lists, real costs. No stock photos.</div>
                </div>
              </div>
              <div className="about-card">
                <div className="about-card-icon">✍️</div>
                <div>
                  <div className="about-card-title">Gear that actually ships</div>
                  <div className="about-card-text">Every product we recommend is available to buy today. No vaporware, no out-of-stock dead ends.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="guides">
        <div className="container">
          <div className="guides-header">
            <div>
              <div className="section-label">Creator workspace guides</div>
              <h2 className="section-title">Start building<br />your setup.</h2>
            </div>
            <a href="/posts" className="view-all">View all guides</a>
          </div>

          <div className="guides-grid">
            {/* Featured card */}
            <a href="/posts/standing-desk" className="guide-card featured">
              <div className="guide-card-top guide-bg-1"></div>
              <div className="guide-card-body">
                <span className="guide-tag tag-gear">Buyer's Guide</span>
                <div className="guide-card-title">The Standing Desk Buyer's Guide: Uplift vs FlexiSpot vs Autonomous (and who each is actually for)</div>
                <div className="guide-card-desc">The marketing all looks the same. The real differences are in the motors, warranties, and what happens when something breaks two years in. We break it down.</div>
                <div className="guide-card-meta">
                  <span>12 min read</span>
                  <span>Updated March 2026</span>
                </div>
              </div>
            </a>

            {/* Other cards */}
            <a href="/posts/ergonomic-chairs" className="guide-card">
              <div className="guide-card-top guide-bg-2">
                <div className="guide-card-icon-large">🪑</div>
              </div>
              <div className="guide-card-body">
                <span className="guide-tag tag-setup">Ergonomics</span>
                <div className="guide-card-title">Best Ergonomic Chairs for Long Work Sessions</div>
                <div className="guide-card-desc">From $200 budget picks to the Herman Miller Aeron — what's actually worth it and what you're just paying for the logo.</div>
                <div className="guide-card-meta">
                  <span>9 min read</span>
                </div>
              </div>
            </a>

            <a href="/posts/lighting-biophilic" className="guide-card">
              <div className="guide-card-top guide-bg-3">
                <div className="guide-card-icon-large">💡</div>
              </div>
              <div className="guide-card-body">
                <span className="guide-tag tag-audio">Lighting & Aesthetic</span>
                <div className="guide-card-title">Lighting Your Workspace: Bias Lights, Ring Lights & Biophilic Design</div>
                <div className="guide-card-desc">Good lighting isn't just for video. It changes how your space feels, how long you can focus, and yes — how your webcam looks on calls.</div>
                <div className="guide-card-meta">
                  <span>7 min read</span>
                </div>
              </div>
            </a>

            <a href="/posts/setup-tours" className="guide-card">
              <div className="guide-card-top guide-bg-4">
                <div className="guide-card-icon-large">📸</div>
              </div>
              <div className="guide-card-body">
                <span className="guide-tag tag-guide">Creator Setups</span>
                <div className="guide-card-title">10 Real Creator Setups — What They Actually Spent</div>
                <div className="guide-card-desc">No aesthetic staging. Real desks, real gear, real price tags. From the $800 starter build to the full production studio.</div>
                <div className="guide-card-meta">
                  <span>15 min read</span>
                </div>
              </div>
            </a>

            <a href="/posts/podcast-gear" className="guide-card">
              <div className="guide-card-top guide-bg-5">
                <div className="guide-card-icon-large">🎙️</div>
              </div>
              <div className="guide-card-body">
                <span className="guide-tag tag-audio">Audio & Podcast</span>
                <div className="guide-card-title">Podcast Gear for Every Budget: Under $200, $500, $1k+</div>
                <div className="guide-card-desc">The USB mic vs XLR debate, interface options, and how to treat a room without gutting your walls. Everything you need, nothing you don't.</div>
                <div className="guide-card-meta">
                  <span>10 min read</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <div className="container">
          <div>
            <div className="section-label">Browse by category</div>
            <h2 className="section-title">Find what your<br />setup is missing.</h2>
          </div>

          <div className="cat-grid">
            <a href="/categories/desks" className="cat-card">
              <div className="cat-icon" style={{ background: 'rgba(76,240,168,0.1)' }}>🖥️</div>
              <div>
                <div className="cat-name">Desks & Surfaces</div>
                <div className="cat-count">Standing desks, desk mats, cable trays</div>
              </div>
              <div className="cat-arrow">→</div>
            </a>
            <a href="/categories/seating" className="cat-card">
              <div className="cat-icon" style={{ background: 'rgba(167,139,255,0.1)' }}>🪑</div>
              <div>
                <div className="cat-name">Seating & Ergonomics</div>
                <div className="cat-count">Chairs, footrests, monitor arms</div>
              </div>
              <div className="cat-arrow">→</div>
            </a>
            <a href="/categories/audio-video" className="cat-card">
              <div className="cat-icon" style={{ background: 'rgba(255,206,61,0.1)' }}>🎙️</div>
              <div>
                <div className="cat-name">Audio & Video</div>
                <div className="cat-count">Mics, cameras, lights, interfaces</div>
              </div>
              <div className="cat-arrow">→</div>
            </a>
            <a href="/categories/peripherals" className="cat-card">
              <div className="cat-icon" style={{ background: 'rgba(255,76,31,0.1)' }}>⌨️</div>
              <div>
                <div className="cat-name">Keyboards & Peripherals</div>
                <div className="cat-count">Mechanical keyboards, mice, pads</div>
              </div>
              <div className="cat-arrow">→</div>
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div>
              <h2 className="newsletter-title">New guides, every<br /><em>single week.</em></h2>
              <p className="newsletter-sub">We cover one piece of the setup puzzle each week — honest reviews, real comparisons, and the occasional "we bought this so you don't have to."</p>
            </div>
            <div className="newsletter-form">
              <div className="newsletter-row">
                <input type="email" className="newsletter-input" placeholder="your@email.com" />
                <button className="newsletter-submit">Subscribe free</button>
              </div>
              <div className="newsletter-promise">No spam. One email per week. Unsubscribe any time.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <a href="/" className="footer-logo">Create<span>scape</span></a>
            <ul className="footer-links">
              <li><a href="/posts">Guides</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2026 Createscape. All rights reserved.</span>
            <div className="footer-accent">
              <div className="footer-dot" style={{ background: 'var(--ember)' }}></div>
              <div className="footer-dot" style={{ background: 'var(--circuit)' }}></div>
              <div className="footer-dot" style={{ background: 'var(--broadcast)' }}></div>
              <div className="footer-dot" style={{ background: 'var(--signal)' }}></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
