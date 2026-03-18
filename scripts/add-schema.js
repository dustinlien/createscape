const fs = require('fs');
const path = require('path');

const posts = [
  { 
    slug: 'standing-desk',
    faq: [
      { q: 'How high should my desk be when standing?', a: 'When standing comfortably, elbows should be at roughly 90 degrees. That\'s usually 38–48 inches from floor to desktop.' },
      { q: 'Should I start with standing or sitting?', a: 'Start with sitting. The benefit is switching — 20–30 min sitting, then 20–30 min standing.' },
      { q: 'Electric or manual standing desk?', a: 'Electric is worth the extra $100–$200. You\'ll actually use it if it\'s effortless.' }
    ]
  },
  { slug: 'ergonomic-chairs', faq: [{ q: 'What is lumbar support?', a: 'Lumbar support is cushioning that supports your lower back curve.' }] },
  { slug: 'best-cameras', faq: [{ q: 'What\'s the best camera for YouTube?', a: 'Sony A6700 or Canon R50 offer best autofocus and 4K quality.' }] },
  { slug: 'podcast-equipment', faq: [{ q: 'USB or XLR microphone?', a: 'USB for simplicity starting out. XLR for flexibility and quality if serious.' }] },
  { slug: 'studio-lighting', faq: [{ q: 'Do I need expensive studio lights?', a: 'No. A $50 ring light works great for starting.' }] }
];

posts.forEach(post => {
  const dir = path.join('/tmp/createscape-site', 'app', 'posts', post.slug);
  const file = path.join(dir, 'page.tsx');
  
  let content = fs.readFileSync(file, 'utf-8');
  
  // Create FAQ schema
  const faqSchema = {
    "@context": "schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
  
  if (!content.includes('FAQPage')) {
    const blogPostingEnd = content.indexOf('</script>', content.indexOf('BlogPosting'));
    if (blogPostingEnd > 0) {
      const newScript = `\n      <script type="application/ld+json">
        {JSON.stringify(${JSON.stringify(JSON.stringify(faqSchema))})}
      </script>`;
      content = content.slice(0, blogPostingEnd + 9) + newScript + content.slice(blogPostingEnd + 9);
    }
  }
  
  fs.writeFileSync(file, content);
  console.log(`✓ ${post.slug} (added FAQPage schema)`);
});

console.log(`\n✅ Added FAQPage schema to 5 posts`);
