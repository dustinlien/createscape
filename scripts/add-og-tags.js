const fs = require('fs');
const path = require('path');

const posts = [
  { slug: 'standing-desk', title: 'Standing Desk Buying Guide 2026: Uplift vs FlexiSpot vs Autonomous', desc: 'Complete standing desk buying guide with comparison of motors, stability, warranty, and creator reviews.' },
  { slug: 'ergonomic-chairs', title: 'Best Ergonomic Chairs for Long Work Sessions 2026', desc: 'Ergonomic chair buying guide for creators. Herman Miller, Steelcase, budget options for 8+ hour comfort.' },
  { slug: 'lighting-biophilic', title: 'Lighting & Biophilic Design for Creator Workspaces', desc: 'Workspace lighting guide. Ring lights, key lights, biophilic design for mood and productivity.' },
  { slug: 'cable-management', title: 'Cable Management Hacks: Organize Your Desk Setup', desc: 'Cable organization guide for clean, professional creator workspaces.' },
  { slug: 'setup-tours', title: '10 Real Creator Workspace Setup Tours | Budget to Premium', desc: 'Real creator setups with exact products and budgets from $800 to $5,000+ studios.' },
  { slug: 'monitors-streamers', title: 'Best Monitors for Creators | Ultrawide, 4K, Color-Accurate', desc: 'Monitor buying guide for video editors and streamers. Ultrawide, 4K, color-accurate displays.' },
  { slug: 'budget-setup', title: 'Budget Creator Setup Under $1k | Complete Build Breakdown', desc: 'Build a professional creator workspace for under $1,000. Complete product list with prices.' },
  { slug: 'studio-lighting', title: 'Studio Lighting for Content Creators 2026', desc: 'Studio lighting guide. Ring lights, key lights, 3-light setups for YouTube and streaming.' },
  { slug: 'best-cameras', title: 'Best Cameras for Content Creators 2026', desc: 'Camera buying guide for YouTube creators. Sony, Canon, DJI comparison for all budgets.' },
  { slug: 'podcast-equipment', title: 'Podcast Equipment Guide 2026', desc: 'Podcast equipment guide. USB mics, XLR interfaces, complete setups for all budgets.' },
  { slug: 'lapel-mics', title: 'Wireless Lapel Microphones Guide', desc: 'Lapel microphone buying guide. Rode Wireless GO II, hands-free audio for video.' },
  { slug: 'microphone-placement', title: 'Microphone Placement Guide', desc: 'Microphone placement techniques for professional podcast and video audio quality.' },
  { slug: 'monitor-speakers', title: 'Monitor Speakers for Creators', desc: 'Studio monitor speaker buying guide for podcast and video production.' },
  { slug: 'capture-cards', title: 'Streaming Capture Cards 2026', desc: 'Capture card buying guide for console gaming streaming.' },
  { slug: 'video-editing', title: 'Video Editing Software 2026', desc: 'Video editing software guide. Premiere Pro, DaVinci Resolve, CapCut comparison.' },
  { slug: 'backup-power', title: 'Backup Power for Creator Studios', desc: 'Backup power (UPS) buying guide for protecting creator equipment.' }
];

posts.forEach(post => {
  const dir = path.join('/tmp/createscape-site', 'app', 'posts', post.slug);
  const file = path.join(dir, 'page.tsx');
  
  let content = fs.readFileSync(file, 'utf-8');
  
  // Add metadata export at top
  const metadataBlock = `export const metadata = {
  title: "${post.title} | Createscape",
  description: "${post.desc}",
  openGraph: {
    title: "${post.title}",
    description: "${post.desc}",
    url: "https://www.createscape.co/posts/${post.slug}",
    type: "article",
    images: [{
      url: "https://www.createscape.co/og-image-${post.slug}.png",
      width: 1200,
      height: 630,
      alt: "${post.title}"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "${post.title}",
    description: "${post.desc}"
  }
}

`;
  
  // Insert after imports
  if (!content.includes('export const metadata')) {
    const importEnd = content.indexOf('\nexport default');
    if (importEnd > 0) {
      content = content.slice(0, importEnd + 1) + '\n\n' + metadataBlock + content.slice(importEnd + 1);
    }
  }
  
  fs.writeFileSync(file, content);
  console.log(`✓ ${post.slug} (added OG tags)`);
});

console.log(`\n✅ Added Open Graph tags to all posts`);
