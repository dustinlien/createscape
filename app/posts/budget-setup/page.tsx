import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Budget Creator Setup Under $1k | Complete Build Breakdown | Createscape",
  description: "Build a professional creator workspace for under $1,000. Complete product list with prices.",
  keywords: "budget workspace, $1000 setup, affordable creator desk"
}

export default function Post() {
  return (
    <main style={{ background: 'var(--canvas)', color: 'var(--void)', minHeight: '100vh', paddingTop: '64px' }}>
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px' }}>
        <script type="application/ld+json">
          {`{"@context": "schema.org", "@type": "BlogPosting", "headline": "Budget Creator Setup Under $1k | Complete Build Breakdown", "description": "Build a professional creator workspace for under $1,000. Complete product list with prices.", "datePublished": "2026-03-18", "dateModified": "2026-03-18", "author": {"@type": "Organization", "name": "Createscape"}, "keywords": "budget workspace, $1000 setup, affordable creator desk"}`}
        </script>

        <header style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--n-100)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
            Budget Creator Setup Under $1k | Complete Build Breakdown
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
