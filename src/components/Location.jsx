export default function Location() {
  return (
    <section id="location">
      <h2>Location</h2>
      <p style={{ textAlign: "center" }}>
        Villa Revontuli, Bhose, Mahabaleshwar
      </p>

      {/* <iframe
        src="https://www.google.com/maps?q=Bhose%20Mahabaleshwar&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe> */}

      {/* 🗺 Embedded Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.17221983602!2d73.76151440000001!3d17.9241196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc267b2db6906c5%3A0x7fc2b18ec454578a!2sVilla%20Revontuli%20Holiday%20Home!5e0!3m2!1sen!2sfi!4v1777208938723!5m2!1sen!2sfi"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a
          className="button"
          href="https://maps.app.goo.gl/BMjrBjPjAq5kmtuT8?g_st=iw"
          target="_blank"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}