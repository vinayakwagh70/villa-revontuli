import { useEffect, useState } from "react";

const images = [
  `${import.meta.env.BASE_URL}slide1.jpg`,
  `${import.meta.env.BASE_URL}slide2.jpg`,
  `${import.meta.env.BASE_URL}slide3.jpg`
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div  id="home"
      className="hero"
      style={{
        backgroundImage: `url(${images[index]})`
      }}
    >
      <div className="hero-content">
        <h1>Villa in Mahabaleshwar – Villa Revontuli</h1>
        <p>Peaceful private villa stay in Bhose village, Mahabaleshwar</p>

        <a
          className="button"
          href="https://wa.me/917020944283?text=Hi,%20I%20am%20interested%20in%20booking%20Villa%20Revontuli.%20Please%20share%20details."
          target="_blank"
        >
          Book Your Stay
        </a>
      </div>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}