import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Streaming Capture Cards 2026 | Createscape",
  description: "Best capture cards for streaming and recording. Elgato, Blackmagic, HDMI solutions.",
  keywords: ["capture card","streaming","recording equipment"],
  openGraph: {
    title: "Streaming Capture Cards 2026",
    description: "Best capture cards for streaming and recording. Elgato, Blackmagic, HDMI solutions.",
    url: "https://www.createscape.co/posts/capture-cards",
    type: "article",
    images: []
  }
}

export default function Post() {
  const relatedProducts = [
  {
    "id": "elgato-4k60-pro",
    "name": "Elgato 4K60 Pro",
    "category": "Capture Card",
    "asin": "B07JCSTBLV",
    "image": "https://m.media-amazon.com/images/I/61h3bV-XQ2L._AC_SY300_.jpg",
    "price": "$199",
    "features": [
      "4K capture",
      "Zero lag",
      "Pro streaming"
    ]
  }
] as any;

  return (
    <main style={{
      background: 'var(--canvas)',
      color: 'var(--void)',
      minHeight: '100vh',
      paddingTop: '64px'
    }}>
      <article style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        <header style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--n-100)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
            Streaming Capture Cards 2026
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            <strong style={{ color: 'var(--void)' }}>By Eli Black</strong> · 
            6 min read · 
            Updated: 2026-03-19
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          
    <p style={{ marginBottom: '20px' }}>
      This comprehensive guide covers everything you need to know about this topic.
    </p>
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
      Top Recommendations
    </h2>
    <p style={{ marginBottom: '20px' }}>
      Here are the best options to consider for your setup.
    </p>
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
      How to Choose
    </h2>
    <p style={{ marginBottom: '20px' }}>
      Look for quality, reliability, and value that fits your workflow.
    </p>
  
        </section>

        {/* Related Products */}
        
        <section style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--n-100)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
            Shop the gear mentioned
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            
            <a 
              href="https://amazon.com/dp/B07JCSTBLV?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=elgato-4k60-pro"
              style={{
                padding: '16px',
                background: 'var(--n-100)',
                border: '1px solid var(--n-200)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--void)',
                transition: 'all 0.2s',
                display: 'block'
              }}
            >
              <img src="https://m.media-amazon.com/images/I/61h3bV-XQ2L._AC_SY300_.jpg" alt="Elgato 4K60 Pro" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Elgato 4K60 Pro</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$199</div>
              <div style={{ fontSize: '11px', color: 'var(--signal)', marginTop: '8px' }}>View on Amazon →</div>
            </a>
            
          </div>
        </section>
        

        {/* Affiliate Disclosure */}
        <div style={{
          marginTop: '60px',
          padding: '20px',
          background: 'var(--n-100)',
          border: '1px solid var(--n-200)',
          borderRadius: '8px',
          fontSize: '12px',
          color: 'var(--n-500)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: 'var(--void)' }}>Disclosure:</strong> Createscape may earn affiliate commissions from Amazon purchases. We only recommend products we genuinely believe in.
        </div>
      </article>
    </main>
  );
}
