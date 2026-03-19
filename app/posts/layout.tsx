import Navigation from '../components/Navigation'

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        :root {
          --void:       #0E0E14;
          --canvas:     #F5F2EE;
          --ember:      #FF4C1F;
          --circuit:    #4CF0A8;
          --broadcast:  #FFCE3D;
          --signal:     #A78BFF;
          --blueprint:  #1A8CFF;
          --n-800: #1C1C28;
          --n-700: #2E2E40;
          --n-500: #484860;
          --n-400: #7A7A96;
          --n-200: #B0B0C4;
          --n-100: #E0DDD8;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background: var(--canvas);
          color: var(--void);
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        main {
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 20px 60px;
        }

        article {
          width: 100%;
        }

        h1, h2, h3 {
          font-family: 'Syne', sans-serif;
          letter-spacing: -0.01em;
          line-height: 1.1;
          color: var(--void);
        }

        h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 700; margin-bottom: 16px; }
        h2 { font-size: clamp(24px, 4vw, 32px); font-weight: 600; margin-top: 40px; margin-bottom: 20px; }
        h3 { font-size: clamp(18px, 3vw, 22px); font-weight: 600; margin-top: 28px; margin-bottom: 12px; }

        p { margin-bottom: 20px; line-height: 1.7; }
        p + p { margin-top: 16px; }

        ul, ol {
          margin-left: 24px;
          margin-bottom: 20px;
          line-height: 1.8;
        }

        li { margin-bottom: 12px; }

        a {
          color: var(--ember);
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        a:hover { opacity: 0.88; }

        header {
          margin-bottom: 40px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--n-100);
        }

        .byline {
          font-size: 14px;
          color: var(--n-500);
          margin-top: 12px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 30px 0;
          background: var(--canvas);
          border: 1px solid var(--n-100);
        }

        th, td {
          text-align: left;
          padding: 12px;
          border-bottom: 1px solid var(--n-100);
        }

        th {
          background: var(--n-100);
          font-weight: 600;
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 20px 0;
        }

        .product-card {
          margin: 30px 0;
          padding: 24px;
          background: var(--n-100);
          border-radius: 12px;
          border: 1px solid #E0DDD8;
        }

        .product-card h3 {
          margin-top: 0;
          color: var(--void);
        }

        .disclosure {
          padding: 20px;
          background: var(--n-100);
          border-radius: 8px;
          border-left: 4px solid var(--ember);
          font-size: 13px;
          color: var(--n-500);
          margin: 40px 0;
        }

        @media (max-width: 768px) {
          main {
            padding: 80px 16px 40px;
          }

          h1 { font-size: 28px; }
          h2 { font-size: 22px; }
          h3 { font-size: 18px; }

          table {
            font-size: 13px;
            margin: 20px 0;
          }

          th, td {
            padding: 8px;
          }

          .product-card {
            padding: 16px;
          }
        }
      `}</style>

      <Navigation />
      {children}
    </>
  )
}
