export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {children}
    </article>
  )
}
