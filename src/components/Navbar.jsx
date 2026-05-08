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
          {/* 🏔️ Realistic Aurora (Revontuli) Icon */}
          <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
            <defs>
              <linearGradient id="aurora-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="purple-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Aurora Curtains */}
            <path d="M6 22 Q9 12 11 4" stroke="url(#aurora-gradient)" strokeWidth="3" strokeLinecap="round" />
            <path d="M14 24 Q16 10 19 6" stroke="url(#purple-gradient)" strokeWidth="4" strokeLinecap="round" />
            <path d="M22 22 Q25 14 27 8" stroke="url(#aurora-gradient)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* Mountain Silhouette for context */}
            <path d="M2 28L10 18L18 28H2Z" fill="white" opacity="0.3" />
            <path d="M14 28L22 20L30 28H14Z" fill="white" opacity="0.2" />
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