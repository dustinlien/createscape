import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Complete Audio Setup Guide for Podcasters & Streamers 2026",
  description: "Master audio guide for creators. Microphone selection, audio interfaces, monitoring, and complete podcast/streaming audio chains.",
}

export default function AudioGuide() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>The Complete Creator Audio Guide</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Master the audio chain. From USB mics to XLR interfaces, monitors, and editing. Everything you need for professional sound.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>The Audio Chain</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            Professional audio isn't about the most expensive microphone. It's about understanding the complete chain and optimizing each piece.
          </p>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>1. Microphone</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Captures sound. USB for simplicity, XLR for flexibility.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>2. Audio Interface</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Converts analog to digital. Quality matters for latency.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>3. Monitoring (Headphones)</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Hear exactly what you're recording in real-time.</p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>4. Software & Editing</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Post-production (filters, compression, mixing).</p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Microphone Types</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>USB Microphones</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> Beginners, streaming, simple setups
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Plug and play. No interface needed. Examples: Blue Yeti, Audio-Technica AT2020USB.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>XLR Microphones</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> Podcasters, professionals, flexibility
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Require interface. Higher quality potential. Examples: Shure SM7B, Rode Procaster.</p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Lavalier/Lapel Mics</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> Hands-free recording, interviews, video
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Wireless options available. See <a href="/posts/lapel-mics" style={{ color: 'var(--blueprint)' }}>lapel mic guide</a>.</p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Budget Setups</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Under $200</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>USB mic (Blue Yeti or AT2020USB) + basic USB interface. Perfect for starting.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>$200-500</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>XLR microphone (Rode Procaster) + interface (Focusrite Scarlett) + headphones.</p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>$500+</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Pro XLR mic (Shure SM7B) + quality interface + treated room + monitoring setup.</p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Key Audio Concepts</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Microphone placement</strong> — Distance and angle affect quality</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Room treatment</strong> — Reduce echo and background noise</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Gain staging</strong> — Set proper input levels</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Monitoring latency</strong> — Critical for live recording</li>
          </ul>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Full Guides by Topic</h2>
          <ul style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><a href="/posts/podcast-equipment" style={{ color: 'var(--blueprint)' }}>Podcast Equipment Essentials</a> — Complete setups for all budgets</li>
            <li><a href="/posts/microphone-placement" style={{ color: 'var(--blueprint)' }}>Microphone Placement Guide</a> — Positioning and technique</li>
            <li><a href="/posts/monitor-speakers" style={{ color: 'var(--blueprint)' }}>Monitor Speakers</a> — Studio audio monitoring</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
