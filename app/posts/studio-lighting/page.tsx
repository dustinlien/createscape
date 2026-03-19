import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Studio Lighting for Content Creators 2026: Ring Lights, Key Lights & Setup Guides | Createscape",
  description: "Complete studio lighting guide for video creators. Neewer vs Elgato. 3-point lighting setup, color temperature, and DIY options.",
  keywords: ["studio lighting","ring light","key light","video lighting","content creator lighting"],
  openGraph: {
    title: "Studio Lighting for Content Creators 2026: Ring Lights, Key Lights & Setup Guides",
    description: "Complete studio lighting guide for video creators. Neewer vs Elgato. 3-point lighting setup, color temperature, and DIY options.",
    url: "https://www.createscape.co/posts/studio-lighting",
    type: "article",
    images: []
  }
}

export default function Post() {
  const relatedProducts = [
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
    "id": "elgato-key-light",
    "name": "Elgato Key Light",
    "category": "Lighting",
    "asin": "B07L755X39",
    "image": "https://m.media-amazon.com/images/I/81e3VBi7ivL._AC_SY300_.jpg",
    "price": "$200",
    "features": [
      "Smart light",
      "App control",
      "Professional quality"
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
            Studio Lighting for Content Creators 2026: Ring Lights, Key Lights & Setup Guides
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            By Eli Black · 
            8 min read · 
            Updated: 2026-03-19
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '36px', fontWeight: '700', marginTop: '50px', marginBottom: '24px' }}>Studio Lighting for Content Creators 2026</h1>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Good lighting makes mediocre footage look professional. Bad lighting makes professional footage look like garbage.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Most creators skip lighting and regret it. You don\'t need expensive rigs. You need: key light, fill light, and understanding of color temperature.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>What Lighting Actually Does</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Bad lighting: shadows on face, unflattering contrast, looks like amateur YouTube' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Good lighting: evenly lit face, professional look, flattering and natural' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'That\'s it. Nothing fancy. Just even, flattering light.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>The Three Setups</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Ring Light ($50-200)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'One light in front. Creates halo effect.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Good for:</strong> Makeup, unboxing, product reviews, close-ups' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Bad for:</strong> Serious interviews (looks like makeup lighting), full-body shots' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cost:</strong> $50 budget (Neewer), $200 pro (Neewer LED ring)' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Key Light ($150-400)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Soft light from side/front. Professional standard.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Good for:</strong> Everything (interviews, vlogs, podcasts with video)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Bad for:</strong> Nothing, if used right' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cost:</strong> $150 (DIY), $200 (Neewer), $300+ (Elgato)' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>3-Point Lighting ($300-800)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Key + fill + backlight. Professional studio.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Good for:</strong> Professional interviews, product videos, serious content' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Bad for:</strong> Small spaces, overhead budget' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cost:</strong> $300-800 depending on quality' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Light Types</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>RGB Lights ($100-300)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Adjustable color temperature. Great for mood/branding.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use for:</strong> Gaming streamers, colorful content, multiple scenarios' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Skip if:</strong> Recording one setup (fixed color works fine)' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Soft Lights ($150-500)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Diffused, even lighting. Professional quality.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use for:</strong> Professional videos, interviews, anything serious' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Skip if:</strong> Budget <$100' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Cheap Clamp Lights ($20-40)</h3>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Work surprisingly well. Cheap option.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Use for:</strong> Budget setup, testing before spending money' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Don\'t use:</strong> As main light (looks harsh). Use as fill light instead.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Real Setups</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Budget Setup ($100-150)</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '2x Neewer clamp lights with soft boxes: $60-80' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Light stands: $30-50' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Total: $90-130' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Good for: testing, starting out, small space' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Starter Setup ($300-400)</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Neewer LED ring light: $150-200' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Cheap soft light for fill: $100' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Stands and diffusers: $50-100' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Total: $300-400' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Good for: YouTube starters, vlogging, unboxing' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Proper Setup ($500-800)</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Elgato Key Light x2: $400-600' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Stands and control: $100-200' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Total: $500-800' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Good for: serious creators, interviews, professional content' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Light Placement</h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Ring Light</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Directly in front of camera' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '3-4 feet away' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Slightly above eye level' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Creates even, flattering light. Good for close-ups.' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Key Light</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '45° to side of camera' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '6-8 feet away' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Slightly above eye level' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Creates dimension. Most professional look.' }} /></p>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Fill Light</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Opposite side of key light' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Same distance' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Fill shadows (not main light)' }} /></li>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>Backlight</h3>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Behind subject' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Off to side' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Separates subject from background' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Only needed in bigger setups.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Color Temperature Matters</h2>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Daylight (5600K):</strong> Blue, natural, professional' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Studio (5000-5500K):</strong> Sweet spot for most creators' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Warm (3200K):</strong> Orange, mood lighting, intimate' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Consistency matters: all your lights should be same color temp. Mixing 3200K + 5600K looks bad.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Common Mistakes</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '1. <strong>Lighting from below</strong> - Unflattering shadows' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '2. <strong>Too much brightness</strong> - Washed out look' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3. <strong>Harsh light (no diffusion)</strong> - Looks cheap' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '4. <strong>Mixed color temperature</strong> - White balance nightmare' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '5. <strong>Single light</strong> - Looks flat, no dimension' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>FAQ</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Ring light or key light?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Ring if you do close-up work (makeup, product review). Key light if professional interviews.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Can I use desk lamps?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes. Get soft diffusers ($10-20) and you\'re good.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>What about daylight?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Free and great. But inconsistent (clouds, time of day). Use as fill light + supplement with studio light.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>How many lights do I need?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Minimum: 1 key light. Better: key + fill. Professional: key + fill + back.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Do I need RGB lights?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Only if you\'re branding with specific colors. Otherwise waste of money.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Bottom Line</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Start with $100-150 setup (clamp lights + diffusers).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'If serious: invest $500 in Elgato Key Lights.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Don\'t buy the cheapest lights. Get RGB or warm/cool adjustable.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Light quality = highest ROI on video quality. Do this before expensive camera gear.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Lighting Color Temperature Deep Dive</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Color temperature is measured in Kelvin (K). It matters for consistency and mood.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Morning sunlight:</strong> 5500K (blue, alerting)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Afternoon sunlight:</strong> 5000K (neutral)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Tungsten bulb:</strong> 3200K (warm, intimate)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Fluorescent:</strong> 4000-6500K (varies, often bad)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>For video:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'All your lights should be same K' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Mixing 3200K + 5600K = white balance nightmare' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Consistency matters more than specific value' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Best:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '5000-5500K (daylight balanced, professional)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'All lights matching (no mixing)' }} /></li>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Key Light Positioning Strategy</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Key light is your main light. Position matters as much as brightness.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Side positioning (45° angle):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Creates dimension (shadows on far side)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Flattering for faces' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Industry standard' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Front positioning (straight on):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Even lighting' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Flat look (less professional)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Good for product shots' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Behind positioning (backlight):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Separates subject from background' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Creates halo effect' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Supporting light (not main)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Real setup:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Key light at 45°, 6 feet away' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Fill light opposite side (reduced intensity)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Backlight behind, angled slightly' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'That\'s 3-point lighting. Professional standard.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Light Intensity & Eye Comfort</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Brightness matters. Too bright = washes out, hurts eyes.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Lux levels for video:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '500 lux: Acceptable minimum (TV studios)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '1000 lux: Professional standard (streaming studios)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '2000+ lux: Overkill (eye strain)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Test:</strong> Stand in front of light. Can you keep eyes open comfortably? If squinting: too bright.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Softbox vs Umbrella vs Ring Light</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Softbox</strong> ($50-200):' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Diffused light (soft shadows)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Directional (you control where light goes)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Professional look' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Best overall' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Umbrella</strong> ($20-50):' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Cheap diffusion' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Less directional (light spreads everywhere)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Good for starting out' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Ring light</strong> ($50-200):' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Halo effect (flattering for faces)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Even all-around (no shadows)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Good for beauty/makeup content' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Less professional for interviews' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Pick softbox</strong> if you want professional. Ring light if you want forgiving light.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>CRI (Color Rendering Index)</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'CRI measures how accurately light shows colors (0-100 scale).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>CRI 80:</strong> Acceptable (consumer lights)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>CRI 90+:</strong> Professional (studio lights)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>CRI 95+:</strong> Excellent (accurate color)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Why it matters:</strong> Low CRI = colors look wrong on camera even if white-balanced correctly.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Pick lights with CRI 90+. Elgato and Neewer both hit this.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>DIY Lighting vs Professional</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>DIY ($30-50):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Clamp light from hardware store' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Buy daylight bulb (5000-5500K)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Add diffuser (white cloth or cheap softbox)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Works surprisingly well' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Budget professional ($100-200):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Neewer LED ring light or clamp light' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Built-in diffusion' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Temperature adjustable' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Reliable' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Expensive professional ($300-600):</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Elgato Key Light' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Wireless control (app)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Premium build' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Overkill for most creators' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Real recommendation:</strong> Start DIY ($50). If serious, upgrade to Neewer ($150). Skip Elgato unless you have budget.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Heat Considerations</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Some lights generate heat. It matters.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Incandescent bulbs:</strong> Hot (avoid)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Tungsten:</strong> Hot (avoid)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>LED:</strong> Cool (preferred)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Ring lights:</strong> Cool (good)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'LED = long shooting sessions possible. Old tech = exhausting. Pick LED.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Light Stands & Mounting</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Quality stands matter. Cheap stands tip over.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Types:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'C-stand (professional, stable, $60-120)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Tripod stand (portable, adequate, $30-60)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Desk clamp (space-saving, limited, $15-30)' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Wall mount (permanent, $20-40)' }} /></li>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Real setup:</strong>' }} /></p>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '2x tripod stands for key/fill' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '1x clamp light for detail/background' }} /></li>
          <li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: 'Total: $80-150 for stands alone' }} /></li>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Real Lighting Workflow</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>For solo talking-head:</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '1. Key light at 45°, 6 feet away' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '2. Bounce board opposite (reflects light, fills shadows)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3. Position slightly above eye level' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '4. Test: Shadows under eyes? Move light up.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>For interviews (two people):</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '1. Key light 45° to person A' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '2. Fill light 45° to person B' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3. Both people lit evenly' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '4. Backlight (optional) separates them' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>For product shots:</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '1. Key light 45°' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '2. Diffusion for soft shadows' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3. White background (lifts product)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '4. Fill light reduces contrast' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Lighting & Skin Tone</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Lighting hits different skin tones differently.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>General rule:</strong> Warmer light (3200-4000K) flatters most skin tones' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Cooler light (5000-5600K)</strong> can look clinical' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Test:</strong> Record yourself in your light. Play back. Does skin look healthy? If too red/orange: cool it down (higher K). If too pale: warm it up (lower K).' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Common Lighting Mistakes</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '1. <strong>Single light</strong> (harsh shadows, flat look)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '2. <strong>Light too close</strong> (hot spot on forehead)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '3. <strong>Light in wrong position</strong> (shadows in bad spots)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '4. <strong>Mixed color temperature</strong> (white balance impossible)' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '5. <strong>No diffusion</strong> (looks cheap, harsh)' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>FAQ</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Can I use natural light?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes, supplemented with artificial for consistency. Natural light changes throughout day.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Should I light from above?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'No, unflattering (creates under-eye shadows). Light from side or eye-level.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>How many lights do I need?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Minimum: 1 key light + bounce board. Better: 2 lights (key + fill).' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Should I adjust white balance for lighting?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes. Every light setup needs white balance adjustment in camera.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '<strong>Can I use cheap LED panels?</strong>' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Yes, if CRI 80+. Not ideal but functional for starting.' }} /></p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>Bottom Line</h2>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'One Neewer LED light ($100-150) + white bounce board ($20) = professional setup.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Spend money on diffusion and positioning, not light brand.' }} /></p>
          <p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: 'Professional lighting is 80% positioning, 20% equipment.' }} /></p>
        </section>

        {/* Related Products */}
        
        <section style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--n-100)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
            Shop the gear mentioned
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            
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
              href="https://amazon.com/dp/B07L755X39?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=elgato-key-light"
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
              <img src="https://m.media-amazon.com/images/I/81e3VBi7ivL._AC_SY300_.jpg" alt="Elgato Key Light" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Elgato Key Light</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>$200</div>
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
