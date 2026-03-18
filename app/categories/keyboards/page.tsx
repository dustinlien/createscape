import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Mechanical Keyboards for Creators | Switches, Builds, Ergonomics",
  description: "Mechanical keyboard buying guide. Switch types, ergonomic options, wireless keyboards. Find the best keyboard for your creator workflow.",
}

export default function KeyboardsCategory() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>Keyboards & Peripherals</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Guides to mechanical keyboards, mice, mousepads, and input device optimization.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Keyboard Types for Creators</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Mechanical Keyboards</strong> — Best feel and durability, loud switches</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Ergonomic Keyboards</strong> — Reduce strain on wrists</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Wireless Keyboards</strong> — Clean desk, less cable clutter</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Split Keyboards</strong> — Advanced ergonomics</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>What to Look For</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Switch type</strong> — Linear, tactile, or clicky?</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Actuation force</strong> — 45-80 grams depending on preference</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Build quality</strong> — Stabilizers, PCB, case material</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Noise level</strong> — Critical if recording audio</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Programmability</strong> — Macro support, custom layouts</li>
          </ul>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Start Exploring</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--n-400)' }}>
            Browse our keyboard guides and peripheral recommendations to optimize your input setup.
          </p>
        </section>
      </div>
    </main>
  )
}
