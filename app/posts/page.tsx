import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Setup Guides - Createscape',
  description: 'Collection of comprehensive guides for creator workspace setup, ergonomics, lighting, and productivity.',
}

const posts = [
  {
    title: "The Creator's Standing Desk Buying Guide 2026",
    slug: 'standing-desk',
    excerpt: 'Compare Uplift V3, FlexiSpot E7, Autonomous, and more. Find the best standing desk for your setup.',
    date: '2026-03-17',
  },
  {
    title: 'Ergonomic Chairs for Streamers & Content Creators',
    slug: 'ergonomic-chairs',
    excerpt: 'From budget Eureka to premium Herman Miller Aeron. Find the chair that supports your creativity.',
    date: '2026-03-17',
  },
  {
    title: 'Lighting for Creators: A Biophilic Desk Setup Guide 2026',
    slug: 'lighting-biophilic',
    excerpt: 'Ring lights, bias lighting, and plants. Transform your setup with the right lighting.',
    date: '2026-03-17',
  },
  {
    title: 'Cable Management Hacks for Creator Desks',
    slug: 'cable-management',
    excerpt: 'Transform cable chaos into organized systems. Step-by-step setup for streamers.',
    date: '2026-03-17',
  },
  {
    title: 'Creator Setup Inspiration: 10 Real Workspace Tours',
    slug: 'setup-tours',
    excerpt: 'Real creators, real setups, real costs. Learn from 10 different content creators.',
    date: '2026-03-17',
  },
  {
    title: 'Monitor Recommendations for Streamers & YouTubers 2026',
    slug: 'monitors',
    excerpt: '1440p IPS panels, color accuracy, and the best options at every price point.',
    date: '2026-03-17',
  },
  {
    title: 'Budget Creator Setup Under $1,000',
    slug: 'budget-setup',
    excerpt: 'Professional setup without breaking the bank. Smart choices, real equipment.',
    date: '2026-03-17',
  },
  {
    title: 'Home Office Plants That Actually Thrive (& Look Good on Camera)',
    slug: 'office-plants',
    excerpt: 'Pothos, Snake Plant, Monstera, and ZZ Plant. Plants that survive neglect.',
    date: '2026-03-17',
  },
  {
    title: 'Acoustic Panels & Sound Isolation for Home Studios',
    slug: 'acoustic-panels',
    excerpt: 'DIY vs. commercial panels. Audio quality that makes people stay.',
    date: '2026-03-17',
  },
  {
    title: 'Productivity Hacks for the Creator Workspace',
    slug: 'productivity-hacks',
    excerpt: 'Rituals, tools, and workspace design that boost focus and output.',
    date: '2026-03-17',
  },
]

export default function PostsIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Creator Setup Guides</h1>
      <p className="text-xl text-gray-600 mb-12">
        Comprehensive guides to building a professional creator workspace. From ergonomics to aesthetics to affiliate recommendations.
      </p>

      <div className="grid gap-8">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-600 hover:underline">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </a>
        ))}
      </div>

      <div className="mt-16 p-8 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get Weekly Setup Inspiration</h2>
        <p className="mb-6">New guides every week. Product reviews. Creator interviews. Affiliate recommendations.</p>
        {/* Kit form will be embedded here */}
        <p className="text-sm text-gray-600"><em>Email signup form coming soon</em></p>
      </div>
    </div>
  )
}
