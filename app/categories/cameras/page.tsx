import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Cameras for Content Creators | YouTube, TikTok, Streaming",
  description: "Camera buying guide for creators. Sony, Canon, DJI comparison. Find the best camera for YouTube, TikTok, streaming, and video production.",
}

export default function CamerasCategory() {
  return (
    <main style={{ background: 'var(--void)', color: 'var(--canvas)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '700', marginBottom: '12px' }}>Cameras & Video Equipment</h1>
        <p style={{ fontSize: '18px', color: 'var(--n-400)', marginBottom: '40px' }}>Guides to cameras, capture cards, video editing, and complete video production setups.</p>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>In This Category</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li style={{ marginBottom: '16px' }}><a href="/posts/best-cameras" style={{ color: 'var(--blueprint)' }}>Best Cameras for Content Creators</a> — YouTube, TikTok, streaming cameras</li>
            <li style={{ marginBottom: '16px' }}><a href="/posts/capture-cards" style={{ color: 'var(--blueprint)' }}>Streaming Capture Cards</a> — Console gaming setup</li>
            <li style={{ marginBottom: '16px' }}><a href="/posts/video-editing" style={{ color: 'var(--blueprint)' }}>Video Editing Software</a> — Premiere, DaVinci Resolve, CapCut</li>
            <li><a href="/posts/studio-lighting" style={{ color: 'var(--blueprint)' }}>Studio Lighting</a> — On-camera lighting setup</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>Types of Creator Cameras</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--n-400)', marginLeft: '24px' }}>
            <li><strong style={{ color: 'var(--canvas)' }}>Mirrorless Cameras</strong> — Best for video quality (Sony, Canon, Nikon)</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Action Cameras</strong> — GoPro, DJI Osmo for portable video</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Webcams</strong> — Logitech, Razer for streaming</li>
            <li><strong style={{ color: 'var(--canvas)' }}>Smartphone Cameras</strong> — Built-in for TikTok, YouTube Shorts</li>
          </ul>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: 'var(--ember)' }}>The Video Chain</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--n-400)', marginBottom: '20px' }}>
            Professional video isn't just about the camera. It's about the complete chain from capture to delivery.
          </p>
        </section>

        <section style={{ padding: '32px', background: 'var(--n-800)', borderRadius: '12px', border: '1px solid var(--n-700)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Get Started</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--n-400)' }}>
            See our <a href="/posts/best-cameras" style={{ color: 'var(--blueprint)' }}>complete camera guide</a> for recommendations across all price ranges and creator types.
          </p>
        </section>
      </div>
    </main>
  )
}
