import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Podcast & Audio Equipment Guides | Microphones, Interfaces, Speakers",
  description: "Audio equipment guides for podcasters and streamers. Microphones, audio interfaces, monitor speakers, and complete audio setups.",
}

export default function AudioCategory() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>Audio & Podcast Equipment</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Guides to microphones, audio interfaces, speakers, and complete podcast/streaming audio setups.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>In This Category</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li style={{ marginBottom: '16px' }}><a href="/posts/podcast-equipment" style={{ color: 'var(--blueprint)' }}>Podcast Equipment Essentials</a> — Complete setups for all budgets</li>
            <li style={{ marginBottom: '16px' }}><a href="/posts/microphone-placement" style={{ color: 'var(--blueprint)' }}>Microphone Placement Guide</a> — Positioning, distance, angle techniques</li>
            <li style={{ marginBottom: '16px' }}><a href="/posts/lapel-mics" style={{ color: 'var(--blueprint)' }}>Wireless Lapel Mics</a> — Hands-free setups for video</li>
            <li><a href="/posts/monitor-speakers" style={{ color: 'var(--blueprint)' }}>Monitor Speakers</a> — Studio audio monitoring</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>The Audio Chain</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            Great podcast audio isn't about the most expensive mic. It's about understanding the chain: microphone → interface → monitoring → editing.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Microphone</strong> — Capture quality sound</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Audio Interface</strong> — Convert analog to digital</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Monitors</strong> — Hear what you're recording</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Software</strong> — Editing and post-production</li>
          </ul>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Get Started</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--n-400)' }}>
            See our <a href="/posts/podcast-equipment" style={{ color: 'var(--blueprint)' }}>podcast equipment guide</a> for complete setups under $200, $500, and $1k+.
          </p>
        </section>
      </div>
    </main>
  )
}
