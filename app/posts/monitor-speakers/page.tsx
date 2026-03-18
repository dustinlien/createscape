import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Monitor Speakers for Creators | Studio Audio Monitoring Setup | Createscape",
  description: "Studio monitor speaker buying guide. Presonus, Behringer, JBL. Set up proper audio monitoring for podcast and video.",
  keywords: "monitor speakers, studio speakers, audio monitoring"
}

export default function Post() {
  return (
    <main style={{ background: 'var(--canvas)', color: 'var(--void)', minHeight: '100vh', paddingTop: '64px' }}>
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px' }}>
        <script type="application/ld+json">
          {`{"@context": "schema.org", "@type": "BlogPosting", "headline": "Monitor Speakers for Creators | Studio Audio Monitoring Setup", "description": "Studio monitor speaker buying guide. Presonus, Behringer, JBL. Set up proper audio monitoring for podcast and video.", "datePublished": "2026-03-18", "dateModified": "2026-03-18", "author": {"@type": "Organization", "name": "Createscape"}, "keywords": "monitor speakers, studio speakers, audio monitoring"}`}
        </script>

        <header style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--n-100)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
            Monitor Speakers for Creators | Studio Audio Monitoring Setup
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            <strong style={{ color: 'var(--void)' }}>By Dustin Lien</strong> · Createscape Founder | Updated: March 18, 2026
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          <p style={{ marginBottom: '20px' }}>Placeholder. Full content coming soon.</p>
          <div style={{ padding: '20px', background: 'var(--n-100)', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: 'var(--n-600)' }}>
              <strong>Disclosure:</strong> Createscape uses affiliate links.
            </p>
          </div>
        </section>
      </article>
    </main>
  )
}
