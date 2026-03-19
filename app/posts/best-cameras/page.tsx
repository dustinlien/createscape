import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Cameras for Content Creators 2026: Sony, Canon, DJI Compared | Createscape",
  description: "Camera buying guide for YouTube creators. Sony A6400 vs Canon R50 vs DJI Osmo. Autofocus, 4K, stabilization, and real tradeoffs for creators.",
  keywords: ["best camera for YouTube","mirrorless camera","Sony A6400","Canon R50","camera for content creators"],
  openGraph: {
    title: "Best Cameras for Content Creators 2026: Sony, Canon, DJI Compared",
    description: "Camera buying guide for YouTube creators. Sony A6400 vs Canon R50 vs DJI Osmo. Autofocus, 4K, stabilization, and real tradeoffs for creators.",
    url: "https://www.createscape.co/posts/best-cameras",
    type: "article",
    images: []
  }
}

export default function Post() {
  const relatedProducts = [
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
  },
  {
    "id": "canon-r50",
    "name": "Canon R50",
    "category": "Camera",
    "asin": "B0BYK7F3KJ",
    "image": "https://m.media-amazon.com/images/I/812aJzqcG1L._AC_SY300_.jpg",
    "price": "$599",
    "features": [
      "Creator-focused",
      "4K video",
      "Affordable"
    ]
  },
  {
    "id": "dji-osmo",
    "name": "DJI Osmo",
    "category": "Camera",
    "asin": "B0BZSVNZZ3",
    "image": "https://m.media-amazon.com/images/I/61tLq5z2e8L._AC_SY300_.jpg",
    "price": "$349-399",
    "features": [
      "Gimbal stabilization",
      "Portable",
      "4K capable"
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
            Best Cameras for Content Creators 2026: Sony, Canon, DJI Compared
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            By Eli Black · 
            11 min read · 
            Updated: 2026-03-19
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '36px', fontWeight: '700', marginTop: '50px', marginBottom: '24px' }}>Best Cameras for Content Creators 2026: Sony, Canon, DJI Compared</h1>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'The camera doesn\'t make the creator. But it sure makes the work easier.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'You can shoot on your phone and build an audience. But once you\'re serious, you need autofocus that doesn\'t hunt, stabilization that works, and 4K that doesn\'t tank in low light.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Here\'s what actually matters.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>What Matters for Creators (Not What Camera Companies Tell You)</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera specs that DON\'T matter:' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Megapixels (20MP is plenty)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Dynamic range (8+ stops is fine)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Weather sealing (nice but not essential)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera specs that DO matter:' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Autofocus</strong> - Does it track your face/eyes? Fast enough for movement?' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Stabilization</strong> - Can you handheld without tripod?' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Rolling shutter</strong> - Does the image distort when panning?' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Battery life</strong> - Can you film 2+ hours?' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Size/weight</strong> - Do you want to carry this daily?' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Audio inputs</strong> - Can you attach a real microphone?' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Pick cameras that nail these. Specs are secondary.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Three Camera Types for Creators</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Smartphone (Free - $1200)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'What you have right now.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Pros:</strong> Always with you, good stabilization, plenty of light = great footage' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cons:</strong> Limited zoom, poor autofocus in movement, audio sucks' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use it if:</strong> You\'re just starting, audience doesn\'t care yet, posting short-form content' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Mirrorless Camera ($600-1500)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Sony, Canon, Nikon.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Pros:</strong> Best autofocus, interchangeable lenses, professional image quality' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cons:</strong> Need audio interface, more expensive, learning curve' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use it if:</strong> You\'re serious about audience growth, doing long-form content, want to upgrade over time' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Gimbal Camera ($300-500)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'DJI Osmo, phone on gimbal.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Pros:</strong> Incredible stabilization, portable, works in any light' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cons:</strong> Limited angle (gimbal is fixed position), lower image quality than mirrorless' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use it if:</strong> You move around a lot (vlogging, travel), don\'t need interchangeable lenses' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Top 3 Cameras Compared</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Sony A6400 - The Creator Standard ($748)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'The camera YouTube creators use. For good reason.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Specs:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '24MP, 4K 60fps' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Real-time eye AF (tracks your eyes while moving)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Lightweight (403g) and small' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Battery: 3.5 hours continuous video' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Has mic input' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Real Talk:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Best autofocus by far. If you move, it tracks you.' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'File sizes are LARGE (use fast SD cards)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Learning curve on menus (Sony interface is confusing)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Popular = lots of tutorials + cheap used lenses' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Best for:</strong> Vloggers, solo creators, anyone who moves while filming' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Upgrade Path:</strong> Lenses are expensive but system is solid 5+ years' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Price:</strong> $748 body only (add $200+ for decent lens)' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Canon R50 - The Affordable Pro ($599)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'The newest option. Made specifically for creators.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Specs:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '24.2MP, 4K 60fps' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Eye AF and face tracking' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Lightweight (375g)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Battery: 3 hours continuous' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Has mic input' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Real Talk:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Slightly cheaper than Sony' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Good autofocus (not quite as good as Sony)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'More intuitive menu system than Sony' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Smaller lens ecosystem' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Best for:</strong> Creators on tighter budget, people who like simple menus' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Upgrade Path:</strong> Canon lenses cheaper than Sony, decent used market' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Price:</strong> $599 body only (add $150+ for kit lens)' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>DJI Osmo - The Gimbal Vlogger ($399)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Phone-based gimbal camera for mobile vlogging.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Specs:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Phone (8MP-100MP depending on your phone)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '3-axis gimbal stabilization' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Lightweight (309g)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Battery: 15+ hours' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Built-in mics (gimbal handles)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Real Talk:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Stabilization is almost too good (feels robotic sometimes)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Limited angle (gimbal limits pan/tilt)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Limited audio input options' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Phone quality varies wildly' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Best for:</strong> Travel vloggers, on-the-go creators, people who don\'t stay in one place' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Price:</strong> $399 gimbal, phone is separate' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Real Comparison</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Feature | Sony A6400 | Canon R50 | DJI Osmo |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '|---------|-----------|----------|---------|' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Autofocus | Excellent | Very Good | Good (depends on phone) |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Stabilization | None (handheld) | None | Excellent |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Portability | Good | Good | Best |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Battery Life | 3.5 hrs | 3 hrs | 15+ hrs |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Audio Input | Yes (via cable) | Yes | Limited |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Upgrade Path | Excellent | Good | Phone dependent |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Learning Curve | Medium | Low | Low |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Total Cost | $900-1200 | $750-950 | $399-700 |' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Decision Tree</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Do you move around while filming?</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes, a lot (travel, walking) → <strong>DJI Osmo</strong>' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'No, mostly sit in one place → <strong>Sony or Canon</strong>' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Do you want to grow 2+ years?</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes, serious investment → <strong>Sony A6400</strong>' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Maybe, testing the market → <strong>Canon R50 (cheaper)</strong>' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Just vlogging casually → <strong>DJI Osmo</strong>' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Do you have a budget limit?</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Under $500 → <strong>DJI Osmo or phone + gimbal</strong>' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '$500-800 → <strong>Canon R50</strong>' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '$800+ → <strong>Sony A6400 + lens</strong>' }} /></li>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>What You Actually Need With Camera</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Minimum:</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera body' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Basic lens (or DJI Osmo)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'SD card (fast: 90+ MB/s)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'USB charger' }} /></li>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Recommended:</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera body' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '2 lenses (wide + standard)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'SD card + backup' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'USB charger' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Tripod' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Lavalier mic (if serious about audio)' }} /></li>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Full Setup:</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Everything recommended, PLUS' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Gimbal (for handheld stabilization)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Monitor (to see while filming)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Professional lighting (if indoors)' }} /></li>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Common Mistakes</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '1. <strong>Buying body without lenses</strong> - Sony A6400 comes naked. Budget $200-500 for decent lens.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '2. <strong>Cheap SD cards</strong> - Slow cards cause dropped frames. Buy 90+ MB/s V60 cards.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3. <strong>Not investing in audio</strong> - Built-in mics suck. Get lavalier mic ($50-100).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '4. <strong>Skipping tripod</strong> - You need stable shots. $30 tripod is minimum.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '5. <strong>Phone gimbal without phone holder</strong> - DJI Osmo is great but phone mounts can fail. Get sturdy mount ($20).' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>FAQ</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Should I upgrade from my phone?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'If you have 1000+ subscribers and phone video is your limit, yes. Otherwise, optimize phone video first (lighting, angles, tripod).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Is Sony worth 2x more than Canon?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'The autofocus is better. But Canon R50 is 90% of the camera for 60% of the price. Safe bet.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Should I buy used?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes, but carefully. Bodies last 5+ years. Make sure shutter count is reasonable (<10k).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>What about stabilization?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'You have 3 options: (1) Gimbal, (2) Tripod, (3) Lean against wall/desk. Sony + tripod beats DJI Osmo if you\'re stationary. DJI wins if you move.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Can I use this for photos?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'All three can. But they\'re optimized for video. If you need 50/50 photos + video, consider different camera.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>How long before I upgrade?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3-5 years if you treat it well. Autofocus technology changes. If AF starts hunting, time to upgrade.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Bottom Line</h2>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Starting out?</strong> Use your phone. Seriously.' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>First real camera?</strong> Canon R50 ($600). Cheapest serious option.' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Serious growth plans?</strong> Sony A6400 ($750 + lens). Best autofocus.' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Moving around a lot?</strong> DJI Osmo ($400). Best stabilization.' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Pick one. Learn it deeply. Upgrade lenses before upgrading body. Shoot good light. Get real audio. The camera matters less than you think.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Sensor Size & Image Quality Deep Dive</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'All three cameras have similar sensors (APS-C 24MP).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>What that means:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Dynamic range is similar (8-10 stops)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Low-light performance is similar' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Image quality differences are minor (5%)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>What matters more:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Lens quality (huge difference)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Lighting (bigger difference than camera)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Auto-focus performance (most important)' }} /></li>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Autofocus Reality Check</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'This is where cameras actually differ:' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Sony A6400:</strong> Eye AF + object tracking. If you move, it follows face/eyes.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Canon R50:</strong> Face AF + eye-detect. Good but not as aggressive as Sony.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>DJI Osmo:</strong> Phone AF (depends on phone). Often hunts in low light.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'For creators who move: Sony wins. For static interviews: all three equal.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Lens Tax</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Body costs $600-800. Lenses cost $300-2000+.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Sony A6400 cheap lens:</strong> 18-135mm kit = $400 (total $1200)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Canon R50 cheap lens:</strong> 18-45mm kit = $200 (total $800)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'But cheap kit lenses look... cheap.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Better lens:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Sony: Sigma 16mm f/2.8 = $400 (total $1200)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Canon: RF 24mm f/2.8 = $300 (total $900)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Budget your lens separately. Body alone isn\'t the full cost.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Low-Light Performance</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'All three handle low light similarly.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Key:</strong> Use f/1.8-2.8 lenses (wider aperture = more light)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Test: Record in office with only desk lamp.' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'f/5.6 kit lens: Grainy, needs lighting' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'f/1.8 lens: Clean, well-exposed' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera brand: Doesn\'t matter (lens matters)' }} /></li>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Autofocus in Motion</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Where cameras differ most:' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Tracking accuracy:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Sony A6400: 95% (best for movement)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Canon R50: 85% (good for movement)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'DJI Osmo: 90% (gimbal helps)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'For talking-head content: doesn\'t matter.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'For vlogging/moving: Sony wins.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Recording Formats & File Sizes</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Sony:</strong> H.264/H.265 codec' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '1080p 60fps: 400MB per minute' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '4K 30fps: 700MB per minute' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Canon:</strong> H.264' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '1080p 60fps: 350MB per minute' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '4K 30fps: 750MB per minute' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>DJI:</strong> Varies by phone' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Reality:</strong> 1-hour vlog = 20-40GB. Budget fast SD cards + storage.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Battery Life Real Test</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Sony A6400:</strong> 3.5 hours continuous video (rated 400 shots)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Canon R50:</strong> 3 hours continuous video (rated 370 shots)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>DJI Osmo:</strong> 15+ hours (gimbal battery)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'For 1-hour recording: Need backup battery with Sony/Canon.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'DJI wins battery life (gimbal battery is large).' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Stabilization Comparison</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Sony + handheld:</strong> Wobbly. Need tripod or gimbal.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Canon + handheld:</strong> Wobbly. Need tripod or gimbal.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>DJI Osmo:</strong> Gimbal built-in. Smooth without tripod.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'For vlogging while walking: DJI.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'For talking-head setup: Don\'t matter.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>When to Upgrade from Phone</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use phone when:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Building initial audience (0-1000 subscribers)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Testing format (unsure if you\'ll continue)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Short-form content (reels, TikTok)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Upgrade to camera when:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '1000+ subscribers (audience exists)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Committed to format (posting 2+ weeks)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Long-form content (streams, podcasts)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Income from content (justifies investment)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Most creators upgrade too early.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Real Creator Workflows</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>YouTuber (talking head):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera: Sony A6400 + 35mm f/1.8 lens' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Setup: Tripod, ring light, USB mic' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Why: Best autofocus for stationary setup' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Vlogger (mobile):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera: Phone + DJI Osmo gimbal' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Setup: Minimal, mobile-optimized' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Why: Stabilization matters more than image quality' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Streamer:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Camera: Canon R50' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Setup: Monitor + capture card + stream PC' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Why: Good autofocus, cheaper than Sony' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Pick based on workflow, not specs.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Rental vs Buy</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Rent for:</strong> Testing camera before $800 commitment' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cost:</strong> $50-80 per day' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Time:</strong> 2-3 days to test thoroughly' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Buy when:</strong> You\'re sure (camera + lens = $1200+)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Rent first. Then buy. Don\'t buy and return.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Real Comparison Table</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Metric | Sony | Canon | DJI |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '|--------|------|-------|-----|' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Best for talking-head | Sony | ✓ | |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Best for vlogging | | | DJI |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Best autofocus | Sony | | |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Cheapest entry | | Canon | DJI |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Upgrade path | Best | Good | Limited |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Professional use | ✓ | ✓ | No |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '| Learning curve | High | Medium | Low |' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Choose based on workflow, not features.' }} /></p>
        </section>

        {/* Related Products */}
        
        <section style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--n-100)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
            Shop the gear mentioned
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            
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
            
            <a 
              href="https://amazon.com/dp/B0BYK7F3KJ?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=canon-r50"
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
              <img src="https://m.media-amazon.com/images/I/812aJzqcG1L._AC_SY300_.jpg" alt="Canon R50" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Canon R50</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$599</div>
              <div style={{ fontSize: '11px', color: 'var(--signal)', marginTop: '8px' }}>View on Amazon →</div>
            </a>
            
            <a 
              href="https://amazon.com/dp/B0BZSVNZZ3?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=dji-osmo"
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
              <img src="https://m.media-amazon.com/images/I/61tLq5z2e8L._AC_SY300_.jpg" alt="DJI Osmo" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>DJI Osmo</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$349-399</div>
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
