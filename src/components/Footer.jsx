export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Villa Revontuli · Mahabaleshwar</p>

      <div className="social-links">
        <a href="https://instagram.com/villarevontuli?igsh=ZGIzdWkxamEyMGQx" target="_blank">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
            className="social-icon" 
          />
        </a>
        <a href="https://share.google/PFNfb6CEZKT5DVCs0" target="_blank">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png" 
            className="social-icon" 
          />
        </a>
      </div>
    </footer>
  );
}