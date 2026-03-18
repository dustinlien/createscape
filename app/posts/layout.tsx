export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ 
      backgroundColor: 'var(--cs-canvas)',
      color: 'var(--cs-void)',
      minHeight: '100vh'
    }} 
    className="blog-light">
      <article style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px'
      }}>
        {children}
      </article>
    </div>
  )
}
