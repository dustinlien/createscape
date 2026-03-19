import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Complete Creator Workspace Setup Guide 2026 | Build & Optimize",
  description: "Ultimate guide to building a professional creator workspace. Desk, chair, lighting, organization. From budget setups ($1k) to premium studios ($5k+). Real examples included.",
}

export default function WorkspaceSetupGuide() {
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
          The Complete Creator Workspace Setup Guide
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'var(--n-400)',
          marginBottom: '40px'
        }}>
          Build a workspace where 8+ hours of work feels effortless. From budget builds to premium studios.
        </p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            What Makes a Great Creator Workspace?
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'var(--n-400)',
            marginBottom: '24px'
          }}>
            A professional workspace isn't defined by price tag or aesthetics. It's defined by one thing: <strong style={{ color: 'var(--canvas)' }}>can you do your best work here for 8+ hours without pain, fatigue, or distraction?</strong>
          </p>

          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--canvas)'
          }}>
            The Five Pillars of a Creator Workspace
          </h3>
          
          <ol style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--n-400)',
            marginLeft: '24px'
          }}>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--canvas)' }}>A desk that supports your posture</strong>
              <br />
              <span style={{ fontSize: '14px' }}>Standing, sitting, or adjustable. The goal: neutral spine alignment. <a href="/posts/standing-desk" style={{ color: 'var(--blueprint)' }}>Full desk guide →</a></span>
            </li>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--canvas)' }}>A chair that doesn't destroy your back</strong>
              <br />
              <span style={{ fontSize: '14px' }}>Lumbar support, adjustability, comfort for 8+ hours. <a href="/posts/ergonomic-chairs" style={{ color: 'var(--blueprint)' }}>Chair guide →</a></span>
            </li>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Lighting that looks good AND feels good</strong>
              <br />
              <span style={{ fontSize: '14px' }}>Good for your webcam, good for your eyes, good for your mood. <a href="/posts/lighting-biophilic" style={{ color: 'var(--blueprint)' }}>Lighting guide →</a></span>
            </li>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Organized cables and power</strong>
              <br />
              <span style={{ fontSize: '14px' }}>Visual chaos = mental chaos. <a href="/posts/cable-management" style={{ color: 'var(--blueprint)' }}>Cable management →</a></span>
            </li>
            <li style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Distractions minimized</strong>
              <br />
              <span style={{ fontSize: '14px' }}>Acoustic treatment, organization, focus-friendly design. <a href="/posts/lighting-biophilic" style={{ color: 'var(--blueprint)' }}>Studio setup →</a></span>
            </li>
          </ol>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Budget Breakdown by Setup Level
          </h2>

          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '24px',
            fontSize: '15px'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--n-700)' }}>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', color: 'var(--canvas)' }}>Component</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', color: 'var(--canvas)' }}>Budget Build</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', color: 'var(--canvas)' }}>Professional</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', color: 'var(--canvas)' }}>Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Desk', budget: '$300-500', pro: '$600-900', premium: '$1,000-1,500' },
                { name: 'Chair', budget: '$200-400', pro: '$500-800', premium: '$1,000-1,500' },
                { name: 'Lighting', budget: '$150-300', pro: '$400-800', premium: '$1,000-2,000' },
                { name: 'Audio (if needed)', budget: '$0-200', pro: '$300-600', premium: '$800-1,500' },
                { name: 'Organization', budget: '$100-200', pro: '$200-400', premium: '$500-1,000' },
                { name: 'Total', budget: '$750-1,600', pro: '$2,000-3,600', premium: '$4,300-8,000+' },
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--n-700)' }}>
                  <td style={{ padding: '12px', fontWeight: row.name === 'Total' ? '600' : '400', color: row.name === 'Total' ? 'var(--ember)' : 'var(--canvas)' }}>
                    {row.name}
                  </td>
                  <td style={{ padding: '12px', color: 'var(--n-400)' }}>{row.budget}</td>
                  <td style={{ padding: '12px', color: 'var(--n-400)' }}>{row.pro}</td>
                  <td style={{ padding: '12px', color: 'var(--n-400)' }}>{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{
            fontSize: '14px',
            color: 'var(--n-500)',
            fontStyle: 'italic'
          }}>
            Note: Prices are approximate and vary by region. See full <a href="/posts/budget-setup" style={{ color: 'var(--blueprint)' }}>budget setup guide</a> for real product examples.
          </p>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Step-by-Step Setup Process
          </h2>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Step 1: Assess Your Space</h3>
            <ul style={{ color: 'var(--n-400)', lineHeight: '1.7', marginLeft: '24px' }}>
              <li>Measure desk depth/width available</li>
              <li>Check natural light (windows help)</li>
              <li>Note power outlet locations</li>
              <li>Evaluate acoustics (echo? noise?)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Step 2: Start With Chair + Desk</h3>
            <p style={{ color: 'var(--n-400)', marginBottom: '12px' }}>
              These are your foundation. Comfort matters more than aesthetics. Choose based on your body and your budget.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Step 3: Add Lighting</h3>
            <p style={{ color: 'var(--n-400)', marginBottom: '12px' }}>
              Start with key light + fill light (or a good ring light). Lighting affects mood, productivity, and how you appear on camera.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Step 4: Organize Cables & Power</h3>
            <p style={{ color: 'var(--n-400)', marginBottom: '12px' }}>
              Cable management isn't decorative—it's mental clarity. <a href="/posts/cable-management" style={{ color: 'var(--blueprint)' }}>See our guide</a>.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Step 5: Iterate & Refine</h3>
            <p style={{ color: 'var(--n-400)', marginBottom: '12px' }}>
              Use your setup for 2 weeks. What hurts? What annoys you? What's missing? Then upgrade based on real problems, not theory.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'var(--ember)'
          }}>
            Real Creator Workspace Examples
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'var(--n-400)',
            marginBottom: '20px'
          }}>
            See 10 real creators' actual setups with exact budgets and product lists: <a href="/posts/setup-tours" style={{ color: 'var(--blueprint)' }}>Creator Setup Tours →</a>
          </p>
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
            FAQ
          </h2>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '8px' }}>How much should I spend on my workspace?</h3>
            <p style={{ color: 'var(--n-400)', fontSize: '15px' }}>
              Start with what you can afford. $800-1,200 gets you a solid setup. More money buys durability + comfort, not necessarily better output.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '8px' }}>Should I buy everything at once?</h3>
            <p style={{ color: 'var(--n-400)', fontSize: '15px' }}>
              No. Prioritize: Chair (comfort) → Desk (stability) → Lighting (productivity + aesthetics) → Everything else.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '8px' }}>What's most important?</h3>
            <p style={{ color: 'var(--n-400)', fontSize: '15px' }}>
              A good chair. You spend 8+ hours sitting. Back pain kills productivity faster than anything else.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
