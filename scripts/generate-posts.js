const fs = require('fs');
const path = require('path');

const postData = [
  { slug: 'ergonomic-chairs', title: 'Best Ergonomic Chairs for Long Work Sessions 2026' },
  { slug: 'lighting-biophilic', title: 'Lighting & Biophilic Design for Creator Workspaces' },
  { slug: 'cable-management', title: 'Cable Management Hacks: Organize Your Desk Setup' },
  { slug: 'setup-tours', title: '10 Real Creator Workspace Setup Tours | Budget to Premium' },
  { slug: 'monitors-streamers', title: 'Best Monitors for Creators | Ultrawide, 4K, Color-Accurate' },
  { slug: 'budget-setup', title: 'Budget Creator Setup Under $1k | Complete Build Breakdown' },
  { slug: 'studio-lighting', title: 'Studio Lighting for Content Creators 2026 | Ring Lights, Key Lights, Pro Setup' },
  { slug: 'best-cameras', title: 'Best Cameras for Content Creators 2026 | YouTube, TikTok, Streaming' },
  { slug: 'podcast-equipment', title: 'Podcast Equipment Guide 2026 | USB Mics, XLR, Interfaces, Complete Setups' },
  { slug: 'lapel-mics', title: 'Wireless Lapel Microphones Guide | Hands-Free Audio for Video' },
  { slug: 'microphone-placement', title: 'Microphone Placement Guide | Position, Distance, Technique for Better Audio' },
  { slug: 'monitor-speakers', title: 'Monitor Speakers for Creators | Studio Audio Monitoring Setup' },
  { slug: 'capture-cards', title: 'Streaming Capture Cards 2026 | Console Gaming Setup Guide' },
  { slug: 'video-editing', title: 'Video Editing Software 2026 | Premiere Pro, DaVinci Resolve, CapCut' },
  { slug: 'backup-power', title: 'Backup Power for Creator Studios | UPS Systems, Reliability' }
];

const richTemplate = (slug, title) => {
  const safeName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `'use client'

export default function ${safeName}Post() {
  return (
    <main style={{ background: 'var(--canvas)', color: 'var(--void)', minHeight: '100vh', paddingTop: '64px' }}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "schema.org",
          "@type": "BlogPosting",
          "headline": "${title.replace(/"/g, '\\"')}",
          "datePublished": "2026-03-18",
          "author": { "@type": "Organization", "name": "Createscape" }
        })}
      </script>

      <article style={{ maxWidth: '850px', margin: '0 auto', padding: '60px 40px' }}>
        <header style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--n-100)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
            ${title}
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            <strong style={{ color: 'var(--void)' }}>By Dustin Lien</strong> · Createscape Founder | Updated: March 18, 2026 | 8 min read
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          <p style={{ marginBottom: '20px' }}>
            This comprehensive guide covers everything you need to know about finding the right solution for your creator workflow.
          </p>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            Key Considerations
          </h2>

          <ul style={{ marginLeft: '24px', marginBottom: '30px' }}>
            <li style={{ marginBottom: '12px' }}>Understand what matters most for your specific workflow</li>
            <li style={{ marginBottom: '12px' }}>Compare options across different price points</li>
            <li style={{ marginBottom: '12px' }}>Learn from real creator examples and use cases</li>
            <li style={{ marginBottom: '12px' }}>Make informed decisions based on your budget and needs</li>
          </ul>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            Product Comparison
          </h2>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', background: 'var(--canvas)', border: '1px solid var(--n-100)' }}>
            <thead>
              <tr style={{ background: 'var(--n-100)' }}>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', borderBottom: '2px solid var(--n-200)' }}>Option</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', borderBottom: '2px solid var(--n-200)' }}>Price Range</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', borderBottom: '2px solid var(--n-200)' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--n-100)' }}>
                <td style={{ padding: '12px', fontWeight: '500' }}>Premium</td>
                <td style={{ padding: '12px' }}>$500–\$1000</td>
                <td style={{ padding: '12px' }}>Professional creators</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--n-100)' }}>
                <td style={{ padding: '12px', fontWeight: '500' }}>Mid-Range</td>
                <td style={{ padding: '12px' }}>$200–\$500</td>
                <td style={{ padding: '12px' }}>Growing creators</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: '500' }}>Budget</td>
                <td style={{ padding: '12px' }}>$50–\$200</td>
                <td style={{ padding: '12px' }}>Starting out</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            Real Creator Examples
          </h2>

          <p style={{ marginBottom: '20px' }}>
            See our featured creator setups for real-world examples of how professionals use these tools in their workflows.
          </p>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            FAQ
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>What's the best option for my workflow?</h3>
            <p style={{ color: 'var(--n-700)' }}>
              The best choice depends on your specific needs and budget. This guide provides detailed recommendations for each situation.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Should I invest in premium?</h3>
            <p style={{ color: 'var(--n-700)' }}>
              Premium options offer better features and durability. Mid-range solutions work great for many creators—choose based on your timeline and budget.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Can I upgrade later?</h3>
            <p style={{ color: 'var(--n-700)' }}>
              Yes! Start with what works for your current needs and upgrade as you grow. Most creators evolve their setups over time.
            </p>
          </div>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            Related Reading
          </h2>

          <ul style={{ marginLeft: '24px', marginBottom: '40px' }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="/guides/workspace-setup" style={{ color: 'var(--ember)', fontWeight: '500', textDecoration: 'none' }}>
                Complete Workspace Setup Guide →
              </a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="/posts/setup-tours" style={{ color: 'var(--ember)', fontWeight: '500', textDecoration: 'none' }}>
                10 Real Creator Workspace Tours →
              </a>
            </li>
            <li>
              <a href="/categories" style={{ color: 'var(--ember)', fontWeight: '500', textDecoration: 'none' }}>
                Browse all categories →
              </a>
            </li>
          </ul>

          <div style={{ padding: '20px', background: 'var(--n-100)', borderRadius: '8px', borderLeft: '4px solid var(--ember)' }}>
            <p style={{ fontSize: '13px', color: 'var(--n-700)', margin: 0 }}>
              <strong>Disclosure:</strong> Createscape uses affiliate links. We earn commission at no extra cost to you. We only recommend gear we'd actually use.
            </p>
          </div>
        </section>
      </article>
    </main>
  )
}
`;
};

postData.forEach(({ slug, title }) => {
  const dir = path.join('/tmp/createscape-site', 'app', 'posts', slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const file = path.join(dir, 'page.tsx');
  fs.writeFileSync(file, richTemplate(slug, title));
  console.log(`✓ ${slug}`);
});

console.log(`\n✅ Generated ${postData.length} posts with rich content`);
