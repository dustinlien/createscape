'use client'

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0 40px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(14,14,20,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <a href="/" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '18px',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          color: 'var(--canvas)',
          textDecoration: 'none'
        }}>
          Create<span style={{ color: 'var(--ember)' }}>scape</span>
        </a>
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          listStyle: 'none'
        }}>
          <li><a href="/posts" style={{ fontSize: '13px', fontWeight: 400, color: 'var(--n-400)', textDecoration: 'none' }}>Guides</a></li>
          <li><a href="/categories" style={{ fontSize: '13px', fontWeight: 400, color: 'var(--n-400)', textDecoration: 'none' }}>Categories</a></li>
          <li><a href="/about" style={{ fontSize: '13px', fontWeight: 400, color: 'var(--n-400)', textDecoration: 'none' }}>About</a></li>
          <li><a href="/newsletter" style={{
            background: 'var(--ember)',
            color: '#fff',
            padding: '10px 18px',
            borderRadius: '6px',
            fontWeight: '500',
            fontSize: '13px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            height: '44px'
          }}>Get the newsletter</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        background: 'url(/hero-creator.jpg) center/cover'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, rgba(14,14,20,0.35) 0%, rgba(14,14,20,0.88) 100%),
            linear-gradient(180deg, rgba(14,14,20,0.6) 0%, transparent 25%, transparent 65%, rgba(14,14,20,0.75) 100%)
          `,
          zIndex: 1
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '80px 40px',
          position: 'relative',
          zIndex: 2,
          maxWidth: '860px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            background: 'rgba(14,14,20,0.55)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
            padding: '56px 64px',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '24px'
            }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--ember)' }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ember)',
                textShadow: '0 1px 8px rgba(14,14,20,0.9)'
              }}>Workspace gear & inspiration for creators</span>
              <div style={{ width: '24px', height: '2px', background: 'var(--ember)' }} />
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(36px, 4.2vw, 58px)',
              fontWeight: '800',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              marginBottom: '22px',
              color: 'var(--canvas)',
              textShadow: '0 2px 24px rgba(14,14,20,0.9), 0 1px 4px rgba(14,14,20,0.8)'
            }}>
              Everything you need<br />to create your<br />best <span style={{ color: 'var(--ember)' }}>videos.</span>
            </h1>

            <p style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.65',
              color: '#e8e5e1',
              maxWidth: '560px',
              margin: '0 auto 36px',
              textAlign: 'center',
              textShadow: '0 1px 12px rgba(14,14,20,0.95), 0 1px 3px rgba(14,14,20,0.9)'
            }}>
              Top creators build environments that make their best work feel effortless. Createscape makes it easy to <strong>discover the best gear, tools, and setups</strong> to build a workspace that feels like home — and get inspired along the way.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <a href="/posts" style={{
                background: 'var(--ember)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                padding: '14px 28px',
                borderRadius: '7px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'opacity 0.2s, transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '0.88';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }}>
                Browse all guides
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{
        padding: '120px 0',
        background: 'var(--void)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--n-500)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--n-500)' }} />
              What we're building
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              color: 'var(--canvas)',
              marginBottom: '28px'
            }}>
              Gear intel for people<br />who <em style={{ fontStyle: 'normal', color: 'var(--ember)' }}>actually ship.</em>
            </h2>
            <div style={{
              fontSize: '16px',
              lineHeight: '1.75',
              color: 'var(--n-400)'
            }}>
              <p style={{ marginBottom: '20px' }}>Most workspace content is either generic roundups or spec-sheet noise. We're building something different: <strong style={{ color: 'var(--canvas)', fontWeight: '500' }}>honest, in-depth guides</strong> built around how creators actually work — from the developer with three monitors and a mechanical keyboard habit, to the podcaster who turned a closet into a proper studio.</p>
              <p style={{ marginBottom: '20px' }}>Whether you're setting up your first proper home office or rebuilding from scratch, Createscape covers the decisions that matter: what to buy, what to skip, and what's actually worth the money.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '🎯', title: 'Built for all creator types', text: 'Developers, video creators, podcasters, streamers, writers — if you work from a desk, we\'ve got you covered.' },
              { icon: '🔧', title: 'Practical, not aspirational', text: 'We cover real budget ranges, real tradeoffs, and real setups — not just what looks good in a photoshoot.' },
              { icon: '📸', title: 'Real creator workspaces, coming soon', text: 'We\'re building a directory of featured creator spaces — real people, real gear lists, real costs. No stock photos.' },
              { icon: '✍️', title: 'Gear that actually ships', text: 'Every product we recommend is available to buy today. No vaporware, no out-of-stock dead ends.' }
            ].map((card, idx) => (
              <div key={idx} style={{
                background: 'var(--n-800)',
                border: '1px solid var(--n-700)',
                borderRadius: '12px',
                padding: '24px 28px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'border-color 0.2s'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                  background: 'rgba(255,76,31,0.15)'
                }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'var(--canvas)',
                    marginBottom: '4px'
                  }}>
                    {card.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--n-400)',
                    lineHeight: '1.55'
                  }}>
                    {card.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section style={{
        padding: '120px 0',
        background: 'var(--n-800)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px'
          }}>
            <div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--n-500)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--n-500)' }} />
                Latest guides
              </div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-0.025em',
                color: 'var(--canvas)'
              }}>
                Start building<br />your setup.
              </h2>
            </div>
            <a href="/posts" style={{
              fontSize: '13px',
              color: 'var(--ember)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              View all guides →
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {/* Featured card */}
            <a href="/posts/standing-desk" style={{
              gridColumn: 'span 2',
              background: 'var(--void)',
              border: '1px solid var(--n-700)',
              borderRadius: '12px',
              overflow: 'hidden',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'row',
              transition: 'border-color 0.2s, transform 0.2s',
              color: 'inherit',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '340px',
                minWidth: '340px',
                height: 'auto',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px',
                background: 'linear-gradient(160deg, #1a1230 0%, #0E0E14 100%)'
              }} />
              <div style={{
                padding: '32px 32px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: '500',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '3px 9px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                  width: 'fit-content',
                  background: 'rgba(76,240,168,0.1)',
                  color: 'var(--circuit)'
                }}>Buyer's Guide</span>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '22px',
                  fontWeight: '600',
                  lineHeight: '1.25',
                  letterSpacing: '-0.01em',
                  color: 'var(--canvas)',
                  marginBottom: '10px',
                  flex: 1
                }}>
                  The Standing Desk Buyer's Guide
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--n-400)',
                  lineHeight: '1.55',
                  marginBottom: '16px'
                }}>
                  The marketing all looks the same. The real differences are in the motors, warranties, and what happens when something breaks two years in.
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--n-500)',
                  fontFamily: "'JetBrains Mono', monospace",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span>12 min read</span>
                  <span>Updated March 2026</span>
                </div>
              </div>
            </a>

            {/* Regular cards */}
            {[
              { href: '/posts/ergonomic-chairs', emoji: '🪑', tag: 'Ergonomics', title: 'Best Ergonomic Chairs for Long Work Sessions', desc: 'From $200 budget picks to the Herman Miller Aeron — what\'s actually worth it.', time: '9 min read', bg: 'linear-gradient(160deg, #121e2a 0%, #0E0E14 100%)' },
              { href: '/posts/lighting-biophilic', emoji: '💡', tag: 'Lighting & Aesthetic', title: 'Lighting Your Workspace: Bias Lights, Ring Lights & Biophilic Design', desc: 'Good lighting isn\'t just for video. It changes how your space feels.', time: '7 min read', bg: 'linear-gradient(160deg, #1e1520 0%, #0E0E14 100%)' },
              { href: '/posts/setup-tours', emoji: '📸', tag: 'Creator Setups', title: '10 Real Creator Setups — What They Actually Spent', desc: 'No aesthetic staging. Real desks, real gear, real price tags.', time: '15 min read', bg: 'linear-gradient(160deg, #1a1e14 0%, #0E0E14 100%)' },
            ].map((guide, idx) => (
              <a key={idx} href={guide.href} style={{
                background: 'var(--void)',
                border: '1px solid var(--n-700)',
                borderRadius: '12px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s, transform 0.2s',
                color: 'inherit',
                cursor: 'pointer'
              }}>
                <div style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px',
                  background: guide.bg,
                  fontSize: '48px',
                  opacity: 0.2
                }}>
                  {guide.emoji}
                </div>
                <div style={{
                  padding: '20px 22px 24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    fontWeight: '500',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '3px 9px',
                    borderRadius: '20px',
                    marginBottom: '12px',
                    width: 'fit-content',
                    background: 'rgba(167,139,255,0.1)',
                    color: 'var(--signal)'
                  }}>{guide.tag}</span>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '17px',
                    fontWeight: '600',
                    lineHeight: '1.25',
                    letterSpacing: '-0.01em',
                    color: 'var(--canvas)',
                    marginBottom: '10px',
                    flex: 1
                  }}>
                    {guide.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--n-400)',
                    lineHeight: '1.55',
                    marginBottom: '16px'
                  }}>
                    {guide.desc}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: 'var(--n-500)',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {guide.time}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{
        padding: '120px 0',
        background: 'var(--void)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ marginBottom: '56px' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--n-500)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--n-500)' }} />
              Browse by category
            </div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              color: 'var(--canvas)'
            }}>
              Find what your<br />setup is missing.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px'
          }}>
            {[
              { icon: '🖥️', name: 'Desks & Surfaces', count: 'Standing desks, desk mats, cable trays' },
              { icon: '🪑', name: 'Seating & Ergonomics', count: 'Chairs, footrests, monitor arms' },
              { icon: '🎙️', name: 'Audio & Video', count: 'Mics, cameras, lights, interfaces' },
              { icon: '⌨️', name: 'Keyboards & Peripherals', count: 'Mechanical keyboards, mice, pads' },
            ].map((cat, idx) => (
              <a key={idx} href={`/categories/${cat.name.toLowerCase().replace(/\s/g, '-')}`} style={{
                border: '1px solid var(--n-700)',
                borderRadius: '12px',
                padding: '28px 24px',
                textDecoration: 'none',
                background: 'var(--n-800)',
                transition: 'border-color 0.2s, transform 0.2s, background 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                cursor: 'pointer',
                color: 'inherit'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  background: 'rgba(76,240,168,0.1)'
                }}>
                  {cat.icon}
                </div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--canvas)',
                  letterSpacing: '-0.01em'
                }}>
                  {cat.name}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--n-400)',
                  marginTop: '-6px'
                }}>
                  {cat.count}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: 'var(--n-500)',
                  marginTop: 'auto',
                  transition: 'color 0.2s, transform 0.2s'
                }}>
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{
        padding: '100px 0',
        background: 'var(--n-800)',
        borderTop: '1px solid var(--n-700)',
        borderBottom: '1px solid var(--n-700)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--canvas)',
              marginBottom: '16px'
            }}>
              New guides, every<br /><em style={{ fontStyle: 'normal', color: 'var(--ember)' }}>single week.</em>
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'var(--n-400)',
              lineHeight: '1.6'
            }}>
              We cover one piece of the setup puzzle each week — honest reviews, real comparisons, and the occasional "we bought this so you don't have to."
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  background: 'var(--void)',
                  border: '1px solid var(--n-700)',
                  borderRadius: '7px',
                  padding: '13px 18px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: 'var(--canvas)',
                  outline: 'none'
                }}
              />
              <button style={{
                background: 'var(--ember)',
                color: '#fff',
                border: 'none',
                borderRadius: '7px',
                padding: '13px 24px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                whiteSpace: 'nowrap'
              }}>
                Subscribe free
              </button>
            </div>
            <p style={{
              fontSize: '11px',
              color: 'var(--n-500)'
            }}>
              No spam. One email per week. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: 'var(--void)',
        padding: '60px 0 40px',
        borderTop: '1px solid rgba(255,255,255,0.04)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 60px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            marginBottom: '28px'
          }}>
            <a href="/" style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '16px',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              color: 'var(--canvas)',
              textDecoration: 'none'
            }}>
              Create<span style={{ color: 'var(--ember)' }}>scape</span>
            </a>
            <ul style={{
              display: 'flex',
              gap: '28px',
              listStyle: 'none'
            }}>
              <li><a href="/posts" style={{ fontSize: '13px', color: 'var(--n-400)', textDecoration: 'none' }}>Guides</a></li>
              <li><a href="/categories" style={{ fontSize: '13px', color: 'var(--n-400)', textDecoration: 'none' }}>Categories</a></li>
              <li><a href="/about" style={{ fontSize: '13px', color: 'var(--n-400)', textDecoration: 'none' }}>About</a></li>
              <li><a href="/newsletter" style={{ fontSize: '13px', color: 'var(--n-400)', textDecoration: 'none' }}>Newsletter</a></li>
            </ul>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{
              fontSize: '12px',
              color: 'var(--n-500)'
            }}>
              © 2026 Createscape. All rights reserved.
            </span>
            <div style={{
              display: 'flex',
              gap: '6px'
            }}>
              {['var(--ember)', 'var(--circuit)', 'var(--broadcast)', 'var(--signal)'].map((color, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: color
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>

      <script>{`
        const words = document.querySelectorAll('.cycle-word');
        let current = 0;
        setInterval(() => {
          if (words[current]) {
            words[current].classList.remove('active');
            words[current].classList.add('exit');
            const prev = current;
            current = (current + 1) % words.length;
            if (words[current]) {
              words[current].classList.add('active');
              setTimeout(() => words[prev].classList.remove('exit'), 400);
            }
          }
        }, 2200);
      `}</script>
    </>
  )
}
