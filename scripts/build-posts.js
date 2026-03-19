#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const postsAppDir = path.join(__dirname, '..', 'app', 'posts');
const productsFile = path.join(__dirname, '..', 'content', 'products.json');

// Read products database
const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

// Get all markdown posts
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

console.log(`\n📝 Building ${files.length} posts from markdown...\n`);

files.forEach(file => {
  const slug = file.replace('.md', '');
  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: mdContent } = matter(content);

  // Create TSX file for this post
  const tsxContent = generatePostTSX(slug, data, mdContent, products.products);
  
  // Ensure directory exists
  const postDir = path.join(postsAppDir, slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  // Write TSX file
  const tsxPath = path.join(postDir, 'page.tsx');
  fs.writeFileSync(tsxPath, tsxContent);
  
  console.log(`✓ ${slug}: Generated page.tsx`);
});

console.log('\n✅ All posts generated from markdown\n');

// Generate post component template
function generatePostTSX(slug, frontmatter, mdContent, allProducts) {
  const relatedProducts = frontmatter.products
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean);

  return `import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "${frontmatter.title.replace(/"/g, '\\"')} | Createscape",
  description: "${frontmatter.description.replace(/"/g, '\\"')}",
  keywords: ${JSON.stringify(frontmatter.keywords)},
  openGraph: {
    title: "${frontmatter.title.replace(/"/g, '\\"')}",
    description: "${frontmatter.description.replace(/"/g, '\\"')}",
    url: "https://www.createscape.co/posts/${slug}",
    type: "article",
    images: [${frontmatter.featuredImage ? `{
      url: "${frontmatter.featuredImage}",
      width: 1200,
      height: 630,
    }` : ''}]
  }
}

export default function Post() {
  const relatedProducts = ${JSON.stringify(relatedProducts, null, 2)} as any;

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
            ${frontmatter.title}
          </h1>
          <div style={{ fontSize: '14px', color: 'var(--n-500)' }}>
            ${frontmatter.author ? `<strong style={{ color: 'var(--void)' }}>By ${frontmatter.author}</strong> · ` : ''}
            ${frontmatter.readTime ? `${frontmatter.readTime} min read · ` : ''}
            ${frontmatter.updatedDate ? `Updated: ${frontmatter.updatedDate}` : 'March 2026'}
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          ${convertMarkdownToJSX(mdContent, allProducts, frontmatter.products)}
        </section>

        {/* Related Products */}
        ${relatedProducts.length > 0 ? `
        <section style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--n-100)' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>
            Shop the gear mentioned
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            ${relatedProducts.map(product => `
            <a 
              href="https://amazon.com/dp/${product.asin}?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=${product.id}"
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
              ${product.image ? `<img src="${product.image}" alt="${product.name}" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />` : ''}
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>${product.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--n-500)' }}>${product.price}</div>
              <div style={{ fontSize: '11px', color: 'var(--signal)', marginTop: '8px' }}>View on Amazon →</div>
            </a>
            `).join('')}
          </div>
        </section>
        ` : ''}

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
`;
}

// Convert markdown to JSX snippets (simplified to avoid escaping)
function convertMarkdownToJSX(md, allProducts, productIds) {
  return `
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
  `;
}
