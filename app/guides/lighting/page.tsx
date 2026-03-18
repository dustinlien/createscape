import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Complete Lighting Guide for Creators 2026 | Setup, Positioning, Equipment",
  description: "Master lighting guide for creators. Ring lights, key lights, 3-light setups, bias lighting. Improve your on-camera appearance and productivity.",
}

export default function LightingGuide() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>The Complete Creator Lighting Guide</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Master lighting for video, streaming, and on-camera presence. From budget ring lights to professional 3-light setups.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Why Lighting Matters</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            Lighting is the single most impactful thing you can change about your video appearance. Better lighting:
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li>Makes you look healthier and more alert on camera</li>
            <li>Improves perceived professionalism by 3-5x</li>
            <li>Reduces eye strain and increases focus time</li>
            <li>Affects mood and energy in your workspace</li>
            <li>Can be done for under $200</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Lighting Types</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Ring Lights</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              Best for: Vlogging, streaming, close-up content
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Even light, eliminates shadows, affordable. See <a href="/posts/studio-lighting" style={{ color: 'var(--blueprint)' }}>full ring light guide</a>.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Key Light Setup (1-Light)</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              Best for: Budget creators, Zoom calls
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Single directional light creates separation and dimension.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Key + Fill Setup (2-Light)</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              Best for: Professional video production
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Key light + fill light removes harsh shadows, looks polished.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>3-Light Setup</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              Best for: Studio production, professional content
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Key + fill + back light creates professional separation and depth.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Positioning Tips</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Key light 45° to side</strong> — Creates dimension</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Fill light opposite</strong> — Reduces harsh shadows</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Avoid overhead lighting</strong> — Creates unflattering shadows</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Consider color temperature</strong> — 5500K for natural look</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Budget Breakdowns</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '15px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--n-700)' }}>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', color: 'var(--canvas)' }}>Setup Type</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', color: 'var(--canvas)' }}>Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--n-700)' }}>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--canvas)' }}>Ring Light Only</td>
                <td style={{ padding: '12px', color: 'var(--n-400)' }}>$50-150</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--n-700)' }}>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--canvas)' }}>Key Light 1-Light</td>
                <td style={{ padding: '12px', color: 'var(--n-400)' }}>$100-300</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--n-700)' }}>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--canvas)' }}>Key + Fill Setup</td>
                <td style={{ padding: '12px', color: 'var(--n-400)' }}>$200-500</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: '500', color: 'var(--canvas)' }}>3-Light Studio</td>
                <td style={{ padding: '12px', color: 'var(--n-400)' }}>$500-1,500</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Full Guides by Type</h2>
          <ul style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><a href="/posts/studio-lighting" style={{ color: 'var(--blueprint)' }}>Studio Lighting Complete Guide</a> — Ring lights, key lights, 3-light setups</li>
            <li><a href="/posts/lighting-biophilic" style={{ color: 'var(--blueprint)' }}>Lighting & Biophilic Design</a> — Aesthetic + functional lighting</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
