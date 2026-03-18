import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Monitors for Creators | 4K, Ultrawide, Color-Accurate Displays",
  description: "Monitor buying guide for video editors, developers, designers. Ultrawide, 4K, color-accurate displays. Compare refresh rate, resolution, and panel types.",
}

export default function MonitorsCategory() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>Monitors & Displays</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Guides to monitors, display technology, and multi-monitor setups for creators.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Monitor Types for Creators</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Standard Monitors (27-32")</strong> — General use, affordable</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Ultrawide (34-49")</strong> — Single monitor with two screens' worth of space</li>
            <li><strong style={{ color: 'var(--canvas)' }}>4K Displays</strong> — High resolution for video editing and design</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Color-Accurate Monitors</strong> — 99% Adobe RGB, gamma calibration</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Key Specifications</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Resolution</strong> — 1080p, 1440p, 4K, ultrawide aspect ratios</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Refresh Rate</strong> — 60Hz standard, 120Hz+ for gaming</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Panel Type</strong> — IPS (color), VA (contrast), TN (speed)</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Color Gamut</strong> — sRGB, DCI-P3, Adobe RGB</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Brightness & Contrast</strong> — Room lighting dependent</li>
          </ul>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Find Your Match</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--n-400)' }}>
            See our monitor guides to find the right display for your specific workflow: development, video editing, design, or gaming.
          </p>
        </section>
      </div>
    </main>
  )
}
