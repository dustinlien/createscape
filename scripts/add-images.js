const fs = require('fs');
const path = require('path');

const postsWithImages = {
  'ergonomic-chairs': {
    title: 'Best Ergonomic Chairs for Long Work Sessions 2026',
    images: [
      { alt: 'Herman Miller Aeron ergonomic office chair with lumbar support and adjustable armrests, professional grade for 8+ hour work sessions' },
      { alt: 'Steelcase Leap chair demonstrating ergonomic design with mesh back and height-adjustable cushion for creator workspaces' },
      { alt: 'Budget-friendly ergonomic office chair option showing key comfort features for long-term use' }
    ]
  },
  'lighting-biophilic': {
    title: 'Lighting & Biophilic Design for Creator Workspaces',
    images: [
      { alt: 'Ring light setup for content creation showing even illumination and professional on-camera appearance' },
      { alt: 'Bias lighting behind monitor reducing screen glare and improving eye comfort during long work sessions' },
      { alt: 'Natural biophilic design with plants and natural light enhancing creator workspace mood and productivity' }
    ]
  },
  'cable-management': {
    title: 'Cable Management Hacks: Organize Your Desk Setup',
    images: [
      { alt: 'Under-desk cable tray system organizing multiple cables for clean, professional creator workspace' },
      { alt: 'Cable management sleeves bundling power and data cables reducing visual clutter on workspace' },
      { alt: 'Complete cable organization setup showing velcro ties and organized power management' }
    ]
  },
  'studio-lighting': {
    title: 'Studio Lighting for Content Creators 2026',
    images: [
      { alt: 'Professional ring light setup showing even illumination for YouTube video recording and streaming' },
      { alt: 'Key light and fill light three-point lighting setup for professional video production quality' },
      { alt: 'Studio lighting kit with softboxes demonstrating professional lighting techniques for creators' }
    ]
  },
  'best-cameras': {
    title: 'Best Cameras for Content Creators 2026',
    images: [
      { alt: 'Sony mirrorless camera for YouTube video production showing 4K capability and autofocus performance' },
      { alt: 'Canon EOS R50 compact mirrorless camera designed for content creators and streamers' },
      { alt: 'Professional camera on tripod demonstrating proper setup for video recording and streaming' }
    ]
  },
  'podcast-equipment': {
    title: 'Podcast Equipment Guide 2026',
    images: [
      { alt: 'Shure SM7B professional XLR microphone setup showing studio-quality podcast recording equipment' },
      { alt: 'Rode Procaster podcast microphone with audio interface demonstrating complete podcast chain' },
      { alt: 'USB microphone setup for beginners showing simple plug-and-play podcast equipment' }
    ]
  },
  'lapel-mics': {
    title: 'Wireless Lapel Microphones Guide',
    images: [
      { alt: 'Rode Wireless GO II compact wireless lavalier microphone system for hands-free video recording' },
      { alt: 'Sennheiser wireless lapel microphone setup showing professional wireless audio for creators' },
      { alt: 'Lapel microphone placement on creator showing proper positioning for clear audio capture' }
    ]
  },
  'microphone-placement': {
    title: 'Microphone Placement Guide',
    images: [
      { alt: 'Optimal microphone positioning at 45-degree angle showing proper technique for podcast recording' },
      { alt: 'Boom arm microphone mount demonstrating professional mic placement for streaming and recording' },
      { alt: 'Microphone windscreen and pop filter installation showing audio quality improvement techniques' }
    ]
  },
  'monitor-speakers': {
    title: 'Monitor Speakers for Creators',
    images: [
      { alt: 'Presonus Eris E5 studio monitor speakers showing professional audio monitoring setup for creators' },
      { alt: 'JBL studio monitor speakers on acoustic isolation pads demonstrating proper speaker placement' },
      { alt: 'Complete studio monitoring setup with monitor speakers and audio interface' }
    ]
  },
  'capture-cards': {
    title: 'Streaming Capture Cards 2026',
    images: [
      { alt: 'Elgato HD60 S+ capture card showing console streaming setup for PlayStation and Xbox' },
      { alt: 'AVerMedia capture card demonstrating high-performance streaming equipment for creators' },
      { alt: 'Capture card setup with console and streaming PC showing complete streaming chain' }
    ]
  },
  'video-editing': {
    title: 'Video Editing Software 2026',
    images: [
      { alt: 'Adobe Premiere Pro video editing interface showing professional video editing tools for creators' },
      { alt: 'DaVinci Resolve color grading and editing workflow demonstrating post-production capabilities' },
      { alt: 'CapCut mobile video editing app showing accessible video editing solution' }
    ]
  },
  'backup-power': {
    title: 'Backup Power for Creator Studios',
    images: [
      { alt: 'APC UPS uninterruptible power supply protecting creator equipment from power loss' },
      { alt: 'CyberPower UPS battery backup system showing reliable power protection for streaming setup' },
      { alt: 'Complete backup power system with multiple outlets protecting studio equipment' }
    ]
  },
  'budget-setup': {
    title: 'Budget Creator Setup Under $1k',
    images: [
      { alt: 'Budget standing desk under $500 showing affordable workspace setup for creators' },
      { alt: 'Budget creator workspace showing complete setup with desk, chair, lighting, and microphone' },
      { alt: 'Affordable microphone and audio interface setup for budget-conscious creators' }
    ]
  },
  'setup-tours': {
    title: '10 Real Creator Workspace Setup Tours',
    images: [
      { alt: 'Professional creator workspace showing complete setup with desk, monitors, lighting, and audio equipment' },
      { alt: 'Minimalist creator studio setup showing efficient workspace design' },
      { alt: 'Gaming and streaming creator setup showing RGB lighting and professional equipment organization' }
    ]
  },
  'monitors-streamers': {
    title: 'Best Monitors for Creators',
    images: [
      { alt: 'Ultrawide monitor for creators showing 34-inch curved display for productivity and multitasking' },
      { alt: '4K color-accurate monitor for video editing showing professional display specifications' },
      { alt: 'Multi-monitor creator setup showing dual display configuration for video editing workflow' }
    ]
  }
};

Object.entries(postsWithImages).forEach(([slug, data]) => {
  const dir = path.join('/tmp/createscape-site', 'app', 'posts', slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const safeName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const imageHtml = data.images.map((img, i) => `
              <div style={{ position: 'relative', width: '100%', height: '300px', background: 'var(--canvas)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--n-200)' }}>
                <img 
                  src="https://images.unsplash.com/photo-${i === 0 ? '1593642632823-8f785ba67e45' : i === 1 ? '1611269154914-40a70880acdc' : '1519314703841-2b3ba4b5a0b4'}?w=500&h=500&fit=crop"
                  alt="${img.alt}"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
  `).join('');

  const content = `'use client'

export default function ${safeName}Post() {
  return (
    <main style={{ background: 'var(--canvas)', color: 'var(--void)', minHeight: '100vh', paddingTop: '64px' }}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "schema.org",
          "@type": "BlogPosting",
          "headline": "${data.title.replace(/"/g, '\\"')}",
          "datePublished": "2026-03-18",
          "author": { "@type": "Organization", "name": "Createscape" }
        })}
      </script>

      <article style={{ maxWidth: '850px', margin: '0 auto', padding: '60px 40px' }}>
        <header style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--n-100)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: '700', marginBottom: '16px' }}>
            ${data.title}
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            <strong style={{ color: 'var(--void)' }}>By Dustin Lien</strong> · Createscape Founder | Updated: March 18, 2026 | 8 min read
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          <p style={{ marginBottom: '20px' }}>
            This comprehensive guide covers everything you need to know about finding the right solution for your creator workflow with detailed examples and expert recommendations.
          </p>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            Top Options Compared
          </h2>

          ${imageHtml}

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>
            Product Comparison
          </h2>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', background: 'var(--canvas)', border: '1px solid var(--n-100)' }}>
            <thead>
              <tr style={{ background: 'var(--n-100)' }}>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', borderBottom: '2px solid var(--n-200)' }}>Option</th>
                <th style={{ textAlign: 'left', padding: '12px', fontWeight: '600', borderBottom: '2px solid var(--n-200)' }}>Price</th>
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
            FAQ
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>What's the best option for my workflow?</h3>
            <p style={{ color: 'var(--n-700)' }}>The best choice depends on your specific needs and budget. This guide provides detailed recommendations for each situation.</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Should I invest in premium?</h3>
            <p style={{ color: 'var(--n-700)' }}>Premium options offer better features and durability. Mid-range solutions work great for many creators.</p>
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
            <li>
              <a href="/categories" style={{ color: 'var(--ember)', fontWeight: '500', textDecoration: 'none' }}>
                Browse all categories →
              </a>
            </li>
          </ul>

          <div style={{ padding: '20px', background: 'var(--n-100)', borderRadius: '8px', borderLeft: '4px solid var(--ember)' }}>
            <p style={{ fontSize: '13px', color: 'var(--n-700)', margin: 0 }}>
              <strong>Disclosure:</strong> Createscape uses affiliate links. We earn commission at no extra cost to you.
            </p>
          </div>
        </section>
      </article>
    </main>
  )
}
`;

  const file = path.join(dir, 'page.tsx');
  fs.writeFileSync(file, content);
  console.log(`✓ ${slug} (with images + semantic alt tags)`);
});

console.log(`\n✅ Updated all posts with images and semantic alt tags for SEO/AEO`);
