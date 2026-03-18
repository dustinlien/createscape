'use client'

import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Creator Setup Guides - Createscape',
  description: 'Collection of comprehensive guides for creator workspace setup, ergonomics, lighting, and productivity.',
}

const posts = [
  {
    title: "The Creator's Standing Desk Buying Guide 2026",
    slug: 'standing-desk',
    excerpt: 'Compare Uplift V3, FlexiSpot E7, Autonomous, and more. Find the best standing desk for your setup.',
    tag: 'circuit',
    tagLabel: 'Dev Setup',
    date: '2026-03-17',
  },
  {
    title: 'Ergonomic Chairs for Streamers & Content Creators',
    slug: 'ergonomic-chairs',
    excerpt: 'From budget Eureka to premium Herman Miller Aeron. Find the chair that supports your creativity.',
    tag: 'broadcast',
    tagLabel: 'Workspace',
    date: '2026-03-17',
  },
  {
    title: 'Lighting for Creators: A Biophilic Desk Setup Guide 2026',
    slug: 'lighting-biophilic',
    excerpt: 'Ring lights, bias lighting, and plants. Transform your setup with the right lighting.',
    tag: 'broadcast',
    tagLabel: 'Workspace',
    date: '2026-03-17',
  },
  {
    title: 'Cable Management Hacks for Creator Desks',
    slug: 'cable-management',
    excerpt: 'Transform cable chaos into organized systems. Step-by-step setup for streamers.',
    tag: 'circuit',
    tagLabel: 'Dev Setup',
    date: '2026-03-17',
  },
  {
    title: 'Creator Setup Inspiration: 10 Real Workspace Tours',
    slug: 'setup-tours',
    excerpt: 'Real creators, real setups, real costs. Learn from 10 different content creators.',
    tag: 'signal',
    tagLabel: 'Featured',
    date: '2026-03-17',
  },
  {
    title: 'Monitor Recommendations for Streamers & YouTubers 2026',
    slug: 'monitors',
    excerpt: '1440p IPS panels, color accuracy, and the best options at every price point.',
    tag: 'circuit',
    tagLabel: 'Dev Setup',
    date: '2026-03-17',
  },
  {
    title: 'Budget Creator Setup Under $1,000',
    slug: 'budget-setup',
    excerpt: 'Professional setup without breaking the bank. Smart choices, real equipment.',
    tag: 'circuit',
    tagLabel: 'Dev Setup',
    date: '2026-03-17',
  },
  {
    title: 'Home Office Plants That Actually Thrive (& Look Good on Camera)',
    slug: 'office-plants',
    excerpt: 'Pothos, Snake Plant, Monstera, and ZZ Plant. Plants that survive neglect.',
    tag: 'broadcast',
    tagLabel: 'Workspace',
    date: '2026-03-17',
  },
  {
    title: 'Acoustic Panels & Sound Isolation for Home Studios',
    slug: 'acoustic-panels',
    excerpt: 'DIY vs. commercial panels. Audio quality that makes people stay.',
    tag: 'circuit',
    tagLabel: 'Dev Setup',
    date: '2026-03-17',
  },
  {
    title: 'Productivity Hacks for the Creator Workspace',
    slug: 'productivity-hacks',
    excerpt: 'Rituals, tools, and workspace design that boost focus and output.',
    tag: 'signal',
    tagLabel: 'Featured',
    date: '2026-03-17',
  },
]

const tagColors: Record<string, string> = {
  circuit: 'var(--cs-circuit)',
  broadcast: 'var(--cs-broadcast)',
  signal: 'var(--cs-signal)',
}

export default function PostsIndex() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }} className="blog-light">
      <h1 style={{
        fontSize: '48px',
        fontFamily: 'var(--font-syne)',
        fontWeight: '700',
        marginBottom: '16px'
      }}>
        Creator Setup Guides
      </h1>
      <p style={{
        fontSize: '18px',
        color: 'var(--cs-n-400)',
        marginBottom: '48px',
        lineHeight: '1.6'
      }}>
        Comprehensive guides to building a professional creator workspace. From ergonomics to aesthetics to affiliate recommendations.
      </p>

      <div style={{ display: 'grid', gap: '32px' }}>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/posts/${post.slug}`}
            style={{
              display: 'block',
              padding: '24px',
              border: '1px solid var(--cs-n-100)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-ember)';
              el.style.boxShadow = '0 4px 12px rgba(255, 76, 31, 0.1)';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--cs-n-100)';
              el.style.boxShadow = 'none';
              el.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
              <span style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                color: tagColors[post.tag],
                backgroundColor: '#FFFFFF',
                border: `1px solid var(--cs-n-100)`,
              }}>
                {post.tagLabel}
              </span>
            </div>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'var(--font-syne)',
              fontWeight: '600',
              marginBottom: '12px',
              color: 'var(--cs-ember)'
            }}>
              {post.title}
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--cs-n-400)',
              marginBottom: '12px',
              lineHeight: '1.6'
            }}>
              {post.excerpt}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--cs-n-200)' }}>
              {new Date(post.date).toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>

      <div style={{
        marginTop: '80px',
        padding: '32px',
        backgroundColor: 'var(--cs-n-50)',
        borderRadius: '12px',
        border: '1px solid var(--cs-n-100)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontFamily: 'var(--font-syne)',
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          Get Weekly Setup Inspiration
        </h2>
        <p style={{
          marginBottom: '20px',
          color: 'var(--cs-n-500)',
          fontSize: '16px'
        }}>
          New guides every week. Product reviews. Creator interviews. Affiliate recommendations.
        </p>
        <p style={{ fontSize: '14px', color: 'var(--cs-n-400)', fontStyle: 'italic' }}>
          Email signup form coming soon
        </p>
      </div>
    </div>
  )
}
