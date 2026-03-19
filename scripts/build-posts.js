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

// Convert markdown to JSX components
function convertMarkdownToJSX(md) {
  if (!md) return '[]';
  
  let lines = md.split('\n');
  let components = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;
    
    // Headings
    if (line.startsWith('### ')) {
      let text = line.substring(4);
      components.push({
        type: 'h3',
        text: text
      });
    } else if (line.startsWith('## ')) {
      let text = line.substring(3);
      components.push({
        type: 'h2',
        text: text
      });
    } else if (line.startsWith('# ')) {
      let text = line.substring(2);
      components.push({
        type: 'h1',
        text: text
      });
    }
    // Bullet points
    else if (line.startsWith('- ')) {
      let text = line.substring(2);
      components.push({
        type: 'li',
        text: text
      });
    }
    // Regular paragraph
    else if (line.length > 0) {
      components.push({
        type: 'p',
        text: line
      });
    }
  }
  
  // Generate JSX
  return components.map(comp => {
    let text = comp.text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    switch(comp.type) {
      case 'h1':
        return `<h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '36px', fontWeight: '700', marginTop: '50px', marginBottom: '24px' }}>${text}</h1>`;
      case 'h2':
        return `<h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '600', marginTop: '40px', marginBottom: '20px' }}>${text}</h2>`;
      case 'h3':
        return `<h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '16px' }}>${text}</h3>`;
      case 'li':
        return `<li style={{ marginLeft: '20px', marginBottom: '8px' }}><span dangerouslySetInnerHTML={{ __html: '${text.replace(/'/g, "\\'").replace(/"/g, '\\"')}' }} /></li>`;
      case 'p':
        return `<p style={{ marginBottom: '20px' }}><span dangerouslySetInnerHTML={{ __html: '${text.replace(/'/g, "\\'").replace(/"/g, '\\"')}' }} /></p>`;
      default:
        return '';
    }
  }).join('\n          ');
}

// Generate post component template
function generatePostTSX(slug, frontmatter, mdContent, allProducts) {
  const relatedProducts = frontmatter.products
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean);

  const bodyJSX = convertMarkdownToJSX(mdContent);
  const productsJSON = JSON.stringify(relatedProducts, null, 2);

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
    images: []
  }
}

export default function Post() {
  const relatedProducts = ${productsJSON} as any;

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
            ${frontmatter.author ? 'By ' + frontmatter.author + ' · ' : ''}
            ${frontmatter.readTime ? frontmatter.readTime + ' min read · ' : ''}
            Updated: ${frontmatter.updatedDate || 'March 2026'}
          </div>
        </header>

        <section style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--void)' }}>
          ${bodyJSX}
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
              <img src="${product.image}" alt="${product.name}" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px', marginBottom: '12px' }} />
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
