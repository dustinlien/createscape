import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Complete Camera & Video Guide for Content Creators 2026 | YouTube, TikTok, Streaming",
  description: "Master video guide for creators. Camera selection, video production workflow, editing software, and complete video setups.",
}

export default function CamerasVideoGuide() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>The Complete Creator Video Guide</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Master video production. From camera selection to editing. Everything you need for professional video content.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>The Video Production Chain</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            Professional video isn't about the most expensive camera. It's about the complete workflow: capture → editing → delivery.
          </p>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>1. Camera/Capture</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              What device captures the video. Mirrorless, action camera, smartphone, or webcam.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>2. Lighting & Audio</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              See <a href="/guides/lighting" style={{ color: 'var(--blueprint)' }}>lighting guide</a> and <a href="/guides/audio" style={{ color: 'var(--blueprint)' }}>audio guide</a>.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>3. Storage & Transfer</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              SD cards, external drives, backup systems. See <a href="/posts/backup-power" style={{ color: 'var(--blueprint)' }}>backup power guide</a>.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>4. Editing & Post-Production</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              See <a href="/posts/video-editing" style={{ color: 'var(--blueprint)' }}>video editing software guide</a>.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Camera Types for Creators</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Mirrorless Cameras</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> YouTube, professional video, high quality
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Sony A6700, Canon R50, Nikon Z5. Best video quality. See <a href="/posts/best-cameras" style={{ color: 'var(--blueprint)' }}>full camera guide</a>.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Action Cameras</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> Vlogging, travel, portable content
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>GoPro, DJI Osmo. Rugged, compact, good stabilization.</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Webcams</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> Streaming, desk setup, always on
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>Logitech C920/C922, Razer Kiyo. Built for streaming and Zoom.</p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Smartphones</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--canvas)' }}>Best for:</strong> TikTok, YouTube Shorts, mobile content
            </p>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>iPhone 13+, Pixel 6+. Excellent video in your pocket.</p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Budget Video Setups</h2>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>Under $500</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Smartphone + ring light + basic tripod. Perfect for starting TikTok or YouTube Shorts.
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>$500-1,500</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Entry mirrorless (Canon R50) + kit lens + light + audio. YouTube-quality video.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--canvas)', marginBottom: '12px' }}>$1,500+</h3>
            <p style={{ fontSize: '15px', color: 'var(--n-400)' }}>
              Professional mirrorless + quality lenses + audio + lighting + editing suite.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Video Editing Software</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            See <a href="/posts/video-editing" style={{ color: 'var(--blueprint)' }}>complete video editing guide</a> for Premiere Pro, DaVinci Resolve, CapCut, and more.
          </p>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Full Guides by Topic</h2>
          <ul style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><a href="/posts/best-cameras" style={{ color: 'var(--blueprint)' }}>Best Cameras for Content Creators</a> — Sony, Canon, DJI comparison</li>
            <li><a href="/posts/capture-cards" style={{ color: 'var(--blueprint)' }}>Streaming Capture Cards</a> — Console gaming setup</li>
            <li><a href="/posts/video-editing" style={{ color: 'var(--blueprint)' }}>Video Editing Software</a> — Premiere, DaVinci Resolve, CapCut</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
