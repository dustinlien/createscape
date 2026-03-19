import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Budget Creator Workspace Setup | Createscape",
  description: "Build a professional creator workspace on a budget. Gear that actually delivers.",
  keywords: ["budget workspace","affordable setup","creator on a budget"],
  openGraph: {
    title: "Budget Creator Workspace Setup",
    description: "Build a professional creator workspace on a budget. Gear that actually delivers.",
    url: "https://www.createscape.co/posts/budget-setup",
    type: "article",
    images: []
  }
}

export default function Post() {
  const relatedProducts = [
  {
    "id": "uplift-v3",
    "name": "Uplift V3",
    "category": "Standing Desk",
    "asin": "B08XZJDCD7",
    "image": "https://m.media-amazon.com/images/I/81yPd-P5HzL._AC_SY300_.jpg",
    "price": "$799-1099",
    "features": [
      "Dual motors",
      "22.6-47.6 height",
      "7-year warranty"
    ]
  },
  {
    "id": "herman-miller-aeron",
    "name": "Herman Miller Aeron",
    "category": "Chair",
    "asin": "B00E3WJ1MA",
    "image": "https://m.media-amazon.com/images/I/71kr3y-nSyL._AC_SY300_.jpg",
    "price": "$1395",
    "features": [
      "Premium build",
      "Lifetime warranty",
      "Best ergonomics"
    ]
  },
  {
    "id": "neewer-ring-light",
    "name": "Neewer Ring Light",
    "category": "Lighting",
    "asin": "B07ZRB1X5Q",
    "image": "https://m.media-amazon.com/images/I/71xrMr1fT4L._AC_SY300_.jpg",
    "price": "$45-65",
    "features": [
      "Budget-friendly",
      "RGB color",
      "Phone mount"
    ]
  },
  {
    "id": "sony-a6400",
    "name": "Sony A6400",
    "category": "Camera",
    "asin": "B0842JSGTS",
    "image": "https://m.media-amazon.com/images/I/71Wj1s8e7-L._AC_SY300_.jpg",
    "price": "$748",
    "features": [
      "4K video",
      "Fast autofocus",
      "Compact mirrorless"
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
            Budget Creator Workspace Setup
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            <strong style={{ color: 'var(--void)' }}>By Eli Black</strong> · 
            8 min read · 
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
              href="https://amazon.com/dp/B08XZJDCD7?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=uplift-v3"
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
              <img src="https://m.media-amazon.com/images/I/81yPd-P5HzL._AC_SY300_.jpg" alt="Uplift V3" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Uplift V3</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$799-1099</div>
              <div style={{ fontSize: '11px', color: 'var(--signal)', marginTop: '8px' }}>View on Amazon →</div>
            </a>
            
            <a 
              href="https://amazon.com/dp/B00E3WJ1MA?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=herman-miller-aeron"
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
              <img src="https://m.media-amazon.com/images/I/71kr3y-nSyL._AC_SY300_.jpg" alt="Herman Miller Aeron" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Herman Miller Aeron</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$1395</div>
              <div style={{ fontSize: '11px', color: 'var(--signal)', marginTop: '8px' }}>View on Amazon →</div>
            </a>
            
            <a 
              href="https://amazon.com/dp/B07ZRB1X5Q?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=neewer-ring-light"
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
              <img src="https://m.media-amazon.com/images/I/71xrMr1fT4L._AC_SY300_.jpg" alt="Neewer Ring Light" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Neewer Ring Light</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$45-65</div>
              <div style={{ fontSize: '11px', color: 'var(--signal)', marginTop: '8px' }}>View on Amazon →</div>
            </a>
            
            <a 
              href="https://amazon.com/dp/B0842JSGTS?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=sony-a6400"
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
              <img src="https://m.media-amazon.com/images/I/71Wj1s8e7-L._AC_SY300_.jpg" alt="Sony A6400" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Sony A6400</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$748</div>
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
