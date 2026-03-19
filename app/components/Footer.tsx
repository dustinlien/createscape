'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <style>{`
        footer {
          background: var(--void);
          padding: 60px 20px 40px;
          border-top: 1px solid rgba(255,255,255,0.04);
          margin-top: 80px;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          margin-bottom: 28px;
        }

        .footer-section h3 {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--canvas);
          margin-bottom: 16px;
        }

        .footer-section ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 10px;
        }

        .footer-section a {
          font-size: 13px;
          color: var(--ember);
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .footer-section a:hover {
          opacity: 0.88;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 12px;
          color: var(--n-500);
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--canvas);
          text-decoration: none;
        }

        .footer-logo span {
          color: var(--ember);
        }

        @media (max-width: 768px) {
          footer {
            padding: 40px 16px;
          }

          .footer-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer>
        <div className="footer-inner">
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><Link href="/posts">All guides</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><Link href="/categories/desks">Desks</Link></li>
              <li><Link href="/categories/chairs">Chairs</Link></li>
              <li><Link href="/categories/audio">Audio</Link></li>
              <li><Link href="/categories/cameras">Cameras</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="https://twitter.com/createscape">X/Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <Link href="/" className="footer-logo">
            Create<span>scape</span>
          </Link>
          <p className="footer-copy">© 2026 Createscape. Honest workspace guides for creators.</p>
        </div>
      </footer>
    </>
  )
}
