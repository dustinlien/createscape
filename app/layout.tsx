export const metadata = {
  title: 'Createscape — Creator Setup Inspiration',
  description: 'Workspace inspiration for creators, streamers, and builders.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
