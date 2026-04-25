export default function Location() {
  return (
    <section id="location">
      <h2>Location</h2>
      <p style={{ textAlign: "center" }}>
        Bhose Village, Mahabaleshwar
      </p>

      <iframe
        src="https://www.google.com/maps?q=Bhose%20Mahabaleshwar&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

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