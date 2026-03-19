import { Metadata } from 'next'
import { getPostBySlug, getAllPostSlugs, getProductsForPost } from '@/lib/markdown-posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: `${post.meta.title} | Createscape`,
    description: post.meta.description,
    keywords: post.meta.keywords,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://www.createscape.co/posts/${params.slug}`,
      type: 'article',
      images: post.meta.featuredImage ? [{
        url: post.meta.featuredImage,
        width: 1200,
        height: 630,
      }] : undefined,
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedProducts = getProductsForPost(post.meta.products)

  return (
    <main style={{
      background: 'var(--void)',
      color: 'var(--canvas)',
      minHeight: '100vh',
      paddingTop: '64px'
    }}>
      <article style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 40px'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          {post.meta.featuredImage && (
            <img 
              src={post.meta.featuredImage} 
              alt={post.meta.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '32px',
                display: 'block'
              }}
            />
          )}
          
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
            color: 'var(--canvas)'
          }}>
            {post.meta.title}
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: 'var(--n-400)',
            marginBottom: '20px'
          }}>
            {post.meta.description}
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            fontSize: '13px',
            color: 'var(--n-500)',
            borderBottom: '1px solid var(--n-700)',
            paddingBottom: '20px'
          }}>
            {post.meta.author && <span>By {post.meta.author}</span>}
            {post.meta.readTime && <span>{post.meta.readTime} min read</span>}
            {post.meta.updatedDate && <span>Updated {post.meta.updatedDate}</span>}
          </div>
        </div>

        {/* Content */}
        <div style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: 'var(--canvas)',
          marginBottom: '60px'
        }} dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section style={{
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid var(--n-700)'
          }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '24px',
              color: 'var(--ember)'
            }}>
              Shop the gear mentioned
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              {relatedProducts.map((product: any) => (
                <a 
                  key={product.id}
                  href={`https://amazon.com/dp/${product.asin}?tag=createscape-20&utm_source=createscape&utm_medium=blog&utm_campaign=${product.id}`}
                  style={{
                    padding: '16px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--n-700)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: 'var(--canvas)',
                    transition: 'all 0.2s',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--ember)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--n-700)';
                  }}
                >
                  {product.imageUrl && (
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '120px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        marginBottom: '12px'
                      }}
                    />
                  )}
                  <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--ember)' }}>
                    {product.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--n-400)' }}>
                    {product.price}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--ember)', marginTop: '8px' }}>
                    View on Amazon →
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Affiliate Disclosure */}
        <div style={{
          marginTop: '60px',
          padding: '20px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--n-700)',
          borderRadius: '8px',
          fontSize: '12px',
          color: 'var(--n-400)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: 'var(--canvas)' }}>Disclosure:</strong> Createscape may earn affiliate commissions from Amazon purchases. We only recommend products we genuinely believe in. Your support helps us keep publishing honest reviews.
        </div>
      </article>
    </main>
  )
}
