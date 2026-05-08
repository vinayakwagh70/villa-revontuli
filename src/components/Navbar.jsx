import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Mobile Backdrop: Closes menu when clicking anywhere outside the links */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}

      <div className="navbar-inner">
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          {/* ✨ Shimmering Aurora Icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
            {/* Multi-layered curtains representing the Aurora Borealis */}
            <path d="M4 18C10 8 16 26 28 13" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M4 14C10 4 16 22 28 9" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            <path d="M4 22C10 12 16 30 28 17" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </svg>
          <span>Villa Revontuli</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#amenities" onClick={() => setMenuOpen(false)}>Amenities</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Location</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a
          href="https://wa.me/917020944283?text=Hi,%20I%20want%20to%20book%20Villa%20Revontuli"
          className="book-now"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>

        {/* 👇 IMPORTANT: click handler */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}