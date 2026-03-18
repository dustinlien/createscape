import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cable Management & Organization Guides | Desk Cable Organization",
  description: "Cable management guide for creator workspaces. Organize cables, power, and reduce desk clutter. Tools and techniques for clean desk setup.",
}

export default function CablesCategory() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>Organization & Cables</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Guides to cable management, desk organization, and keeping your workspace clean and functional.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Why Cable Management Matters</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            Visual chaos creates mental chaos. A organized workspace isn't just aesthetically pleasing—it affects focus, productivity, and how professional you look on camera.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Mental clarity</strong> — Less visual clutter = better focus</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Equipment safety</strong> — Prevent accidental unplugging</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Professional appearance</strong> — Better background on camera</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Airflow</strong> — Better cooling for equipment</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Cable Management Tools</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Cable ties & velcro straps</strong> — Bundle cables together</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Cable sleeves</strong> — Hide multiple cables in one tube</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Under-desk cable tray</strong> — Mount beneath desk</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Cable boxes</strong> — Hide power supplies and extras</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Adhesive clips</strong> — Route cables along desk edge</li>
          </ul>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Get Organized</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--n-400)' }}>
            See our cable management guides for step-by-step organization techniques and product recommendations.
          </p>
        </section>
      </div>
    </main>
  )
}
