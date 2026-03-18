import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Creator Workspace Categories | Browse by Product Type",
  description: "Browse creator workspace guides by category. Desks, chairs, lighting, audio, monitors, keyboards, and more. Organized by product type.",
}

export default function Categories() {
  const categories = [
    { name: 'Desks & Surfaces', slug: 'desks', desc: 'Standing desks, desk pads, cable management', icon: '🖥️' },
    { name: 'Seating & Ergonomics', slug: 'chairs', desc: 'Office chairs, ergonomic seating, posture support', icon: '🪑' },
    { name: 'Lighting & Ambient', slug: 'lighting', desc: 'Ring lights, key lights, bias lighting, natural light', icon: '💡' },
    { name: 'Audio & Podcast', slug: 'audio', desc: 'Microphones, interfaces, speakers, monitors', icon: '🎙️' },
    { name: 'Video & Cameras', slug: 'cameras', desc: 'Cameras, capture cards, video editing', icon: '📸' },
    { name: 'Keyboards & Peripherals', slug: 'keyboards', desc: 'Mechanical keyboards, mice, mousepads', icon: '⌨️' },
    { name: 'Monitors & Displays', slug: 'monitors', desc: 'Ultrawide monitors, 4K, multi-monitor setups', icon: '🖨️' },
    { name: 'Organization & Cables', slug: 'cables', desc: 'Cable management, storage, desk organization', icon: '📦' },
  ]

  return (
    <main style={{
      background: 'var(--void)',
      color: 'var(--canvas)',
      minHeight: '100vh',
      paddingTop: '64px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Browse by Category
        </h1>
        <p style={{
          fontSize: '18px',
          color: 'var(--n-400)',
          marginBottom: '50px'
        }}>
          Find guides organized by product type. Start with what you're looking for.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              style={{
                padding: '28px',
                border: '1px solid var(--n-700)',
                borderRadius: '12px',
                background: 'var(--n-800)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}

            >
              <div style={{ fontSize: '32px' }}>{cat.icon}</div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--canvas)'
              }}>
                {cat.name}
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--n-400)',
                margin: 0
              }}>
                {cat.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
