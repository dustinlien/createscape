import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Ergonomic Chairs for Creators | Long Work Sessions",
  description: "Complete ergonomic chair buying guide. Herman Miller Aeron, Steelcase, budget options. Find the best chair for long work sessions.",
}

export default function ChairsCategory() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>Seating & Ergonomics</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Guides to ergonomic chairs, posture support, and comfortable seating for creators.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>In This Category</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li style={{ marginBottom: '16px' }}>
              <a href="/posts/ergonomic-chairs" style={{ color: 'var(--blueprint)' }}>Best Ergonomic Chairs</a> — Herman Miller, Steelcase, budget options with full comparisons
            </li>
            <li>
              <a href="/posts/budget-setup" style={{ color: 'var(--blueprint)' }}>Budget Setup Under $1k</a> — See chair in a complete budget build
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>What to Look for in a Chair</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Lumbar support</strong> — Critical for 8+ hour sessions</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Height adjustability</strong> — Match your desk height</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Armrest design</strong> — Should support arm at desk height</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Seat depth & width</strong> — Should fit your body</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Material quality</strong> — Mesh or leather? Durability?</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Warranty & returns</strong> — Test period important</li>
          </ul>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Ready to Choose?</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--n-400)', marginBottom: '20px' }}>
            See our <a href="/posts/ergonomic-chairs" style={{ color: 'var(--blueprint)' }}>complete ergonomic chair guide</a> for detailed comparisons across all price ranges.
          </p>
        </section>
      </div>
    </main>
  )
}
