import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Standing Desks & Desk Guides for Creators | Createscape",
  description: "Complete standing desk buying guide. Compare Uplift V3, FlexiSpot E7, Autonomous. Budget to premium options. Real reviews and pricing.",
}

export default function DeskCategory() {
  return (
    <main style={{
      background: 'var(--void)',
      color: 'var(--canvas)',
      minHeight: '100vh',
      paddingTop: '64px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Desks & Workspace Surfaces
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'var(--n-400)',
          marginBottom: '40px'
        }}>
          Guides to standing desks, sit-stand desks, and desk surfaces for creators.
        </p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            In This Category
          </h2>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--n-400)',
            marginLeft: '24px'
          }}>
            <li style={{ marginBottom: '16px' }}>
              <a href="/posts/standing-desk" style={{ color: 'var(--blueprint)' }}>Standing Desk Buying Guide</a>
              {' — '}Compare Uplift, FlexiSpot, Autonomous with full breakdown of motors, stability, warranty
            </li>
            <li style={{ marginBottom: '16px' }}>
              <a href="/posts/cable-management" style={{ color: 'var(--blueprint)' }}>Cable Management Hacks</a>
              {' — '}Organize cables and power under your desk setup
            </li>
            <li>
              <a href="/posts/budget-setup" style={{ color: 'var(--blueprint)' }}>Budget Creator Setup Under $1k</a>
              {' — '}See standing desk options in a complete budget build
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            What to Look for in a Desk
          </h2>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--n-400)',
            marginLeft: '24px'
          }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Motor quality</strong> — Dual motors are more stable than single</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Height range</strong> — 28"-47" is standard for sitting and standing</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Stability at full height</strong> — Does it wobble when fully extended?</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Noise level</strong> — Loud motors are annoying on video</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Warranty & support</strong> — What happens if it breaks in year 3?</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Desktop quality</strong> — Thickness, material, cable management holes</li>
          </ul>
        </section>

        <section style={{
          padding: '32px',
          background: 'var(--n-800)',
          borderRadius: '12px',
          border: '1px solid var(--n-700)'
        }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '16px',
            color: 'var(--canvas)'
          }}>
            Ready to Choose?
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'var(--n-400)',
            marginBottom: '20px'
          }}>
            Start with our <a href="/posts/standing-desk" style={{ color: 'var(--blueprint)' }}>complete standing desk guide</a> for a detailed comparison and real-world recommendations.
          </p>
        </section>
      </div>
    </main>
  )
}
