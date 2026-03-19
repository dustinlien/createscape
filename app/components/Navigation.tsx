'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <style>{`
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 20px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14,14,20,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-inner {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #F5F2EE;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-logo span { color: #FF4C1F; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-size: 13px;
          font-weight: 400;
          color: #7A7A96;
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .nav-links a:hover { color: #F5F2EE; }

        .nav-cta {
          background: #FF4C1F;
          color: #fff;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .nav-cta:hover { opacity: 0.88; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: #F5F2EE;
          transition: all 0.3s;
          display: block;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 768px) {
          nav {
            padding: 0 16px;
          }

          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            background: rgba(14,14,20,0.98);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding: 20px;
            display: none;
            z-index: 99;
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links a {
            padding: 12px 0;
            font-size: 14px;
            width: 100%;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }

          .nav-cta {
            margin-top: 12px;
            width: 100%;
            text-align: center;
            display: block;
          }
        }
      `}</style>

      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Create<span>scape</span>
          </Link>
          
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link href="/posts">Guides</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><Link href="/" className="nav-cta">Home</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
