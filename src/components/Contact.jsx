export default function Contact() {
  return (
    <section id="contact">
      <h2>Book Your Stay</h2>
      <p>Direct booking for best price. No platform fees.</p>

      <a
        className="button"
        href="https://wa.me/917020944283?text=Hi,%20I%20am%20interested%20in%20booking%20Villa%20Revontuli.%20Please%20share%20details."
        target="_blank"
      >
        Chat on WhatsApp
      </a>

      <p style={{ marginTop: "15px" }}>
        Business Account: Villa Revontuli
      </p>

      <p style={{ marginTop: "20px" }}>
        Follow us:
      </p>

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
    </section>
  );
}