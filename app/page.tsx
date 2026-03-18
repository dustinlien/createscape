'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--cs-void)', color: 'var(--cs-canvas)' }}>
      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px 60px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '64px', 
            fontFamily: 'var(--font-syne)', 
            fontWeight: '700',
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Createscape
          </h1>
          <p style={{ 
            fontSize: '24px', 
            color: 'var(--cs-n-400)',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Build a workspace that transforms your creativity
          </p>
          <p style={{ 
            fontSize: '16px', 
            color: 'var(--cs-n-500)',
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: '1.6'
          }}>
            Comprehensive guides to standing desks, ergonomic chairs, lighting, and everything else creators need to build the perfect setup.
          </p>

          {/* Email Signup */}
          <div style={{
            backgroundColor: 'var(--cs-n-800)',
            border: '1px solid var(--cs-n-700)',
            borderRadius: '12px',
            padding: '40px',
            maxWidth: '500px',
            margin: '0 auto 80px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'var(--font-syne)',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Get Weekly Setup Tips
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--cs-n-400)',
              marginBottom: '24px'
            }}>
              New guides, product reviews, and creator interviews every week.
            </p>
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--cs-n-500)',
              fontStyle: 'italic'
            }}>
              Email signup coming soon — Kit integration in progress
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{
          fontSize: '40px',
          fontFamily: 'var(--font-syne)',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          Popular Guides
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {/* Card 1 */}
          <Link href="/posts/standing-desk" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              backgroundColor: 'var(--cs-n-800)',
              border: '1px solid var(--cs-n-700)',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-ember)';
              el.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-n-700)';
              el.style.transform = 'translateY(0)';
            }}>
              <h3 style={{
                fontSize: '20px',
                fontFamily: 'var(--font-syne)',
                fontWeight: '600',
                color: 'var(--cs-ember)',
                marginBottom: '12px'
              }}>
                Standing Desk Buyer's Guide
              </h3>
              <p style={{ color: 'var(--cs-n-400)', fontSize: '14px' }}>
                Compare Uplift, FlexiSpot, Autonomous, and more. Find the perfect desk for your setup.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/posts/ergonomic-chairs" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              backgroundColor: 'var(--cs-n-800)',
              border: '1px solid var(--cs-n-700)',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-broadcast)';
              el.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-n-700)';
              el.style.transform = 'translateY(0)';
            }}>
              <h3 style={{
                fontSize: '20px',
                fontFamily: 'var(--font-syne)',
                fontWeight: '600',
                color: 'var(--cs-broadcast)',
                marginBottom: '12px'
              }}>
                Best Ergonomic Chairs
              </h3>
              <p style={{ color: 'var(--cs-n-400)', fontSize: '14px' }}>
                From budget Eureka to premium Aeron. Chairs that support long streams.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/posts/lighting-biophilic" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              backgroundColor: 'var(--cs-n-800)',
              border: '1px solid var(--cs-n-700)',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-circuit)';
              el.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-n-700)';
              el.style.transform = 'translateY(0)';
            }}>
              <h3 style={{
                fontSize: '20px',
                fontFamily: 'var(--font-syne)',
                fontWeight: '600',
                color: 'var(--cs-circuit)',
                marginBottom: '12px'
              }}>
                Lighting & Biophilic Design
              </h3>
              <p style={{ color: 'var(--cs-n-400)', fontSize: '14px' }}>
                Ring lights, bias lighting, and plants. Transform your aesthetic.
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/posts/setup-tours" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              backgroundColor: 'var(--cs-n-800)',
              border: '1px solid var(--cs-n-700)',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-signal)';
              el.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-n-700)';
              el.style.transform = 'translateY(0)';
            }}>
              <h3 style={{
                fontSize: '20px',
                fontFamily: 'var(--font-syne)',
                fontWeight: '600',
                color: 'var(--cs-signal)',
                marginBottom: '12px'
              }}>
                Real Creator Setups
              </h3>
              <p style={{ color: 'var(--cs-n-400)', fontSize: '14px' }}>
                10 real creators, real setups, real costs. Learn from the best.
              </p>
            </div>
          </Link>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/posts" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: 'var(--cs-ember)',
              color: '#FFFFFF',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = '#E63D1A';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'var(--cs-ember)';
              el.style.transform = 'translateY(0)';
            }}>
              View All Guides
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        backgroundColor: 'var(--cs-n-800)',
        padding: '80px 20px',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '40px',
            fontFamily: 'var(--font-syne)',
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Why Createscape?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--cs-n-400)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Setup matters. A great chair reduces back pain. Good lighting improves focus. Organized cables reduce mental clutter. We help creators build workspaces that work.
          </p>
        </div>
      </section>
    </main>
  )
}
