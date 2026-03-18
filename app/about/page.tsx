import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Createscape — Creator Workspace Experts | Tested, Honest Gear Reviews",
  description: "Learn about Createscape. We test equipment, build real setups, and provide honest workspace advice for creators. Founded by Dustin Lien, creator tools expert.",
}

export default function About() {
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
          About Createscape
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'var(--n-400)',
          marginBottom: '40px'
        }}>
          Tested equipment. Honest recommendations. Real creator workspaces.
        </p>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Why We Built This
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'var(--n-400)',
            marginBottom: '16px'
          }}>
            Most workspace content is either generic roundups or spec-sheet noise. We're building something different: <strong style={{ color: 'var(--canvas)' }}>honest, in-depth guides</strong> built around how creators actually work.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'var(--n-400)'
          }}>
            Whether you're setting up your first proper home office or rebuilding from scratch, Createscape covers the decisions that matter: what to buy, what to skip, and what's actually worth the money.
          </p>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Who We Are
          </h2>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '12px',
            color: 'var(--canvas)'
          }}>
            Dustin Lien — Founder & Creator
          </h3>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'var(--n-400)',
            marginLeft: '24px',
            marginBottom: '20px'
          }}>
            <li>8+ years building tools for creators</li>
            <li>Tested 100+ pieces of equipment in real workflows</li>
            <li>Focused on practical, not aspirational advice</li>
            <li>Creator workspace optimization specialist</li>
          </ul>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Our Testing Process
          </h2>
          <ol style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--n-400)',
            marginLeft: '24px'
          }}>
            <li style={{ marginBottom: '12px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Buy equipment ourselves</strong> — No sponsored reviews, no bias
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Test in real creator environments</strong> — Not sterile lab conditions
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Track long-term reliability</strong> — Does it last? How does it break?
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Compare real ROI</strong> — Does the benefit justify the cost?
            </li>
          </ol>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Our Commitment to You
          </h2>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--n-400)',
            marginLeft: '24px'
          }}>
            <li style={{ marginBottom: '12px' }}>
              ✓ <strong style={{ color: 'var(--canvas)' }}>No stock photos or aspirational staging</strong> — Real setups, real spaces
            </li>
            <li style={{ marginBottom: '12px' }}>
              ✓ <strong style={{ color: 'var(--canvas)' }}>Real budgets, real tradeoffs</strong> — We cover $200-$5,000 setups
            </li>
            <li style={{ marginBottom: '12px' }}>
              ✓ <strong style={{ color: 'var(--canvas)' }}>Only recommend equipment available today</strong> — No vaporware, no waiting lists
            </li>
            <li style={{ marginBottom: '12px' }}>
              ✓ <strong style={{ color: 'var(--canvas)' }}>Transparent about affiliates</strong> — We make commission, you don't pay more
            </li>
            <li style={{ marginBottom: '12px' }}>
              ✓ <strong style={{ color: 'var(--canvas)' }}>Regular updates</strong> — Products change, prices shift, we keep guides current
            </li>
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
            Ready to Build Your Setup?
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'var(--n-400)',
            marginBottom: '20px'
          }}>
            Start with our guides. Pick your budget, choose your use case, and build something that actually works for you.
          </p>
          <a href="/posts" style={{
            display: 'inline-block',
            background: 'var(--ember)',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: '7px',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'opacity 0.2s'
          }}>
            Browse All Guides
          </a>
        </section>
      </div>
    </main>
  )
}
